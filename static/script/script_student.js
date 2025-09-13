// Enhanced Student Assessment JavaScript with Questions Data

const questions = {
    english: [
        {
            question: "Which of the following words is the opposite of 'expand'?",
            options: ["Contract", "Increase", "Enlarge", "Grow"],
            answer: "Contract",
        },
        {
            question: "What is the synonym of 'elaborate'?",
            options: ["Simplify", "Explain", "Shorten", "Enhance"],
            answer: "Explain",
        },
        {
            question: "Choose the correct meaning of the word 'mellifluous':",
            options: ["Harsh", "Sweet sounding", "Incoherent", "Mournful"],
            answer: "Sweet sounding",
        },
        {
            question: "Which of these is an antonym of 'diligent'?",
            options: ["Lazy", "Hardworking", "Determined", "Focused"],
            answer: "Lazy",
        },
        {
            question: "What does the word 'ephemeral' mean?",
            options: ["Lasting forever", "Of short duration", "Deeply meaningful", "Always changing"],
            answer: "Of short duration",
        }
    ],
    music: [
        {
            question: "Who is known as the 'King of Pop'?",
            options: ["Michael Jackson", "Elvis Presley", "Prince", "Justin Timberlake"],
            answer: "Michael Jackson",
        },
        {
            question: "Which musical instrument is known as the 'King of Instruments'?",
            options: ["Guitar", "Piano", "Violin", "Organ"],
            answer: "Organ",
        },
        {
            question: "Which composer is famous for composing 'The Four Seasons'?",
            options: ["Beethoven", "Mozart", "Vivaldi", "Tchaikovsky"],
            answer: "Vivaldi",
        },
        {
            question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
            options: ["The Rolling Stones", "The Beatles", "Queen", "Pink Floyd"],
            answer: "Queen",
        },
        {
            question: "What type of music is associated with Bob Marley?",
            options: ["Rock", "Jazz", "Reggae", "Blues"],
            answer: "Reggae",
        }
    ],
    math: [
        {
            question: "What is the next number in the sequence: 2, 4, 8, 16, __?",
            options: ["32", "24", "30", "64"],
            answer: "32",
        },
        {
            question: "Which of the following is a prime number?",
            options: ["21", "31", "49", "51"],
            answer: "31",
        },
        {
            question: "If 3x = 9, what is the value of x?",
            options: ["1", "3", "9", "27"],
            answer: "3",
        },
        {
            question: "What is 12% of 200?",
            options: ["24", "18", "20", "36"],
            answer: "24",
        },
        {
            question: "What is the sum of the angles in a triangle?",
            options: ["90°", "180°", "360°", "270°"],
            answer: "180°",
        }
    ],
    visual: [
        {
            question: "Which figure is the mirror image of the following shape?",
            options: ["Triangle pointing up", "Triangle pointing down", "Square", "Circle"],
            answer: "Triangle pointing down",
        },
        {
            question: "How many faces does a cube have?",
            options: ["4", "6", "8", "12"],
            answer: "6",
        },
        {
            question: "Which of the following objects is most similar in shape to a sphere?",
            options: ["A ball", "A box", "A cube", "A cone"],
            answer: "A ball",
        },
        {
            question: "Which figure is the top view of a cube?",
            options: ["A square", "A rectangle", "A circle", "A triangle"],
            answer: "A square",
        },
        {
            question: "How many edges does a rectangular prism have?",
            options: ["6", "12", "8", "16"],
            answer: "12",
        }
    ],
    body: [
        {
            question: "What is the primary benefit of cardiovascular exercise?",
            options: ["Increased muscle mass", "Improved heart health", "Increased bone density", "Increased flexibility"],
            answer: "Improved heart health",
        },
        {
            question: "Which of the following is an example of aerobic exercise?",
            options: ["Weightlifting", "Swimming", "Squats", "Push-ups"],
            answer: "Swimming",
        },
        {
            question: "What is the best exercise to target the core muscles?",
            options: ["Deadlifts", "Planks", "Bench press", "Bicep curls"],
            answer: "Planks",
        },
        {
            question: "Which type of muscle fibers are most active during endurance activities?",
            options: ["Type I (slow-twitch fibers)", "Type II (fast-twitch fibers)", "Type III fibers", "Type IV fibers"],
            answer: "Type I (slow-twitch fibers)",
        },
        {
            question: "How many hours of sleep are recommended for recovery after exercise?",
            options: ["4-5 hours", "6-7 hours", "7-9 hours", "10-12 hours"],
            answer: "7-9 hours",
        }
    ],
    inter: [
        {
            question: "How do you usually react when someone expresses their feelings to you?",
            options: ["Ignore their feelings and focus on the facts", "Listen actively and offer support", "Feel uncomfortable and change the subject", "Tell them to get over it quickly"],
            answer: "Listen actively and offer support",
        },
        {
            question: "When working in a group, how do you contribute to discussions?",
            options: ["Keep my opinions to myself", "Share my thoughts but let others take the lead", "Listen to others but take charge of the conversation", "Talk over others to get my point across"],
            answer: "Share my thoughts but let others take the lead",
        },
        {
            question: "How do you handle conflicts with others?",
            options: ["Avoid conflict at all costs", "Address the issue openly and try to find a solution", "Ignore the conflict and hope it resolves itself", "Let the other person take charge of resolving the conflict"],
            answer: "Address the issue openly and try to find a solution",
        },
        {
            question: "How do you show empathy when someone is going through a tough time?",
            options: ["Ignore their feelings and focus on other things", "Offer advice on how to fix the situation", "Listen to them and offer comfort", "Try to cheer them up by distracting them"],
            answer: "Listen to them and offer comfort",
        },
        {
            question: "How do you react when someone asks for your help?",
            options: ["Feel annoyed and refuse to help", "Offer assistance willingly, if I can help", "Help reluctantly but feel burdened by it", "Offer advice without taking action"],
            answer: "Offer assistance willingly, if I can help",
        }
    ],
    intra: [
        {
            question: "How do you respond when you realize you've made a mistake?",
            options: ["Blame others for it", "Try to learn from it and move forward", "Ignore it and pretend it never happened", "Feel discouraged and give up"],
            answer: "Try to learn from it and move forward",
        },
        {
            question: "When you're feeling overwhelmed, how do you manage your emotions?",
            options: ["Ignore your feelings and continue working", "Acknowledge your emotions and take a break to regain focus", "Talk to others about how you feel", "Let the emotions dictate your actions"],
            answer: "Acknowledge your emotions and take a break to regain focus",
        },
        {
            question: "How often do you take time to reflect on your personal growth?",
            options: ["Rarely, I don't see the need for it", "Occasionally, when I feel stuck", "Regularly, to track progress and adjust my actions", "Never, I prefer not to think about these things"],
            answer: "Regularly, to track progress and adjust my actions",
        },
        {
            question: "How do you deal with constructive criticism?",
            options: ["Get defensive and argue", "Accept it with an open mind and try to improve", "Ignore it and continue doing things my way", "Feel discouraged and stop trying"],
            answer: "Accept it with an open mind and try to improve",
        },
        {
            question: "When you achieve a goal, how do you celebrate your success?",
            options: ["Ignore the achievement and move on to the next task", "Celebrate with friends and reflect on how far I've come", "Downplay the success to avoid attention", "Don't take the time to acknowledge it"],
            answer: "Celebrate with friends and reflect on how far I've come",
        }
    ],
    nature: [
        {
            question: "How do you feel when you're surrounded by nature?",
            options: ["Anxious and uncomfortable", "Relaxed and at peace", "Disconnected and uninterested", "Excited and energized to explore"],
            answer: "Relaxed and at peace",
        },
        {
            question: "How often do you spend time outdoors to observe nature?",
            options: ["Rarely or never", "Occasionally, when I get the chance", "Frequently, I love being outdoors", "Only for specific activities like hiking or camping"],
            answer: "Frequently, I love being outdoors",
        },
        {
            question: "How do you feel about learning about different species of animals or plants?",
            options: ["I find it boring and unimportant", "I'm somewhat interested, but not deeply", "I enjoy it and try to learn more when I can", "I'm fascinated by it and seek out opportunities to learn"],
            answer: "I enjoy it and try to learn more when I can",
        },
        {
            question: "When you see an unfamiliar plant or animal, what do you do?",
            options: ["Ignore it and move on", "Take a quick look, but don't really care", "Try to identify it or look it up later", "Try to study it closely or take notes about it"],
            answer: "Try to identify it or look it up later",
        },
        {
            question: "How do you feel about preserving endangered species?",
            options: ["It's not something I think about much", "It's important, but I don't feel I can do much about it", "I believe it's important and support conservation efforts", "I'm deeply committed to helping preserve endangered species"],
            answer: "I believe it's important and support conservation efforts",
        }
    ]
};

