/**
 * TRILHA DE APRENDIZAGEM GAMIFICADA - JORNADA DO CAMPEÃO
 * MAIN APPLICATION LOGIC
 * Auto Arremate & Arremaq
 */

// ======================
// CORE APPLICATION CLASS
// ======================
class JornadaCampeaoApp {
    constructor() {
        this.currentSection = 'capa';
        this.userProgress = this.loadUserProgress();
        this.isLoading = true;
        this.mentorActive = false;
        
        // Initialize application
        this.init();
    }

    async init() {
        console.log('🚀 Iniciando Jornada do Campeão...');
        
        // Wait for DOM and external dependencies
        await this.waitForDependencies();
        
        // Initialize core systems
        this.initializeEventListeners();
        this.initializeGameEngine();
        this.initializeUIComponents();
        this.initializeAccessibility();
        
        // Start loading sequence
        await this.startLoadingSequence();
        
        // Initialize AOS animations
        if (window.AOS) {
            AOS.init({
                duration: 800,
                once: false,
                offset: 100,
                easing: 'ease-out-cubic'
            });
        }
        
        console.log('✅ Aplicação inicializada com sucesso!');
    }

    async waitForDependencies() {
        return new Promise(resolve => {
            const checkDependencies = () => {
                if (window.ContentManager && document.readyState === 'complete') {
                    resolve();
                } else {
                    setTimeout(checkDependencies, 100);
                }
            };
            checkDependencies();
        });
    }

    async startLoadingSequence() {
        const loadingScreen = document.getElementById('loadingScreen');
        const progressFill = document.getElementById('progressFill');
        const loadingText = document.getElementById('loadingText');
        
        const loadingSteps = [
            { progress: 20, text: 'Carregando motores de gamificação...' },
            { progress: 40, text: 'Sincronizando dados de progresso...' },
            { progress: 60, text: 'Preparando conteúdo interativo...' },
            { progress: 80, text: 'Ativando sistemas de IA...' },
            { progress: 100, text: 'Pronto para acelerar!' }
        ];

        for (const step of loadingSteps) {
            progressFill.style.width = `${step.progress}%`;
            loadingText.textContent = step.text;
            await this.delay(800);
        }

        await this.delay(500);
        
        // Hide loading screen
        loadingScreen.classList.add('hidden');
        this.isLoading = false;
        
        // Initialize first section
        this.initializeCapaSection();
        
        // Check if user has progress to continue
        if (this.userProgress.totalXP > 0) {
            this.showContinueOption();
        }
    }

    initializeEventListeners() {
        // Navigation events
        document.addEventListener('click', this.handleGlobalClick.bind(this));
        document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
        
        // Window events
        window.addEventListener('resize', this.handleResize.bind(this));
        window.addEventListener('beforeunload', this.saveUserProgress.bind(this));
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', this.toggleTheme.bind(this));
        }

        // Brand logo click
        const brandLogo = document.getElementById('brandLogo');
        if (brandLogo) {
            brandLogo.addEventListener('click', () => this.navigateToSection('capa'));
        }

