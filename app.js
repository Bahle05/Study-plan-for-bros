// Enhanced app.js with welcome section functionality

// User data
const userData = {
  "Raikage": {
    "name": "Raikage",
    "greeting": "Welcome back, Raikage!",
    "message": "Ready to continue your study journey? Let's achieve your academic goals together.",
    "resourceMessage": "Here are your study resources. Choose the materials that best support your learning goals.",
    "avatar": "R",
    "color": "#FF6B6B",
    "description": "The determined achiever",
    "class": "raikage"
  },
  "Stayela": {
    "name": "Stayela", 
    "greeting": "Welcome back, Stayela!",
    "message": "Time to strategize your success! Let's organize your path to academic excellence.",
    "resourceMessage": "Your curated resources await. Select the tools that align with your strategic learning approach.",
    "avatar": "S",
    "color": "#4ECDC4",
    "description": "The strategic planner",
    "class": "stayela"
  },
  "Mozet": {
    "name": "Mozet",
    "greeting": "Welcome back, Mozet!",
    "message": "Focus mode activated! Let's dive deep into your studies with precision and dedication.",
    "resourceMessage": "Access your learning materials below. Each resource is selected to enhance your focused study approach.",
    "avatar": "M", 
    "color": "#45B7D1",
    "description": "The focused learner",
    "class": "mozet"
  }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if we're on the main page or resources page
    const isMainPage = document.getElementById('welcomeSection');
    const isResourcesPage = document.getElementById('welcomeSectionResources');

    if (isMainPage) {
        initializeMainPage();
    }

    if (isResourcesPage) {
        initializeResourcesPage();
    }
}

function initializeMainPage() {
    // Setup avatar selection
    const avatarCards = document.querySelectorAll('.avatar-card');
    const welcomeSection = document.getElementById('welcomeSection');
    const userSelection = document.getElementById('userSelection');
    const heroSection = document.getElementById('heroSection');

    avatarCards.forEach(card => {
        card.addEventListener('click', function() {
            const userName = this.getAttribute('data-user');
            selectUserProfile(userName);
        });

        // Also handle button clicks
        const selectBtn = card.querySelector('.avatar-select-btn');
        selectBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const userName = card.getAttribute('data-user');
            selectUserProfile(userName);
        });
    });

    function selectUserProfile(userName) {
        const user = userData[userName];
        if (!user) return;

        // Update welcome section content
        updateWelcomeSection(user);

        // Show welcome section and hide user selection
        welcomeSection.classList.remove('hidden');
        welcomeSection.classList.add('show');

        // Scroll welcome section into view
        setTimeout(() => {
            welcomeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);

        // Hide user selection section after selection
        setTimeout(() => {
            userSelection.style.display = 'none';
            heroSection.style.display = 'none';
        }, 600);

        // Store selection in localStorage for resources page
        localStorage.setItem('selectedUser', userName);

        // Add success feedback
        showNotification(`Profile selected: ${user.name}`, 'success');
    }

    function updateWelcomeSection(user) {
        const welcomeAvatar = document.getElementById('welcomeAvatar');
        const welcomeAvatarInitial = document.getElementById('welcomeAvatarInitial');
        const welcomeTitle = document.getElementById('welcomeTitle');
        const welcomeMessage = document.getElementById('welcomeMessage');

        // Update avatar
        welcomeAvatar.className = `welcome-avatar ${user.class}`;
        welcomeAvatarInitial.textContent = user.avatar;

        // Update text
        welcomeTitle.textContent = user.greeting;
        welcomeMessage.textContent = user.message;
    }
}

function initializeResourcesPage() {
    // Load selected user from localStorage
    const selectedUser = localStorage.getItem('selectedUser') || 'Raikage';
    const user = userData[selectedUser];

    updateResourcesWelcomeSection(user);

    // Setup resource interactions
    setupResourceCards();
    setupDownloadCards();
}

function updateResourcesWelcomeSection(user) {
    const welcomeAvatar = document.getElementById('welcomeAvatarResources');
    const welcomeAvatarInitial = document.getElementById('welcomeAvatarInitialResources');
    const welcomeTitle = document.getElementById('welcomeTitleResources');
    const welcomeMessage = document.getElementById('welcomeMessageResources');

    // Update avatar
    welcomeAvatar.className = `welcome-avatar-resources ${user.class}`;
    welcomeAvatarInitial.textContent = user.avatar;

    // Update text
    welcomeTitle.textContent = user.greeting;
    welcomeMessage.textContent = user.resourceMessage;
}

function setupResourceCards() {
    const resourceCards = document.querySelectorAll('.resource-card:not(.download-card)');

    resourceCards.forEach(card => {
        const button = card.querySelector('.resource-button');

        if (button) {
            button.addEventListener('click', function(e) {
                const resourceTitle = card.querySelector('h3').textContent;
                showNotification(`Opening: ${resourceTitle}`, 'info');

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
            showNotification(`📄 ${title} - Contact instructor for access`, 'info');
        });
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: var(--space-12) var(--space-20);
        border-radius: var(--radius-base);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-medium);
        max-width: 350px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        line-height: var(--line-height-normal);
    `;

    notification.textContent = message;

    // Add to DOM
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

function getNotificationColor(type) {
    const colors = {
        'info': '#3b82f6',
        'success': '#10b981', 
        'warning': '#f59e0b',
        'error': '#ef4444'
    };
    return colors[type] || colors.info;
}

// Initialize resources page specific functionality
if (document.querySelector('.resources-header')) {
    document.addEventListener('DOMContentLoaded', function() {
        // Setup back navigation
        const backLink = document.querySelector('.back-link');
        if (backLink) {
            backLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'index.html';
            });
        }
    });
}
