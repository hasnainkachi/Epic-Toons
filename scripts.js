function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Your message has been sent!");
        });
    }

    // Show home section by default
    showSection('home');

    // Header scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Scroll down
            document.querySelector('header').classList.add('scrolled');
        } else {
            // Scroll up
            document.querySelector('header').classList.remove('scrolled');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
