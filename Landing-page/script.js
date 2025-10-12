document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu (Hamburger) ---
    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Sticky Header & Scroll to Top Button---
    const header = document.querySelector('.header');
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        // Sticky Header
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        // Scroll to Top Button Visibility
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // --- Scroll Reveal Animations ---
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true
    });

    sr.reveal('.hero-content h1, .section-title', { delay: 200, origin: 'top' });
    sr.reveal('.hero-content p, .about-content', { delay: 300, origin: 'right' });
    sr.reveal('.hero-content .btn-primary, .about-image', { delay: 300, origin: 'left' });
    sr.reveal('.service-box, .destination-card, .testimonial-card, .info-box', { delay: 400, origin: 'bottom', interval: 200 });
    sr.reveal('.cta-content', { delay: 200, origin: 'bottom' });
});