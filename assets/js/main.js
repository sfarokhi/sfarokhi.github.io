// Main JavaScript for portfolio site

document.addEventListener('DOMContentLoaded', function() {
    // Add loading states for iframes
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.3s ease';
    });

    // Smooth scroll for sidebar navigation links
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const target = document.querySelector(targetId);
                if (target) {
                    const offset = 80; // Account for any fixed headers
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Highlight active section in sidebar on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar .nav-link');

    function highlightActiveSection() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial call

    // Project card expand/collapse functionality
    const projectCards = document.querySelectorAll('.project-card');
    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';
    document.body.appendChild(overlay);

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (this.classList.contains('expanded')) {
                // Collapse
                this.classList.remove('expanded');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                // Expand
                projectCards.forEach(c => c.classList.remove('expanded'));
                this.classList.add('expanded');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    overlay.addEventListener('click', function() {
        projectCards.forEach(card => card.classList.remove('expanded'));
        this.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            projectCards.forEach(card => card.classList.remove('expanded'));
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
