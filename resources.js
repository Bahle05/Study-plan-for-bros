// Study Resources Hub Application
// File management and resource data
const resourceData = {
  files: {
    "IFS233-2025-UNIT6-PS-TM.pptx": {
      title: "IFS233 PowerPoint Presentations",
      description: "Project Schedule & Time Management slides",
      size: "2.5 MB"
    },
    "AON-Tutorial-Tutor-1.pdf": {
      title: "AON Tutorial Materials",
      description: "Activity-on-Node diagrams tutorial",
      size: "1.2 MB"
    },
    "AOA-Tutorial-Tutor-1.pdf": {
      title: "AOA Tutorial Materials",
      description: "Activity-on-Arrow diagrams tutorial",
      size: "1.1 MB"
    },
    "Scope_Statement_Xccelerators_MyFutureUP.pdf": {
      title: "Project Scope Statement",
      description: "Sample scope statement template",
      size: "980 KB"
    },
    "IFS-T4-TEST.pdf": {
      title: "IFS233 Practice Tests",
      description: "Practice test with solutions",
      size: "1.8 MB"
    },
    "Project-tasks.pdf": {
      title: "Project Tasks & Scheduling",
      description: "Activity list and predecessor table",
      size: "1.5 MB"
    }
  },
  
  externalLinks: {
    "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O": "Abdul Bari DSA Playlist",
    "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/": "MIT Algorithms Course",
    "https://www.youtube.com/watch?v=RBSGKlAvoiM": "FreeCodeCamp DSA Course",
    "https://www.youtube.com/user/mycodeschool/playlists": "mycodeschool Channel",
    "https://www.geeksforgeeks.org/fundamentals-of-algorithms/": "GeeksforGeeks Algorithms",
    "https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx": "Paul's Linear Algebra Notes",
    "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/": "MIT Linear Algebra Course",
    "https://www.khanacademy.org/math/linear-algebra": "Khan Academy Linear Algebra",
    "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab": "3Blue1Brown Linear Algebra",
    "http://linear.ups.edu/html/fcla.html": "Free Linear Algebra Textbook"
  }
};

// Application state
let isTransitioning = false;

// DOM elements
let resourceCards = [];
let downloadModal = null;
let modalElements = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize application
function initializeApp() {
  // Get DOM elements
  resourceCards = document.querySelectorAll('.resource-card');
  downloadModal = document.getElementById('downloadModal');
  
  // Modal elements
  modalElements = {
    title: document.getElementById('downloadTitle'),
    message: document.getElementById('downloadMessage'),
    filename: document.getElementById('downloadFilename'),
    description: document.getElementById('downloadDescription'),
    closeBtn: document.getElementById('closeModal'),
    cancelBtn: document.getElementById('cancelDownload'),
    confirmBtn: document.getElementById('confirmDownload')
  };
  
  // Setup interactions
  setupNavigationHandlers();
  setupResourceCardInteractions();
  setupModalHandlers();
  setupKeyboardNavigation();
  setupAccessibilityFeatures();
  
  // Add loading animations
  addPageLoadAnimation();
  
  console.log('Study Resources Hub initialized successfully');
}

// Setup navigation handlers
function setupNavigationHandlers() {
  const backButton = document.getElementById('backToTimetable');
  
  if (backButton) {
    backButton.addEventListener('click', (e) => {
      e.preventDefault();
      handleBackNavigation();
    });
  }
}

// Handle back navigation
function handleBackNavigation() {
  if (isTransitioning) return;
  
  isTransitioning = true;
  
  // Add transition effect
  document.body.style.transition = 'opacity 0.3s ease-out';
  document.body.style.opacity = '0.7';
  
  // Show feedback
  showNotification('Returning to Study Timetable...', 'info');
  
  // Simulate navigation after short delay
  setTimeout(() => {
    // In a real application, this would navigate to the actual timetable
    // For now, we'll show a modal indicating the navigation
    showNavigationModal();
    
    document.body.style.opacity = '1';
    isTransitioning = false;
  }, 800);
}

