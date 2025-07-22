// BEAUTIFUL VIDEOGEN - Absolutely stunning design using videogen.md tokens
console.log('🎬 Loading beautiful videogen design...');

window.addEventListener('load', () => {
    console.log('✨ Creating absolutely beautiful videogen styling...');
    
    // Beautiful videogen styling with professional polish
    const beautifulStyle = document.createElement('style');
    beautifulStyle.textContent = `
        /* VIDEOGEN DESIGN TOKENS */
        :root {
            --navy: #0F304A;
            --teal: #1F6F8B;
            --mid-blue: #0C4F7A;
            --sky: #6AB0C9;
            --white: #FFFFFF;
            --navy-light: #1E4A6B;
            --teal-light: #2E8FAE;
            --shadow-soft: 0 8px 40px rgba(15, 48, 74, 0.12);
            --shadow-medium: 0 12px 48px rgba(15, 48, 74, 0.18);
            --shadow-strong: 0 20px 64px rgba(15, 48, 74, 0.25);
        }
        
        /* BULLETPROOF TEXT VISIBILITY */
        .date, .description, .bonus, .text, .bullet, .value, .section-title {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        /* BEAUTIFUL VIDEOGEN FRAME */
        body {
            margin: 0;
            padding: 24px;
            background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            font-feature-settings: "kern" 1;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        .video-container {
            position: relative;
            width: 100%;
            max-width: 1920px;
            margin: 0 auto;
            background: var(--white);
            border: 24px solid var(--navy);
            border-top: 28px solid var(--navy);
            border-bottom: 28px solid var(--navy);
            border-radius: 16px;
            box-shadow: var(--shadow-strong);
            overflow: hidden;
        }
        
        .video-container::before {
            content: '';
            position: absolute;
            top: -4px;
            left: -24px;
            right: -24px;
            height: 4px;
            background: linear-gradient(90deg, var(--teal) 0%, var(--teal-light) 50%, var(--teal) 100%);
            z-index: 10;
            border-radius: 2px;
            box-shadow: 0 0 8px rgba(31, 111, 139, 0.5);
        }
        
        .video-container::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: -24px;
            right: -24px;
            height: 4px;
            background: linear-gradient(90deg, var(--teal) 0%, var(--teal-light) 50%, var(--teal) 100%);
            z-index: 10;
            border-radius: 2px;
            box-shadow: 0 0 8px rgba(31, 111, 139, 0.5);
        }
        
        .video-frame {
            position: relative;
            width: 100%;
            height: 100vh;
            max-height: 1080px;
            aspect-ratio: 16/9;
            overflow: hidden;
            background: var(--white);
        }
        
        /* BEAUTIFUL LOGO BUG */
        .logo-bug {
            position: fixed;
            bottom: 64px;
            left: 50%;
            transform: translateX(-50%);
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
            color: var(--white);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 18px;
            z-index: 10000;
            box-shadow: 
                0 8px 32px rgba(15, 48, 74, 0.4),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-bug:hover {
            transform: translateX(-50%) translateY(-2px) scale(1.05);
            box-shadow: 
                0 12px 40px rgba(15, 48, 74, 0.5),
                0 0 0 1px rgba(255, 255, 255, 0.15) inset;
        }
        
        /* SCENE 1 - Hero Enhancement */
        .sliding-card {
            backdrop-filter: blur(20px);
            background: rgba(255, 255, 255, 0.95) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            box-shadow: var(--shadow-medium) !important;
            padding: 2rem 3rem !important;
            max-width: 85% !important;
        }
        
        .main-title {
            background: linear-gradient(135deg, var(--mid-blue) 0%, var(--navy) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 800 !important;
            letter-spacing: -0.02em !important;
        }
        
        .subtitle {
            color: var(--sky) !important;
            font-weight: 500 !important;
        }
        
        .highlight {
            background: linear-gradient(135deg, var(--teal) 0%, var(--sky) 100%) !important;
            color: var(--white) !important;
            padding: 0.5rem 1rem !important;
            border-radius: 8px !important;
            font-weight: 600 !important;
            box-shadow: 0 4px 16px rgba(31, 111, 139, 0.3) !important;
        }
        
        /* SCENE 2 - Perfect Centered Timeline */
        #scene2 {
            background: var(--white) !important;
            padding: 4rem !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-direction: column !important;
        }
        
        #scene2 .section-title {
            color: var(--mid-blue) !important;
            font-size: 2.5rem !important;
            font-weight: 600 !important;
            text-align: center !important;
            letter-spacing: -0.02em !important;
            margin: 0 0 3rem 0 !important;
            width: 100% !important;
        }
        
        .split-screen {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
            max-width: none !important;
        }
        
        .left-panel {
            background: transparent !important;
            position: relative !important;
            padding: 0 0 0 2rem !important;
            width: 100% !important;
            max-width: 700px !important;
            z-index: 2 !important;
            display: flex !important;
            flex-direction: column !important;
        }
        
        .left-panel::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 3px;
            background: linear-gradient(180deg, var(--teal) 0%, var(--sky) 100%);
            border-radius: 2px;
        }
        
        .date-group {
            background: var(--white) !important;
            border: 2px solid rgba(31, 111, 139, 0.1) !important;
            border-radius: 8px !important;
            padding: 1.5rem 1.5rem 1.5rem 2rem !important;
            margin: 0 0 2rem -1rem !important;
            position: relative !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 2px 8px rgba(15, 48, 74, 0.06) !important;
            width: auto !important;
        }
        
        .date-group::before {
            content: '';
            position: absolute;
            left: -8px;
            top: 1.5rem;
            width: 14px;
            height: 14px;
            background: var(--teal);
            border: 3px solid var(--white);
            border-radius: 50%;
            box-shadow: 0 0 0 2px rgba(31, 111, 139, 0.2);
            z-index: 3;
        }
        
        .date-group:hover {
            background: rgba(248, 250, 252, 1) !important;
            border-color: var(--teal) !important;
            transform: translateX(8px) !important;
            box-shadow: 0 4px 16px rgba(15, 48, 74, 0.12) !important;
        }
        
        .date-group:hover::before {
            background: var(--sky);
            transform: scale(1.2);
        }
        
        .date {
            color: var(--navy) !important;
            font-size: 1.3rem !important;
            font-weight: 700 !important;
            margin: 0 0 0.5rem 0 !important;
        }
        
        .description {
            color: var(--mid-blue) !important;
            font-size: 1rem !important;
            font-weight: 400 !important;
            line-height: 1.5 !important;
            margin: 0 0 1rem 0 !important;
        }
        
        .bonus {
            display: inline-flex !important;
            align-items: center !important;
            color: var(--teal) !important;
            background: rgba(31, 111, 139, 0.1) !important;
            padding: 0.4rem 0.8rem !important;
            border-radius: 4px !important;
            font-size: 0.85rem !important;
            font-weight: 600 !important;
            border: 1px solid rgba(31, 111, 139, 0.2) !important;
            transition: all 0.2s ease !important;
        }
        
        .bonus:hover {
            background: var(--teal) !important;
            color: var(--white) !important;
        }
        
        .checkmark {
            width: 16px !important;
            height: 16px !important;
            margin-left: 0.5rem !important;
            opacity: 0.7 !important;
            visibility: visible !important;
        }
        
        .right-panel {
            display: none !important;
        }
        
        /* SCENE 3 - Perfect Centered Benefits */
        #scene3 {
            background: rgba(248, 250, 252, 1) !important;
            color: var(--mid-blue) !important;
            padding: 4rem !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-direction: column !important;
        }
        
        #scene3 .section-title {
            color: var(--navy) !important;
            font-size: 2.5rem !important;
            font-weight: 600 !important;
            text-align: center !important;
            letter-spacing: -0.02em !important;
            margin: 0 0 3rem 0 !important;
            width: 100% !important;
        }
        
        .benefits-list {
            list-style: none !important;
            width: 100% !important;
            max-width: 900px !important;
            margin: 0 auto !important;
            padding: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 1rem !important;
        }
        
        .benefit-item {
            display: flex !important;
            align-items: center !important;
            gap: 1.5rem !important;
            padding: 1.25rem 1.5rem !important;
            margin: 0 !important;
            background: var(--white) !important;
            border: 1px solid rgba(31, 111, 139, 0.1) !important;
            border-radius: 6px !important;
            transition: all 0.2s ease !important;
            box-shadow: 0 1px 3px rgba(15, 48, 74, 0.05) !important;
            width: auto !important;
        }
        
        .benefit-item:hover {
            border-color: var(--teal) !important;
            box-shadow: 0 2px 8px rgba(15, 48, 74, 0.1) !important;
            transform: translateX(4px) !important;
        }
        
        .bullet {
            width: 2.5rem !important;
            height: 2.5rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 1.25rem !important;
            background: var(--teal) !important;
            color: var(--white) !important;
            border-radius: 6px !important;
            flex-shrink: 0 !important;
            transition: all 0.2s ease !important;
        }
        
        .benefit-item:hover .bullet {
            background: var(--navy) !important;
            transform: scale(1.05) !important;
        }
        
        .text {
            color: var(--mid-blue) !important;
            font-size: 1.05rem !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            flex: 1 !important;
        }
        
        .benefit-item:hover .text {
            color: var(--navy) !important;
        }
        
        .value {
            display: inline-flex !important;
            align-items: center !important;
            color: var(--teal) !important;
            background: rgba(31, 111, 139, 0.08) !important;
            padding: 0.4rem 0.75rem !important;
            border-radius: 4px !important;
            font-size: 0.85rem !important;
            font-weight: 600 !important;
            white-space: nowrap !important;
            border: 1px solid rgba(31, 111, 139, 0.15) !important;
            transition: all 0.2s ease !important;
        }
        
        .benefit-item:hover .value {
            background: var(--teal) !important;
            color: var(--white) !important;
            border-color: var(--teal) !important;
        }
        
        /* ENHANCED SCENE TRANSITIONS */
        .scene {
            position: absolute !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* RESPONSIVE ENHANCEMENTS */
        @media (max-width: 768px) {
            .date { font-size: 1.4rem !important; }
            .description { font-size: 1rem !important; }
            .text { font-size: 1.1rem !important; }
            #scene3 .section-title { font-size: 2.5rem !important; }
            .benefit-item { 
                flex-direction: column !important;
                text-align: center !important;
                gap: 1.5rem !important;
                padding: 1.5rem !important;
            }
            .bullet {
                width: 3rem !important;
                height: 3rem !important;
                font-size: 1.5rem !important;
            }
        }
        
        /* BEAUTIFUL MICRO-ANIMATIONS */
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-2px); }
        }
        
        .logo-bug {
            animation: float 4s ease-in-out infinite;
        }
        
        .highlight {
            animation: pulse 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(beautifulStyle);
    
    // Enhanced bulletproof text visibility system
    const forceTextVisible = () => {
        const allText = document.querySelectorAll('.date, .description, .bonus, .text, .bullet, .value, .section-title');
        allText.forEach(el => {
            el.style.setProperty('opacity', '1', 'important');
            el.style.setProperty('visibility', 'visible', 'important');
            el.style.setProperty('display', 'block', 'important');
            
            if (el.classList.contains('bullet') || el.classList.contains('value') || el.classList.contains('bonus')) {
                el.style.setProperty('display', 'inline-flex', 'important');
            }
            if (el.classList.contains('bullet')) {
                el.style.setProperty('display', 'flex', 'important');
            }
        });
    };
    
    // Enhanced dynamic centering system
    const centerBenefitItems = () => {
        const benefitItems = document.querySelectorAll('.benefit-item');
        benefitItems.forEach(item => {
            const parent = item.parentElement;
            if (parent) {
                const parentWidth = parent.getBoundingClientRect().width;
                const itemWidth = item.getBoundingClientRect().width;
                const leftOffset = (parentWidth - itemWidth) / 2;
                
                item.style.setProperty('margin-left', `${leftOffset}px`, 'important');
                item.style.setProperty('margin-right', `${leftOffset}px`, 'important');
            }
        });
    };
    
    // Run visibility and centering systems
    forceTextVisible();
    setInterval(forceTextVisible, 50);
    
    setTimeout(centerBenefitItems, 100);
    setInterval(centerBenefitItems, 200);
    window.addEventListener('resize', centerBenefitItems);
    
    console.log('✨ Beautiful videogen styling applied with enhanced visual design');
});

// Load GSAP with enhanced plugins
const loadGSAP = () => {
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
loadGSAP();

// Enhanced Audio Manager with beautiful interactions
class BeautifulAudioManager {
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
        this.createBeautifulStartButton();
    }
    
    initAudio() {
        this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2024/10/14/audio_29797b8a18.mp3');
        this.bgMusic.volume = 0.04;
        this.bgMusic.loop = true;
        
        this.bgMusic.onerror = () => {
            this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3');
            this.bgMusic.volume = 0.04;
            this.bgMusic.loop = true;
        };
    }
    
    createBeautifulStartButton() {
        const overlay = document.createElement('div');
        overlay.id = 'start-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const startCard = document.createElement('div');
        startCard.style.cssText = `
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            padding: 4rem 5rem;
            border-radius: 24px;
            text-align: center;
            max-width: 600px;
            border: 2px solid rgba(31, 111, 139, 0.2);
            box-shadow: 0 24px 80px rgba(15, 48, 74, 0.3);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        
        startCard.innerHTML = `
            <h2 style="
                background: linear-gradient(135deg, var(--mid-blue) 0%, var(--navy) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-size: 2.75rem; 
                margin-bottom: 1.5rem; 
                font-weight: 800;
                letter-spacing: -0.02em;
            ">2025 Employee Benefits</h2>
            <p style="
                color: var(--sky); 
                font-size: 1.3rem; 
                margin-bottom: 3rem; 
                font-weight: 500;
                line-height: 1.4;
            ">Professional • Beautiful • Effective</p>
            <button id="start-button" style="
                background: linear-gradient(135deg, var(--teal) 0%, var(--sky) 100%);
                color: white;
                border: none;
                padding: 1.25rem 3rem;
                font-size: 1.2rem;
                font-weight: 600;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 8px 32px rgba(31, 111, 139, 0.4);
                letter-spacing: 0.01em;
            ">Start Beautiful Presentation</button>
            <p style="
                color: var(--mid-blue); 
                margin-top: 2rem; 
                font-size: 1rem;
                opacity: 0.8;
            ">Duration: 80 seconds<br>Professional videogen design</p>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            #start-button:hover {
                transform: translateY(-2px) scale(1.02);
                box-shadow: 0 12px 40px rgba(31, 111, 139, 0.5);
            }
            
            #start-overlay:hover #start-card {
                transform: scale(1.02);
            }
        `;
        document.head.appendChild(style);
        
        startCard.id = 'start-card';
        overlay.appendChild(startCard);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => this.startPresentation());
        this.startButton = overlay;
    }
    
    startPresentation() {
        if (this.isPlaying) return;
        
        console.log('🚀 Starting beautiful videogen presentation...');
        this.isPlaying = true;
        
        gsap.to(this.startButton, {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => this.startButton.remove()
        });
        
        if (this.bgMusic) {
            this.bgMusic.play().catch(e => console.log('Music blocked'));
        }
        
        if (window.beautifulTimeline) {
            window.beautifulTimeline.restart();
        }
        
        if (this.onStart) {
            this.onStart();
        }
    }
    
    playChunk(filename, duration) {
        if (this.currentVoiceover) {
            this.currentVoiceover.pause();
        }
        
        const audio = new Audio(filename);
        audio.volume = 1.0;
        this.currentVoiceover = audio;
        
        audio.play().catch(e => console.log(`Voiceover blocked: ${filename}`));
        console.log(`Playing: ${filename}`);
        
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

function createBeautifulVideoControls() {
    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'video-controls';
    controlsContainer.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background: rgba(15, 48, 74, 0.95);
        backdrop-filter: blur(20px);
        z-index: 9999;
        display: flex;
        align-items: center;
        padding: 0 2rem;
        gap: 1rem;
        opacity: 0;
        transform: translateY(100%);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-top: 2px solid var(--teal);
    `;
    
    // Enhanced progress bar
    const progressBg = document.createElement('div');
    progressBg.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    `;
    
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style.cssText = `
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, var(--teal) 0%, var(--sky) 100%);
        transition: width 0.3s ease;
        pointer-events: none;
        box-shadow: 0 0 8px rgba(31, 111, 139, 0.5);
    `;
    
    // Beautiful control buttons with enhanced styling
    const playBtn = document.createElement('button');
    playBtn.id = 'play-btn';
    playBtn.innerHTML = '⏸️';
    playBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.75rem;
        border-radius: 8px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
    `;
    
    const restartBtn = document.createElement('button');
    restartBtn.innerHTML = '⏮️';
    restartBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.75rem;
        border-radius: 8px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
    `;
    
    // Enhanced scene buttons
    const sceneContainer = document.createElement('div');
    sceneContainer.style.cssText = `
        display: flex;
        gap: 0.5rem;
        margin-left: 1rem;
    `;
    
    ['Scene 1', 'Scene 2', 'Scene 3'].forEach((label, index) => {
        const sceneBtn = document.createElement('button');
        sceneBtn.innerHTML = index + 1;
        sceneBtn.dataset.scene = index + 1;
        sceneBtn.style.cssText = `
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 0.9rem;
            cursor: pointer;
            padding: 0.5rem 0.75rem;
            border-radius: 6px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            min-width: 36px;
            font-weight: 600;
            backdrop-filter: blur(10px);
        `;
        sceneContainer.appendChild(sceneBtn);
    });
    
    // Enhanced time display
    const timeDisplay = document.createElement('div');
    timeDisplay.id = 'time-display';
    timeDisplay.innerHTML = '0:00 / 1:20';
    timeDisplay.style.cssText = `
        color: white;
        font-size: 0.95rem;
        font-family: 'SF Mono', monospace;
        margin-left: auto;
        margin-right: 1rem;
        font-weight: 500;
        opacity: 0.9;
    `;
    
    // Enhanced mute button
    const muteBtn = document.createElement('button');
    muteBtn.id = 'mute-btn';
    muteBtn.innerHTML = '🔊';
    muteBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.75rem;
        border-radius: 8px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
    `;
    
    // Assemble beautiful controls
    progressBg.appendChild(progressBar);
    controlsContainer.appendChild(progressBg);
    controlsContainer.appendChild(playBtn);
    controlsContainer.appendChild(restartBtn);
    controlsContainer.appendChild(sceneContainer);
    controlsContainer.appendChild(timeDisplay);
    controlsContainer.appendChild(muteBtn);
    
    document.body.appendChild(controlsContainer);
    
    // Enhanced hover styles
    const style = document.createElement('style');
    style.textContent = `
        #video-controls button:hover {
            background: rgba(255, 255, 255, 0.2) !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
            transform: translateY(-1px) scale(1.05);
            box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
        }
        
        #video-controls button[data-scene]:hover {
            background: linear-gradient(135deg, var(--teal) 0%, var(--sky) 100%) !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
        }
        
        #video-controls.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    return { controlsContainer, progressBar, playBtn, restartBtn, sceneContainer, timeDisplay, muteBtn, progressBg };
}

