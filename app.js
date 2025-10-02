// User data from application data
const userData = {
  "Raikage": {
    "name": "Raikage",
    "greeting": "Welcome back Raikage, Keep pushing!",
    "avatar": "avatar1",
    "color": "#FF6B6B",
    "description": "The determined achiever"
  },
  "Stayela": {
    "name": "Stayela", 
    "greeting": "Welcome back Stayela, Keep pushing!",
    "avatar": "avatar2",
    "color": "#4ECDC4",
    "description": "The strategic planner"
  },
  "Mozet": {
    "name": "Mozet",
    "greeting": "Welcome back Mozet, Keep pushing!",
    "avatar": "avatar3", 
    "color": "#45B7D1",
    "description": "The focused learner"
  }
};

// Timetable data for preview
const timetableData = {
  weeks: [
    {
      week_number: 1,
      dates: "Oct 1-7, 2025",
      today: "Mat221: Sets & Functions",
      summary: "6 study sessions, 2 practice sessions"
    },
    {
      week_number: 2,
      dates: "Oct 8-14, 2025",
      today: "IFS233: PMBOK Knowledge Areas",
      summary: "5 study sessions, 3 tutorials"
    },
    {
      week_number: 3,
      dates: "Oct 15-16, 2025",
      today: "CSC212: Advanced NP",
      summary: "2 study sessions, 1 exam"
    }
  ]
};

// Application state
let selectedUser = null;
let currentWeek = 0;
let isTransitioning = false;

// DOM elements
let avatarCards = [];
let personalizedWelcome = null;
let timetablePreview = null;
let userSelection = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize application
function initializeApp() {
  // Get DOM elements
  avatarCards = document.querySelectorAll('.avatar-card');
  personalizedWelcome = document.getElementById('personalizedWelcome');
  timetablePreview = document.getElementById('timetablePreview');
  userSelection = document.querySelector('.user-selection');
  
  // Setup interactions
  setupAvatarInteractions();
  setupDashboardActions();
  setupTimetableNavigation();
  setupKeyboardNavigation();
  setupAccessibility();
  
  // Add welcome animation
  addWelcomeAnimation();
  
  console.log('Study Dashboard 2025 initialized successfully');
}

// Setup avatar card interactions
function setupAvatarInteractions() {
  avatarCards.forEach((card, index) => {
    const userName = card.dataset.user;
    const selectBtn = card.querySelector('.avatar-select-btn');
    
    // Click handler for entire card
    card.addEventListener('click', (e) => {
      if (isTransitioning) return;
      selectUser(userName, card);
    });
    
    // Separate click handler for button
    selectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isTransitioning) return;
      selectUser(userName, card);
    });
    
    // Hover effects
    card.addEventListener('mouseenter', () => {
      if (!isTransitioning && selectedUser !== userName) {
        addHoverEffect(card);
      }
    });
    
    card.addEventListener('mouseleave', () => {
      if (!isTransitioning && selectedUser !== userName) {
        removeHoverEffect(card);
      }
    });
    
    // Make cards focusable
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Select ${userName} profile - ${userData[userName].description}`);
  });
}

// Setup dashboard action buttons
function setupDashboardActions() {
  const viewTimetableBtn = document.getElementById('viewTimetableBtn');
  const changeProfileBtn = document.getElementById('changeProfileBtn');
  const openFullTimetable = document.getElementById('openFullTimetable');
  
  if (viewTimetableBtn) {
    viewTimetableBtn.addEventListener('click', () => {
      showTimetablePreview();
    });
  }
  
  if (changeProfileBtn) {
    changeProfileBtn.addEventListener('click', () => {
      resetToProfileSelection();
    });
  }
  
  if (openFullTimetable) {
    openFullTimetable.addEventListener('click', () => {
      showFullTimetable();
    });
  }
}

// Setup timetable navigation
function setupTimetableNavigation() {
  const prevWeekBtn = document.getElementById('prevWeek');
  const nextWeekBtn = document.getElementById('nextWeek');
  
  if (prevWeekBtn) {
    prevWeekBtn.addEventListener('click', () => {
      if (currentWeek > 0) {
        currentWeek--;
        updateTimetableDisplay();
      }
    });
  }
  
  if (nextWeekBtn) {
    nextWeekBtn.addEventListener('click', () => {
      if (currentWeek < timetableData.weeks.length - 1) {
        currentWeek++;
        updateTimetableDisplay();
      }
    });
  }
}

// Select user and show personalized content
function selectUser(userName, cardElement) {
  if (isTransitioning || !userData[userName]) return;
  
  isTransitioning = true;
  selectedUser = userName;
  
  // Show selection feedback
  showSelectionFeedback(cardElement, userName);
  
  // Show personalized welcome after animation
  setTimeout(() => {
    showPersonalizedWelcome(userData[userName]);
  }, 1500);
}

// Show selection feedback
function showSelectionFeedback(cardElement, userName) {
  // Update all cards
  avatarCards.forEach(card => {
    if (card === cardElement) {
      card.classList.add('selected');
      const btn = card.querySelector('.avatar-select-btn');
      btn.textContent = 'Selected!';
    } else {
      card.classList.add('loading');
      const btn = card.querySelector('.avatar-select-btn');
      btn.textContent = 'Loading...';
    }
  });
  
  // Add celebration effect
  createCelebrationEffect(cardElement);
  
  // Add scale animation
  cardElement.style.transform = 'scale(1.05)';
  setTimeout(() => {
    cardElement.style.transform = '';
  }, 500);
}

// Create celebration effect
function createCelebrationEffect(cardElement) {
  const rect = cardElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Create particles
  for (let i = 0; i < 12; i++) {
    createParticle(centerX, centerY, i);
  }
}

// Create individual particle
function createParticle(x, y, index) {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: var(--color-primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1000;
    left: ${x}px;
    top: ${y}px;
    opacity: 1;
    transform: scale(1);
  `;
  
  document.body.appendChild(particle);
  
  const angle = (index / 12) * Math.PI * 2;
  const distance = 60 + Math.random() * 40;
  const endX = x + Math.cos(angle) * distance;
  const endY = y + Math.sin(angle) * distance;
  
  particle.animate([
    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
    { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: 0 }
  ], {
    duration: 800,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }).addEventListener('finish', () => {
    particle.remove();
  });
}