// Show navigation modal
function showNavigationModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.zIndex = '20000';
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Navigation</h3>
        <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</button>
      </div>
      <div class="modal-body">
        <div style="text-align: center; padding: var(--space-16);">
          <div style="font-size: var(--font-size-4xl); margin-bottom: var(--space-16);">📅</div>
          <h3 style="margin-bottom: var(--space-8); color: var(--color-text);">Ready to Study!</h3>
          <p style="color: var(--color-text-secondary); margin-bottom: var(--space-16);">
            You now have access to all the resources you need. In a real application, this would take you back to your personalized study timetable.
          </p>
          <div style="background: var(--color-bg-1); padding: var(--space-16); border-radius: var(--radius-base); border: 1px solid var(--color-card-border);">
            <strong>Next Steps:</strong><br>
            • Review your study schedule<br>
            • Access the resources you bookmarked<br>
            • Track your progress
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn--primary" onclick="this.parentElement.parentElement.parentElement.remove()">
          Got it!
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Auto-close after 8 seconds
  setTimeout(() => {
    if (modal.parentElement) {
      modal.remove();
    }
  }, 8000);
}

// Setup resource card interactions
function setupResourceCardInteractions() {
  resourceCards.forEach((card, index) => {
    const url = card.dataset.url;
    const file = card.dataset.file;
    const resourceBtn = card.querySelector('.resource-btn');
    
    // Make cards focusable
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    
    // Set aria-label
    const title = card.querySelector('.resource-title')?.textContent || 'Resource';
    const type = card.querySelector('.resource-type')?.textContent || '';
    card.setAttribute('aria-label', `${title} - ${type}`);
    
    // Click handler for entire card
    card.addEventListener('click', (e) => {
      // Don't trigger if clicking on button
      if (e.target.closest('.resource-btn')) return;
      
      if (isTransitioning) return;
      
      if (file) {
        handleDownloadRequest(file, card);
      } else if (url) {
        handleExternalLink(url, card);
      }
    });
    
    // Button click handler
    if (resourceBtn) {
      resourceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (isTransitioning) return;
        
        if (file) {
          handleDownloadRequest(file, card);
        } else if (url) {
          handleExternalLink(url, card);
        }
      });
    }
    
    // Hover effects
    setupCardHoverEffects(card);
  });
}

// Setup card hover effects
function setupCardHoverEffects(card) {
  card.addEventListener('mouseenter', () => {
    if (!isTransitioning) {
      addCardAnimation(card, 'hover');
    }
  });
  
  card.addEventListener('mouseleave', () => {
    if (!isTransitioning) {
      removeCardAnimation(card, 'hover');
    }
  });
  
  card.addEventListener('focus', () => {
    addCardAnimation(card, 'focus');
  });
  
  card.addEventListener('blur', () => {
    removeCardAnimation(card, 'focus');
  });
}

// Add card animation
function addCardAnimation(card, type) {
  if (type === 'hover') {
    card.style.transform = 'translateY(-4px)';
  } else if (type === 'focus') {
    card.style.transform = 'translateY(-2px)';
  }
}

// Remove card animation
function removeCardAnimation(card, type) {
  card.style.transform = '';
}

// Handle external link - FIXED to properly open in new tab
function handleExternalLink(url, card) {
  const linkName = resourceData.externalLinks[url] || 'External Resource';
  
  // Add click feedback
  addClickFeedback(card);
  
  // Show loading state
  showCardLoading(card, true);
  
  // Show notification
  showNotification(`Opening ${linkName}...`, 'info');
  
  // Create a proper link element with target="_blank"
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.style.display = 'none';
  document.body.appendChild(link);
  
  // Open link in new tab after short delay
  setTimeout(() => {
    link.click();
    document.body.removeChild(link);
    showCardLoading(card, false);
    showNotification(`${linkName} opened in new tab`, 'success');
  }, 800);
}