function createBeautifulTransition() {
    const overlay = document.createElement('div');
    overlay.className = 'scene-transition-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    `;
    
    const circle = document.createElement('div');
    circle.className = 'transition-circle';
    circle.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--navy) 0%, var(--teal) 100%);
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    `;
    
    overlay.appendChild(circle);
    document.body.appendChild(overlay);
    return circle;
}

// Enhanced main animation with beautiful transitions
window.addEventListener('load', () => {
    console.log('✨ Initializing beautiful videogen animation...');
    
    audioManager = new BeautifulAudioManager();
    const controls = createBeautifulVideoControls();
    const { controlsContainer, progressBar, playBtn, restartBtn, sceneContainer, timeDisplay, muteBtn, progressBg } = controls;
    const transitionCircle = createBeautifulTransition();
    
    // Set beautiful initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    const dateGroups = document.querySelectorAll('.left-panel .date-group');
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    console.log('Elements found:', { dateGroups: dateGroups.length, benefitItems: benefitItems.length });
    
    // Beautiful, smooth timeline with enhanced easing
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 3,
        defaults: { ease: 'power2.out' },
        paused: true,
        onUpdate: () => {
            const progress = timeline.progress() * 100;
            progressBar.style.width = progress + '%';
        }
    });
    
    window.beautifulTimeline = timeline;
    
    // SCENE 1: Beautiful Hero Introduction
    timeline
        .call(() => audioManager.playChunk('vo-intro-welcome.mp3', 5.38))
        
        .from('.video-frame', {
            scale: 0.95,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        })
        
        .from('.hero-video img', {
            scale: 1.1,
            duration: 21,
            ease: 'none'
        }, 0)
        
        .from('.sliding-card', {
            y: 120,
            opacity: 0,
            duration: 1.2,
            ease: 'back.out(1.7)'
        }, 0.5)
        
        .from('.main-title', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
        }, 1)
        
        .call(() => audioManager.playChunk('vo-intro-feedback.mp3', 7.13), null, 5.88)
        
        .from('.subtitle', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power3.out'
        }, 6.5)
        
        .from('.highlight', {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)'
        }, 8)
        
        .call(() => audioManager.playChunk('vo-intro-investing.mp3', 7.52), null, 13.51)
        
        .fromTo('.animated-line', 
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 1.8, ease: 'power3.out' }, 14)
        
        .to('.highlight', {
            scale: 1.05,
            duration: 0.5,
            stagger: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 16)
        
        // Beautiful transition
        .to(transitionCircle, {
            scale: 20,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.inOut'
        }, 20.5)
        
        .to('#scene1', { opacity: 0, duration: 0.4 }, 20.9)
        .set('#scene1', { visibility: 'hidden' }, 21.3)
        
        // SCENE 2: Beautiful Professional Dates - NO OPACITY ANIMATIONS ON TEXT
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 21.53)
        
        .to(transitionCircle, { scale: 0, opacity: 0, duration: 0.8 }, 21.53)
        
        .call(() => audioManager.playChunk('vo-dates-intro.mp3', 3.37), null, 21.53)
        
        .from('.split-screen', { 
            opacity: 0, 
            scale: 0.95, 
            duration: 1, 
            ease: 'power3.out' 
        }, 21.53)
        
        .from('.left-panel', { 
            x: -100, 
            opacity: 0, 
            duration: 1.2, 
            ease: 'power3.out' 
        }, 21.8)
        .from('.right-panel', { 
            x: 100, 
            opacity: 0, 
            duration: 1.2, 
            ease: 'power3.out' 
        }, 21.8)
        
        .from('#scene2 .section-title', { 
            y: -30, 
            opacity: 0, 
            duration: 1, 
            ease: 'power3.out' 
        }, 22.2)
        
        // January - animate container only, NO opacity animation
        .call(() => audioManager.playChunk('vo-dates-january.mp3', 7.97), null, 25.40)
        .from(dateGroups[0], { 
            x: -80, 
            scale: 0.9, 
            duration: 1.2, 
            ease: 'back.out(1.7)' 
        }, 25.40)
        
        // March - animate container only, NO opacity animation
        .call(() => audioManager.playChunk('vo-dates-march.mp3', 7.52), null, 33.87)
        .from(dateGroups[1], { 
            x: -80, 
            scale: 0.9, 
            duration: 1.2, 
            ease: 'back.out(1.7)' 
        }, 33.87)
        
        // December - animate container only, NO opacity animation
        .call(() => audioManager.playChunk('vo-dates-december.mp3', 7.29), null, 41.89)
        .from(dateGroups[2], { 
            x: -80, 
            scale: 0.9, 
            duration: 1.2, 
            ease: 'back.out(1.7)' 
        }, 41.89)
        
        // Beautiful transition out
        .to('.left-panel', { 
            x: -100, 
            opacity: 0, 
            duration: 0.8, 
            ease: 'power3.in' 
        }, 48.5)
        .to('.right-panel', { 
            x: 100, 
            opacity: 0, 
            duration: 0.8, 
            ease: 'power3.in' 
        }, 48.5)
        .to('#scene2', { opacity: 0, duration: 0.4 }, 49.1)
        .set('#scene2', { visibility: 'hidden' }, 49.48)
        
        // SCENE 3: Beautiful Benefits List - NO OPACITY ANIMATIONS ON TEXT
        .set('#scene3', { opacity: 1, visibility: 'visible', display: 'block' }, 49.68)
        
        .call(() => audioManager.playChunk('vo-benefits-intro.mp3', 4.78), null, 49.68)
        
        .from('#scene3', { 
            scale: 1.05, 
            duration: 1, 
            ease: 'power3.out' 
        }, 49.68)
        
        .from('#scene3 .section-title', { 
            y: -40, 
            scale: 0.95, 
            opacity: 0, 
            duration: 1, 
            ease: 'back.out(1.7)' 
        }, 50.2)
        
        // Beautiful benefits animation - animate containers only, NO opacity animations
        .call(() => audioManager.playChunk('vo-benefits-support.mp3', 9.04), null, 54.96)
        .from([benefitItems[0], benefitItems[1], benefitItems[2]], {
            x: -100, 
            scale: 0.9, 
            duration: 1, 
            stagger: 0.2, 
            ease: 'back.out(1.7)'
        }, 55.5)
        
        .call(() => audioManager.playChunk('vo-benefits-hsa.mp3', 7.37), null, 64.50)
        .from([benefitItems[3], benefitItems[4]], {
            x: -100, 
            scale: 0.9, 
            duration: 1, 
            stagger: 0.2, 
            ease: 'back.out(1.7)'
        }, 64.8)
        
        .to(benefitItems[3], { 
            scale: 1.03, 
            duration: 0.6, 
            yoyo: true, 
            repeat: 1, 
            ease: 'power2.inOut' 
        }, 67)
        
        .call(() => audioManager.playChunk('vo-benefits-cta.mp3', 5.88), null, 72.37)
        
        .to(benefitItems, { 
            scale: 1.02, 
            duration: 0.5, 
            stagger: 0.05, 
            yoyo: true, 
            repeat: 1, 
            ease: 'power2.inOut' 
        }, 73)
        
        .to('#scene3', { 
            opacity: 0, 
            scale: 0.95, 
            duration: 1.2, 
            ease: 'power3.in' 
        }, 77.25)
        .set('#scene3', { visibility: 'hidden' }, 78.45);
    
    // Show beautiful controls when presentation starts
    audioManager.onStart = () => {
        controlsContainer.classList.add('visible');
    };
    
    // Enhanced video control interactions
    let isMuted = false;
    
    playBtn.addEventListener('click', () => {
        if (timeline.paused()) {
            timeline.play();
            audioManager.resume();
            playBtn.innerHTML = '⏸️';
        } else {
            timeline.pause();
            audioManager.pause();
            playBtn.innerHTML = '▶️';
        }
    });
    
    restartBtn.addEventListener('click', () => {
        timeline.restart();
        playBtn.innerHTML = '⏸️';
    });
    
    sceneContainer.addEventListener('click', (e) => {
        if (e.target.dataset.scene) {
            const scene = parseInt(e.target.dataset.scene);
            const times = [0, 21.53, 49.68];
            timeline.seek(times[scene - 1]);
            playBtn.innerHTML = '⏸️';
            
            sceneContainer.querySelectorAll('button').forEach(btn => {
                btn.style.background = 'rgba(255, 255, 255, 0.1)';
            });
            e.target.style.background = 'linear-gradient(135deg, var(--teal) 0%, var(--sky) 100%)';
        }
    });
    
    muteBtn.addEventListener('click', () => {
        audioManager.mute();
        isMuted = !isMuted;
        muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
    });
    
    progressBg.addEventListener('click', (e) => {
        const rect = progressBg.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const progressPercent = clickX / rect.width;
        const seekTime = timeline.duration() * progressPercent;
        timeline.seek(seekTime);
    });
    
    timeline.eventCallback('onUpdate', () => {
        const current = timeline.time();
        const total = timeline.duration();
        const currentMin = Math.floor(current / 60);
        const currentSec = Math.floor(current % 60).toString().padStart(2, '0');
        const totalMin = Math.floor(total / 60);
        const totalSec = Math.floor(total % 60).toString().padStart(2, '0');
        timeDisplay.innerHTML = `${currentMin}:${currentSec} / ${totalMin}:${totalSec}`;
    });
    
    // Enhanced keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!audioManager || !audioManager.isPlaying) return;
        
        switch(e.key) {
            case ' ':
                e.preventDefault();
                if (timeline.paused()) {
                    timeline.play();
                    audioManager.resume();
                    playBtn.innerHTML = '⏸️';
                } else {
                    timeline.pause();
                    audioManager.pause();
                    playBtn.innerHTML = '▶️';
                }
                break;
            case 'r':
                timeline.restart();
                playBtn.innerHTML = '⏸️';
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
                isMuted = !isMuted;
                muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
                break;
        }
    });
    
    // Enhanced responsive design
    function handleResize() {
        const container = document.querySelector('.video-frame');
        const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
        gsap.set(container, { 
            scale,
            transformOrigin: 'center center'
        });
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    console.log('✨ Beautiful videogen animation ready - Absolutely stunning!');
});

console.log('🎬 Beautiful videogen loaded - Professional, polished, and perfect!');