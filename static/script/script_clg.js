// Enhanced College Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements
    const dropButton = document.getElementById("drop");
    const fileInput = document.getElementById("resumeUpload");
    const loadingOverlay = document.getElementById("loadingOverlay");
    const jobResults = document.getElementById("job_result");
    
    // Drag and drop functionality
    let dragCounter = 0;
    
    // Click to upload
    dropButton.addEventListener("click", function() {
        fileInput.click();
    });
    
    // File input change
    fileInput.addEventListener("change", function() {
        if (this.files && this.files[0]) {
            uploadPDF(this.files[0]);
        }
    });
    
    // Drag and drop events
    document.addEventListener('dragenter', function(e) {
        e.preventDefault();
        dragCounter++;
        dropButton.style.background = 'rgba(255, 255, 255, 0.4)';
        dropButton.style.borderColor = 'rgba(255, 255, 255, 0.8)';
    });
    
    document.addEventListener('dragleave', function(e) {
        e.preventDefault();
        dragCounter--;
        if (dragCounter === 0) {
            resetDropButtonStyle();
        }
    });
    
    document.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('drop', function(e) {
        e.preventDefault();
        dragCounter = 0;
        resetDropButtonStyle();
        
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type === 'application/pdf') {
            uploadPDF(files[0]);
        } else {
            showNotification('Please drop a valid PDF file', 'error');
        }
    });
    
    function resetDropButtonStyle() {
        dropButton.style.background = 'rgba(255, 255, 255, 0.2)';
        dropButton.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    }
    
    function uploadPDF(file) {
        if (!file) {
            showNotification("Please select a file!", 'error');
            return;
        }
        
        if (file.type !== 'application/pdf') {
            showNotification("Please select a PDF file only!", 'error');
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            showNotification("File size should be less than 5MB!", 'error');
            return;
        }
        
        showLoading(true);
        
        let formData = new FormData();
        formData.append("file", file);
        
        fetch("/upload", {
            method: "POST",
            body: formData,
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            showLoading(false);
            displayResults(data);
        })
        .catch((error) => {
            showLoading(false);
            console.error("Upload error:", error);
            showNotification("Failed to process your resume. Please try again.", 'error');
        });
    }
    
    function showLoading(show) {
        if (show) {
            loadingOverlay.classList.add('active');
        } else {
            loadingOverlay.classList.remove('active');
        }
    }
    
    function displayResults(data) {
        jobResults.innerHTML = '';
        jobResults.classList.add('results-container', 'active');
        
        if (data.error) {
            jobResults.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <div style="font-size: 3rem; margin-bottom: 20px;">❌</div>
                    <h2 style="color: #e74c3c; margin-bottom: 10px;">Error Processing Resume</h2>
                    <p style="color: #666; font-size: 1.1rem;">${data.error}</p>
                </div>
            `;
            return;
        }
        
        if (!data.recommendations || data.recommendations.length === 0) {
            jobResults.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <div style="font-size: 3rem; margin-bottom: 20px;">🔍</div>
                    <h2 style="color: #f39c12; margin-bottom: 10px;">No Matches Found</h2>
                    <p style="color: #666; font-size: 1.1rem;">We couldn't find matching job roles for your skills. Try updating your resume with more relevant keywords.</p>
                </div>
            `;
            return;
        }
        
        // Success - display results
        const headerHtml = `
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="font-size: 3rem; margin-bottom: 20px;">🎯</div>
                <h2 style="color: #2c3e50;">Recommended Job Roles</h2>
                <p style="color: #666; font-size: 1.1rem;">Based on your skills and experience</p>
            </div>
        `;
        
        let jobListHtml = '<ol style="list-style: none; counter-reset: job-counter;">';
        
        data.recommendations.forEach((job) => {
            const jobTitle = job.SOCTITLE || "Unknown Job Title";
            const skills = job["Matched Skills"] || "No skills listed";
            const skillCount = job["Matched Skill Count"] || 0;
            
            jobListHtml += `
                <li style="counter-increment: job-counter; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 25px; margin-bottom: 20px; border-radius: 15px; position: relative; padding-left: 60px; transition: transform 0.3s ease; cursor: pointer;" 
                    onmouseover="this.style.transform='translateX(10px)'" 
                    onmouseout="this.style.transform='translateX(0)'"
                    onclick="navigateToJobDetail('${jobTitle}', ${Math.round(skillCount * 15 + 60)})">
                    <div style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%); background: rgba(255, 255, 255, 0.2); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem;"></div>
                    <div style="font-size: 1.3rem; font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 10px; cursor: pointer;">
                        <span style="text-decoration: underline;">${jobTitle}</span>
                        <span style="background: rgba(255, 255, 255, 0.2); padding: 4px 8px; border-radius: 12px; font-size: 0.8rem;">${skillCount} skills matched</span>
                    </div>
                    <div style="opacity: 0.9; line-height: 1.5;">
                        <strong>Matching Skills:</strong> ${skills}
                    </div>
                </li>
            `;
        });
        
        jobListHtml += '</ol>';
        
        // Add download/save options
        const actionsHtml = `
            <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee;">
                <button onclick="window.print()" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 12px 24px; border-radius: 25px; margin: 0 10px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;" 
                        onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.2)'" 
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    📄 Print Results
                </button>
                <button onclick="shareResults()" style="background: linear-gradient(135deg, #4ecdc4, #44a08d); color: white; border: none; padding: 12px 24px; border-radius: 25px; margin: 0 10px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;" 
                        onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.2)'" 
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    📤 Share Results
                </button>
            </div>
        `;
        
        jobResults.innerHTML = headerHtml + jobListHtml + actionsHtml;
        
        // Smooth scroll to results
        setTimeout(() => {
            jobResults.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 100);
    }
    
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            notification.innerHTML = `❌ ${message}`;
        } else if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #27ae60, #219a52)';
            notification.innerHTML = `✅ ${message}`;
        } else {
            notification.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
            notification.innerHTML = `ℹ️ ${message}`;
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
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }
    
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects to career cards
    const careerCards = document.querySelectorAll('.career-card');
    careerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // Parallax effect for floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.floating-elements');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.career-card, .info-box, .career-showcase');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Global functions
function shareResults() {
    if (navigator.share) {
        navigator.share({
            title: 'My Career Recommendations',
            text: 'Check out my personalized job recommendations!',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        });
    }
}

function showNotification(message, type) {
    // This function is defined within the DOMContentLoaded scope above
    const event = new CustomEvent('showNotification', { 
        detail: { message, type } 
    });
    document.dispatchEvent(event);
}