// Handle download request
function handleDownloadRequest(filename, card) {
  if (!resourceData.files[filename]) return;
  
  const fileInfo = resourceData.files[filename];
  
  // Add click feedback
  addClickFeedback(card);
  
  // Show download modal
  showDownloadModal(filename, fileInfo);
}

// Show download modal
function showDownloadModal(filename, fileInfo) {
  if (!downloadModal || !modalElements.title) return;
  
  // Update modal content
  modalElements.title.textContent = 'Download Resource';
  modalElements.message.textContent = 'This educational resource is ready for download.';
  modalElements.filename.textContent = filename;
  modalElements.description.textContent = `${fileInfo.description} (${fileInfo.size})`;
  
  // Update confirm button text
  modalElements.confirmBtn.textContent = 'Download';
  modalElements.confirmBtn.onclick = () => handleDownloadConfirm(filename, fileInfo);
  
  // Show modal
  downloadModal.classList.remove('hidden');
  
  // Focus on confirm button
  setTimeout(() => {
    modalElements.confirmBtn.focus();
  }, 100);
}

// Setup modal handlers
function setupModalHandlers() {
  if (!downloadModal) return;
  
  // Close button
  if (modalElements.closeBtn) {
    modalElements.closeBtn.addEventListener('click', hideDownloadModal);
  }
  
  // Cancel button
  if (modalElements.cancelBtn) {
    modalElements.cancelBtn.addEventListener('click', hideDownloadModal);
  }
  
  // Click outside to close
  downloadModal.addEventListener('click', (e) => {
    if (e.target === downloadModal) {
      hideDownloadModal();
    }
  });
  
  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !downloadModal.classList.contains('hidden')) {
      hideDownloadModal();
    }
  });
}

// Hide download modal
function hideDownloadModal() {
  if (downloadModal) {
    downloadModal.classList.add('hidden');
  }
}

// Handle download confirmation
function handleDownloadConfirm(filename, fileInfo) {
  hideDownloadModal();
  
  // Simulate download process
  showNotification('Preparing download...', 'info');
  
  setTimeout(() => {
    // Create download link
    const link = document.createElement('a');
    link.href = '#'; // In real app, this would be the actual file URL
    link.download = filename;
    
    // Simulate download
    showNotification(`${fileInfo.title} download started!`, 'success');
    
    // Show download success modal
    setTimeout(() => {
      showDownloadSuccessModal(fileInfo);
    }, 1500);
    
  }, 1000);
}

// Show download success modal
function showDownloadSuccessModal(fileInfo) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.zIndex = '15000';
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Download Complete</h3>
        <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</button>
      </div>
      <div class="modal-body">
        <div style="text-align: center; padding: var(--space-16);">
          <div style="font-size: var(--font-size-4xl); margin-bottom: var(--space-16);">✅</div>
          <h3 style="margin-bottom: var(--space-8); color: var(--color-text);">Ready to Study!</h3>
          <p style="color: var(--color-text-secondary); margin-bottom: var(--space-16);">
            <strong>${fileInfo.title}</strong> has been prepared for download.
            In a real application, this file would be saved to your device.
          </p>
          <div style="background: var(--color-bg-3); padding: var(--space-16); border-radius: var(--radius-base); border: 1px solid var(--color-card-border);">
            <strong>Study Tip:</strong><br>
            Review these materials alongside your timetable for maximum effectiveness!
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn--primary" onclick="this.parentElement.parentElement.parentElement.remove()">
          Continue Studying! 📚
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Auto-close after 6 seconds
  setTimeout(() => {
    if (modal.parentElement) {
      modal.remove();
    }
  }, 6000);
}

// Show card loading state
function showCardLoading(card, isLoading) {
  if (isLoading) {
    card.classList.add('loading');
    const btn = card.querySelector('.resource-btn');
    if (btn) {
      btn.textContent = 'Loading...';
    }
  } else {
    card.classList.remove('loading');
    const btn = card.querySelector('.resource-btn');
    if (btn) {
      // Restore original button text based on card type
      if (card.classList.contains('download')) {
        btn.textContent = btn.textContent.includes('Download') ? btn.textContent.replace('Loading...', 'Download') : 'Download';
      } else {
        const originalText = btn.getAttribute('data-original-text') || 'View Resource';
        btn.textContent = originalText;
      }
    }
  }
}

