// TARS Study Sync - Enhanced Interactive Study Timetable
// Main application controller with modern collaboration features

class StudyTimetableApp {
    constructor() {
        // Application data from JSON
        this.appData = {
            "app_metadata": {
                "name": "TARS Study Sync",
                "version": "2.0",
                "students": ["Raikage", "Stayela", "Mozet"],
                "theme": "clean_interactive"
            },
            "subjects": {
                "Mat221": {
                    "name": "Linear Algebra",
                    "color": "#ffebee",
                    "accent": "#f44336",
                    "icon": "📘",
                    "progress": 75,
                    "total_sessions": 12,
                    "completed_sessions": 9,
                    "exam_date": "2025-10-07",
                    "resources": [
                        {"type": "video", "title": "Matrix Operations", "url": "https://example.com", "contributor": "Raikage"},
                        {"type": "notes", "title": "Linear Transformations", "url": "https://example.com", "contributor": "Stayela"},
                        {"type": "document", "title": "Eigenvalues Tutorial", "url": "https://example.com", "contributor": "Mozet"}
                    ],
                    "shared_notes": [
                        {"author": "Mozet", "content": "Focus on eigenvalues for exam", "timestamp": "2025-10-01T10:00:00Z"},
                        {"author": "Stayela", "content": "Practice matrix multiplication daily", "timestamp": "2025-10-01T15:30:00Z"}
                    ]
                },
                "IFS233": {
                    "name": "Project Management",
                    "color": "#e0f2f1",
                    "accent": "#00bcd4",
                    "icon": "📊",
                    "progress": 50,
                    "total_sessions": 10,
                    "completed_sessions": 5,
                    "exam_date": "2025-10-12",
                    "assignment_date": "2025-10-14",
                    "resources": [
                        {"type": "document", "title": "PMBOK Guide", "url": "https://example.com", "contributor": "Stayela"},
                        {"type": "video", "title": "Risk Management", "url": "https://example.com", "contributor": "Raikage"},
                        {"type": "notes", "title": "Agile vs Waterfall", "url": "https://example.com", "contributor": "Mozet"}
                    ],
                    "shared_notes": [
                        {"author": "Raikage", "content": "Assignment due Oct 14 - start early!", "timestamp": "2025-10-01T09:00:00Z"},
                        {"author": "Mozet", "content": "Remember to include risk matrix in assignment", "timestamp": "2025-10-02T14:20:00Z"}
                    ]
                },
                "CSC212": {
                    "name": "Computer Science",
                    "color": "#e3f2fd",
                    "accent": "#2196f3",
                    "icon": "💻",
                    "progress": 25,
                    "total_sessions": 8,
                    "completed_sessions": 2,
                    "exam_date": "2025-10-16",
                    "resources": [
                        {"type": "video", "title": "P vs NP Explanation", "url": "https://example.com", "contributor": "Mozet"},
                        {"type": "notes", "title": "Complexity Classes", "url": "https://example.com", "contributor": "Stayela"},
                        {"type": "document", "title": "Algorithm Analysis", "url": "https://example.com", "contributor": "Raikage"}
                    ],
                    "shared_notes": [
                        {"author": "Stayela", "content": "Focus on reduction techniques", "timestamp": "2025-10-02T11:45:00Z"},
                        {"author": "Raikage", "content": "Big O notation is crucial for exam", "timestamp": "2025-10-02T16:30:00Z"}
                    ]
                }
            },
            "weeks": [
                {
                    "number": 1,
                    "dates": "Oct 1-7, 2025",
                    "focus": "Mat221 Intensive",
                    "days": [
                        {
                            "date": "2025-10-01",
                            "day": "Wednesday",
                            "sessions": [
                                {
                                    "time": "08:00-10:00",
                                    "subject": "Mat221",
                                    "activity": "Sets & Functions",
                                    "type": "study",
                                    "completed": false,
                                    "resources": ["Linear Algebra Textbook Ch.1", "Khan Academy Video"],
                                    "notes": "Review basic set theory concepts"
                                },
                                {
                                    "time": "10:30-12:00",
                                    "subject": "Mat221",
                                    "activity": "Practice Problems",
                                    "type": "practice",
                                    "completed": true,
                                    "resources": ["Problem Set 1", "Solution Manual"],
                                    "notes": "Completed exercises 1-15"
                                },
                                {
                                    "time": "14:00-15:30",
                                    "subject": "IFS233",
                                    "activity": "Project Initiation",
                                    "type": "study",
                                    "completed": false,
                                    "resources": ["PMBOK Guide Ch.4"],
                                    "notes": "Learn project charter basics"
                                }
                            ]
                        },
                        {
                            "date": "2025-10-02",
                            "day": "Thursday",
                            "sessions": [
                                {
                                    "time": "09:00-11:00",
                                    "subject": "Mat221",
                                    "activity": "Matrix Operations",
                                    "type": "study",
                                    "completed": false,
                                    "resources": ["Matrix Calculator", "Video Tutorials"],
                                    "notes": "Practice multiplication and determinants"
                                },
                                {
                                    "time": "13:00-14:30",
                                    "subject": "CSC212",
                                    "activity": "Algorithm Complexity",
                                    "type": "study", 
                                    "completed": false,
                                    "resources": ["Big O Cheat Sheet"],
                                    "notes": "Understand time complexity analysis"
                                }
                            ]
                        }
                    ]
                },
                {
                    "number": 2,
                    "dates": "Oct 8-14, 2025",
                    "focus": "IFS233 Preparation",
                    "days": [
                        {
                            "date": "2025-10-10",
                            "day": "Friday",
                            "sessions": [
                                {
                                    "time": "09:00-11:00",
                                    "subject": "IFS233",
                                    "activity": "Risk Management",
                                    "type": "study",
                                    "completed": false,
                                    "resources": ["PMBOK Risk Chapter"],
                                    "notes": "Learn risk identification techniques"
                                }
                            ]
                        }
                    ]
                },
                {
                    "number": 3,
                    "dates": "Oct 15-16, 2025",
                    "focus": "CSC212 Final Push",
                    "days": [
                        {
                            "date": "2025-10-15",
                            "day": "Wednesday",
                            "sessions": [
                                {
                                    "time": "10:00-12:00",
                                    "subject": "CSC212",
                                    "activity": "Final Review",
                                    "type": "review",
                                    "completed": false,
                                    "resources": ["Past Exams"],
                                    "notes": "Comprehensive review session"
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        // Application state
        this.currentUser = 'Raikage';
        this.currentWeek = 0;
        this.currentTheme = 'light';
        this.activeSubjectFilter = null;

        // DOM elements cache
        this.elements = {};
        this.modals = {};

        // Initialize the application
        this.init();
    }

    // Initialize application
    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.initializeTheme();
        this.updateUserInterface();
        this.renderTimetable();
        this.renderCollaborationHub();
        this.updateProgress();
        this.setupKeyboardNavigation();
        this.setupAccessibility();
        this.hideLoadingIndicator();
        
        console.log('TARS Study Sync initialized successfully');
    }

    // Hide loading indicator
    hideLoadingIndicator() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
        }
    }

    // Cache DOM elements for performance
    cacheElements() {
        // Header elements
        this.elements.userAvatar = document.getElementById('userAvatar');
        this.elements.userName = document.getElementById('userName');
        this.elements.switchUserBtn = document.getElementById('switchUserBtn');
        this.elements.themeToggle = document.getElementById('themeToggle');

        // Week navigation
        this.elements.currentWeekLabel = document.getElementById('currentWeekLabel');
        this.elements.currentWeekDates = document.getElementById('currentWeekDates');
        this.elements.prevWeek = document.getElementById('prevWeek');
        this.elements.nextWeek = document.getElementById('nextWeek');

        // Timetable
        this.elements.timetableGrid = document.getElementById('timetableGrid');
        this.elements.progressOverview = document.getElementById('progressOverview');

        // Collaboration
        this.elements.notesList = document.getElementById('notesList');
        this.elements.resourcesList = document.getElementById('resourcesList');
        this.elements.addNoteBtn = document.getElementById('addNoteBtn');
        this.elements.addResourceBtn = document.getElementById('addResourceBtn');

        // Quick actions
        this.elements.exportCalendarBtn = document.getElementById('exportCalendarBtn');
        this.elements.studyStatsBtn = document.getElementById('studyStatsBtn');
        this.elements.examCountdownBtn = document.getElementById('examCountdownBtn');
        this.elements.nextExamCountdown = document.getElementById('nextExamCountdown');

        // Modals
        this.modals.resourceModal = document.getElementById('resourceModal');
        this.modals.userSwitchModal = document.getElementById('userSwitchModal');
        this.modals.addNoteModal = document.getElementById('addNoteModal');

        // Tooltip
        this.elements.tooltip = document.getElementById('tooltip');
        this.elements.tooltipContent = document.getElementById('tooltipContent');
    }

    // Setup event listeners
    setupEventListeners() {
        // Theme toggle
        this.elements.themeToggle?.addEventListener('click', () => this.toggleTheme());

        // User switching
        this.elements.switchUserBtn?.addEventListener('click', () => this.openUserSwitchModal());

        // Week navigation
        this.elements.prevWeek?.addEventListener('click', () => this.navigateWeek(-1));
        this.elements.nextWeek?.addEventListener('click', () => this.navigateWeek(1));

        // Subject legend filtering
        document.querySelectorAll('.legend-item').forEach(item => {
            item.addEventListener('click', (e) => this.toggleSubjectFilter(e.target.dataset.subject));
        });

        // Quick actions
        this.elements.exportCalendarBtn?.addEventListener('click', () => this.exportCalendar());
        this.elements.studyStatsBtn?.addEventListener('click', () => this.showStudyStats());
        this.elements.examCountdownBtn?.addEventListener('click', () => this.showExamDetails());

        // Collaboration
        this.elements.addNoteBtn?.addEventListener('click', () => this.openAddNoteModal());
        this.elements.addResourceBtn?.addEventListener('click', () => this.openAddResourceModal());

        // Modal event listeners
        this.setupModalEventListeners();

        // Form submissions
        this.setupFormSubmissions();
    }

    // Setup modal event listeners
    setupModalEventListeners() {
        // Close modals when clicking overlay or close button
        Object.values(this.modals).forEach(modal => {
            if (!modal) return;

            const overlay = modal.querySelector('.modal-overlay');
            const closeBtn = modal.querySelector('.modal-close');

            overlay?.addEventListener('click', () => this.closeModal(modal));
            closeBtn?.addEventListener('click', () => this.closeModal(modal));
        });

        // User switch modal
        document.querySelectorAll('.user-switch-card').forEach(card => {
            card.addEventListener('click', () => {
                this.switchUser(card.dataset.user);
                this.closeModal(this.modals.userSwitchModal);
            });
        });

        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    // Setup form submissions
    setupFormSubmissions() {
        const addNoteForm = document.getElementById('addNoteForm');
        const cancelNoteBtn = document.getElementById('cancelNoteBtn');

        addNoteForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addSharedNote();
        });

        cancelNoteBtn?.addEventListener('click', () => {
            this.closeModal(this.modals.addNoteModal);
        });
    }

    // Initialize theme
    initializeTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('tars-theme') || (prefersDark ? 'dark' : 'light');
        this.setTheme(savedTheme);
    }

    // Toggle between light and dark theme
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    // Set theme
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-color-scheme', theme);
        localStorage.setItem('tars-theme', theme);
        
        // Update theme toggle icon
        this.updateThemeToggleIcon();
    }

    // Update theme toggle icon
    updateThemeToggleIcon() {
        const lightIcon = this.elements.themeToggle?.querySelector('.light-icon');
        const darkIcon = this.elements.themeToggle?.querySelector('.dark-icon');
        
        if (this.currentTheme === 'dark') {
            lightIcon?.style.setProperty('display', 'block');
            darkIcon?.style.setProperty('display', 'none');
        } else {
            lightIcon?.style.setProperty('display', 'none');
            darkIcon?.style.setProperty('display', 'block');
        }
    }

    // Update user interface
    updateUserInterface() {
        if (this.elements.userName) {
            this.elements.userName.textContent = this.currentUser;
        }

        if (this.elements.userAvatar) {
            this.elements.userAvatar.textContent = this.currentUser[0];
            this.elements.userAvatar.className = `user-avatar ${this.currentUser.toLowerCase()}`;
        }

        this.updateWeekNavigation();
        this.updateNextExamCountdown();
    }

    // Navigate between weeks
    navigateWeek(direction) {
        const newWeek = this.currentWeek + direction;
        const maxWeeks = this.appData.weeks.length - 1;

        if (newWeek >= 0 && newWeek <= maxWeeks) {
            this.currentWeek = newWeek;
            this.updateWeekNavigation();
            this.renderTimetable();
            this.announce(`Switched to Week ${this.currentWeek + 1}`);
        }
    }

    // Update week navigation display
    updateWeekNavigation() {
        const currentWeekData = this.appData.weeks[this.currentWeek];
        
        if (this.elements.currentWeekLabel && currentWeekData) {
            this.elements.currentWeekLabel.textContent = `Week ${currentWeekData.number}`;
        }
        
        if (this.elements.currentWeekDates && currentWeekData) {
            this.elements.currentWeekDates.textContent = currentWeekData.dates;
        }

        // Update navigation button states
        if (this.elements.prevWeek) {
            this.elements.prevWeek.disabled = this.currentWeek === 0;
        }
        
        if (this.elements.nextWeek) {
            this.elements.nextWeek.disabled = this.currentWeek === this.appData.weeks.length - 1;
        }
    }

    // Render timetable grid
    renderTimetable() {
        if (!this.elements.timetableGrid) return;

        const currentWeekData = this.appData.weeks[this.currentWeek];
        let timetableHTML = '';

        if (currentWeekData && currentWeekData.days.length > 0) {
            // Generate time slots (8 AM to 6 PM)
            const timeSlots = [];
            for (let hour = 8; hour <= 18; hour++) {
                timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
            }

            timetableHTML = `
                <div class="time-column">
                    ${timeSlots.map(time => `<div class="time-slot">${time}</div>`).join('')}
                </div>
                <div class="sessions-column">
                    ${this.renderSessions(currentWeekData.days)}
                </div>
            `;
        } else {
            timetableHTML = `
                <div class="empty-timetable" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 400px; text-align: center; color: var(--color-text-secondary);">
                    <div class="empty-icon" style="font-size: 4rem; margin-bottom: 1rem;">📅</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: var(--color-text);">No sessions scheduled</h3>
                    <p style="margin: 0;">This week focuses on ${currentWeekData?.focus || 'preparation'}</p>
                </div>
            `;
        }

        this.elements.timetableGrid.innerHTML = timetableHTML;
        this.attachSessionEventListeners();
    }

    // Render sessions for the timetable
    renderSessions(days) {
        let sessionsHTML = '';

        days.forEach(day => {
            day.sessions.forEach(session => {
                const startTime = parseInt(session.time.split('-')[0].split(':')[0]);
                const duration = this.calculateSessionDuration(session.time);
                const topPosition = (startTime - 8) * 60; // 60px per hour
                const height = Math.max(duration * 60, 50); // Minimum height

                const subjectData = this.appData.subjects[session.subject];
                const isFiltered = this.activeSubjectFilter && this.activeSubjectFilter !== session.subject;

                sessionsHTML += `
                    <div class="session-card ${session.subject.toLowerCase()} ${session.completed ? 'completed' : ''} ${isFiltered ? 'filtered' : ''}" 
                         style="top: ${topPosition}px; height: ${height}px;"
                         data-session='${JSON.stringify(session)}'
                         data-subject="${session.subject}"
                         tabindex="0"
                         role="button"
                         aria-label="Session: ${session.activity} - ${session.time}">
                        <div class="session-header">
                            <span class="session-subject">${subjectData?.icon || '📚'} ${session.subject}</span>
                            <span class="session-time">${session.time}</span>
                        </div>
                        <div class="session-activity">${session.activity}</div>
                        <div class="session-actions">
                            <div class="session-checkbox ${session.completed ? 'checked' : ''}" 
                                 data-session-id="${session.subject}-${session.time}"
                                 role="checkbox"
                                 aria-checked="${session.completed}"
                                 aria-label="Mark as completed"></div>
                            <span class="session-type">${session.type}</span>
                        </div>
                    </div>
                `;
            });
        });

        return sessionsHTML;
    }

    // Calculate session duration in hours
    calculateSessionDuration(timeRange) {
        const [startTime, endTime] = timeRange.split('-');
        const start = this.timeToMinutes(startTime);
        const end = this.timeToMinutes(endTime);
        return Math.max((end - start) / 60, 1); // Minimum 1 hour
    }

    // Convert time string to minutes
    timeToMinutes(timeStr) {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    }

    // Attach event listeners to session cards
    attachSessionEventListeners() {
        const sessionCards = document.querySelectorAll('.session-card');
        
        sessionCards.forEach(card => {
            // Click to open resource panel
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.session-checkbox')) {
                    const subject = card.dataset.subject;
                    this.openResourcePanel(subject);
                }
            });

            // Keyboard navigation
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (!e.target.closest('.session-checkbox')) {
                        const subject = card.dataset.subject;
                        this.openResourcePanel(subject);
                    }
                }
            });

            // Hover tooltip
            card.addEventListener('mouseenter', (e) => this.showTooltip(e, card));
            card.addEventListener('mouseleave', () => this.hideTooltip());

            // Checkbox toggle
            const checkbox = card.querySelector('.session-checkbox');
            checkbox?.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleSessionCompletion(card, checkbox);
            });
        });
    }

    // Toggle session completion
    toggleSessionCompletion(sessionCard, checkbox) {
        const isCompleted = checkbox.classList.contains('checked');
        
        if (isCompleted) {
            checkbox.classList.remove('checked');
            sessionCard.classList.remove('completed');
            checkbox.setAttribute('aria-checked', 'false');
        } else {
            checkbox.classList.add('checked');
            sessionCard.classList.add('completed');
            checkbox.setAttribute('aria-checked', 'true');
            this.createCelebrationEffect(checkbox);
            this.announce('Session marked as completed!');
        }

        this.updateProgress();
        this.saveProgress();
    }

    // Create celebration effect for completed tasks
    createCelebrationEffect(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 6; i++) {
            this.createParticle(centerX, centerY, i);
        }
    }

    // Create individual celebration particle
    createParticle(x, y, index) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: var(--color-success);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${x}px;
            top: ${y}px;
        `;

        document.body.appendChild(particle);

        const angle = (index / 6) * Math.PI * 2;
        const distance = 30 + Math.random() * 20;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;

        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: 0 }
        ], {
            duration: 600,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).addEventListener('finish', () => {
            particle.remove();
        });
    }

    // Show tooltip on hover
    showTooltip(event, sessionCard) {
        if (!this.elements.tooltip || !this.elements.tooltipContent) return;

        try {
            const sessionData = JSON.parse(sessionCard.dataset.session);
            const subjectData = this.appData.subjects[sessionData.subject];

            const tooltipContent = `
                <strong>${subjectData?.icon || '📚'} ${sessionData.subject}</strong><br>
                <strong>Activity:</strong> ${sessionData.activity}<br>
                <strong>Time:</strong> ${sessionData.time}<br>
                <strong>Type:</strong> ${sessionData.type}<br>
                ${sessionData.notes ? `<strong>Notes:</strong> ${sessionData.notes}` : ''}
            `;

            this.elements.tooltipContent.innerHTML = tooltipContent;
            this.elements.tooltip.classList.remove('hidden');

            this.positionTooltip(event);
        } catch (e) {
            console.warn('Error showing tooltip:', e);
        }
    }

    // Position tooltip near cursor
    positionTooltip(event) {
        const tooltip = this.elements.tooltip;
        const offset = 10;

        tooltip.style.left = `${event.pageX + offset}px`;
        tooltip.style.top = `${event.pageY - tooltip.offsetHeight - offset}px`;
    }

    // Hide tooltip
    hideTooltip() {
        if (this.elements.tooltip) {
            this.elements.tooltip.classList.add('hidden');
        }
    }

    // Toggle subject filter
    toggleSubjectFilter(subject) {
        const legendItems = document.querySelectorAll('.legend-item');
        
        if (this.activeSubjectFilter === subject) {
            // Remove filter
            this.activeSubjectFilter = null;
            legendItems.forEach(item => item.classList.remove('active'));
            this.announce('Filter removed');
        } else {
            // Apply filter
            this.activeSubjectFilter = subject;
            legendItems.forEach(item => {
                if (item.dataset.subject === subject) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
            const subjectData = this.appData.subjects[subject];
            this.announce(`Filtering by ${subjectData?.name || subject}`);
        }

        this.renderTimetable();
    }

    // Open resource panel modal
    openResourcePanel(subject) {
        const subjectData = this.appData.subjects[subject];
        if (!subjectData || !this.modals.resourceModal) {
            console.warn('Subject data not found:', subject);
            return;
        }

        const modalTitle = this.modals.resourceModal.querySelector('#resourceModalTitle');
        const modalBody = this.modals.resourceModal.querySelector('#resourceModalBody');

        modalTitle.textContent = `${subjectData.icon} ${subjectData.name} Resources`;

        const resourcesHTML = `
            <div class="resource-panel-content">
                <div class="subject-progress" style="margin-bottom: 2rem; padding: 1rem; background: var(--color-background); border-radius: var(--radius-base);">
                    <h4 style="margin: 0 0 1rem 0; color: var(--color-text);">Progress Overview</h4>
                    <div class="progress-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 1rem;">
                        <div class="stat-item" style="text-align: center;">
                            <span class="stat-value" style="display: block; font-size: 2rem; font-weight: bold; color: var(--color-primary);">${subjectData.progress}%</span>
                            <span class="stat-label" style="font-size: 0.875rem; color: var(--color-text-secondary);">Complete</span>
                        </div>
                        <div class="stat-item" style="text-align: center;">
                            <span class="stat-value" style="display: block; font-size: 2rem; font-weight: bold; color: var(--color-primary);">${subjectData.completed_sessions}/${subjectData.total_sessions}</span>
                            <span class="stat-label" style="font-size: 0.875rem; color: var(--color-text-secondary);">Sessions</span>
                        </div>
                    </div>
                </div>

                <div class="subject-resources" style="margin-bottom: 2rem;">
                    <h4 style="margin: 0 0 1rem 0; color: var(--color-text);">📚 Study Resources</h4>
                    <div class="resources-grid" style="display: grid; gap: 0.75rem;">
                        ${subjectData.resources.map(resource => `
                            <div class="resource-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: var(--color-background); border: 1px solid var(--color-border); border-radius: var(--radius-base);">
                                <div class="resource-icon" style="font-size: 1.5rem;">${this.getResourceIcon(resource.type)}</div>
                                <div class="resource-info" style="flex: 1;">
                                    <h5 style="margin: 0; font-size: 0.875rem; color: var(--color-text);">${resource.title}</h5>
                                    <span class="resource-contributor" style="font-size: 0.75rem; color: var(--color-text-secondary);">by ${resource.contributor}</span>
                                </div>
                                <button class="btn btn--sm btn--outline" onclick="window.open('${resource.url}', '_blank')" style="flex-shrink: 0;">
                                    Open
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="subject-notes" style="margin-bottom: 1.5rem;">
                    <h4 style="margin: 0 0 1rem 0; color: var(--color-text);">📝 Shared Notes</h4>
                    <div class="notes-grid" style="display: grid; gap: 0.75rem;">
                        ${subjectData.shared_notes.map(note => `
                            <div class="note-card" style="padding: 0.75rem; background: var(--color-background); border: 1px solid var(--color-border); border-radius: var(--radius-base);">
                                <div class="note-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <strong style="font-size: 0.875rem; color: var(--color-text);">${note.author}</strong>
                                    <span class="note-date" style="font-size: 0.75rem; color: var(--color-text-secondary);">${new Date(note.timestamp).toLocaleDateString()}</span>
                                </div>
                                <p class="note-content" style="margin: 0; font-size: 0.875rem; color: var(--color-text); line-height: 1.4;">${note.content}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                ${subjectData.exam_date ? `
                    <div class="exam-info" style="padding: 1rem; background: var(--color-bg-4); border-radius: var(--radius-base);">
                        <h4 style="margin: 0 0 0.5rem 0; color: var(--color-text);">⏰ Exam Information</h4>
                        <div class="exam-card" style="display: flex; justify-content: space-between; align-items: center;">
                            <span class="exam-date" style="font-weight: bold; color: var(--color-text);">${new Date(subjectData.exam_date).toLocaleDateString()}</span>
                            <span class="exam-countdown" style="color: var(--color-error); font-weight: bold;">${this.calculateDaysUntil(subjectData.exam_date)} days remaining</span>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        modalBody.innerHTML = resourcesHTML;
        this.openModal(this.modals.resourceModal);
        this.announce(`Opened ${subjectData.name} resource panel`);
    }

    // Get resource icon based on type
    getResourceIcon(type) {
        const icons = {
            video: '🎥',
            notes: '📄',
            document: '📋',
            link: '🔗',
            book: '📚'
        };
        return icons[type] || '📄';
    }

    // Calculate days until a date
    calculateDaysUntil(dateString) {
        const targetDate = new Date(dateString);
        const today = new Date();
        const diffTime = targetDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return Math.max(0, diffDays);
    }

    // Switch user
    switchUser(username) {
        this.currentUser = username;
        this.updateUserInterface();
        this.renderCollaborationHub();
        this.announce(`Switched to ${username}'s profile`);
    }

    // Open user switch modal
    openUserSwitchModal() {
        this.openModal(this.modals.userSwitchModal);
    }

    // Open add note modal
    openAddNoteModal() {
        this.openModal(this.modals.addNoteModal);
    }

    // Open add resource modal (placeholder)
    openAddResourceModal() {
        this.showSuccessMessage('Add Resource feature coming soon!');
    }

    // Add shared note
    addSharedNote() {
        const subjectSelect = document.getElementById('noteSubject');
        const contentTextarea = document.getElementById('noteContent');

        if (!subjectSelect?.value || !contentTextarea?.value.trim()) {
            alert('Please fill in all fields');
            return;
        }

        const newNote = {
            author: this.currentUser,
            content: contentTextarea.value.trim(),
            timestamp: new Date().toISOString()
        };

        // Add to app data
        this.appData.subjects[subjectSelect.value].shared_notes.push(newNote);

        // Reset form
        subjectSelect.value = '';
        contentTextarea.value = '';

        // Update UI
        this.renderCollaborationHub();
        this.closeModal(this.modals.addNoteModal);

        // Show success feedback
        this.showSuccessMessage('Note added successfully!');
        this.announce('New note added to collaboration hub');
    }

    // Render collaboration hub
    renderCollaborationHub() {
        this.renderNotesList();
        this.renderResourcesList();
    }

    // Render notes list
    renderNotesList() {
        if (!this.elements.notesList) return;

        const allNotes = [];
        Object.entries(this.appData.subjects).forEach(([subjectId, subject]) => {
            subject.shared_notes.forEach(note => {
                allNotes.push({...note, subject: subjectId, subjectIcon: subject.icon});
            });
        });

        // Sort by timestamp (newest first)
        allNotes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        const notesHTML = allNotes.map(note => `
            <div class="note-item">
                <div class="note-header">
                    <span class="note-author">${note.subjectIcon} ${note.author}</span>
                    <span class="note-time">${this.formatTimeAgo(note.timestamp)}</span>
                </div>
                <div class="note-content">${note.content}</div>
            </div>
        `).join('');

        this.elements.notesList.innerHTML = notesHTML || '<p class="empty-state" style="color: var(--color-text-secondary); font-style: italic;">No notes yet. Add the first note!</p>';
    }

    // Render resources list
    renderResourcesList() {
        if (!this.elements.resourcesList) return;

        const allResources = [];
        Object.entries(this.appData.subjects).forEach(([subjectId, subject]) => {
            subject.resources.forEach(resource => {
                allResources.push({...resource, subject: subjectId, subjectIcon: subject.icon});
            });
        });

        const resourcesHTML = allResources.map(resource => `
            <div class="resource-item">
                <div class="resource-header">
                    <span class="resource-contributor">${resource.subjectIcon} ${resource.title}</span>
                    <span class="resource-type">${this.getResourceIcon(resource.type)} ${resource.type}</span>
                </div>
                <div class="resource-meta" style="font-size: 0.75rem; color: var(--color-text-secondary); margin-top: 0.25rem;">Added by ${resource.contributor}</div>
            </div>
        `).join('');

        this.elements.resourcesList.innerHTML = resourcesHTML || '<p class="empty-state" style="color: var(--color-text-secondary); font-style: italic;">No resources yet. Add the first resource!</p>';
    }

    // Format time ago
    formatTimeAgo(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInHours = (now - date) / (1000 * 60 * 60);

        if (diffInHours < 1) {
            return 'Just now';
        } else if (diffInHours < 24) {
            return `${Math.floor(diffInHours)}h ago`;
        } else {
            return `${Math.floor(diffInHours / 24)}d ago`;
        }
    }

    // Update progress overview
    updateProgress() {
        Object.entries(this.appData.subjects).forEach(([subjectId, subject]) => {
            const progressCard = document.querySelector(`[data-subject="${subjectId}"] .progress-fill`);
            const progressText = document.querySelector(`[data-subject="${subjectId}"] .progress-text`);
            
            if (progressCard) {
                progressCard.style.width = `${subject.progress}%`;
            }
            
            if (progressText) {
                progressText.textContent = `${subject.progress}% Complete`;
            }
        });
    }

    // Update next exam countdown
    updateNextExamCountdown() {
        if (!this.elements.nextExamCountdown) return;

        const allExams = [];
        Object.entries(this.appData.subjects).forEach(([subjectId, subject]) => {
            if (subject.exam_date) {
                allExams.push({
                    subject: subjectId,
                    date: new Date(subject.exam_date),
                    name: subject.name
                });
            }
        });

        // Sort by date (closest first)
        allExams.sort((a, b) => a.date - b.date);
        
        if (allExams.length > 0) {
            const nextExam = allExams[0];
            const daysUntil = this.calculateDaysUntil(nextExam.date);
            this.elements.nextExamCountdown.textContent = `${daysUntil} days remaining`;
        }
    }

    // Export calendar
    exportCalendar() {
        try {
            const icsContent = this.generateICSContent();
            const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'tars-study-schedule.ics';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            this.showSuccessMessage('Calendar exported successfully!');
            this.announce('Study schedule exported to calendar file');
        } catch (error) {
            console.error('Error exporting calendar:', error);
            this.showSuccessMessage('Export feature is ready! (Demo mode)');
        }
    }

    // Generate ICS content for calendar export
    generateICSContent() {
        let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TARS Study Sync//Study Timetable//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

        this.appData.weeks.forEach(week => {
            week.days?.forEach(day => {
                day.sessions?.forEach(session => {
                    const startDateTime = this.convertToICSDateTime(day.date, session.time.split('-')[0]);
                    const endDateTime = this.convertToICSDateTime(day.date, session.time.split('-')[1]);
                    const subject = this.appData.subjects[session.subject];
                    
                    icsContent += `BEGIN:VEVENT
UID:${session.subject}-${day.date}-${session.time}@tars-study-sync
DTSTART:${startDateTime}
DTEND:${endDateTime}
SUMMARY:${subject?.icon || '📚'} ${session.subject}: ${session.activity}
DESCRIPTION:Type: ${session.type}\\nNotes: ${session.notes || 'No notes'}
LOCATION:Study Location
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
`;
                });
            });
        });

        icsContent += 'END:VCALENDAR';
        return icsContent;
    }

    // Convert to ICS date-time format
    convertToICSDateTime(date, time) {
        const dateObj = new Date(`${date}T${time}:00`);
        return dateObj.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    }

    // Show study stats
    showStudyStats() {
        const totalSessions = Object.values(this.appData.subjects).reduce((sum, subject) => sum + subject.total_sessions, 0);
        const completedSessions = Object.values(this.appData.subjects).reduce((sum, subject) => sum + subject.completed_sessions, 0);
        const overallProgress = Math.round((completedSessions / totalSessions) * 100);

        const statsMessage = `Study Statistics for ${this.currentUser}:
        
Overall Progress: ${overallProgress}%
Completed Sessions: ${completedSessions}/${totalSessions}
        
Subject Breakdown:
${Object.entries(this.appData.subjects).map(([id, subject]) => 
    `• ${subject.name}: ${subject.progress}% (${subject.completed_sessions}/${subject.total_sessions})`
).join('\n')}`;

        alert(statsMessage);
        this.announce('Study statistics displayed');
    }

    // Show exam details
    showExamDetails() {
        const examDetails = Object.entries(this.appData.subjects)
            .filter(([_, subject]) => subject.exam_date)
            .map(([id, subject]) => {
                const daysUntil = this.calculateDaysUntil(subject.exam_date);
                return `${subject.icon} ${subject.name}: ${daysUntil} days (${new Date(subject.exam_date).toLocaleDateString()})`;
            })
            .join('\n');

        alert(`Upcoming Exams:\n\n${examDetails}`);
        this.announce('Exam details displayed');
    }

    // Modal management
    openModal(modal) {
        if (modal) {
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            
            // Focus the first focusable element
            const firstFocusable = modal.querySelector('button, input, select, textarea');
            firstFocusable?.focus();
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    closeAllModals() {
        Object.values(this.modals).forEach(modal => {
            if (modal) {
                this.closeModal(modal);
            }
        });
    }

    // Show success message
    showSuccessMessage(message) {
        // Create toast notification
        const toast = document.createElement('div');
        toast.className = 'toast success';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-success);
            color: var(--color-white);
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 2000;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Quick navigation shortcuts
            if (e.altKey) {
                switch (e.key) {
                    case '1':
                        e.preventDefault();
                        this.switchUser('Raikage');
                        break;
                    case '2':
                        e.preventDefault();
                        this.switchUser('Stayela');
                        break;
                    case '3':
                        e.preventDefault();
                        this.switchUser('Mozet');
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.navigateWeek(-1);
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.navigateWeek(1);
                        break;
                    case 't':
                        e.preventDefault();
                        this.toggleTheme();
                        break;
                }
            }
        });
    }

    // Setup accessibility features
    setupAccessibility() {
        // Add ARIA labels
        this.elements.timetableGrid?.setAttribute('aria-label', 'Weekly study timetable');
        this.elements.progressOverview?.setAttribute('aria-label', 'Subject progress overview');
        
        // Announce dynamic content changes
        this.createLiveRegion();
    }

    // Create live region for announcements
    createLiveRegion() {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
        
        this.liveRegion = liveRegion;
    }

    // Announce to screen readers
    announce(message) {
        if (this.liveRegion) {
            this.liveRegion.textContent = message;
        }
    }

    // Save progress to local storage
    saveProgress() {
        try {
            localStorage.setItem('tars-progress', JSON.stringify(this.appData));
        } catch (e) {
            console.warn('Could not save progress to localStorage:', e);
        }
    }

    // Load progress from local storage
    loadProgress() {
        try {
            const saved = localStorage.getItem('tars-progress');
            if (saved) {
                this.appData = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Could not load progress from localStorage:', e);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.studyApp = new StudyTimetableApp();
});

// Export for global access
window.StudyTimetableApp = StudyTimetableApp;

console.log('TARS Study Sync - Interactive Study Timetable loaded successfully');
