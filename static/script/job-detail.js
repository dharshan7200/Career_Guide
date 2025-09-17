// Job Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeJobDetail();
    animateSpeedometer();
    animateSkillBars();
});

function initializeJobDetail() {
    // Get job data from URL parameters or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const jobTitle = urlParams.get('job') || localStorage.getItem('selectedJob') || 'Human Resources Specialist';
    const matchPercentage = parseInt(urlParams.get('match')) || 75;
    
    // Update job title
    const jobTitleElement = document.getElementById('jobTitle');
    if (jobTitleElement) {
        jobTitleElement.textContent = jobTitle;
    }
    
    // Update speedometer value
    const speedometerValue = document.getElementById('speedometerValue');
    if (speedometerValue) {
        speedometerValue.textContent = `${matchPercentage}%`;
    }
    
    // Set speedometer needle angle based on percentage
    setSpeedometerValue(matchPercentage);
}

function setSpeedometerValue(percentage) {
    // Convert percentage to angle (0-180 degrees for half circle)
    const angle = (percentage / 100) * 180;
    const needle = document.getElementById('gaugeNeedle');
    
    if (needle) {
        // Set CSS custom property for needle rotation
        needle.style.setProperty('--needle-angle', `${angle}deg`);
        needle.style.setProperty('--final-angle', `${angle}deg`);
        
        // Add animation class
        setTimeout(() => {
            needle.classList.add('animate-speedometer');
        }, 500);
    }
}

function animateSpeedometer() {
    const speedometer = document.querySelector('.speedometer');
    if (!speedometer) return;
    
    // Observe when speedometer comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animation when speedometer is visible
                setTimeout(() => {
                    animateNeedle();
                    animateSpeedometerValue();
                }, 300);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(speedometer);
}

function animateNeedle() {
    const needle = document.getElementById('gaugeNeedle');
    const speedometerValue = document.getElementById('speedometerValue');
    
    if (!needle || !speedometerValue) return;
    
    const targetPercentage = parseInt(speedometerValue.textContent);
    const targetAngle = (targetPercentage / 100) * 180;
    
    let currentAngle = 0;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const angleStep = targetAngle / steps;
    const timeStep = duration / steps;
    
    const animateStep = () => {
        if (currentAngle < targetAngle) {
            currentAngle += angleStep;
            needle.style.transform = `translate(-50%, -100%) rotate(${currentAngle}deg)`;
            setTimeout(animateStep, timeStep);
        }
    };
    
    animateStep();
}

function animateSpeedometerValue() {
    const valueElement = document.getElementById('speedometerValue');
    if (!valueElement) return;
    
    const targetValue = parseInt(valueElement.textContent);
    let currentValue = 0;
    const duration = 2500;
    const steps = 100;
    const valueStep = targetValue / steps;
    const timeStep = duration / steps;
    
    // Add performance class based on value
    const performanceClass = targetValue >= 75 ? 'high' : targetValue >= 50 ? 'moderate' : 'low';
    valueElement.classList.add(`performance-${performanceClass}`);
    
    const animateValue = () => {
        if (currentValue < targetValue) {
            currentValue += valueStep;
            const displayValue = Math.round(currentValue);
            valueElement.textContent = `${displayValue}%`;
            valueElement.setAttribute('data-percentage', displayValue);
            
            // Add visual effects based on milestones
            if (displayValue === 25 || displayValue === 50 || displayValue === 75) {
                valueElement.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    valueElement.style.transform = 'scale(1)';
                }, 200);
            }
            
            setTimeout(animateValue, timeStep);
        } else {
            valueElement.textContent = `${targetValue}%`;
            valueElement.setAttribute('data-percentage', targetValue);
            
            // Final celebration effect
            valueElement.style.animation = 'valueGlow 2s ease-in-out infinite alternate';
        }
    };
    
    // Add transition for smooth scaling
    valueElement.style.transition = 'transform 0.2s ease';
    animateValue();
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.source-fill');
    
    // Observe each skill bar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                
                // Reset width and animate
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Navigation functions
function goBack() {
    // Check if there's a previous page in history
    if (document.referrer && document.referrer.includes(window.location.origin)) {
        window.history.back();
    } else {
        // Fallback to college page
        window.location.href = '/clg';
    }
}

// Job action functions
function applyForJob() {
    const jobTitle = document.getElementById('jobTitle').textContent;
    alert(`Application process for ${jobTitle} would be initiated here.`);
    // In a real application, this would redirect to application form
}

function saveJob() {
    const jobTitle = document.getElementById('jobTitle').textContent;
    
    // Get saved jobs from localStorage
    let savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    
    // Check if job is already saved
    const jobExists = savedJobs.some(job => job.title === jobTitle);
    
    if (!jobExists) {
        savedJobs.push({
            title: jobTitle,
            match: document.getElementById('speedometerValue').textContent,
            savedDate: new Date().toISOString()
        });
        
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
        showNotification('Job saved successfully!', 'success');
    } else {
        showNotification('Job is already saved', 'info');
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
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
        font-family: 'Poppins', sans-serif;
    `;
    
    // Set background color based on type
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

// Skill analysis functions
function calculateOverallMatch() {
    const skillMatches = [
        { skill: 'Data Analysis', match: 85, weight: 0.3 },
        { skill: 'Communication', match: 78, weight: 0.25 },
        { skill: 'Project Management', match: 45, weight: 0.2 },
        { skill: 'Team Leadership', match: 25, weight: 0.15 },
        { skill: 'Strategic Planning', match: 30, weight: 0.1 }
    ];
    
    let weightedSum = 0;
    let totalWeight = 0;
    
    skillMatches.forEach(item => {
        weightedSum += item.match * item.weight;
        totalWeight += item.weight;
    });
    
    return Math.round(weightedSum / totalWeight);
}

// Dynamic skill data (this would come from backend in real application)
function loadSkillData(jobTitle) {
    // Mock data structure - in real app this would be an API call
    const skillData = {
        'Human Resources Specialist': {
            requiredSkills: [
                { name: 'Data Analysis', priority: 'high' },
                { name: 'Communication', priority: 'high' },
                { name: 'Project Management', priority: 'medium' },
                { name: 'Team Leadership', priority: 'medium' },
                { name: 'Strategic Planning', priority: 'low' }
            ],
            userSkills: [
                {
                    name: 'Data Analysis',
                    match: 85,
                    sources: {
                        certification: 90,
                        assessment: 75,
                        internship: 80,
                        project: 95
                    }
                },
                {
                    name: 'Communication',
                    match: 78,
                    sources: {
                        certification: 70,
                        assessment: 85,
                        internship: 75,
                        project: 80
                    }
                }
                // ... more skills
            ]
        }
    };
    
    return skillData[jobTitle] || skillData['Human Resources Specialist'];
}

// Event listeners for action buttons
document.addEventListener('DOMContentLoaded', function() {
    const applyBtn = document.querySelector('.btn-primary');
    const saveBtn = document.querySelector('.btn-secondary');
    const backBtn = document.querySelector('.btn-outline');
    
    if (applyBtn) {
        applyBtn.addEventListener('click', applyForJob);
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', saveJob);
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', goBack);
    }
});

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
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
});

// Responsive adjustments
function handleResize() {
    const speedometer = document.querySelector('.speedometer');
    if (speedometer && window.innerWidth < 480) {
        speedometer.style.transform = 'scale(0.8)';
    } else if (speedometer) {
        speedometer.style.transform = 'scale(1)';
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);