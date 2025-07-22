// CORPORATE CLEAN SCENE 3 - Cleaned up and polished Scene 3
console.log('💼 Loading corporate clean Scene 3 animation...');

window.addEventListener('load', () => {
    console.log('✅ Creating clean Scene 3 styling...');
    
    // Clean Scene 3 styling
    const cleanScene3Style = document.createElement('style');
    cleanScene3Style.textContent = `
        /* Clean Scene 3 Styling */
        
        /* Scene 2 Text (keep existing) */
        .date {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            color: #5eead4 !important;
            background: none !important;
            padding: 0 !important;
            margin: 8px 0 !important;
            font-size: 1.5rem !important;
            font-weight: 700 !important;
            text-shadow: 0 2px 10px rgba(94, 234, 212, 0.5) !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        .description {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            color: rgba(255, 255, 255, 0.95) !important;
            background: none !important;
            padding: 0 !important;
            margin: 8px 0 !important;
            font-size: 1.125rem !important;
            font-weight: 400 !important;
            line-height: 1.6 !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        .bonus {
            opacity: 1 !important;
            visibility: visible !important;
            display: inline-block !important;
            color: #fbbf24 !important;
            background: rgba(251, 191, 36, 0.2) !important;
            padding: 4px 12px !important;
            margin: 8px 0 !important;
            border-radius: 20px !important;
            border: 1px solid rgba(251, 191, 36, 0.4) !important;
            font-size: 0.9rem !important;
            font-weight: 600 !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        /* CLEAN SCENE 3 STYLING */
        #scene3 {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%) !important;
            color: #1e293b !important;
            padding: 4rem !important;
            position: relative !important;
            overflow: hidden !important;
            flex-direction: column !important;
        }
        
        #scene3::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: 
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%) !important;
            pointer-events: none !important;
        }
        
        #scene3 .section-title {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            color: #1e293b !important;
            background: none !important;
            padding: 0 !important;
            margin: 0 0 3rem 0 !important;
            font-size: 2.75rem !important;
            font-weight: 800 !important;
            text-align: center !important;
            letter-spacing: -0.025em !important;
            z-index: 999999 !important;
            position: relative !important;
            background: linear-gradient(135deg, #1e40af 0%, #059669 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
        }
        
        .benefits-list {
            list-style: none !important;
            width: 100% !important;
            max-width: 1000px !important;
            margin: 0 auto !important;
            position: relative !important;
            z-index: 2 !important;
            display: grid !important;
            gap: 1.5rem !important;
        }
        
        .benefit-item {
            display: flex !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
            padding: 2rem !important;
            background: rgba(255, 255, 255, 0.9) !important;
            border-radius: 20px !important;
            box-shadow: 
                0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
            border: 1px solid rgba(148, 163, 184, 0.2) !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            position: relative !important;
            overflow: hidden !important;
            backdrop-filter: blur(10px) !important;
        }
        
        .benefit-item::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 4px !important;
            height: 100% !important;
            background: linear-gradient(to bottom, #3b82f6, #10b981) !important;
            transform: scaleY(0) !important;
            transition: transform 0.3s ease !important;
        }
        
        .benefit-item:hover {
            transform: translateY(-4px) !important;
            box-shadow: 
                0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
            border-color: rgba(59, 130, 246, 0.3) !important;
        }
        
        .benefit-item:hover::before {
            transform: scaleY(1) !important;
        }
        
        .bullet {
            opacity: 1 !important;
            visibility: visible !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 3.5rem !important;
            height: 3.5rem !important;
            font-size: 1.75rem !important;
            background: linear-gradient(135deg, #ddd6fe, #e0e7ff) !important;
            border-radius: 50% !important;
            box-shadow: 
                0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
            border: 2px solid rgba(255, 255, 255, 0.8) !important;
            flex-shrink: 0 !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        .benefit-content {
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 0.75rem !important;
        }
        
        .text {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            color: #334155 !important;
            background: none !important;
            padding: 0 !important;
            margin: 0 !important;
            font-size: 1.125rem !important;
            font-weight: 500 !important;
            line-height: 1.6 !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        .value {
            opacity: 1 !important;
            visibility: visible !important;
            display: inline-flex !important;
            align-items: center !important;
            color: #1e293b !important;
            background: linear-gradient(135deg, #fef3c7, #fde68a) !important;
            padding: 0.5rem 1rem !important;
            margin: 0 !important;
            border-radius: 25px !important;
            font-size: 0.875rem !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.05em !important;
            white-space: nowrap !important;
            box-shadow: 
                0 2px 4px -1px rgba(0, 0, 0, 0.1),
                0 1px 2px -1px rgba(0, 0, 0, 0.06) !important;
            border: 1px solid rgba(251, 191, 36, 0.3) !important;
            z-index: 999999 !important;
            position: relative !important;
            align-self: flex-start !important;
        }
        
        /* Scene container styling */
        .left-panel {
            background: linear-gradient(135deg, #1e3a8a 0%, #14b8a6 100%) !important;
            color: white !important;
            position: relative !important;
            overflow: hidden !important;
            padding: 4rem !important;
        }
        
        .left-panel::before {
            content: '' !important;
            position: absolute !important;
            top: -50% !important;
            right: -50% !important;
            width: 200% !important;
            height: 200% !important;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%) !important;
            animation: rotate 30s linear infinite !important;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .right-panel {
            position: relative !important;
            overflow: hidden !important;
        }
        
        .right-panel img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            filter: brightness(0.9) contrast(1.1) !important;
        }
        
        .date-group {
            background: rgba(255,255,255,0.1) !important;
            border-radius: 12px !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
            padding: 2rem !important;
            margin-bottom: 2rem !important;
            transition: all 0.3s ease !important;
        }
        
        .date-group:hover {
            background: rgba(255,255,255,0.15) !important;
            transform: translateX(10px) !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
        }
        
        .checkmark {
            display: inline-block !important;
            width: 24px !important;
            height: 24px !important;
            margin-left: 1rem !important;
            filter: drop-shadow(0 2px 8px rgba(20, 184, 166, 0.6)) !important;
            opacity: 1 !important;
            visibility: visible !important;
        }
        
        #scene2 .section-title {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            color: white !important;
            background: none !important;
            padding: 0 !important;
            margin: 0 0 3rem 0 !important;
            font-size: 2.5rem !important;
            font-weight: 700 !important;
            text-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .benefits-list {
                gap: 1rem !important;
            }
            
            .benefit-item {
                padding: 1.5rem !important;
                gap: 1rem !important;
            }
            
            .bullet {
                width: 3rem !important;
                height: 3rem !important;
                font-size: 1.5rem !important;
            }
            
            .text {
                font-size: 1rem !important;
            }
            
            #scene3 .section-title {
                font-size: 2.25rem !important;
            }
        }
        
        /* Clean up any debug styling */
        .scene {
            border: none !important;
        }
        
        /* Override any unwanted backgrounds */
        .benefit-item .text {
            background: none !important;
            border: none !important;
        }
        
        .benefit-item .value {
            border: 1px solid rgba(251, 191, 36, 0.3) !important;
        }
    `;
    document.head.appendChild(cleanScene3Style);
    
    // Restructure benefit items for better layout
    setTimeout(() => {
        const benefitItems = document.querySelectorAll('.benefit-item');
        benefitItems.forEach(item => {
            const text = item.querySelector('.text');
            const value = item.querySelector('.value');
            
            if (text && value && !item.querySelector('.benefit-content')) {
                // Create content wrapper
                const contentWrapper = document.createElement('div');
                contentWrapper.className = 'benefit-content';
                
                // Move text and value into wrapper
                contentWrapper.appendChild(text.cloneNode(true));
                contentWrapper.appendChild(value.cloneNode(true));
                
                // Replace old elements
                text.remove();
                value.remove();
                item.appendChild(contentWrapper);
            }
        });
        
        console.log('✅ Scene 3 benefit items restructured');
    }, 100);
    
    // Maintain text visibility
    const maintainVisibility = () => {
        const textElements = document.querySelectorAll('.text, .value, .bullet, #scene3 .section-title');
        textElements.forEach(el => {
            el.style.setProperty('opacity', '1', 'important');
            el.style.setProperty('visibility', 'visible', 'important');
        });
    };
    
    setInterval(maintainVisibility, 200);
    maintainVisibility();
    
    console.log('✅ Clean Scene 3 styling applied');
});

