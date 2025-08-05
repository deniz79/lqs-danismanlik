// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Lütfen tüm alanları doldurun.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Notification system
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Animate elements on scroll
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
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .stat, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// CTA button click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Add loading animation to service cards
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    });
});

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to floating cards
document.addEventListener('DOMContentLoaded', () => {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.1)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

// Language switcher functionality
let currentLanguage = 'tr';

function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-tr], [data-en]');
    console.log('Found elements to update:', elements.length);
    
    elements.forEach(element => {
        const newText = element.getAttribute(`data-${lang}`);
        if (newText) {
            element.textContent = newText;
        }
    });
    
    // Update placeholders
    const placeholders = document.querySelectorAll('[data-tr-placeholder], [data-en-placeholder]');
    placeholders.forEach(element => {
        const newPlaceholder = element.getAttribute(`data-${lang}-placeholder`);
        if (newPlaceholder) {
            element.placeholder = newPlaceholder;
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    currentLanguage = lang;
    console.log('Language changed to:', lang);
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
    console.log('Language switcher initialized');
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Floating card movement and collision system
class FloatingCard {
    constructor(element) {
        this.element = element;
        this.position = element.getAttribute('data-position');
        
        // Get initial position from CSS
        const rect = element.getBoundingClientRect();
        this.x = rect.left;
        this.y = rect.top;
        
        // Set random velocity based on position
        this.vx = this.getRandomVelocity();
        this.vy = this.getRandomVelocity();
        
        this.width = 160;
        this.height = 160;
        
        // Set bounds based on screen size
        this.bounds = {
            minX: 50,
            maxX: window.innerWidth - this.width - 50,
            minY: 100,
            maxY: window.innerHeight * 0.7 - this.height
        };
        
        // Start animation after a delay
        setTimeout(() => {
            this.startMoving();
        }, Math.random() * 2000);
    }
    
    getRandomVelocity() {
        return (Math.random() - 0.5) * 0.8; // Slower movement
    }
    
    startMoving() {
        this.isMoving = true;
    }
    
    updatePosition() {
        if (!this.isMoving) return;
        
        // Update position based on velocity
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off boundaries
        if (this.x <= this.bounds.minX || this.x >= this.bounds.maxX) {
            this.vx = -this.vx * 0.9; // Reduce velocity slightly
            this.x = Math.max(this.bounds.minX, Math.min(this.bounds.maxX, this.x));
        }
        
        if (this.y <= this.bounds.minY || this.y >= this.bounds.maxY) {
            this.vy = -this.vy * 0.9; // Reduce velocity slightly
            this.y = Math.max(this.bounds.minY, Math.min(this.bounds.maxY, this.y));
        }
        
        // Apply position to element
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.element.style.transform = 'none'; // Remove CSS transforms
    }
    
    getBounds() {
        return {
            left: this.x,
            right: this.x + this.width,
            top: this.y,
            bottom: this.y + this.height
        };
    }
}

// Initialize floating cards
let floatingCards = [];

function initFloatingCards() {
    const cards = document.querySelectorAll('.floating-card');
    floatingCards = Array.from(cards).map(card => new FloatingCard(card));
    console.log('Floating cards initialized:', floatingCards.length);
}

// Animation loop
function animateCards() {
    floatingCards.forEach(card => {
        card.updatePosition();
    });
    
    // Check for collisions
    checkCollisions();
    
    requestAnimationFrame(animateCards);
}

// Enhanced collision detection
function checkCollisions() {
    for (let i = 0; i < floatingCards.length; i++) {
        for (let j = i + 1; j < floatingCards.length; j++) {
            const card1 = floatingCards[i];
            const card2 = floatingCards[j];
            const bounds1 = card1.getBounds();
            const bounds2 = card2.getBounds();
            
            // Check collision with tolerance
            const tolerance = 25;
            if (bounds1.left < bounds2.right - tolerance && 
                bounds1.right > bounds2.left + tolerance && 
                bounds1.top < bounds2.bottom - tolerance && 
                bounds1.bottom > bounds2.top + tolerance) {
                
                // Collision detected - reverse velocities
                card1.vx = -card1.vx * 1.3;
                card1.vy = -card1.vy * 1.3;
                card2.vx = -card2.vx * 1.3;
                card2.vy = -card2.vy * 1.3;
                
                // Add visual collision effect
                card1.element.classList.add('collision');
                card2.element.classList.add('collision');
                
                // Add strong glow effect
                card1.element.style.boxShadow = '0 0 60px rgba(255, 255, 255, 1)';
                card2.element.style.boxShadow = '0 0 60px rgba(255, 255, 255, 1)';
                
                // Add temporary background change
                card1.element.style.background = 'rgba(255, 255, 255, 0.5)';
                card2.element.style.background = 'rgba(255, 255, 255, 0.5)';
                
                // Add scale effect
                card1.element.style.transform = 'scale(1.3)';
                card2.element.style.transform = 'scale(1.3)';
                
                // Remove effects after animation
                setTimeout(() => {
                    card1.element.classList.remove('collision');
                    card2.element.classList.remove('collision');
                    card1.element.style.boxShadow = '';
                    card2.element.style.boxShadow = '';
                    card1.element.style.background = '';
                    card2.element.style.background = '';
                    card1.element.style.transform = '';
                    card2.element.style.transform = '';
                }, 1200);
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initFloatingCards();
        animateCards();
    }, 1000); // Wait for CSS to apply
});

// Handle window resize
window.addEventListener('resize', () => {
    floatingCards.forEach(card => {
        card.bounds = {
            minX: 50,
            maxX: window.innerWidth - card.width - 50,
            minY: 100,
            maxY: window.innerHeight * 0.7 - card.height
        };
    });
}); 