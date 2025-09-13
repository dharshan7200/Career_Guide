// Demo page JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements
    const nameInput = document.getElementById('name');
    const studentPath = document.getElementById('student-path');
    const collegePath = document.getElementById('college-path');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let selectedPath = null;
    
    // Path selection functionality
    studentPath.addEventListener('click', function() {
        selectPath('student');
    });
    
    collegePath.addEventListener('click', function() {
        selectPath('college');
    });
    
    function selectPath(pathType) {
        // Remove previous selection
        document.querySelectorAll('.path-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Add selection to clicked path
        const selectedCard = pathType === 'student' ? studentPath : collegePath;
        selectedCard.classList.add('selected');
        selectedPath = pathType;
        
        // Add ripple effect
        createRippleEffect(selectedCard);
        
        // Enable navigation after selection
        setTimeout(() => {
            navigateToPath(pathType);
        }, 800);
    }
    
    function navigateToPath(pathType) {
        const userName = nameInput.value.trim();
        
        if (!userName) {
            showNotification('Please enter your name first!', 'warning');
            nameInput.focus();
            return;
        }
        
        // Add loading state
        const selectedCard = pathType === 'student' ? studentPath : collegePath;
        selectedCard.style.opacity = '0.7';
        selectedCard.innerHTML += '<div class="loading-spinner-small"></div>';
        
        // Navigate after a short delay for better UX
        setTimeout(() => {
            const encodedName = encodeURIComponent(userName);
            if (pathType === 'student') {
                window.location.href = `/student?name=${encodedName}`;
            } else {
                window.location.href = '/clg';
            }
        }, 1000);
    }
    
    function createRippleEffect(element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 107, 107, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Smooth scrolling for navigation
    function scrollToDetails() {
        document.getElementById('details').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
    
    // Make scrollToDetails globally accessible
    window.scrollToDetails = scrollToDetails;
    
    // Navigation link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scroll to target
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Intersection Observer for scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.feature-card, .showcase-card, .path-card, .stat-item'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Enhanced form validation
    nameInput.addEventListener('input', function() {
        const value = this.value.trim();
        if (value.length > 0) {
            this.classList.add('valid');
        } else {
            this.classList.remove('valid');
        }
        
        // Real-time validation feedback
        if (value.length > 2) {
            this.style.borderColor = 'rgba(78, 205, 196, 0.6)';
        } else if (value.length > 0) {
            this.style.borderColor = 'rgba(255, 193, 7, 0.6)';
        } else {
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && document.activeElement === nameInput) {
            if (selectedPath) {
                navigateToPath(selectedPath);
            } else {
                showNotification('Please select a path first!', 'info');
            }
        }
    });
    
    // Parallax effects
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-shapes, .career-orbit');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Update navigation based on scroll position
        updateNavigation();
    });
    
    function updateNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${id}"]`);
            
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
    
    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.feature-card, .showcase-card, .path-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            
            // Add glow effect
            this.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('selected')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            }
        });
    });
    
    // Notification system
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
            <div class="notification-content">
                <span class="notification-icon">${icons[type] || icons.info}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.95);
            color: #333;
            padding: 16px 20px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 320px;
            font-weight: 500;
        `;
        
        if (type === 'error') {
            notification.style.background = 'rgba(231, 76, 60, 0.95)';
            notification.style.color = 'white';
        } else if (type === 'success') {
            notification.style.background = 'rgba(39, 174, 96, 0.95)';
            notification.style.color = 'white';
        } else if (type === 'warning') {
            notification.style.background = 'rgba(255, 193, 7, 0.95)';
            notification.style.color = '#333';
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
    
    // Make showNotification globally accessible
    window.showNotification = showNotification;
    
    // Enhanced typing effect for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect for hero title after a delay
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 100);
        }
    }, 500);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-icon {
        font-size: 1.2rem;
    }
    
    .loading-spinner-small {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        transform: translate(-50%, -50%);
    }
    
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
    
    .form-input.valid {
        border-color: rgba(78, 205, 196, 0.6);
        box-shadow: 0 0 15px rgba(78, 205, 196, 0.2);
    }
`;

document.head.appendChild(style);