// Load GSAP plugins
const loadGSAPPlugins = () => {
    const plugins = [
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js'
    ];
    
    plugins.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    });
};

loadGSAPPlugins();

// Perfect Timing Audio Manager
class PerfectTimingAudioManager {
    constructor() {
        this.bgMusic = null;
        this.currentVoiceover = null;
        this.isPlaying = false;
        this.startButton = null;
        
        // Actual voiceover durations
        this.chunks = {
            scene1: [
                { file: 'vo-intro-welcome.mp3', duration: 5.38, start: 0 },
                { file: 'vo-intro-feedback.mp3', duration: 7.13, start: 5.88 },
                { file: 'vo-intro-investing.mp3', duration: 7.52, start: 13.51 }
            ],
            scene2: [
                { file: 'vo-dates-intro.mp3', duration: 3.37, start: 21.53 },
                { file: 'vo-dates-january.mp3', duration: 7.97, start: 25.40 },
                { file: 'vo-dates-march.mp3', duration: 7.52, start: 33.87 },
                { file: 'vo-dates-december.mp3', duration: 7.29, start: 41.89 }
            ],
            scene3: [
                { file: 'vo-benefits-intro.mp3', duration: 4.78, start: 49.68 },
                { file: 'vo-benefits-support.mp3', duration: 9.04, start: 54.96 },
                { file: 'vo-benefits-hsa.mp3', duration: 7.37, start: 64.50 },
                { file: 'vo-benefits-cta.mp3', duration: 5.88, start: 72.37 }
            ]
        };
        
        this.initAudio();
        this.createStartOverlay();
    }
    