// Assessment state management
let scores = {
    english: 0, music: 0, math: 0, visual: 0,
    inter: 0, intra: 0, body: 0, nature: 0
};

let completedAssessments = {
    english: false, music: false, math: false, visual: false,
    inter: false, intra: false, body: false, nature: false
};

let currentActiveAssessment = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateProgressIndicator();
});

function initializeApp() {
    // Get user name from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("name");
    
    if (userName) {
        const nameHolder = document.getElementById("name_holder");
        nameHolder.textContent = `Welcome, ${decodeURIComponent(userName)}!`;
        nameHolder.style.animation = "slideInDown 1s ease-out";
    }
    
    // Add intersection observer for animations
    setupScrollAnimations();
}

function setupEventListeners() {
    // Assessment start buttons
    const startButtons = document.querySelectorAll(".start-btn");
    startButtons.forEach(button => {
        button.addEventListener("click", handleAssessmentStart);
    });
    
    // Results button
    const resultButton = document.getElementById("result");
    resultButton.addEventListener("click", generateResults);
    
    // Modal close
    const closeModal = document.querySelector(".close-modal");
    if (closeModal) {
        closeModal.addEventListener("click", closeModal);
    }
    
    // Close modal on outside click
    window.addEventListener("click", function(event) {
        const modal = document.getElementById("roadmap_modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function handleAssessmentStart(event) {
    const button = event.currentTarget;
    const category = button.getAttribute("data-category");
    
    // Check if already completed
    if (completedAssessments[category]) {
        showNotification("Assessment already completed!", "info");
        return;
    }
    
    // Close any currently active assessment
    if (currentActiveAssessment && currentActiveAssessment !== category) {
        hideAssessment(currentActiveAssessment);
    }
    
    // Show this assessment
    showAssessment(category, button);
    currentActiveAssessment = category;
}

function showAssessment(category, button) {
    const questionsContainer = document.getElementById(`ques-session-${category}`);
    
    // Clear existing content
    questionsContainer.innerHTML = "";
    questionsContainer.classList.add("active");
    
    // Create questions
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");
    
    const categoryQuestions = questions[category];
    if (!categoryQuestions) {
        showNotification("Questions not available for this assessment", "error");
        return;
    }
    
    // Add assessment header
    const header = document.createElement("div");
    header.innerHTML = `
        <h3 style="color: #667eea; margin-bottom: 20px; text-align: center;">
            ${getCategoryTitle(category)} Assessment
        </h3>
        <p style="text-align: center; color: #666; margin-bottom: 30px;">
            Answer all questions honestly to get accurate results
        </p>
    `;
    questionContainer.appendChild(header);
    
    // Create progress bar for this assessment
    const progressBar = document.createElement("div");
    progressBar.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="font-size: 0.9rem; color: #667eea;">Progress</span>
                <span id="question-progress-${category}" style="font-size: 0.9rem; color: #667eea;">0 / ${categoryQuestions.length}</span>
            </div>
            <div style="width: 100%; height: 6px; background: rgba(102, 126, 234, 0.2); border-radius: 10px;">
                <div id="progress-fill-${category}" style="height: 100%; background: linear-gradient(90deg, #667eea, #764ba2); border-radius: 10px; width: 0%; transition: width 0.3s ease;"></div>
            </div>
        </div>
    `;
    questionContainer.appendChild(progressBar);
    
    // Add questions
    categoryQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.setAttribute("data-question-index", index);
        
        let questionHTML = `
            <p><span>Q${index + 1}.</span> ${q.question}</p>
            <div class="options-container">
        `;
        
        q.options.forEach((option, optionIndex) => {
            questionHTML += `
                <label>
                    <input type="radio" name="q${index}_${category}" value="${option}" onchange="updateQuestionProgress('${category}')">
                    <span>${option}</span>
                </label>
            `;
        });
        
        questionHTML += '</div>';
        questionDiv.innerHTML = questionHTML;
        questionContainer.appendChild(questionDiv);
    });
    
    // Add submit button
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit Assessment";
    submitButton.classList.add("submit-button");
    submitButton.setAttribute("data-category", category);
    submitButton.addEventListener("click", function() {
        submitAssessment(category);
    });
    
    questionContainer.appendChild(submitButton);
    questionsContainer.appendChild(questionContainer);
    
    // Smooth scroll to questions
    setTimeout(() => {
        questionsContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 100);
    
    // Update button state
    button.innerHTML = `
        <span class="btn-text">In Progress...</span>
        <div class="loading"></div>
    `;
    button.disabled = true;
}

function hideAssessment(category) {
    const questionsContainer = document.getElementById(`ques-session-${category}`);
    questionsContainer.classList.remove("active");
    questionsContainer.innerHTML = "";
}

function updateQuestionProgress(category) {
    const categoryQuestions = questions[category];
    const totalQuestions = categoryQuestions.length;
    let answeredQuestions = 0;
    
    // Count answered questions
    for (let i = 0; i < totalQuestions; i++) {
        const radioButtons = document.querySelectorAll(`input[name="q${i}_${category}"]:checked`);
        if (radioButtons.length > 0) {
            answeredQuestions++;
        }
    }
    
    // Update progress bar
    const progressText = document.getElementById(`question-progress-${category}`);
    const progressFill = document.getElementById(`progress-fill-${category}`);
    
    if (progressText) {
        progressText.textContent = `${answeredQuestions} / ${totalQuestions}`;
    }
    
    if (progressFill) {
        const percentage = (answeredQuestions / totalQuestions) * 100;
        progressFill.style.width = `${percentage}%`;
    }
}

function submitAssessment(category) {
    const categoryQuestions = questions[category];
    const totalQuestions = categoryQuestions.length;
    let answeredQuestions = 0;
    let score = 0;
    
    // Check if all questions are answered
    for (let i = 0; i < totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}_${category}"]:checked`);
        if (selectedAnswer) {
            answeredQuestions++;
            // Check if answer is correct
            if (selectedAnswer.value.trim() === categoryQuestions[i].answer.trim()) {
                score++;
            }
        }
    }
    
    if (answeredQuestions < totalQuestions) {
        showNotification(`Please answer all ${totalQuestions} questions before submitting.`, "warning");
        return;
    }
    
    // Save score and mark as completed
    scores[category] = score;
    completedAssessments[category] = true;
    
    // Update UI
    markAssessmentCompleted(category, score, totalQuestions);
    hideAssessment(category);
    updateProgressIndicator();
    
    showNotification(`${getCategoryTitle(category)} assessment completed! Score: ${score}/${totalQuestions}`, "success");
    
    currentActiveAssessment = null;
}

function markAssessmentCompleted(category, score, total) {
    const button = document.querySelector(`[data-category="${category}"]`);
    const assessmentRow = button.closest('.assessment-row');
    
    // Update button
    button.classList.add("completed");
    button.innerHTML = `
        <span class="btn-text">Completed</span>
        <span class="btn-arrow">✓</span>
    `;
    button.disabled = false;
    
    // Mark row as completed
    assessmentRow.classList.add("completed");
    
    // Add score indicator
    const scoreIndicator = document.createElement("div");
    scoreIndicator.innerHTML = `
        <div style="background: linear-gradient(135deg, #4caf50, #45a049); color: white; padding: 8px 16px; border-radius: 20px; font-size: 0.9rem; font-weight: 600; margin-top: 10px; text-align: center;">
            Score: ${score}/${total} (${Math.round((score/total)*100)}%)
        </div>
    `;
    
    const assessmentContent = assessmentRow.querySelector('.assessment-content');
    assessmentContent.appendChild(scoreIndicator);
}

function updateProgressIndicator() {
    const completedCount = Object.values(completedAssessments).filter(Boolean).length;
    const totalAssessments = Object.keys(completedAssessments).length;
    const percentage = (completedCount / totalAssessments) * 100;
    
    const progressFill = document.getElementById("overallProgress");
    const progressText = document.getElementById("progressText");
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    
    if (progressText) {
        if (completedCount === 0) {
            progressText.textContent = "Ready to start";
        } else if (completedCount === totalAssessments) {
            progressText.textContent = "All assessments completed!";
        } else {
            progressText.textContent = `${completedCount}/${totalAssessments} assessments completed`;
        }
    }
    
    // Enable results button if all completed
    const resultButton = document.getElementById("result");
    if (completedCount === totalAssessments) {
        resultButton.style.background = "linear-gradient(135deg, #4caf50, #45a049)";
        resultButton.innerHTML = `
            <span class="btn-icon">🎉</span>
            <span class="btn-text">View Your Results</span>
            <span class="btn-glow"></span>
        `;
    }
}

function generateResults() {
    const completedCount = Object.values(completedAssessments).filter(Boolean).length;
    const totalAssessments = Object.keys(completedAssessments).length;
    
    if (completedCount < totalAssessments) {
        showNotification("Please complete all assessments before generating results.", "warning");
        return;
    }
    
    // Show loading state
    const resultButton = document.getElementById("result");
    const originalContent = resultButton.innerHTML;
    resultButton.innerHTML = `
        <div class="loading"></div>
        <span class="btn-text">Generating Results...</span>
    `;
    resultButton.disabled = true;
    
    // Display local scores first
    displayLocalScores();
    
    // Send to backend for career recommendations
    fetch("/classification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scores),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayCareerRecommendations(data);
        
        // Restore button
        resultButton.innerHTML = originalContent;
        resultButton.disabled = false;
    })
    .catch(error => {
        console.error("Error:", error);
        showNotification("Failed to get career recommendations. Please try again.", "error");
        
        // Restore button
        resultButton.innerHTML = originalContent;
        resultButton.disabled = false;
    });
}

