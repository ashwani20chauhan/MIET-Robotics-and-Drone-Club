// Function for mobile navigation toggle
function navToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Function to handle scroll reveal effects (Animations)
function handleScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100; // Element is visible when it is 100px past the bottom of the viewport

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            // Optional: You can remove the active class here if you want the animation to reset on scroll up
            // reveals[i].classList.remove('active');
        }

        // Add a slight delay for grouped reveals
        const parentGroup = reveals[i].closest('.reveal-group');
        if (parentGroup) {
            const indexInGroup = Array.from(parentGroup.children).indexOf(reveals[i]);
            // Set a custom property for CSS to use as animation delay
            reveals[i].style.setProperty('--delay', `${indexInGroup * 0.1}s`);
        }
    }
}

// Function to set the current year in the footer
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Function to highlight active link in navigation
function setActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop(); // Gets the filename (e.g., index.html)

    document.querySelectorAll('.nav-links a').forEach(link => {
        // Handle home page specifically (index.html or empty path)
        if (link.getAttribute('href') === page || (page === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Optional: Smooth scrolling for local links (e.g., #contact-section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Initialize functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    navToggle();
    setCurrentYear();
    setActiveLink();
    handleScrollReveal(); // Check on load
});

// Check on scroll
window.addEventListener('scroll', handleScrollReveal);