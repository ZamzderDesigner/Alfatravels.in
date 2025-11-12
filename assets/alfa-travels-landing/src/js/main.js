// This is the main JavaScript file for the landing page, handling interactivity and dynamic content.

// Function to initialize the landing page
function initLandingPage() {
    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a.smoth-scroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Preloader functionality
    const preloader = document.querySelector('.preloader-area');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Add any additional interactivity or dynamic content here
}

// Call the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initLandingPage);