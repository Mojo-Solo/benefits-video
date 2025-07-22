// ENHANCED FINAL Benefits Animation
// Chunked voiceovers for perfect sync
// Fancy transitions and enhanced design

console.log('💼 Loading enhanced final animation...');

// Load GSAP plugins from CDN
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

// Enhanced Audio Manager with chunked playback
class EnhancedAudioManager {
    constructor() {
        this.bgMusic = null;
        this.currentVoiceover = null;
        this.voiceoverQueue = [];
        this.isPlaying = false;
        this.startButton = null;
        
        // Voiceover chunks
        this.chunks = {
            scene1: [
                { file: 'vo-intro-welcome.mp3', duration: 4 },
                { file: 'vo-intro-feedback.mp3', duration: 7 },
                { file: 'vo-intro-investing.mp3', duration: 6 }
            ],
            scene2: [
                { file: 'vo-dates-intro.mp3', duration: 3 },
                { file: 'vo-dates-january.mp3', duration: 6 },
                { file: 'vo-dates-march.mp3', duration: 6 },
                { file: 'vo-dates-december.mp3', duration: 5 }
            ],
            scene3: [
                { file: 'vo-benefits-intro.mp3', duration: 3 },
                { file: 'vo-benefits-support.mp3', duration: 8 },
                { file: 'vo-benefits-hsa.mp3', duration: 6 },
                { file: 'vo-benefits-cta.mp3', duration: 5 }
            ]
        };
        
        this.initAudio();
        this.createStartOverlay();
    }
    
    initAudio() {
        // Upbeat background music
        this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2024/10/14/audio_29797b8a18.mp3');
        this.bgMusic.volume = 0.08;
        this.bgMusic.loop = true;
        
        // Fallback music
        this.bgMusic.onerror = () => {
            console.log('Trying fallback music...');
            this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3');
            this.bgMusic.volume = 0.08;
            this.bgMusic.loop = true;
        };
        
        console.log('✅ Enhanced audio system initialized');
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
                ⏱️ Duration: ~1 minute
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
        
        console.log('🚀 Starting enhanced presentation...');
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
        if (window.enhancedTimeline) {
            window.enhancedTimeline.restart();
            console.log('✅ Enhanced timeline started');
        }
    }
    
