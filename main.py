from flask import Flask, redirect, url_for, render_template, request, jsonify
import tensorflow as tf
from tensorflow import keras
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler, MultiLabelBinarizer
from sklearn.model_selection import train_test_split
from sklearn.metrics.pairwise import cosine_similarity
import fitz  # PyMuPDF
import os
import plotly.io as pio
from road_map import create_career_graph, visualize_career_path
from sklearn.neighbors import NearestNeighbors

app = Flask(__name__)

df = pd.read_csv("dataset_404.csv")

X = df[['Linguistic', 'Musical', 'Bodily', 'Logical - Mathematical', 
        'Spatial-Visualization', 'Interpersonal', 'Intrapersonal', 'Naturalist']]
y = df['Job profession'].str.replace('\n', '').str.strip().str.split(', ')

mlb = MultiLabelBinarizer()
y = mlb.fit_transform(y)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

classification_model = keras.models.load_model("grouping.keras")



knn = NearestNeighbors(n_neighbors=1)
knn.fit(X_train) 

def predict_job_with_knn(new_data):
    new_data = np.array(new_data).reshape(1, -1)  
    new_data_scaled = scaler.transform(new_data) 

    _, nearest_idx = knn.kneighbors(new_data_scaled)  
    nearest_samples = X_train[nearest_idx[0]]  
    nearest_prediction = classification_model.predict(nearest_samples)

    if hasattr(classification_model, "predict_proba"):
        nearest_prediction = classification_model.predict_proba(nearest_samples).mean(axis=0)

    top_indices = np.argsort(nearest_prediction)[-6:][::-1]
    predicted_jobs = [mlb.classes_[i] for i in top_indices]
    
    return predicted_jobs


def predict_job(new_data):
    new_data = np.array(new_data).reshape(1, -1) 
    new_data_scaled = scaler.transform(new_data)

    if hasattr(classification_model, "predict_proba"):
        predictions = classification_model.predict_proba(new_data_scaled)[0]
    else:
        predictions = classification_model.predict(new_data_scaled)[0]

    if np.max(predictions) < 0.2: 
        return predict_job_with_knn(new_data)

    top_indices = np.argsort(predictions)[-6:][::-1]
    predicted_jobs = [mlb.classes_[i] for i in top_indices]

    return predicted_jobs

job_data = pd.read_csv("Career_path_jobs.csv")

import fitz  # PyMuPDF
import pandas as pd

def extract_text_from_pdf(pdf_path):
    """Extracts text from a PDF file and converts it to lowercase."""
    doc = fitz.open(pdf_path)
    text = "\n".join([page.get_text() for page in doc])
    return text.lower()

def extract_skills_from_resume(pdf_text, skills_list):
    """Extracts skills from resume text based on a predefined skills list."""
    matched_skills = [skill for skill in skills_list if skill.lower() in pdf_text]  
    return list(set(matched_skills))  

def match_skills_with_jobs(extracted_skills, job_data):
    """Matches extracted skills with job dataset and finds the best job role."""
    
    job_data["Skills Required"] = job_data["Skills Required"].str.lower().str.replace(r'[^a-zA-Z0-9, ]', '', regex=True)

    job_data["Matched Skills"] = job_data["Skills Required"].apply(
        lambda skills: ", ".join([skill for skill in skills.split(",") if skill.strip() in extracted_skills])
    )

   
    matched_jobs = job_data[job_data["Matched Skills"] != ""].copy()

    matched_jobs["Matched Skill Count"] = matched_jobs["Matched Skills"].apply(lambda x: len(x.split(", ")))

    matched_jobs = matched_jobs.sort_values(by="Matched Skill Count", ascending=False)

    return matched_jobs[["SOCTITLE", "Matched Skills", "Matched Skill Count"]].to_dict(orient="records")

def find_best_job_for_candidate(pdf_path, job_data):
    """Main function to find the best job role based on resume skills."""
    pdf_text = extract_text_from_pdf(pdf_path)

    skills_list = set(job_data["Skills Required"].str.lower().str.replace(r'[^a-zA-Z0-9, ]', '', regex=True).str.split(",").sum())

    extracted_skills = extract_skills_from_resume(pdf_text, skills_list)

    if not extracted_skills:
        return {"message": "No relevant skills found in the resume."}

    best_matches = match_skills_with_jobs(extracted_skills, job_data)

    return best_matches if best_matches else {"message": "No suitable job matches found."}


@app.route('/')
def demo():
    return render_template('demo.html')

@app.route('/student')
def student():
    return render_template('student.html')

@app.route('/clg')
def clg():
    return render_template('clg.html')

@app.route('/classification', methods=['POST'])
def classify():
    """API Endpoint to classify career based on scores."""
    data = request.get_json()
    
    if not data:
        return jsonify({"error": "No data received"}), 400
    
    try:
        scores_list = np.array([
            data['english'], data['music'], data['math'], 
            data['visual'], data['inter'], data['intra'], 
            data['body'], data['nature']
        ])

        predicted_career = predict_job(scores_list)
        recommendations = match_skills_with_jobs(predicted_career, job_data)

        return jsonify({"prediction": predicted_career, "recommendations": recommendations})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/upload', methods=['POST'])
def upload_pdf():
    """API Endpoint to upload resume and get job recommendations."""
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    pdf_path = os.path.join("uploads", file.filename)
    file.save(pdf_path)

    recommendations = find_best_job_for_candidate(pdf_path, job_data)

    return jsonify({'recommendations': recommendations})

@app.route('/roadmap', methods=['POST'])
def roadmap():
    """API Endpoint to generate and return the roadmap for a given career."""
    data = request.get_json()
    
    if not data or 'career' not in data:
        return jsonify({"error": "No career provided"}), 400
    
    job_role = data['career']

    G, path = create_career_graph(job_role)
    if G is None:
        return jsonify({"error": f"No roadmap available for {job_role}"}), 404

    fig = visualize_career_path(G, path, job_role)
    roadmap_html = pio.to_html(fig, full_html=False)  
    return jsonify({"roadmap": roadmap_html})

if __name__ == "__main__":
    app.run(debug=True)
