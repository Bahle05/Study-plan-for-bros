// Resources Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeResourcesPage();
});

function initializeResourcesPage() {
    setupResourceCards();
    setupDownloadCards();
    setupExternalLinks();
    
    console.log('Resources Hub initialized successfully');
}

function setupResourceCards() {
    const resourceCards = document.querySelectorAll('.resource-card:not(.download-card)');
    
    resourceCards.forEach(card => {
        const button = card.querySelector('.resource-button');
        
        if (button) {
            button.addEventListener('click', function(e) {
                // Track resource access
                const resourceTitle = card.querySelector('h3').textContent;
                console.log(`Opening resource: ${resourceTitle}`);
                
                // Add click effect
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 150);
            });
        }
    });
}

function setupDownloadCards() {
    const downloadCards = document.querySelectorAll('.download-card');
    
    downloadCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = card.querySelector('h3').textContent;
            showDownloadMessage(title);
        });
    });
}

function showDownloadMessage(title) {
    // Create notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-primary);
        color: var(--color-btn-primary-text);
        padding: var(--space-12) var(--space-20);
        border-radius: var(--radius-base);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-medium);
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = `📄 ${title} - Contact instructor for access`;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function setupExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            const resourceTitle = this.closest('.resource-card').querySelector('h3').textContent;
            console.log(`Opening external resource: ${resourceTitle}`);
        });
    });
}