function displayLocalScores() {
    const scoreDisplay = document.getElementById("score_display");
    
    let scoresHTML = `
        <h2>Your Assessment Results</h2>
        <p style="text-align: center; color: #666; margin-bottom: 30px;">Here's how you performed across all intelligence areas</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
    `;
    
    const categoryTitles = {
        english: "Linguistic Intelligence",
        music: "Musical Intelligence", 
        math: "Logical-Mathematical",
        visual: "Spatial Intelligence",
        inter: "Interpersonal Skills",
        intra: "Intrapersonal Skills",
        body: "Bodily-Kinesthetic",
        nature: "Naturalist Intelligence"
    };
    
    for (let category in scores) {
        const score = scores[category];
        const total = questions[category] ? questions[category].length : 5;
        const percentage = Math.round((score / total) * 100);
        
        let performanceLevel = "Needs Development";
        let performanceColor = "#ff6b6b";
        
        if (percentage >= 80) {
            performanceLevel = "Excellent";
            performanceColor = "#4caf50";
        } else if (percentage >= 60) {
            performanceLevel = "Good";
            performanceColor = "#ff9800";
        } else if (percentage >= 40) {
            performanceLevel = "Fair";
            performanceColor = "#ffc107";
        }
        
        scoresHTML += `
            <div style="background: white; padding: 20px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid ${performanceColor};">
                <h4 style="color: #333; margin-bottom: 10px;">${categoryTitles[category]}</h4>
                <div style="font-size: 2rem; font-weight: bold; color: ${performanceColor}; margin: 15px 0;">${score}/${total}</div>
                <div style="width: 100%; height: 8px; background: rgba(0,0,0,0.1); border-radius: 10px; margin: 10px 0;">
                    <div style="height: 100%; background: ${performanceColor}; border-radius: 10px; width: ${percentage}%; transition: width 1s ease;"></div>
                </div>
                <div style="color: ${performanceColor}; font-weight: 600; font-size: 0.9rem;">${performanceLevel}</div>
            </div>
        `;
    }
    
    scoresHTML += '</div>';
    scoreDisplay.innerHTML = scoresHTML;
    
    // Add animation
    setTimeout(() => {
        scoreDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function displayCareerRecommendations(data) {
    const careerOptions = document.getElementById("career_options");
    const jobRoles = document.getElementById("job_roles");
    
    // Career predictions
    if (data.prediction && data.prediction.length > 0) {
        let careerHTML = `
            <h3>Your Ideal Career Paths</h3>
            <p style="text-align: center; color: #666; margin-bottom: 30px;">Based on your assessment results, these careers align with your strengths</p>
            <ul>
        `;
        
        data.prediction.forEach((career, index) => {
            careerHTML += `
                <li style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong>${career}</strong>
                        <div style="font-size: 0.9rem; color: #666; margin-top: 5px;">
                            Career Path ${index + 1} • High compatibility
                        </div>
                    </div>
                    <button class="road_map" onclick="fetchRoadmap('${career}')" data-career="${career}">
                        View Roadmap
                    </button>
                </li>
            `;
        });
        
        careerHTML += '</ul>';
        careerOptions.innerHTML = careerHTML;
    }
    
    // Job recommendations
    if (data.recommendations && data.recommendations.length > 0) {
        let jobHTML = `
            <h3>Recommended Job Roles</h3>
            <p style="text-align: center; color: #666; margin-bottom: 30px;">Specific positions that match your skill profile</p>
            <ul>
        `;
        
        data.recommendations.forEach((job, index) => {
            const jobTitle = job.SOCTITLE || job || "Career Opportunity";
            const skills = job["Matched Skills"] || "";
            const skillCount = job["Matched Skill Count"] || 0;
            
            jobHTML += `
                <li>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <strong>${jobTitle}</strong>
                        ${skillCount > 0 ? `<span style="background: rgba(102, 126, 234, 0.1); color: #667eea; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem;">${skillCount} skills matched</span>` : ''}
                    </div>
                    ${skills ? `<div style="color: #666; font-size: 0.9rem;"><strong>Key Skills:</strong> ${skills}</div>` : ''}
                </li>
            `;
        });
        
        jobHTML += '</ul>';
        jobRoles.innerHTML = jobHTML;
    } else {
        jobRoles.innerHTML = `
            <h3>Job Roles</h3>
            <p style="text-align: center; color: #666;">We're still analyzing the best job matches for your profile. Check back soon!</p>
        `;
    }
}

function getCategoryIcon(category) {
    const icons = {
        english: "💬",
        music: "🎵", 
        math: "🔢",
        visual: "🎨",
        inter: "🤝",
        intra: "🧠",
        body: "🏃",
        nature: "🌿"
    };
    return icons[category] || "📝";
}

function getCategoryTitle(category) {
    const titles = {
        english: "Communication Skills",
        music: "Musical Intelligence",
        math: "Logical Mathematics",
        visual: "Spatial Visualization",
        inter: "Interpersonal Skills",
        intra: "Self Awareness", 
        body: "Physical Intelligence",
        nature: "Nature Connection"
    };
    return titles[category] || category;
}

function fetchRoadmap(career) {
    const modal = document.getElementById("roadmap_modal");
    const modalContent = document.getElementById("roadmap_content");
    
    // Show modal with loading
    modalContent.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div class="loading"></div>
            <p style="margin-top: 20px; color: #666;">Loading career roadmap...</p>
        </div>
    `;
    modal.style.display = "block";
    
    fetch("/roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ career: career })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            modalContent.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <div style="font-size: 3rem; margin-bottom: 20px;">❌</div>
                    <h3 style="color: #e74c3c;">Error</h3>
                    <p style="color: #666;">${data.error}</p>
                </div>
            `;
        } else {
            modalContent.innerHTML = data.roadmap;
        }
    })
    .catch(error => {
        console.error("Error:", error);
        modalContent.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 3rem; margin-bottom: 20px;">⚠️</div>
                <h3 style="color: #ff9800;">Connection Error</h3>
                <p style="color: #666;">Unable to load roadmap. Please try again later.</p>
            </div>
        `;
    });
}

function closeModal() {
    const modal = document.getElementById("roadmap_modal");
    modal.style.display = "none";
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: '✅',
        error: '❌', 
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2rem;">${icons[type] || icons.info}</span>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    `;
    
    if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    } else if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #27ae60, #219a52)';
    } else if (type === 'warning') {
        notification.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
    
    // Click to dismiss
    notification.addEventListener('click', function() {
        this.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(this)) {
                document.body.removeChild(this);
            }
        }, 300);
    });
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe assessment rows
    const assessmentRows = document.querySelectorAll('.assessment-row');
    assessmentRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(30px)';
        row.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(row);
    });
}

// Make functions globally accessible
window.fetchRoadmap = fetchRoadmap;
window.closeModal = closeModal;
window.updateQuestionProgress = updateQuestionProgress;