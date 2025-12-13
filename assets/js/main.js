// Project data with GitHub links
const projects = [
    {
        title: "KubeFlex: A Carbon-Aware Scheduler with Live Migration",
        pdf: "pdfs/KubeFlex__A_Carbon_Aware_Scheduler_with_Live_Migration.pdf",
        github: "https://github.com/sfarokhi/KubeFlex",
        description: "A carbon-aware Kubernetes scheduler that optimizes workload placement based on renewable energy availability, featuring live migration capabilities."
    },
    {
        title: "Locker: An Oblivious Datastore for Protecting Data Access Patterns",
        pdf: "pdfs/Locker__An_Oblivious_Datastore_for_Protecting_Data_Access_Patterns.pdf",
        github: "https://github.com/sfarokhi/Locker",
        description: "An oblivious datastore system designed to protect data access patterns from potential adversaries through advanced cryptographic techniques."
    },
    {
        title: "Moderation and Misinformation on Social Media",
        pdf: "pdfs/Moderation_and_Misinformation_on_Social_Media.pdf",
        github: "https://github.com/sfarokhi/CSE253",
        description: "Research on automated content moderation systems and techniques for detecting and mitigating misinformation across social media platforms."
    },
    {
        title: "SADE: Safety Aligned Dataset Engine",
        pdf: "pdfs/SADE__Safety_Aligned_Dataset_Engine.pdf",
        github: "https://github.com/flacman/DatasetCreator",
        description: "A dataset engine focused on safety alignment, ensuring AI models are trained on datasets that promote safe and ethical behavior."
    },
    {
        title: "Speedly: Aggregating Traffic Analysis through Stream Processing",
        pdf: "pdfs/Speedly__Aggregating_Traffic_Analysis_through_Stream_Processing.pdf",
        github: "https://github.com/sfarokhi/Speedly",
        description: "A high-performance stream processing system for real-time traffic analysis and aggregation, enabling efficient network monitoring and analytics."
    }
];

// Function to create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <div class="project-preview">
            <iframe src="${project.pdf}#view=FitH" type="application/pdf"></iframe>
        </div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                <a href="${project.pdf}" target="_blank" class="btn btn-primary">View PDF</a>
                <a href="${project.github}" target="_blank" class="btn btn-ghost">GitHub</a>
            </div>
        </div>
    `;
    
    return card;
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (projectsGrid) {
        projects.forEach(project => {
            const card = createProjectCard(project);
            projectsGrid.appendChild(card);
        });
    }
    
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
    
    // Add loading states for iframes
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.3s ease';
    });
});