        // Floating action buttons
        this.initializeFloatingButtons();
    }

    initializeFloatingButtons() {
        // Accessibility button
        const accessibilityBtn = document.getElementById('accessibilityBtn');
        if (accessibilityBtn) {
            accessibilityBtn.addEventListener('click', this.toggleAccessibilityPanel.bind(this));
        }

        // Help button
        const helpBtn = document.getElementById('helpBtn');
        if (helpBtn) {
            helpBtn.addEventListener('click', this.showHelp.bind(this));
        }

        // Mentor button
        const mentorBtn = document.getElementById('mentorBtn');
        if (mentorBtn) {
            mentorBtn.addEventListener('click', this.toggleMentorPanel.bind(this));
        }
    }

    handleGlobalClick(event) {
        const target = event.target;
        const action = target.dataset.action || target.closest('[data-action]')?.dataset.action;
        
        if (action) {
            event.preventDefault();
            this.handleAction(action, target);
        }

        // Handle section navigation
        const sectionTarget = target.dataset.section || target.closest('[data-section]')?.dataset.section;
        if (sectionTarget) {
            event.preventDefault();
            this.navigateToSection(sectionTarget);
        }
    }

    handleAction(action, element) {
        const actions = {
            'startJourney': () => this.startJourney(),
            'continueJourney': () => this.continueJourney(),
            'backToMenu': () => this.navigateToSection('menu'),
            'completeChapter': () => this.completeChapter(element.dataset.chapterId),
            'startQuiz': () => this.startQuiz(),
            'submitQuiz': () => this.submitQuiz(),
            'shareProgress': () => this.shareProgress(),
            'resetProgress': () => this.resetProgress()
        };

        if (actions[action]) {
            actions[action]();
        }
    }

    handleKeyboardNavigation(event) {
        // ESC key - back navigation
        if (event.key === 'Escape') {
            if (this.currentSection !== 'capa') {
                this.navigateToSection('menu');
            }
        }
        
        // Accessibility shortcuts
        if (event.ctrlKey || event.metaKey) {
            switch (event.key) {
                case '1':
                    event.preventDefault();
                    this.navigateToSection('capa');
                    break;
                case '2':
                    event.preventDefault();
                    this.navigateToSection('menu');
                    break;
                case 'h':
                    event.preventDefault();
                    this.showHelp();
                    break;
            }
        }
    }

    // ======================
    // NAVIGATION SYSTEM
    // ======================
    async navigateToSection(sectionId) {
        if (this.isLoading || sectionId === this.currentSection) return;

        console.log(`🎯 Navegando para seção: ${sectionId}`);
        
        // Hide current section
        const currentSectionEl = document.querySelector(`[data-section="${this.currentSection}"]`);
        if (currentSectionEl) {
            currentSectionEl.classList.add('hidden');
        }

        // Show new section
        const newSectionEl = document.querySelector(`[data-section="${sectionId}"]`);
        if (newSectionEl) {
            newSectionEl.classList.remove('hidden');
        }

        // Update current section
        this.currentSection = sectionId;

        // Update header visibility
        this.updateHeaderVisibility();

        // Load section-specific content
        await this.loadSectionContent(sectionId);

        // Update progress tracking
        this.trackNavigation(sectionId);

        // Trigger AOS refresh
        if (window.AOS) {
            AOS.refresh();
        }
    }

    updateHeaderVisibility() {
        const header = document.getElementById('globalHeader');
        if (header) {
            if (this.currentSection === 'capa') {
                header.classList.add('hidden');
                document.getElementById('app').classList.remove('with-header');
            } else {
                header.classList.remove('hidden');
                document.getElementById('app').classList.add('with-header');
                this.updateHeaderProgress();
            }
        }
    }

    async loadSectionContent(sectionId) {
        const loaders = {
            'menu': () => this.loadMenuContent(),
            'playbook': () => this.loadPlaybookContent(),
            'jornada': () => this.loadJornadaContent(),
            'brand': () => this.loadBrandContent(),
            'academia': () => this.loadAcademiaContent(),
            'quiz': () => this.loadQuizContent()
        };

        if (loaders[sectionId]) {
            await loaders[sectionId]();
        }
    }

    // ======================
    // CONTENT LOADERS
    // ======================
    loadMenuContent() {
        const menuGrid = document.getElementById('menuGrid');
        if (!menuGrid) return;

        const menuItems = ContentManager.getMenuItems();
        
        menuGrid.innerHTML = menuItems.map(item => `
            <div class="menu-card" data-section="${item.id}" data-aos="fade-up">
                <div class="menu-card-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div class="menu-card-content">
                    <h3 class="menu-card-title">${item.title}</h3>
                    <p class="menu-card-subtitle">${item.subtitle}</p>
                    <p class="menu-card-description">${item.description}</p>
                    
                    <div class="menu-card-meta">
                        <div class="meta-item">
                            <i class="fas fa-clock"></i>
                            <span>${item.estimatedTime}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-signal"></i>
                            <span>${item.difficulty}</span>
                        </div>
                        <div class="meta-item xp-reward">
                            <i class="fas fa-bolt"></i>
                            <span>+${item.xpReward} XP</span>
                        </div>
                    </div>
                    
                    ${item.prerequisite ? this.renderPrerequisite(item.prerequisite) : ''}
                    
                    <div class="menu-card-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${this.getItemProgress(item.id)}%"></div>
                        </div>
                        <span class="progress-text">${this.getItemProgress(item.id)}% concluído</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Load recent achievements
        this.loadRecentAchievements();
    }

    loadPlaybookContent() {
        const playbookIndex = document.getElementById('playbookIndex');
        if (!playbookIndex) return;

        const chapters = ContentManager.getPlaybookChapters();
        
        playbookIndex.innerHTML = `
            <div class="playbook-grid">
                ${chapters.map(chapter => `
                    <div class="chapter-card" data-chapter-id="${chapter.id}" data-aos="fade-up">
                        <div class="chapter-icon">
                            <i class="${chapter.icon}"></i>
                        </div>
                        <div class="chapter-content">
                            <h3 class="chapter-title">${chapter.title}</h3>
                            <p class="chapter-subtitle">${chapter.subtitle}</p>
                            
                            <div class="chapter-meta">
                                <div class="meta-item">
                                    <i class="fas fa-clock"></i>
                                    <span>${chapter.estimatedTime}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-bolt"></i>
                                    <span>+${chapter.xpReward} XP</span>
                                </div>
                            </div>
                            
                            <div class="chapter-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${this.getChapterProgress(chapter.id)}%"></div>
                                </div>
                            </div>
                            
                            <button class="btn-chapter" data-action="openChapter" data-chapter-id="${chapter.id}">
                                ${this.getChapterProgress(chapter.id) > 0 ? 'Continuar' : 'Iniciar'} Capítulo
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    loadJornadaContent() {
        const jornadaTypes = document.getElementById('jornadaTypes');
        if (!jornadaTypes) return;

        const jornadas = ContentManager.getJornadas();
        
        jornadaTypes.innerHTML = `
            <div class="jornada-grid">
                ${jornadas.map(jornada => `
                    <div class="jornada-card" data-jornada-id="${jornada.id}" data-aos="fade-up">
                        <div class="jornada-header">
                            <div class="jornada-icon">
                                <i class="${jornada.icon}"></i>
                            </div>
                            <div class="jornada-brand ${jornada.brand === 'Auto Arremate' ? 'aa-brand' : 'arremaq-brand'}">
                                ${jornada.brand}
                            </div>
                        </div>
                        
                        <div class="jornada-content">
                            <h3 class="jornada-title">${jornada.title}</h3>
                            <p class="jornada-description">${jornada.description}</p>
                            
                            <div class="jornada-meta">
                                <div class="meta-item">
                                    <i class="fas fa-calendar"></i>
                                    <span>${jornada.duration}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-map-marked"></i>
                                    <span>${jornada.stages.length} etapas</span>
                                </div>
                            </div>
                            
                            <button class="btn-jornada" data-action="exploreJornada" data-jornada-id="${jornada.id}">
                                Explorar Jornada
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    loadAcademiaContent() {
        const academiaTools = document.getElementById('academiaTools');
        if (!academiaTools) return;

        const aiTools = ContentManager.getAITools();
        
        academiaTools.innerHTML = `
            <div class="ai-tools-grid">
                ${aiTools.map(tool => `
                    <div class="ai-tool-card" data-tool-id="${tool.id}" data-aos="fade-up">
                        <div class="tool-icon">
                            <i class="${tool.icon}"></i>
                        </div>
                        <div class="tool-content">
                            <h3 class="tool-name">${tool.name}</h3>
                            <p class="tool-description">${tool.description}</p>
                            
                            <div class="tool-meta">
                                <span class="tool-category">${tool.category}</span>
                                <span class="tool-difficulty ${tool.difficulty.toLowerCase()}">${tool.difficulty}</span>
                            </div>
                            
                            <button class="btn-tool" data-action="activateTool" data-tool-id="${tool.id}">
                                Ativar Ferramenta
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Initialize AI interaction area
        this.initializeAIInteraction();
    }

    loadQuizContent() {
        const quizInterface = document.getElementById('quizInterface');
        if (!quizInterface) return;

        quizInterface.innerHTML = `
            <div class="quiz-setup" data-aos="fade-up">
                <div class="quiz-intro">
                    <h3>🎯 Desafio do Conhecimento</h3>
                    <p>Teste seus conhecimentos e ganhe XP completando quizzes sobre o conteúdo da trilha!</p>
                </div>
                
                <div class="quiz-options">
                    <div class="quiz-mode-selector">
                        <h4>Escolha o modo de jogo:</h4>
                        <div class="mode-grid">
                            <div class="mode-card" data-mode="practice">
                                <i class="fas fa-dumbbell"></i>
                                <h5>Modo Treino</h5>
                                <p>Pratique sem pressão com feedback imediato</p>
                            </div>
                            <div class="mode-card" data-mode="challenge">
                                <i class="fas fa-trophy"></i>
                                <h5>Modo Desafio</h5>
                                <p>Encare um quiz cronometrado por XP extra</p>
                            </div>
                            <div class="mode-card" data-mode="review">
                                <i class="fas fa-repeat"></i>
                                <h5>Revisão Inteligente</h5>
                                <p>Revise perguntas com base no seu histórico</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="quiz-settings">
                        <div class="setting-group">
                            <label for="quizCategory">Categoria:</label>
                            <select id="quizCategory">
                                <option value="all">Todas as categorias</option>
                                <option value="Auto Arremate Básico">Auto Arremate Básico</option>
                                <option value="Jornada do Cliente">Jornada do Cliente</option>
                                <option value="Arremaq Especializado">Arremaq Especializado</option>
                                <option value="ICPs e Personas">ICPs e Personas</option>
                            </select>
                        </div>
                        
                        <div class="setting-group">
                            <label for="quizDifficulty">Dificuldade:</label>
                            <select id="quizDifficulty">
                                <option value="all">Todas</option>
                                <option value="easy">Fácil</option>
                                <option value="medium">Médio</option>
                                <option value="hard">Difícil</option>
                            </select>
                        </div>
                        
                        <div class="setting-group">
                            <label for="questionCount">Número de perguntas:</label>
                            <select id="questionCount">
                                <option value="5">5 perguntas</option>
                                <option value="10" selected>10 perguntas</option>
                                <option value="15">15 perguntas</option>
                                <option value="20">20 perguntas</option>
                            </select>
                        </div>
                    </div>
                    
                    <button class="btn-start-quiz" data-action="startQuiz">
                        <i class="fas fa-play"></i>
                        Iniciar Quiz
                    </button>
                </div>
            </div>
        `;
    }

    // ======================
    // GAMIFICATION ENGINE
    // ======================
    initializeGameEngine() {
        // Load user progress from localStorage
        this.userProgress = this.loadUserProgress();
        
        // Update UI with current progress
        this.updateProgressDisplay();
        
        // Check for achievements
        this.checkAchievements();
    }

    loadUserProgress() {
        const defaultProgress = {
            totalXP: 0,
            level: 1,
            completedChapters: [],
            completedJornadas: [],
            quizStats: {
                totalQuestions: 0,
                correctAnswers: 0,
                streak: 0,
                bestStreak: 0
            },
            achievements: [],
            preferences: {
                theme: 'light',
                fontSize: 100,
                readingMode: false,
                highContrast: false
            },
            timeSpent: 0,
            lastLogin: null
        };

        try {
            const saved = localStorage.getItem('jornadaCampeao_progress');
            return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
        } catch (error) {
            console.warn('Erro ao carregar progresso:', error);
            return defaultProgress;
        }
    }

    saveUserProgress() {
        try {
            localStorage.setItem('jornadaCampeao_progress', JSON.stringify(this.userProgress));
        } catch (error) {
            console.warn('Erro ao salvar progresso:', error);
        }
    }

    addXP(amount, source = '') {
        this.userProgress.totalXP += amount;
        
        // Check for level up
        const newLevel = ContentManager.calculateLevel(this.userProgress.totalXP);
        if (newLevel.level > this.userProgress.level) {
            this.userProgress.level = newLevel.level;
            this.showLevelUpNotification(newLevel);
        }
        
        // Update UI
        this.updateProgressDisplay();
        
        // Show XP notification
        this.showXPNotification(amount, source);
        
        // Save progress
        this.saveUserProgress();
        
        // Check achievements
        this.checkAchievements();
    }

    updateProgressDisplay() {
        const levelEl = document.getElementById('userLevel');
        const xpEl = document.getElementById('userXP');
        const progressFill = document.getElementById('globalProgressFill');
        const progressText = document.getElementById('globalProgressText');
        
        if (levelEl) levelEl.textContent = this.userProgress.level;
        if (xpEl) xpEl.textContent = this.userProgress.totalXP;
        
        const progress = ContentManager.calculateProgress(this.userProgress.totalXP);
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `${progress}% para o próximo nível`;
    }

    showXPNotification(amount, source) {
        this.showToast(`+${amount} XP`, `success`, source);
    }

    showLevelUpNotification(newLevel) {
        const modal = document.getElementById('achievementModal');
        const title = document.getElementById('achievementTitle');
        const description = document.getElementById('achievementDescription');
        const xpReward = document.getElementById('achievementXP');
        
        if (modal && title && description) {
            title.textContent = `Nível ${newLevel.level} Desbloqueado!`;
            description.textContent = `Parabéns! Você agora é um ${newLevel.name}!`;
            xpReward.textContent = `${newLevel.badge} Novo título conquistado!`;
            
            modal.classList.remove('hidden');
            
            // Play level up sound
            this.playSound('levelup');
        }
    }

    checkAchievements() {
        const achievements = ContentManager.getGamificationData().achievements;
        
        achievements.forEach(achievement => {
            if (!this.userProgress.achievements.includes(achievement.id)) {
                if (this.checkAchievementCondition(achievement)) {
                    this.unlockAchievement(achievement);
                }
            }
        });
    }

    checkAchievementCondition(achievement) {
        switch (achievement.id) {
            case 'first_login':
                return true; // Always unlocked on first run
            case 'complete_playbook':
                const chapters = ContentManager.getPlaybookChapters();
                return chapters.every(chapter => 
                    this.userProgress.completedChapters.includes(chapter.id)
                );
            case 'quiz_master':
                return this.userProgress.quizStats.bestStreak >= 10;
            case 'speed_learner':
                // This would be tracked during actual chapter completion
                return false; // Placeholder
            default:
                return false;
        }
    }

    unlockAchievement(achievement) {
        this.userProgress.achievements.push(achievement.id);
        this.addXP(achievement.xpReward, achievement.name);
        this.showAchievementNotification(achievement);
        this.saveUserProgress();
    }

    showAchievementNotification(achievement) {
        this.showToast(
            `🏆 ${achievement.name}`,
            'achievement',
            achievement.description
        );
    }

    // ======================
    // UI COMPONENTS
    // ======================
    initializeUIComponents() {
        this.initializeToastSystem();
        this.initializeModals();
        this.initializeAnimationCounters();
    }

    initializeToastSystem() {
        // Toast system is handled by showToast method
    }

    initializeModals() {
        // Achievement modal close
        const closeAchievementModal = document.getElementById('closeAchievementModal');
        if (closeAchievementModal) {
            closeAchievementModal.addEventListener('click', () => {
                document.getElementById('achievementModal').classList.add('hidden');
            });
        }
    }

    initializeAnimationCounters() {
        // Animate numbers on capa section
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const animateCounter = (element) => {
            const target = parseInt(element.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = () => {
                current += step;
                if (current < target) {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(counter);
                } else {
                    element.textContent = target;
                }
            };
            
            counter();
        };
        
        // Use Intersection Observer to trigger when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        statNumbers.forEach(stat => observer.observe(stat));
    }

    showToast(message, type = 'info', detail = '') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-message">${message}</div>
                ${detail ? `<div class="toast-detail">${detail}</div>` : ''}
            </div>
            <button class="toast-close">&times;</button>
        `;
        
        container.appendChild(toast);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            toast.classList.add('toast-exit');
            setTimeout(() => container.removeChild(toast), 300);
        }, 4000);
        
        // Manual close
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.add('toast-exit');
            setTimeout(() => container.removeChild(toast), 300);
        });
    }

    // ======================
    // ACCESSIBILITY FEATURES
    // ======================
    initializeAccessibility() {
        this.initializeFontControls();
        this.initializeTextToSpeech();
        this.initializeReadingMode();
        this.initializeHighContrast();
        
        // Apply saved preferences
        this.applyAccessibilityPreferences();
    }

    initializeFontControls() {
        const increaseFontBtn = document.getElementById('increaseFontBtn');
        const decreaseFontBtn = document.getElementById('decreaseFontBtn');
        const resetFontBtn = document.getElementById('resetFontBtn');
        
        if (increaseFontBtn) {
            increaseFontBtn.addEventListener('click', () => this.adjustFontSize(10));
        }
        
        if (decreaseFontBtn) {
            decreaseFontBtn.addEventListener('click', () => this.adjustFontSize(-10));
        }
        
        if (resetFontBtn) {
            resetFontBtn.addEventListener('click', () => this.resetFontSize());
        }
    }

    adjustFontSize(delta) {
        const newSize = Math.max(60, Math.min(150, this.userProgress.preferences.fontSize + delta));
        this.userProgress.preferences.fontSize = newSize;
        document.documentElement.style.fontSize = `${newSize}%`;
        this.saveUserProgress();
    }

    resetFontSize() {
        this.userProgress.preferences.fontSize = 100;
        document.documentElement.style.fontSize = '100%';
        this.saveUserProgress();
    }

    initializeTextToSpeech() {
        const textToSpeechBtn = document.getElementById('textToSpeechBtn');
        if (!textToSpeechBtn || !window.speechSynthesis) return;
        
        textToSpeechBtn.addEventListener('click', () => {
            if (this.speechActive) {
                this.stopSpeech();
            } else {
                this.startSpeech();
            }
        });
    }

    startSpeech() {
        const readableElements = document.querySelectorAll('[data-readable], h1, h2, h3, p');
        let textToRead = '';
        
        readableElements.forEach(el => {
            if (el.offsetParent !== null) { // Element is visible
                const text = el.dataset.readable || el.textContent;
                textToRead += text.trim() + '. ';
            }
        });
        
        if (textToRead) {
            const utterance = new SpeechSynthesisUtterance(textToRead);
            utterance.lang = 'pt-BR';
            utterance.rate = 0.8;
            
            utterance.onstart = () => {
                this.speechActive = true;
                document.getElementById('textToSpeechBtn').innerHTML = 
                    '<i class="fas fa-stop"></i> Parar Leitura';
            };
            
            utterance.onend = () => {
                this.speechActive = false;
                document.getElementById('textToSpeechBtn').innerHTML = 
                    '<i class="fas fa-volume-up"></i> Ler em Voz Alta';
            };
            
            speechSynthesis.speak(utterance);
        }
    }

    stopSpeech() {
        speechSynthesis.cancel();
        this.speechActive = false;
        document.getElementById('textToSpeechBtn').innerHTML = 
            '<i class="fas fa-volume-up"></i> Ler em Voz Alta';
    }

    toggleAccessibilityPanel() {
        const panel = document.getElementById('accessibilityPanel');
        if (panel) {
            panel.classList.toggle('hidden');
        }
    }

    toggleMentorPanel() {
        const panel = document.getElementById('mentorPanel');
        if (panel) {
            panel.classList.toggle('hidden');
            this.mentorActive = !panel.classList.contains('hidden');
            
            if (this.mentorActive) {
                this.initializeMentorChat();
            }
        }
    }

    // ======================
    // MENTOR AI SYSTEM
    // ======================
    initializeMentorChat() {
        const sendBtn = document.getElementById('sendMentorMessage');
        const input = document.getElementById('mentorInput');
        
        if (sendBtn && input) {
            sendBtn.addEventListener('click', () => this.sendMentorMessage());
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMentorMessage();
            });
        }
    }

    sendMentorMessage() {
        const input = document.getElementById('mentorInput');
        const conversation = document.getElementById('mentorConversation');
        
        if (!input || !conversation) return;
        
        const message = input.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMentorMessage(message, 'user');
        input.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const response = this.generateMentorResponse(message);
            this.addMentorMessage(response, 'ai');
        }, 1000);
    }

    addMentorMessage(message, type) {
        const conversation = document.getElementById('mentorConversation');
        if (!conversation) return;
        
        const messageEl = document.createElement('div');
        messageEl.className = `mentor-message ${type}-message`;
        messageEl.innerHTML = `
            <div class="avatar">${type === 'ai' ? '🤖' : '👤'}</div>
            <div class="message">${message}</div>
        `;
        
        conversation.appendChild(messageEl);
        conversation.scrollTop = conversation.scrollHeight;
    }

    generateMentorResponse(userMessage) {
        const responses = {
            'ajuda': 'Estou aqui para te ajudar! Que tal começar com o Manual do Pit Stop para dominar os fundamentos?',
            'quiz': 'Ótima ideia! Os quizzes são uma forma excelente de fixar o conhecimento. Recomendo começar com questões básicas.',
            'progresso': `Você está indo muito bem! Já conquistou ${this.userProgress.totalXP} XP e está no nível ${this.userProgress.level}.`,
            'dificuldade': 'Entendo que pode parecer desafiador. Que tal dividir o conteúdo em partes menores e focar em uma de cada vez?',
            'default': 'Interessante pergunta! Com base no seu progresso atual, sugiro que explore as jornadas do cliente para aprofundar seus conhecimentos.'
        };
        
        const lowerMessage = userMessage.toLowerCase();
        
        for (const [key, response] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }
        
        return responses.default;
    }

    // ======================
    // THEME SYSTEM
    // ======================
    toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        
        // Update theme toggle icon
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        
        // Save preference
        this.userProgress.preferences.theme = newTheme;
        this.saveUserProgress();
    }

    // ======================
    // JOURNEY SPECIFIC METHODS
    // ======================
    initializeCapaSection() {
        // Start stats animation
        this.initializeAnimationCounters();
    }

    startJourney() {
        this.navigateToSection('menu');
        this.addXP(25, 'Início da Jornada');
    }

    continueJourney() {
        // Determine where to continue based on progress
        const lastSection = this.userProgress.lastSection || 'menu';
        this.navigateToSection(lastSection);
    }

    showContinueOption() {
        const continueBtn = document.getElementById('continueJourneyBtn');
        const startBtn = document.getElementById('startJourneyBtn');
        
        if (continueBtn && startBtn) {
            continueBtn.classList.remove('hidden');
            startBtn.textContent = 'RECOMEÇAR JORNADA';
        }
    }

    // ======================
    // UTILITY METHODS
    // ======================
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    playSound(type) {
        // Placeholder for sound system
        console.log(`🔊 Playing sound: ${type}`);
    }

    handleResize() {
        // Handle responsive adjustments
        if (window.AOS) {
            AOS.refresh();
        }
    }

    trackNavigation(sectionId) {
        // Analytics tracking
        console.log(`📊 Page view: ${sectionId}`);
        this.userProgress.lastSection = sectionId;
        this.saveUserProgress();
    }

    showHelp() {
        this.showToast(
            '💡 Dicas de Navegação',
            'info',
            'Use Ctrl+1 para voltar ao início, Ctrl+2 para o menu, ou Ctrl+H para ajuda'
        );
    }

    // Placeholder methods for complex features
    getItemProgress(itemId) {
        return Math.floor(Math.random() * 100); // Placeholder
    }

    getChapterProgress(chapterId) {
        return this.userProgress.completedChapters.includes(chapterId) ? 100 : 0;
    }

    renderPrerequisite(prerequisite) {
        return `<div class="prerequisite">📋 Prerequisito: ${prerequisite}</div>`;
    }

    loadRecentAchievements() {
        // Placeholder for recent achievements
    }

    initializeAIInteraction() {
        // Placeholder for AI interaction
    }

    applyAccessibilityPreferences() {
        // Apply saved accessibility settings
        const prefs = this.userProgress.preferences;
        
        document.documentElement.style.fontSize = `${prefs.fontSize}%`;
        document.documentElement.setAttribute('data-theme', prefs.theme);
        
        if (prefs.highContrast) {
            document.body.classList.add('high-contrast');
        }
    }
}

// ======================
// APPLICATION INITIALIZATION
// ======================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the main application
    window.jornadaApp = new JornadaCampeaoApp();
    
    // Global error handling
    window.addEventListener('error', (event) => {
        console.error('Application error:', event.error);
    });
    
    // Performance monitoring
    window.addEventListener('load', () => {
        console.log('📈 Application fully loaded');
    });
});

// Export for external access
window.JornadaCampeaoApp = JornadaCampeaoApp;