    playChunk(filename) {
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
        console.log(`🎵 Playing: ${filename}`);
        
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

// Enhanced magic particles
function createEnhancedMagic() {
    const magicContainer = document.createElement('div');
    magicContainer.id = 'magic-particles';
    document.body.appendChild(magicContainer);
    
    // Create glowing particles
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        magicContainer.appendChild(particle);
        
        gsap.to(particle, {
            y: 'random(-30, 30)',
            x: 'random(-20, 20)',
            scale: 'random(0.5, 1.5)',
            opacity: 'random(0.2, 0.6)',
            duration: 'random(15, 25)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
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

// Main animation
window.addEventListener('load', () => {
    console.log('✅ Initializing enhanced final animation...');
    
    // Load enhanced styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'enhanced-styles.css';
    document.head.appendChild(link);
    
    // Initialize systems
    audioManager = new EnhancedAudioManager();
    const progressBar = createEnhancedProgress();
    const transitionCircle = createTransitionOverlay();
    createEnhancedMagic();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    // Enhanced timeline with chunked audio
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
    window.enhancedTimeline = timeline;
    
    // SCENE 1: Enhanced Introduction (0-20s)
    timeline
        // Play welcome chunk
        .call(() => audioManager.playChunk('vo-intro-welcome.mp3'))
        
        // Dramatic entrance
        .from('.video-frame', {
            scale: 0.8,
            opacity: 0,
            rotationY: 15,
            duration: 1.2,
            ease: 'power3.out'
        })
        
        // Hero image parallax zoom
        .from('.hero-video img', {
            scale: 1.2,
            duration: 20,
            ease: 'power1.inOut'
        }, 0)
        
        // Card slides up with blur
        .from('.sliding-card', {
            y: 150,
            opacity: 0,
            filter: 'blur(10px)',
            duration: 1.2,
            ease: 'power3.out'
        }, 0.5)
        
        // Title with stagger effect
        .from('.main-title', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
        }, 1)
        
        // Play feedback chunk
        .call(() => audioManager.playChunk('vo-intro-feedback.mp3'), null, 4)
        
        // Subtitle fade
        .from('.subtitle', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out'
        }, 4.5)
        
        // Benefits badges with spring animation
        .from('.highlight', {
            opacity: 0,
            scale: 0,
            rotation: 'random(-20, 20)',
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        }, 7)
        
        // Play investing chunk
        .call(() => audioManager.playChunk('vo-intro-investing.mp3'), null, 11)
        
        // Line animation with glow
        .fromTo('.animated-line', 
            { scaleX: 0, transformOrigin: 'left' },
            { 
                scaleX: 1, 
                duration: 1.5,
                ease: 'power2.inOut',
                onComplete: () => {
                    gsap.to('.animated-line', {
                        filter: 'drop-shadow(0 0 20px rgba(20, 184, 166, 1))',
                        duration: 0.5,
                        yoyo: true,
                        repeat: 1
                    });
                }
            }, 13)
        
        // Fancy scene transition
        .to(transitionCircle, {
            scale: 15,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.in',
            transformOrigin: '50% 50%',
            left: '50%',
            top: '50%'
        }, 19)
        
        .to('#scene1', {
            opacity: 0,
            duration: 0.3
        }, 19.3)
        
        .set('#scene1', { visibility: 'hidden' }, 19.6)
        
        // SCENE 2: Enhanced Timeline (20-40s)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 20)
        
        .to(transitionCircle, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, 20)
        
        // Play dates intro
        .call(() => audioManager.playChunk('vo-dates-intro.mp3'), null, 20.2)
        
        // Panels slide with perspective
        .from('.split-screen', {
            opacity: 0,
            scale: 0.95,
            duration: 0.8
        }, 20.2)
        
        .from('.left-panel', {
            x: -100,
            opacity: 0,
            rotationY: -15,
            duration: 1,
            ease: 'power3.out'
        }, 20.5)
        
        .from('.right-panel', {
            x: 100,
            opacity: 0,
            rotationY: 15,
            duration: 1,
            ease: 'power3.out'
        }, 20.5)
        
        // Title with underline animation
        .from('#scene2 .section-title', {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: 'power3.out'
        }, 21.2)
        
        // Play January chunk
        .call(() => audioManager.playChunk('vo-dates-january.mp3'), null, 23.2)
        
        // First date group with slide
        .from('.date-group:nth-child(1)', {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, 23.5)
        
        .from('.date-group:nth-child(1) .date', {
            scale: 0,
            duration: 0.5,
            ease: 'back.out(2)'
        }, 24)
        
        .from('.date-group:nth-child(1) .checkmark', {
            scale: 0,
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(2)'
        }, 24.5)
        
        // Play March chunk
        .call(() => audioManager.playChunk('vo-dates-march.mp3'), null, 29.2)
        
        // Second date group
        .from('.date-group:nth-child(2)', {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, 29.5)
        
        .from('.date-group:nth-child(2) .date', {
            scale: 0,
            duration: 0.5,
            ease: 'back.out(2)'
        }, 30)
        
        .from('.date-group:nth-child(2) .checkmark', {
            scale: 0,
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(2)'
        }, 30.5)
        
        // Play December chunk
        .call(() => audioManager.playChunk('vo-dates-december.mp3'), null, 35.2)
        
        // Third date group
        .from('.date-group:nth-child(3)', {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, 35.5)
        
        .from('.date-group:nth-child(3) .date', {
            scale: 0,
            duration: 0.5,
            ease: 'back.out(2)'
        }, 36)
        
        .from('.date-group:nth-child(3) .checkmark', {
            scale: 0,
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(2)'
        }, 36.5)
        
        // Fancy transition to Scene 3
        .to('.left-panel', {
            x: -100,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in'
        }, 39.4)
        
        .to('.right-panel', {
            x: 100,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in'
        }, 39.4)
        
        .set('#scene2', { visibility: 'hidden' }, 40)
        
        // SCENE 3: Enhanced Benefits (40-62s)
        .set('#scene3', { opacity: 1, visibility: 'visible' }, 40)
        
        // Play benefits intro
        .call(() => audioManager.playChunk('vo-benefits-intro.mp3'), null, 40)
        
        // Scene 3 entrance
        .from('#scene3', {
            scale: 1.1,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, 40)
        
        // Title with gradient animation
        .from('#scene3 .section-title', {
            opacity: 0,
            y: -40,
            scale: 0.9,
            duration: 1,
            ease: 'power3.out'
        }, 40.5)
        
        // Play support chunk
        .call(() => audioManager.playChunk('vo-benefits-support.mp3'), null, 43)
        
        // Benefits cascade in
        .from('.benefit-item', {
            x: -80,
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            stagger: {
                each: 0.15,
                from: 'start'
            },
            ease: 'power3.out'
        }, 43.5)
        
        // Bullets pop
        .from('.bullet', {
            scale: 0,
            rotation: 'random(-180, 180)',
            duration: 0.4,
            stagger: 0.1,
            ease: 'back.out(3)'
        }, 44)
        
        // Values slide in with shine
        .from('.value', {
            x: 50,
            opacity: 0,
            scale: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: 'back.out(2)'
        }, 44.5)
        
        // Play HSA chunk
        .call(() => audioManager.playChunk('vo-benefits-hsa.mp3'), null, 51)
        
        // Highlight HSA benefit
        .to('.benefit-item:nth-child(4)', {
            scale: 1.05,
            duration: 0.5,
            ease: 'power2.inOut'
        }, 51.5)
        
        .to('.benefit-item:nth-child(4)', {
            scale: 1,
            duration: 0.5,
            ease: 'power2.inOut'
        }, 52.5)
        
        // Play CTA chunk
        .call(() => audioManager.playChunk('vo-benefits-cta.mp3'), null, 57)
        
        // Final celebration
        .to('.value', {
            scale: 1.1,
            rotation: 'random(-5, 5)',
            duration: 0.4,
            stagger: 0.05,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 58)
        
        // Fade out for loop
        .to('#scene3', {
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: 'power2.in'
        }, 61)
        
        .set('#scene3', { visibility: 'hidden' }, 62);
    
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
                timeline.seek(20);
                break;
            case '3':
                timeline.seek(40);
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
    
    console.log('✅ Enhanced animation ready!');
    console.log('🎬 Total duration: ~62 seconds');
    console.log('🎵 Audio: 11 voiceover chunks + background music');
});

console.log('✅ Enhanced final animation loaded');