    initAudio() {
        // Upbeat background music
        this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2024/10/14/audio_29797b8a18.mp3');
        this.bgMusic.volume = 0.06;
        this.bgMusic.loop = true;
        
        // Fallback music
        this.bgMusic.onerror = () => {
            console.log('Trying fallback music...');
            this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3');
            this.bgMusic.volume = 0.06;
            this.bgMusic.loop = true;
        };
        
        console.log('✅ Clean Scene 3 audio initialized');
    }
    
    createStartOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'start-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(20, 184, 166, 0.95) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
            backdrop-filter: blur(20px);
        `;
        
        const startCard = document.createElement('div');
        startCard.style.cssText = `
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            padding: 4rem 5rem;
            border-radius: 24px;
            text-align: center;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            animation: float 3s ease-in-out infinite;
            max-width: 600px;
        `;
        
        startCard.innerHTML = `
            <h2 style="color: white; font-size: 3rem; margin-bottom: 1.5rem; font-weight: 700; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                2025 Employee Benefits
            </h2>
            <p style="color: rgba(255,255,255,0.95); font-size: 1.5rem; margin-bottom: 3rem; font-weight: 300;">
                Enhanced Coverage • Better Savings • Your Future
            </p>
            <button id="start-button" style="
                background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                color: #1e3a8a;
                border: none;
                padding: 1.25rem 4rem;
                font-size: 1.5rem;
                font-weight: 700;
                border-radius: 60px;
                cursor: pointer;
                box-shadow: 0 10px 40px rgba(251, 191, 36, 0.5);
                transition: all 0.3s;
                text-transform: uppercase;
                letter-spacing: 0.1em;
            ">▶️ Start Experience</button>
            <p style="color: rgba(255,255,255,0.8); margin-top: 2rem; font-size: 1rem;">
                🎧 Best experienced with audio on<br>
                ⏱️ Duration: ~80 seconds<br>
                ✨ Clean Scene 3 design
            </p>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            
            #start-button:hover {
                transform: translateY(-3px) scale(1.05);
                box-shadow: 0 15px 50px rgba(251, 191, 36, 0.7);
            }
        `;
        document.head.appendChild(style);
        
        overlay.appendChild(startCard);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => this.startEverything());
        this.startButton = overlay;
    }
    
    async startEverything() {
        if (this.isPlaying) return;
        
        console.log('🚀 Starting clean Scene 3 presentation...');
        this.isPlaying = true;
        
        // Fancy overlay fade out
        gsap.to(this.startButton, {
            scale: 1.1,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => this.startButton.remove()
        });
        
        // Start background music
        if (this.bgMusic) {
            this.bgMusic.play().catch(e => console.log('⚠️ Music blocked:', e.message));
        }
        
        // Start animation timeline
        if (window.perfectTimeline) {
            window.perfectTimeline.restart();
            console.log('✅ Clean Scene 3 timeline started');
        }
    }
    
    playChunk(filename, duration) {
        // Stop current voiceover
        if (this.currentVoiceover) {
            this.currentVoiceover.pause();
            this.currentVoiceover = null;
        }
        
        // Play new chunk
        const audio = new Audio(filename);
        audio.volume = 1.0;
        this.currentVoiceover = audio;
        
        audio.play().catch(e => console.log(`⚠️ Voiceover blocked: ${filename}`));
        console.log(`🎵 Playing: ${filename} (${duration}s)`);
        
        return audio;
    }
    
    pause() {
        if (this.bgMusic) this.bgMusic.pause();
        if (this.currentVoiceover) this.currentVoiceover.pause();
        this.isPlaying = false;
    }
    
    resume() {
        if (this.bgMusic) this.bgMusic.play();
        if (this.currentVoiceover) this.currentVoiceover.play();
        this.isPlaying = true;
    }
    
    mute() {
        if (this.bgMusic) this.bgMusic.muted = !this.bgMusic.muted;
        if (this.currentVoiceover) this.currentVoiceover.muted = !this.currentVoiceover.muted;
    }
}

// Global audio manager
let audioManager;

// Create fancy transition overlay
function createTransitionOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'scene-transition-overlay';
    overlay.innerHTML = '<div class="transition-circle"></div>';
    document.body.appendChild(overlay);
    return overlay.querySelector('.transition-circle');
}

// Enhanced progress bar
function createEnhancedProgress() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 6px;
        background: rgba(30, 58, 138, 0.2);
        z-index: 9999;
        overflow: hidden;
    `;
    
    const bar = document.createElement('div');
    bar.id = 'progress-bar';
    bar.style.cssText = `
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #1e3a8a, #14b8a6, #fbbf24);
        box-shadow: 0 0 20px rgba(20, 184, 166, 0.8);
        transition: width 0.3s ease;
    `;
    
    container.appendChild(bar);
    document.body.appendChild(container);
    
    return bar;
}

