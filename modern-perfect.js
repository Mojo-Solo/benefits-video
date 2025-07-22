// MODERN PERFECT - Brand new sleek theme with flawless execution
console.log('✨ Loading modern perfect benefits animation...');

window.addEventListener('load', () => {
    console.log('🚀 Creating modern sleek design with perfect execution...');
    
    // Modern sleek styling with guaranteed visibility
    const modernStyle = document.createElement('style');
    modernStyle.textContent = `
        /* Modern Perfect Text Visibility - Bulletproof */
        .date, .description, .bonus, .text, .bullet, .value, .section-title {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        /* Scene 2 - Dark Premium Theme */
        .date {
            color: #00d4ff !important;
            font-size: 1.75rem !important;
            font-weight: 800 !important;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.6) !important;
            letter-spacing: -0.02em !important;
            margin: 0 0 1rem 0 !important;
        }
        
        .description {
            color: rgba(255, 255, 255, 0.95) !important;
            font-size: 1.2rem !important;
            font-weight: 400 !important;
            line-height: 1.7 !important;
            margin: 0 0 1.5rem 0 !important;
        }
        
        .bonus {
            display: inline-flex !important;
            align-items: center !important;
            color: #1a1a1a !important;
            background: linear-gradient(135deg, #ff6b35 0%, #ffa726 100%) !important;
            padding: 0.75rem 1.5rem !important;
            border-radius: 50px !important;
            font-size: 0.95rem !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.1em !important;
            box-shadow: 
                0 8px 32px rgba(255, 107, 53, 0.4),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
            margin: 0 !important;
        }
        
        /* Scene 3 - Vibrant Modern Theme */
        #scene3 {
            background: 
                radial-gradient(circle at 25% 25%, #667eea 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, #764ba2 0%, transparent 50%),
                linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%) !important;
            color: #ffffff !important;
            padding: 5rem !important;
            position: relative !important;
            overflow: hidden !important;
            flex-direction: column !important;
            min-height: 100vh !important;
        }
        
        #scene3::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: 
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>') !important;
            opacity: 0.3 !important;
            pointer-events: none !important;
        }
        
        #scene3::after {
            content: '' !important;
            position: absolute !important;
            top: -50% !important;
            left: -50% !important;
            width: 200% !important;
            height: 200% !important;
            background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent) !important;
            animation: modernRotate 20s linear infinite !important;
            pointer-events: none !important;
        }
        
        @keyframes modernRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        #scene3 .section-title {
            color: #ffffff !important;
            font-size: 3.5rem !important;
            font-weight: 900 !important;
            text-align: center !important;
            margin: 0 0 4rem 0 !important;
            text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3) !important;
            letter-spacing: -0.05em !important;
            background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            position: relative !important;
        }
        
        .benefits-list {
            list-style: none !important;
            width: 100% !important;
            max-width: 1200px !important;
            margin: 0 auto !important;
            position: relative !important;
            z-index: 3 !important;
            display: grid !important;
            gap: 2rem !important;
        }
        
        .benefit-item {
            display: flex !important;
            align-items: center !important;
            gap: 2rem !important;
            padding: 2.5rem !important;
            background: 
                linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.25) 0%, 
                    rgba(255, 255, 255, 0.1) 100%) !important;
            border-radius: 24px !important;
            backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05) inset !important;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
            position: relative !important;
            overflow: hidden !important;
        }
        
        .benefit-item::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%, 
                transparent 50%, 
                rgba(255, 255, 255, 0.1) 100%) !important;
            transform: translateX(-100%) !important;
            transition: transform 0.6s ease !important;
        }
        
        .benefit-item:hover {
            transform: translateY(-8px) scale(1.02) !important;
            box-shadow: 
                0 30px 60px rgba(0, 0, 0, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
        }
        
        .benefit-item:hover::before {
            transform: translateX(100%) !important;
        }
        
        .bullet {
            width: 4rem !important;
            height: 4rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 2rem !important;
            background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.3) 0%, 
                rgba(255, 255, 255, 0.1) 100%) !important;
            border-radius: 50% !important;
            backdrop-filter: blur(10px) !important;
            border: 2px solid rgba(255, 255, 255, 0.3) !important;
            box-shadow: 
                0 10px 30px rgba(0, 0, 0, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
            flex-shrink: 0 !important;
            position: relative !important;
        }
        
        .text {
            color: rgba(255, 255, 255, 0.95) !important;
            font-size: 1.3rem !important;
            font-weight: 500 !important;
            line-height: 1.6 !important;
            flex: 1 !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        
        .value {
            display: inline-flex !important;
            align-items: center !important;
            color: #1a1a1a !important;
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%) !important;
            padding: 1rem 2rem !important;
            border-radius: 50px !important;
            font-size: 1rem !important;
            font-weight: 800 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.1em !important;
            white-space: nowrap !important;
            box-shadow: 
                0 10px 30px rgba(255, 215, 0, 0.4),
                0 0 0 1px rgba(255, 255, 255, 0.2) inset !important;
            border: 2px solid rgba(255, 255, 255, 0.1) !important;
            position: relative !important;
        }
        
        /* Scene 2 - Premium Dark Theme */
        .left-panel {
            background: 
                radial-gradient(circle at 30% 30%, #1a1a2e 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, #16213e 0%, transparent 50%),
                linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%) !important;
            color: white !important;
            position: relative !important;
            overflow: hidden !important;
            padding: 5rem !important;
            border-radius: 0 30px 30px 0 !important;
        }
        
        .left-panel::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: 
                linear-gradient(45deg, transparent 49%, rgba(0, 212, 255, 0.1) 50%, transparent 51%),
                linear-gradient(-45deg, transparent 49%, rgba(255, 107, 53, 0.1) 50%, transparent 51%) !important;
            background-size: 40px 40px !important;
            animation: modernPulse 8s ease-in-out infinite !important;
            pointer-events: none !important;
        }
        
        @keyframes modernPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.1; }
        }
        
        .right-panel {
            position: relative !important;
            overflow: hidden !important;
            border-radius: 30px 0 0 30px !important;
        }
        
        .right-panel img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            filter: brightness(1.1) contrast(1.2) saturate(1.1) !important;
        }
        
        .date-group {
            background: 
                linear-gradient(135deg, 
                    rgba(0, 212, 255, 0.15) 0%, 
                    rgba(255, 255, 255, 0.1) 100%) !important;
            border-radius: 20px !important;
            backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(0, 212, 255, 0.3) !important;
            padding: 2.5rem !important;
            margin-bottom: 2.5rem !important;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
            position: relative !important;
            overflow: hidden !important;
        }
        
        .date-group::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(135deg, 
                rgba(0, 212, 255, 0.1) 0%, 
                transparent 50%, 
                rgba(255, 107, 53, 0.1) 100%) !important;
            transform: translateX(-100%) !important;
            transition: transform 0.6s ease !important;
        }
        
        .date-group:hover {
            transform: translateX(15px) scale(1.02) !important;
            box-shadow: 
                0 20px 50px rgba(0, 212, 255, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
            border-color: rgba(0, 212, 255, 0.6) !important;
        }
        
        .date-group:hover::before {
            transform: translateX(100%) !important;
        }
        
        .checkmark {
            width: 28px !important;
            height: 28px !important;
            margin-left: 1.5rem !important;
            filter: drop-shadow(0 4px 15px rgba(0, 212, 255, 0.8)) !important;
            opacity: 1 !important;
            visibility: visible !important;
        }
        
        #scene2 .section-title {
            color: #ffffff !important;
            font-size: 3rem !important;
            font-weight: 900 !important;
            text-shadow: 0 4px 30px rgba(0, 212, 255, 0.5) !important;
            margin: 0 0 4rem 0 !important;
            letter-spacing: -0.03em !important;
            position: relative !important;
        }
        
        /* Enhanced transitions */
        .scene-transition-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            pointer-events: none !important;
            z-index: 1000 !important;
        }
        
        .transition-circle {
            position: absolute !important;
            width: 20px !important;
            height: 20px !important;
            border-radius: 50% !important;
            background: radial-gradient(circle, #667eea 0%, #764ba2 100%) !important;
            transform: scale(0) !important;
            opacity: 0 !important;
        }
        
        /* Proper scene positioning */
        .scene {
            position: absolute !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }
        
        #scene3 {
            flex-direction: column !important;
            justify-content: center !important;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .date { font-size: 1.5rem !important; }
            .description { font-size: 1.1rem !important; }
            .text { font-size: 1.1rem !important; }
            #scene3 .section-title { font-size: 2.5rem !important; }
            #scene2 .section-title { font-size: 2.5rem !important; }
            .benefit-item { 
                flex-direction: column !important;
                text-align: center !important;
                gap: 1.5rem !important;
            }
        }
    `;
    document.head.appendChild(modernStyle);
    
    // Bulletproof text visibility system
    const ensureVisibility = () => {
        const allTextElements = document.querySelectorAll('.date, .description, .bonus, .text, .bullet, .value, .section-title');
        allTextElements.forEach(el => {
            el.style.setProperty('opacity', '1', 'important');
            el.style.setProperty('visibility', 'visible', 'important');
            el.style.setProperty('display', el.classList.contains('bullet') || el.classList.contains('value') || el.classList.contains('bonus') ? 'inline-flex' : 'block', 'important');
        });
    };
    
    // Ultra-frequent visibility maintenance
    setInterval(ensureVisibility, 100);
    ensureVisibility();
    
    console.log('✅ Modern perfect styling applied with bulletproof text visibility');
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

// Enhanced Audio Manager
class ModernPerfectAudioManager {
    constructor() {
        this.bgMusic = null;
        this.currentVoiceover = null;
        this.isPlaying = false;
        this.startButton = null;
        
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
        this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2024/10/14/audio_29797b8a18.mp3');
        this.bgMusic.volume = 0.05;
        this.bgMusic.loop = true;
        
        this.bgMusic.onerror = () => {
            console.log('Trying fallback music...');
            this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3');
            this.bgMusic.volume = 0.05;
            this.bgMusic.loop = true;
        };
        
        console.log('✅ Modern perfect audio initialized');
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
            background: 
                radial-gradient(circle at 25% 25%, #667eea 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, #764ba2 0%, transparent 50%),
                linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
            backdrop-filter: blur(20px);
        `;
        
        const startCard = document.createElement('div');
        startCard.style.cssText = `
            background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.25) 0%, 
                rgba(255, 255, 255, 0.1) 100%);
            backdrop-filter: blur(30px);
            padding: 5rem 6rem;
            border-radius: 30px;
            text-align: center;
            box-shadow: 
                0 40px 100px rgba(0, 0, 0, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.2) inset;
            border: 1px solid rgba(255, 255, 255, 0.2);
            animation: modernFloat 4s ease-in-out infinite;
            max-width: 700px;
            position: relative;
            overflow: hidden;
        `;
        
        startCard.innerHTML = `
            <h2 style="color: white; font-size: 3.5rem; margin-bottom: 2rem; font-weight: 900; text-shadow: 0 4px 30px rgba(0,0,0,0.3); letter-spacing: -0.03em;">
                2025 Employee Benefits
            </h2>
            <p style="color: rgba(255,255,255,0.95); font-size: 1.6rem; margin-bottom: 4rem; font-weight: 300; line-height: 1.5;">
                Next-Generation Coverage • Revolutionary Savings • Your Amazing Future
            </p>
            <button id="start-button" style="
                background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
                color: #1a1a1a;
                border: none;
                padding: 1.5rem 5rem;
                font-size: 1.6rem;
                font-weight: 800;
                border-radius: 50px;
                cursor: pointer;
                box-shadow: 0 15px 50px rgba(255, 215, 0, 0.5);
                transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                text-transform: uppercase;
                letter-spacing: 0.15em;
                border: 2px solid rgba(255, 255, 255, 0.1);
            ">🚀 Experience The Future</button>
            <p style="color: rgba(255,255,255,0.8); margin-top: 3rem; font-size: 1.1rem; line-height: 1.6;">
                🎧 Immersive audio experience recommended<br>
                ⏱️ Duration: ~80 seconds of pure inspiration<br>
                ✨ Modern sleek design with perfect execution
            </p>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes modernFloat {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-15px) scale(1.01); }
            }
            
            #start-button:hover {
                transform: translateY(-5px) scale(1.05);
                box-shadow: 0 25px 80px rgba(255, 215, 0, 0.7);
                background: linear-gradient(135deg, #ffed4e 0%, #ffd700 100%);
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
        
        console.log('🚀 Starting modern perfect presentation...');
        this.isPlaying = true;
        
        gsap.to(this.startButton, {
            scale: 1.15,
            opacity: 0,
            duration: 1,
            ease: 'power3.inOut',
            onComplete: () => this.startButton.remove()
        });
        
        if (this.bgMusic) {
            this.bgMusic.play().catch(e => console.log('⚠️ Music blocked:', e.message));
        }
        
        if (window.modernTimeline) {
            window.modernTimeline.restart();
            console.log('✅ Modern perfect timeline started');
        }
    }
    
    playChunk(filename, duration) {
        if (this.currentVoiceover) {
            this.currentVoiceover.pause();
            this.currentVoiceover = null;
        }
        
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

let audioManager;

function createModernTransition() {
    const overlay = document.createElement('div');
    overlay.className = 'scene-transition-overlay';
    overlay.innerHTML = '<div class="transition-circle"></div>';
    document.body.appendChild(overlay);
    return overlay.querySelector('.transition-circle');
}

function createModernProgress() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background: rgba(0, 0, 0, 0.2);
        z-index: 9999;
        overflow: hidden;
    `;
    
    const bar = document.createElement('div');
    bar.id = 'progress-bar';
    bar.style.cssText = `
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #ffd700);
        box-shadow: 0 0 30px rgba(102, 126, 234, 0.8);
        transition: width 0.3s ease;
    `;
    
    container.appendChild(bar);
    document.body.appendChild(container);
    
    return bar;
}

// Perfect execution animation
window.addEventListener('load', () => {
    console.log('✅ Initializing modern perfect animation...');
    
    audioManager = new ModernPerfectAudioManager();
    const progressBar = createModernProgress();
    const transitionCircle = createModernTransition();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    const dateGroups = document.querySelectorAll('.left-panel .date-group');
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    console.log('📊 Elements found:');
    console.log('  - Date groups:', dateGroups.length);
    console.log('  - Benefit items:', benefitItems.length);
    
    // Perfect timing timeline
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 4,
        defaults: { ease: 'power3.out' },
        paused: true,
        onUpdate: () => {
            const progress = timeline.progress() * 100;
            progressBar.style.width = progress + '%';
        }
    });
    
    window.modernTimeline = timeline;
    
    // SCENE 1: Spectacular Introduction (0-21.03s)
    timeline
        .call(() => audioManager.playChunk('vo-intro-welcome.mp3', 5.38))
        
        .from('.video-frame', {
            scale: 0.7,
            opacity: 0,
            rotationY: 25,
            duration: 1.5,
            ease: 'power4.out'
        })
        
        .from('.hero-video img', {
            scale: 1.2,
            duration: 21,
            ease: 'power1.inOut'
        }, 0)
        
        .from('.sliding-card', {
            y: 200,
            opacity: 0,
            filter: 'blur(15px)',
            duration: 1.5,
            ease: 'power4.out'
        }, 0.7)
        
        .from('.main-title', {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 1.2,
            ease: 'power4.out'
        }, 1.2)
        
        .call(() => audioManager.playChunk('vo-intro-feedback.mp3', 7.13), null, 5.88)
        
        .from('.subtitle', {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: 'power3.out'
        }, 6.8)
        
        .from('.highlight', {
            opacity: 0,
            scale: 0,
            rotation: 'random(-30, 30)',
            duration: 1,
            stagger: 0.25,
            ease: 'back.out(2)'
        }, 8.5)
        
        .call(() => audioManager.playChunk('vo-intro-investing.mp3', 7.52), null, 13.51)
        
        .fromTo('.animated-line', 
            { scaleX: 0, transformOrigin: 'left' },
            { 
                scaleX: 1, 
                duration: 2.5,
                ease: 'power3.out'
            }, 14.2)
        
        .to('.highlight', {
            scale: 1.1,
            duration: 0.6,
            stagger: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 16.5)
        
        .to(transitionCircle, {
            scale: 20,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.in'
        }, 20.3)
        
        .to('#scene1', {
            opacity: 0,
            duration: 0.4
        }, 20.6)
        
        .set('#scene1', { visibility: 'hidden' }, 21.03)
        
        // SCENE 2: Premium Dark Experience (21.53-49.18s)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 21.53)
        
        .to(transitionCircle, {
            scale: 0,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out'
        }, 21.53)
        
        .call(() => {
            audioManager.playChunk('vo-dates-intro.mp3', 3.37);
            console.log('🗓️ SYNC: Premium timeline intro');
        }, null, 21.53)
        
        .from('.split-screen', {
            opacity: 0,
            scale: 0.9,
            duration: 1
        }, 21.53)
        
        .from('.left-panel', {
            x: -120,
            opacity: 0,
            rotationY: -20,
            duration: 1.3,
            ease: 'power4.out'
        }, 21.8)
        
        .from('.right-panel', {
            x: 120,
            opacity: 0,
            rotationY: 20,
            duration: 1.3,
            ease: 'power4.out'
        }, 21.8)
        
        .from('#scene2 .section-title', {
            y: -50,
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        }, 22.5)
        
        .call(() => {
            audioManager.playChunk('vo-dates-january.mp3', 7.97);
            console.log('🗓️ SYNC: January - Premium animation');
        }, null, 25.40)
        
        .from(dateGroups[0], {
            x: -80,
            scale: 0.8,
            opacity: 0,
            duration: 1.4,
            ease: 'power4.out'
        }, 25.40)
        
        .call(() => {
            audioManager.playChunk('vo-dates-march.mp3', 7.52);
            console.log('🗓️ SYNC: March - Premium animation');
        }, null, 33.87)
        
        .from(dateGroups[1], {
            x: -80,
            scale: 0.8,
            opacity: 0,
            duration: 1.4,
            ease: 'power4.out'
        }, 33.87)
        
        .call(() => {
            audioManager.playChunk('vo-dates-december.mp3', 7.29);
            console.log('🗓️ SYNC: December - Premium animation');
        }, null, 41.89)
        
        .from(dateGroups[2], {
            x: -80,
            scale: 0.8,
            opacity: 0,
            duration: 1.4,
            ease: 'power4.out'
        }, 41.89)
        
        .to(dateGroups, {
            x: 8,
            duration: 1.2,
            stagger: 0.15,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 46.5)
        
        .to('.left-panel', {
            x: -120,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.in'
        }, 48.48)
        
        .to('.right-panel', {
            x: 120,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.in'
        }, 48.48)
        
        .to('#scene2', {
            opacity: 0,
            duration: 0.4
        }, 48.8)
        
        .set('#scene2', { visibility: 'hidden' }, 49.18)
        
        // SCENE 3: Vibrant Modern Showcase (49.68-78.25s)
        .set('#scene3', { 
            opacity: 1, 
            visibility: 'visible',
            display: 'block' 
        }, 49.68)
        
        .call(() => {
            audioManager.playChunk('vo-benefits-intro.mp3', 4.78);
            console.log('🎯 Starting Scene 3 - VIBRANT MODERN');
        }, null, 49.68)
        
        .fromTo('#scene3', {
            scale: 1.15,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power4.out'
        }, 49.68)
        
        .from('#scene3 .section-title', {
            y: -60,
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
        }, 50.2)
        
        .call(() => {
            audioManager.playChunk('vo-benefits-support.mp3', 9.04);
            console.log('🎯 Benefits showcase - VIBRANT MODERN');
        }, null, 54.96)
        
        .from([benefitItems[0], benefitItems[1], benefitItems[2]], {
            x: -100,
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            stagger: 0.25,
            ease: 'power4.out'
        }, 55.5)
        
        .call(() => {
            audioManager.playChunk('vo-benefits-hsa.mp3', 7.37);
            console.log('🎯 HSA showcase - VIBRANT MODERN');
        }, null, 64.50)
        
        .from([benefitItems[3], benefitItems[4]], {
            x: -100,
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            stagger: 0.25,
            ease: 'power4.out'
        }, 65)
        
        .to(benefitItems[3], {
            scale: 1.05,
            duration: 0.8,
            yoyo: true,
            repeat: 1,
            ease: 'power3.inOut'
        }, 67.5)
        
        .call(() => {
            audioManager.playChunk('vo-benefits-cta.mp3', 5.88);
            console.log('🎯 Grand finale - VIBRANT MODERN');
        }, null, 72.37)
        
        .to([benefitItems[0], benefitItems[1], benefitItems[2], benefitItems[3], benefitItems[4]], {
            scale: 1.03,
            duration: 0.7,
            stagger: 0.08,
            yoyo: true,
            repeat: 1,
            ease: 'power3.inOut'
        }, 73.5)
        
        .to('#scene3', {
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: 'power3.in'
        }, 77)
        
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
    
    console.log('✅ Modern perfect animation ready!');
    console.log('🚀 Absolutely flawless execution with bulletproof text visibility!');
});

console.log('✨ Modern perfect animation loaded - Ready to impress!');