// Show personalized welcome
function showPersonalizedWelcome(user) {
  const greetingElement = document.getElementById('personalizedGreeting');
  
  if (greetingElement) {
    greetingElement.textContent = user.greeting;
  }
  
  // Hide user selection and show welcome
  if (userSelection) {
    userSelection.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    userSelection.style.opacity = '0';
    userSelection.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      userSelection.classList.add('hidden');
      
      if (personalizedWelcome) {
        personalizedWelcome.classList.remove('hidden');
        personalizedWelcome.style.opacity = '0';
        personalizedWelcome.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          personalizedWelcome.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
          personalizedWelcome.style.opacity = '1';
          personalizedWelcome.style.transform = 'translateY(0)';
          isTransitioning = false;
        }, 50);
      } else {
        isTransitioning = false;
      }
    }, 500);
  } else {
    isTransitioning = false;
  }
}

// Show timetable preview
function showTimetablePreview() {
  if (!timetablePreview) return;
  
  updateTimetableDisplay();
  
  timetablePreview.classList.remove('hidden');
  timetablePreview.style.opacity = '0';
  timetablePreview.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    timetablePreview.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    timetablePreview.style.opacity = '1';
    timetablePreview.style.transform = 'translateY(0)';
  }, 50);
  
  // Scroll to timetable
  setTimeout(() => {
    timetablePreview.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 400);
}

// Update timetable display
function updateTimetableDisplay() {
  const currentWeekDisplay = document.getElementById('currentWeekDisplay');
  const todaysFocus = document.getElementById('todaysFocus');
  const prevWeekBtn = document.getElementById('prevWeek');
  const nextWeekBtn = document.getElementById('nextWeek');
  
  const weekData = timetableData.weeks[currentWeek];
  
  if (currentWeekDisplay && weekData) {
    currentWeekDisplay.textContent = `Week ${weekData.week_number} (${weekData.dates})`;
  }
  
  if (todaysFocus && weekData) {
    todaysFocus.textContent = weekData.today;
  }
  
  // Update navigation buttons
  if (prevWeekBtn) {
    prevWeekBtn.disabled = currentWeek === 0;
    prevWeekBtn.style.opacity = currentWeek === 0 ? '0.5' : '1';
  }
  
  if (nextWeekBtn) {
    nextWeekBtn.disabled = currentWeek === timetableData.weeks.length - 1;
    nextWeekBtn.style.opacity = currentWeek === timetableData.weeks.length - 1 ? '0.5' : '1';
  }
}