// Main animation with clean Scene 3
window.addEventListener('load', () => {
    console.log('✅ Initializing clean Scene 3 animation...');
    
    // Initialize systems
    audioManager = new PerfectTimingAudioManager();
    const progressBar = createEnhancedProgress();
    const transitionCircle = createTransitionOverlay();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    // Get elements for animations
    const dateGroups = document.querySelectorAll('.left-panel .date-group');
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    console.log('📊 Found elements:');
    console.log('  - Date groups:', dateGroups.length);
    console.log('  - Benefit items:', benefitItems.length);
    
    // Perfect timing timeline
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 3,
        defaults: { ease: 'power2.inOut' },
        paused: true,
        onUpdate: () => {
            const progress = timeline.progress() * 100;
            progressBar.style.width = progress + '%';
        }
    });
    
    // Store globally
    window.perfectTimeline = timeline;
    
    // SCENE 1: Perfect Introduction (0-21.03s)
    timeline
        // Play welcome (5.38s)
        .call(() => audioManager.playChunk('vo-intro-welcome.mp3', 5.38))
        
        // Dramatic entrance
        .from('.video-frame', {
            scale: 0.8,
            opacity: 0,
            rotationY: 15,
            duration: 1.2,
            ease: 'power3.out'
        })
        
        // Hero image slow zoom for scene
        .from('.hero-video img', {
            scale: 1.15,
            duration: 21,
            ease: 'power1.inOut'
        }, 0)
        
        // Card and title with welcome
        .from('.sliding-card', {
            y: 150,
            opacity: 0,
            filter: 'blur(10px)',
            duration: 1.2,
            ease: 'power3.out'
        }, 0.5)
        
        .from('.main-title', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
        }, 1)
        
        // Play feedback (7.13s) at 5.88s
        .call(() => audioManager.playChunk('vo-intro-feedback.mp3', 7.13), null, 5.88)
        
        // Subtitle with feedback
        .from('.subtitle', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out'
        }, 6.5)
        
        // Benefits preview
        .from('.highlight', {
            opacity: 0,
            scale: 0,
            rotation: 'random(-20, 20)',
            duration: 0.8,
            stagger: 0.3,
            ease: 'back.out(1.7)'
        }, 8)
        
        // Play investing (7.52s) at 13.51s
        .call(() => audioManager.playChunk('vo-intro-investing.mp3', 7.52), null, 13.51)
        
        // Line animation with investing message
        .fromTo('.animated-line', 
            { scaleX: 0, transformOrigin: 'left' },
            { 
                scaleX: 1, 
                duration: 2,
                ease: 'power2.inOut'
            }, 14)
        
        // Pulse highlights
        .to('.highlight', {
            scale: 1.05,
            duration: 0.5,
            stagger: 0.1,
            yoyo: true,
            repeat: 1
        }, 16)
        
        // Fancy scene transition at 21.03s
        .to(transitionCircle, {
            scale: 15,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.in',
            transformOrigin: '50% 50%',
            left: '50%',
            top: '50%'
        }, 20.5)
        
        .to('#scene1', {
            opacity: 0,
            duration: 0.3
        }, 20.7)
        
        .set('#scene1', { visibility: 'hidden' }, 21.03)
        
        // SCENE 2: Coverage Timeline (21.53-49.18s)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 21.53)
        
        .to(transitionCircle, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
        }, 21.53)
        
        // Play dates intro (3.37s) at 21.53s
        .call(() => {
            audioManager.playChunk('vo-dates-intro.mp3', 3.37);
            console.log('🗓️ SYNC: Timeline intro');
        }, null, 21.53)
        
        // Panels entrance
        .from('.split-screen', {
            opacity: 0,
            scale: 0.95,
            duration: 0.8
        }, 21.53)
        
        .from('.left-panel', {
            x: -100,
            opacity: 0,
            rotationY: -15,
            duration: 1,
            ease: 'power3.out'
        }, 21.7)
        
        .from('.right-panel', {
            x: 100,
            opacity: 0,
            rotationY: 15,
            duration: 1,
            ease: 'power3.out'
        }, 21.7)
        
        // Title
        .from('#scene2 .section-title', {
            y: -30,
            scale: 0.9,
            duration: 0.8,
            ease: 'power3.out'
        }, 22.2)
        
        // January VO starts at 25.40s
        .call(() => {
            audioManager.playChunk('vo-dates-january.mp3', 7.97);
            console.log('🗓️ SYNC: January VO');
        }, null, 25.40)
        
        // January - smooth entrance
        .from(dateGroups[0], {
            x: -60,
            scale: 0.9,
            duration: 1.2,
            ease: 'power3.out'
        }, 25.40)
        
        // March VO starts at 33.87s
        .call(() => {
            audioManager.playChunk('vo-dates-march.mp3', 7.52);
            console.log('🗓️ SYNC: March VO');
        }, null, 33.87)
        
        // March - smooth entrance
        .from(dateGroups[1], {
            x: -60,
            scale: 0.9,
            duration: 1.2,
            ease: 'power3.out'
        }, 33.87)
        
        // December VO starts at 41.89s
        .call(() => {
            audioManager.playChunk('vo-dates-december.mp3', 7.29);
            console.log('🗓️ SYNC: December VO');
        }, null, 41.89)
        
        // December - smooth entrance
        .from(dateGroups[2], {
            x: -60,
            scale: 0.9,
            duration: 1.2,
            ease: 'power3.out'
        }, 41.89)
        
        // Transition at 49.18s
        .to('.left-panel', {
            x: -100,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in'
        }, 48.68)
        
        .to('.right-panel', {
            x: 100,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in'
        }, 48.68)
        
        .to('#scene2', {
            opacity: 0,
            duration: 0.3
        }, 49)
        
        .set('#scene2', { visibility: 'hidden' }, 49.18)
        
        // SCENE 3: CLEAN BENEFITS (49.68-78.25s)
        .set('#scene3', { 
            opacity: 1, 
            visibility: 'visible',
            display: 'flex' 
        }, 49.68)
        
        // Play benefits intro (4.78s) at 49.68s
        .call(() => {
            audioManager.playChunk('vo-benefits-intro.mp3', 4.78);
            console.log('🎯 Starting Scene 3 - CLEAN DESIGN');
        }, null, 49.68)
        
        // Scene entrance
        .fromTo('#scene3', {
            scale: 1.05,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, 49.68)
        
        // Title - elegant entrance
        .from('#scene3 .section-title', {
            y: -40,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out'
        }, 50)
        
        // Play support (9.04s) at 54.96s
        .call(() => {
            audioManager.playChunk('vo-benefits-support.mp3', 9.04);
            console.log('🎯 Animating benefits - CLEAN ANIMATION');
        }, null, 54.96)
        
        // First 3 benefits - clean staggered entrance
        .from([benefitItems[0], benefitItems[1], benefitItems[2]], {
            y: 40,
            scale: 0.98,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        }, 55.5)
        
        // Play HSA (7.37s) at 64.50s
        .call(() => {
            audioManager.playChunk('vo-benefits-hsa.mp3', 7.37);
            console.log('🎯 HSA benefits - CLEAN ANIMATION');
        }, null, 64.50)
        
        // HSA and fertility benefits - clean entrance
        .from([benefitItems[3], benefitItems[4]], {
            y: 40,
            scale: 0.98,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        }, 64.8)
        
        // Subtle highlight HSA
        .to(benefitItems[3], {
            scale: 1.01,
            duration: 0.6,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 67)
        
        // Play CTA (5.88s) at 72.37s
        .call(() => {
            audioManager.playChunk('vo-benefits-cta.mp3', 5.88);
            console.log('🎯 Final celebration - CLEAN ANIMATION');
        }, null, 72.37)
        
        // Final clean celebration - subtle glow effect
        .to('.benefits-list', {
            scale: 1.005,
            duration: 1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 73)
        
        // Clean fade out at 78.25s
        .to('#scene3', {
            opacity: 0,
            scale: 0.99,
            duration: 1,
            ease: 'power2.in'
        }, 77.25)
        
        .set('#scene3', { visibility: 'hidden' }, 78.25);
    
    // Enhanced keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!audioManager || !audioManager.isPlaying) return;
        
        switch(e.key) {
            case ' ':
                e.preventDefault();
                if (timeline.paused()) {
                    timeline.play();
                    audioManager.resume();
                } else {
                    timeline.pause();
                    audioManager.pause();
                }
                break;
            case 'r':
                timeline.restart();
                break;
            case '1':
                timeline.seek(0);
                break;
            case '2':
                timeline.seek(21.53);
                break;
            case '3':
                timeline.seek(49.68);
                break;
            case 'm':
                audioManager.mute();
                break;
        }
    });
    
    // Responsive scaling
    function handleResize() {
        const container = document.querySelector('.video-frame');
        const scale = Math.min(
            window.innerWidth / 1920,
            window.innerHeight / 1080
        );
        gsap.set(container, { scale });
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    console.log('✅ Clean Scene 3 animation ready!');
    console.log('🎬 Scene 3 cleaned up and polished!');
});

console.log('✅ Clean Scene 3 animation loaded');