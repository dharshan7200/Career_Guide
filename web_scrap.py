from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.microsoft import EdgeChromiumDriverManager
from bs4 import BeautifulSoup
import pandas as pd
import time
import random

def setup_driver():
    options = webdriver.EdgeOptions()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
    return webdriver.Edge(service=Service(EdgeChromiumDriverManager().install()), options=options)

def scrape_linkedin(job_role):
    driver = setup_driver()
    search_query = job_role.replace(" ", "%20")
    url = f"https://www.linkedin.com/jobs/search?keywords={search_query}&location=remote"
    driver.get(url)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "base-search-card__info")))
    
    for _ in range(3):
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(random.uniform(3, 6))
    
    soup = BeautifulSoup(driver.page_source, "html.parser")
    driver.quit()
    
    jobs = []
    for job in soup.find_all("div", class_="base-search-card"):
        title = job.find("h3", class_="base-search-card__title")
        company = job.find("h4", class_="base-search-card__subtitle")
        location = job.find("span", class_="job-search-card__location")
        job_link = job.find("a", href=True)
        
        jobs.append({
            "Portal": "LinkedIn",
            "Title": title.text.strip() if title else "N/A",
            "Company": company.text.strip() if company else "N/A",
            "Location": location.text.strip() if location else "N/A",
            "Link": f"https://www.linkedin.com{job_link['href']}" if job_link else "N/A",
        })
    return jobs

def scrape_naukri(job_role):
    driver = setup_driver()
    search_query = job_role.replace(" ", "-")
    url = f"https://www.naukri.com/{search_query}-jobs-in-remote"
    driver.get(url)
    time.sleep(5)
    
    soup = BeautifulSoup(driver.page_source, "html.parser")
    driver.quit()
    
    jobs = []
    for job in soup.find_all("article", class_="jobTuple"):
        title = job.find("a", class_="title")
        company = job.find("a", class_="subTitle")
        location = job.find("li", class_="location")
        job_link = title["href"] if title else "N/A"
        
        jobs.append({
            "Portal": "Naukri",
            "Title": title.text.strip() if title else "N/A",
            "Company": company.text.strip() if company else "N/A",
            "Location": location.text.strip() if location else "N/A",
            "Link": job_link,
        })
    return jobs

def scrape_monster(job_role):
    driver = setup_driver()
    search_query = job_role.replace(" ", "%20")
    url = f"https://www.foundit.in/search/{search_query}-jobs-in-remote"
    driver.get(url)
    time.sleep(5)
    
    soup = BeautifulSoup(driver.page_source, "html.parser")
    driver.quit()
    
    jobs = []
    for job in soup.find_all("div", class_="card-apply-content"):
        title = job.find("h3")
        company = job.find("span", class_="company-name")
        location = job.find("span", class_="loc")
        job_link = job.find("a", href=True)
        
        jobs.append({
            "Portal": "Monster",
            "Title": title.text.strip() if title else "N/A",
            "Company": company.text.strip() if company else "N/A",
            "Location": location.text.strip() if location else "N/A",
            "Link": job_link["href"] if job_link else "N/A",
        })
    return jobs

def main(job_role):
    all_jobs = scrape_linkedin(job_role) + scrape_naukri(job_role) + scrape_monster(job_role)
    df = pd.DataFrame(all_jobs)
    df.to_csv(f"{job_role}_job_listings.csv", index=False)
    print(f"✅ Job listings for '{job_role}' scraped successfully!")

if __name__ == "__main__":
    job_role = input("Enter job role: ")
    main(job_role)