// Show full timetable (simulate opening full view)
function showFullTimetable() {
  // Create full timetable modal/overlay
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    padding: var(--space-20);
  `;
  
  const content = document.createElement('div');
  content.style.cssText = `
    background: var(--color-surface);
    border-radius: var(--radius-lg);
    padding: var(--space-32);
    max-width: 800px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    text-align: center;
  `;
  
  content.innerHTML = `
    <h2 style="margin: 0 0 var(--space-16) 0; color: var(--color-text-dark);">Full Study Timetable</h2>
    <p style="margin: 0 0 var(--space-24) 0; color: var(--color-slate-500);">
      Your complete 16-day study schedule with ${selectedUser}'s personalized greeting: 
      <strong>"${userData[selectedUser]?.greeting}"</strong>
    </p>
    <div style="margin-bottom: var(--space-24);">
      <div style="background: var(--color-bg-1); padding: var(--space-16); border-radius: var(--radius-base); margin-bottom: var(--space-16);">
        <strong>Week 1 (Oct 1-7):</strong> Mat221 Linear Algebra Focus
      </div>
      <div style="background: var(--color-bg-2); padding: var(--space-16); border-radius: var(--radius-base); margin-bottom: var(--space-16);">
        <strong>Week 2 (Oct 8-14):</strong> IFS233 Project Management & CSC212 Introduction
      </div>
      <div style="background: var(--color-bg-3); padding: var(--space-16); border-radius: var(--radius-base);">
        <strong>Week 3 (Oct 15-16):</strong> Final CSC212 Preparation & Exams
      </div>
    </div>
    <button class="btn btn--primary" onclick="this.parentElement.parentElement.remove()">
      Continue Studying, ${selectedUser}! 📚
    </button>
  `;
  
  modal.appendChild(content);
  document.body.appendChild(modal);
  
  // Add click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  // Add escape key to close
  const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', closeOnEscape);
    }
  };
  document.addEventListener('keydown', closeOnEscape);
}

// Reset to profile selection
function resetToProfileSelection() {
  isTransitioning = true;
  
  // Hide personalized sections
  if (personalizedWelcome) {
    personalizedWelcome.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    personalizedWelcome.style.opacity = '0';
    personalizedWelcome.style.transform = 'translateY(20px)';
  }
  
  if (timetablePreview) {
    timetablePreview.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    timetablePreview.style.opacity = '0';
    timetablePreview.style.transform = 'translateY(20px)';
  }
  
  setTimeout(() => {
    // Hide sections
    if (personalizedWelcome) personalizedWelcome.classList.add('hidden');
    if (timetablePreview) timetablePreview.classList.add('hidden');
    
    // Reset avatar cards
    avatarCards.forEach(card => {
      card.classList.remove('selected', 'loading');
      const btn = card.querySelector('.avatar-select-btn');
      btn.textContent = 'Select Profile';
    });
    
    // Show user selection
    if (userSelection) {
      userSelection.classList.remove('hidden');
      userSelection.style.opacity = '0';
      userSelection.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        userSelection.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        userSelection.style.opacity = '1';
        userSelection.style.transform = 'translateY(0)';
      }, 50);
    }
    
    // Reset state
    selectedUser = null;
    currentWeek = 0;
    isTransitioning = false;
  }, 500);
}

// Hover effects
function addHoverEffect(card) {
  card.style.transform = 'translateY(-2px) scale(1.02)';
}

function removeHoverEffect(card) {
  card.style.transform = '';
}

// Setup keyboard navigation
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (isTransitioning) return;
    
    const focusedCard = document.activeElement;
    
    if (focusedCard && focusedCard.classList.contains('avatar-card')) {
      const currentIndex = Array.from(avatarCards).indexOf(focusedCard);
      
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          const userName = focusedCard.dataset.user;
          selectUser(userName, focusedCard);
          break;
          
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : avatarCards.length - 1;
          avatarCards[prevIndex].focus();
          break;
          
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          const nextIndex = currentIndex < avatarCards.length - 1 ? currentIndex + 1 : 0;
          avatarCards[nextIndex].focus();
          break;
      }
    }
    
    // Quick selection shortcuts
    if (!selectedUser) {
      if (e.key === '1') {
        selectUser('Raikage', avatarCards[0]);
      } else if (e.key === '2') {
        selectUser('Stayela', avatarCards[1]);
      } else if (e.key === '3') {
        selectUser('Mozet', avatarCards[2]);
      }
    }
  });
}

// Setup accessibility features
function setupAccessibility() {
  // Add skip link
  const skipLink = document.createElement('a');
  skipLink.href = '#user-selection';
  skipLink.textContent = 'Skip to profile selection';
  skipLink.className = 'sr-only';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    padding: 8px;
    border-radius: 4px;
    text-decoration: none;
    z-index: 1000;
    transition: top 0.2s;
  `;
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add ID to user selection
  if (userSelection) {
    userSelection.id = 'user-selection';
  }
}

// Add welcome animation
function addWelcomeAnimation() {
  const sections = document.querySelectorAll('.welcome-section, .user-selection, .preview-section');
  
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, index * 200 + 100);
  });
}

// Export for global access
window.StudyDashboard = {
  userData,
  selectUser,
  resetToProfileSelection,
  selectedUser: () => selectedUser
};

console.log('Study Dashboard 2025 - Homepage loaded successfully');