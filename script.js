// Simple, robust JavaScript for a professional site

// Initial Hero Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content.fade-up');
        if(heroContent) heroContent.classList.add('visible');
    }, 100);
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if(mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // height of navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = target.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Fade Up Animation using Intersection Observer
const fadeUpElements = document.querySelectorAll('.fade-up:not(.hero-content)');

const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeUpElements.forEach(el => {
    observer.observe(el);
});

// Form Submission Simulation
const form = document.getElementById('reservation-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-submit span');
        const originalText = btn.textContent;
        
        btn.textContent = 'Processing...';
        
        // Simulate network request
        setTimeout(() => {
            btn.textContent = 'Request Sent Successfully!';
            form.querySelector('.btn-submit').style.backgroundColor = '#25D366';
            form.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                form.querySelector('.btn-submit').style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });
}