// Add click feedback
function addClickFeedback(card) {
  card.style.transform = 'scale(0.98)';
  setTimeout(() => {
    card.style.transform = '';
  }, 150);
}

// Setup keyboard navigation
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (isTransitioning) return;
    
    const focusedCard = document.activeElement;
    
    if (focusedCard && focusedCard.classList.contains('resource-card')) {
      const currentIndex = Array.from(resourceCards).indexOf(focusedCard);
      
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          focusedCard.click();
          break;
          
        case 'ArrowDown':
          e.preventDefault();
          const nextIndex = Math.min(currentIndex + 1, resourceCards.length - 1);
          resourceCards[nextIndex].focus();
          break;
          
        case 'ArrowUp':
          e.preventDefault();
          const prevIndex = Math.max(currentIndex - 1, 0);
          resourceCards[prevIndex].focus();
          break;
      }
    }
    
    // Quick navigation shortcuts
    if (e.altKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          document.getElementById('backToTimetable')?.click();
          break;
        case 'c':
          e.preventDefault();
          document.querySelector('#computer-science .resource-card')?.focus();
          break;
        case 'm':
          e.preventDefault();
          document.querySelector('#mathematics .resource-card')?.focus();
          break;
        case 'p':
          e.preventDefault();
          document.querySelector('#project-management .resource-card')?.focus();
          break;
      }
    }
  });
}

// Setup accessibility features
function setupAccessibilityFeatures() {
  // Add skip links
  const skipLink = document.createElement('a');
  skipLink.href = '#computer-science';
  skipLink.textContent = 'Skip to resources';
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
  
  // Announce page load
  setTimeout(() => {
    announceToScreenReader('Study Resources Hub loaded. 16 resources available across 3 subjects.');
  }, 1000);
}

// Announce to screen reader
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    announcement.remove();
  }, 1000);
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : 'primary'});
    color: var(--color-btn-primary-text);
    padding: var(--space-12) var(--space-16);
    border-radius: var(--radius-base);
    box-shadow: var(--shadow-lg);
    z-index: 25000;
    font-weight: var(--font-weight-medium);
    max-width: 300px;
    opacity: 0;
    transform: translateX(100%);
    transition: all var(--duration-normal) var(--ease-standard);
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 50);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 300);
  }, 3000);
}

// Add page load animation
function addPageLoadAnimation() {
  const sections = document.querySelectorAll('.subject-section');
  const statsSection = document.querySelector('.stats-section');
  
  // Initial state
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
  });
  
  if (statsSection) {
    statsSection.style.opacity = '0';
    statsSection.style.transform = 'translateY(30px)';
  }
  
  // Animate in
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, (index + 1) * 200);
  });
  
  // Animate stats section
  if (statsSection) {
    setTimeout(() => {
      statsSection.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      statsSection.style.opacity = '1';
      statsSection.style.transform = 'translateY(0)';
    }, (sections.length + 1) * 200);
  }
}

// Store original button texts
document.addEventListener('DOMContentLoaded', () => {
  resourceCards.forEach(card => {
    const btn = card.querySelector('.resource-btn');
    if (btn) {
      btn.setAttribute('data-original-text', btn.textContent);
    }
  });
});

// Export for global access
window.StudyResourcesHub = {
  resourceData,
  handleBackNavigation,
  showNotification,
  isTransitioning: () => isTransitioning
};

console.log('Study Resources Hub - Application loaded successfully');
console.log('Resources available:', Object.keys(resourceData.files).length + ' downloads,', Object.keys(resourceData.externalLinks).length + ' external links');

// Add welcome message
setTimeout(() => {
  showNotification('Welcome to your Study Resources Hub! 📚', 'success');
}, 500);
