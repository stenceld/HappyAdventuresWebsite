// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth reveal animations on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .why-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    const action = contactForm.getAttribute('action');
    if (action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        const name = contactForm.querySelector('input[name="name"]').value;
        const subject = encodeURIComponent('New Trip Inquiry from ' + name);
        const body = encodeURIComponent(
            'Name: ' + name + '\n' +
            'Email: ' + contactForm.querySelector('input[name="email"]').value + '\n' +
            'Phone: ' + contactForm.querySelector('input[name="phone"]').value + '\n' +
            'Interest: ' + contactForm.querySelector('select[name="interest"]').value + '\n\n' +
            contactForm.querySelector('textarea[name="message"]').value
        );
        window.location.href = 'mailto:Alexandra@SashasHappyAdventures.com?subject=' + subject + '&body=' + body;
    }
});
