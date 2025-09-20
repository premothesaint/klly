document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section-title, .detail-card, .experience-card, .timeline-item, .skill-badge, .contact-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animate-in');
            }
        });
    };
    
    // Add animation classes to elements
    const addAnimationClasses = function() {
        const elements = document.querySelectorAll('.section-title, .detail-card, .experience-card, .timeline-item, .skill-badge, .contact-item');
        
        elements.forEach(element => {
            element.classList.add('animate-ready');
        });
    };
    
    // Add CSS for animations
    const addAnimationStyles = function() {
        const style = document.createElement('style');
        style.textContent = `
            .animate-ready {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .detail-card, .experience-card, .timeline-item, .skill-badge, .contact-item {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .hero-content {
                animation: fadeIn 1s ease forwards;
            }
            
            .hero-text h1 {
                animation: fadeIn 1s ease 0.3s forwards;
                opacity: 0;
            }
            
            .tagline {
                animation: fadeIn 1s ease 0.6s forwards;
                opacity: 0;
            }
            
            .hero-buttons {
                animation: fadeIn 1s ease 0.9s forwards;
                opacity: 0;
            }
        `;
        document.head.appendChild(style);
    };
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Initialize animations
    addAnimationStyles();
    addAnimationClasses();
    animateOnScroll();
    
    // Continue to check for elements to animate as user scrolls
    window.addEventListener('scroll', animateOnScroll);
});