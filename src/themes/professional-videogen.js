// PROFESSIONAL VIDEOGEN - Using videogen.md design tokens and principles
console.log('🎬 Loading professional videogen design...');

window.addEventListener('load', () => {
    console.log('✅ Creating professional videogen styling...');
    
    // Professional videogen styling based on design tokens
    const videoGenStyle = document.createElement('style');
    videoGenStyle.textContent = `
        /* VIDEOGEN DESIGN TOKENS */
        :root {
            --navy: #0F304A;
            --teal: #1F6F8B;
            --mid-blue: #0C4F7A;
            --sky: #6AB0C9;
            --white: #FFFFFF;
        }
        
        /* BULLETPROOF TEXT VISIBILITY */
        .date, .description, .bonus, .text, .bullet, .value, .section-title {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        /* VIDEOGEN FRAME */
        body {
            margin: 0;
            padding: 24px;
            background: var(--navy);
            font-family: system-ui, -apple-system, sans-serif;
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
        }
        
        .video-container::before {
            content: '';
            position: absolute;
            top: -4px;
            left: -24px;
            right: -24px;
            height: 4px;
            background: var(--teal);
            z-index: 10;
        }
        
        .video-container::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: -24px;
            right: -24px;
            height: 4px;
            background: var(--teal);
            z-index: 10;
        }
        
        .video-frame {
            position: relative;
            width: 100%;
            height: 100vh;
            max-height: 1080px;
            aspect-ratio: 16/9;
            overflow: hidden;
        }
        
        /* LOGO BUG */
        .logo-bug {
            position: fixed;
            bottom: 64px;
            left: 50%;
            transform: translateX(-50%);
            width: 48px;
            height: 48px;
            background: var(--navy);
            color: var(--white);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 18px;
            z-index: 10000;
        }
        
        /* SCENE 2 - Professional Effective Dates */
        .date {
            color: var(--sky) !important;
            font-size: 1.5rem !important;
            font-weight: 600 !important;
            margin: 0 0 0.75rem 0 !important;
            padding: 0 !important;
            background: none !important;
        }
        
        .description {
            color: var(--mid-blue) !important;
            font-size: 1.1rem !important;
            font-weight: 400 !important;
            line-height: 1.6 !important;
            margin: 0 0 1rem 0 !important;
            padding: 0 !important;
            background: none !important;
        }
        
        .bonus {
            display: inline-block !important;
            color: var(--white) !important;
            background: var(--teal) !important;
            padding: 0.5rem 1rem !important;
            border-radius: 4px !important;
            font-size: 0.9rem !important;
            font-weight: 600 !important;
            margin: 0 !important;
        }
        
        /* SCENE 3 - Professional Benefits List */
        #scene3 {
            background: var(--white) !important;
            color: var(--mid-blue) !important;
            padding: 4rem !important;
            position: relative !important;
            flex-direction: column !important;
        }
        
        #scene3 .section-title {
            color: var(--mid-blue) !important;
            font-size: 2.5rem !important;
            font-weight: 600 !important;
            text-align: center !important;
            margin: 0 0 3rem 0 !important;
            padding: 0 !important;
            background: none !important;
        }
        
        .benefits-list {
            list-style: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
            z-index: 2 !important;
        }
        
        .benefit-item {
            display: flex !important;
            align-items: center !important;
            gap: 1.5rem !important;
            padding: 1.5rem !important;
            margin-bottom: 1rem !important;
            background: var(--white) !important;
            border: 2px solid var(--navy) !important;
            border-radius: 8px !important;
            transition: all 0.3s ease !important;
            width: 800px !important;
            max-width: 90vw !important;
        }
        
        .benefit-item:hover {
            background: var(--sky) !important;
            border-color: var(--teal) !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 24px rgba(15, 48, 74, 0.15) !important;
        }
        
        .benefit-item:hover .text {
            color: var(--white) !important;
        }
        
        .benefit-item:hover .value {
            background: var(--navy) !important;
            color: var(--white) !important;
        }
        
        .bullet {
            width: 3rem !important;
            height: 3rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 1.5rem !important;
            background: var(--navy) !important;
            color: var(--white) !important;
            border-radius: 50% !important;
            flex-shrink: 0 !important;
        }
        
        .text {
            color: var(--mid-blue) !important;
            font-size: 1.1rem !important;
            font-weight: 400 !important;
            line-height: 1.5 !important;
            flex: 1 !important;
            margin: 0 !important;
            padding: 0 !important;
            background: none !important;
            transition: color 0.3s ease !important;
        }
        
        .value {
            display: inline-block !important;
            color: var(--navy) !important;
            background: var(--sky) !important;
            padding: 0.5rem 1rem !important;
            border-radius: 4px !important;
            font-size: 0.9rem !important;
            font-weight: 600 !important;
            white-space: nowrap !important;
            transition: all 0.3s ease !important;
        }
        
        /* SCENE 2 - Split Screen Design */
        .left-panel {
            background: var(--white) !important;
            color: var(--mid-blue) !important;
            position: relative !important;
            padding: 4rem !important;
        }
        
        .right-panel {
            position: relative !important;
            overflow: hidden !important;
        }
        
        .right-panel::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: var(--teal) !important;
            opacity: 0.8 !important;
            z-index: 1 !important;
        }
        
        .right-panel img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
        }
        
        .date-group {
            background: rgba(255, 255, 255, 0.95) !important;
            border: 2px solid var(--navy) !important;
            border-radius: 8px !important;
            padding: 2rem !important;
            margin-bottom: 2rem !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 4px 12px rgba(15, 48, 74, 0.1) !important;
        }
        
        .date-group:hover {
            background: var(--sky) !important;
            transform: translateX(8px) !important;
            box-shadow: 0 8px 24px rgba(15, 48, 74, 0.2) !important;
        }
        
        .date-group:hover .date,
        .date-group:hover .description,
        .date-group:hover .bonus {
            color: var(--white) !important;
        }
        
        .checkmark {
            width: 24px !important;
            height: 24px !important;
            margin-left: 1rem !important;
            opacity: 1 !important;
            visibility: visible !important;
        }
        
        #scene2 .section-title {
            color: var(--mid-blue) !important;
            font-size: 2.5rem !important;
            font-weight: 600 !important;
            margin: 0 0 3rem 0 !important;
            padding: 0 !important;
            background: none !important;
        }
        
        /* CLEAN POSITIONING */
        .scene {
            position: absolute !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }
        
        #scene3 {
            justify-content: center !important;
        }
        
        /* RESPONSIVE */
        @media (max-width: 768px) {
            .date { font-size: 1.3rem !important; }
            .description { font-size: 1rem !important; }
            .text { font-size: 1rem !important; }
            .section-title { font-size: 2rem !important; }
            .benefit-item { 
                flex-direction: column !important;
                text-align: center !important;
                gap: 1rem !important;
            }
        }
    `;
    document.head.appendChild(videoGenStyle);
    
    // Add logo bug
    const logoBug = document.createElement('div');
    logoBug.className = 'logo-bug';
    logoBug.innerHTML = 'AI';
    document.body.appendChild(logoBug);
    
    // BULLETPROOF text visibility system
    const forceTextVisible = () => {
        const allText = document.querySelectorAll('.date, .description, .bonus, .text, .bullet, .value, .section-title');
        allText.forEach(el => {
            el.style.setProperty('opacity', '1', 'important');
            el.style.setProperty('visibility', 'visible', 'important');
            el.style.setProperty('display', 'block', 'important');
            
            if (el.classList.contains('bullet') || el.classList.contains('value') || el.classList.contains('bonus')) {
                el.style.setProperty('display', 'inline-block', 'important');
            }
            if (el.classList.contains('bullet')) {
                el.style.setProperty('display', 'flex', 'important');
            }
        });
    };
    
    // Dynamic centering for benefit items
    const centerBenefitItems = () => {
        const benefitItems = document.querySelectorAll('.benefit-item');
        benefitItems.forEach(item => {
            const parent = item.parentElement;
            if (parent) {
                const parentWidth = parent.getBoundingClientRect().width;
                const itemWidth = item.getBoundingClientRect().width;
                const leftOffset = Math.max(0, (parentWidth - itemWidth) / 2);
                
                item.style.setProperty('margin-left', `${leftOffset}px`, 'important');
                item.style.setProperty('margin-right', `${leftOffset}px`, 'important');
            }
        });
    };
    
    // Run systems
    forceTextVisible();
    setInterval(forceTextVisible, 50);
    
    setTimeout(centerBenefitItems, 100);
    setInterval(centerBenefitItems, 200);
    window.addEventListener('resize', centerBenefitItems);
    
    console.log('✅ Professional videogen styling applied with design tokens');
});

// Load GSAP
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

// Professional Audio Manager
class ProfessionalAudioManager {
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
        this.createStartButton();
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
    
    createStartButton() {
        const overlay = document.createElement('div');
        overlay.id = 'start-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--navy);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const startCard = document.createElement('div');
        startCard.style.cssText = `
            background: var(--white);
            border: 4px solid var(--teal);
            padding: 4rem 5rem;
            border-radius: 8px;
            text-align: center;
            max-width: 600px;
            position: relative;
        `;
        
        startCard.innerHTML = `
            <h2 style="color: var(--mid-blue); font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: 600;">
                2025 Employee Benefits
            </h2>
            <p style="color: var(--sky); font-size: 1.2rem; margin-bottom: 3rem; font-weight: 400;">
                Professional • Clean • Effective
            </p>
            <button id="start-button" style="
                background: var(--navy);
                color: var(--white);
                border: 2px solid var(--teal);
                padding: 1rem 3rem;
                font-size: 1.2rem;
                font-weight: 600;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s ease;
            ">▶ Start Presentation</button>
            <p style="color: var(--sky); margin-top: 2rem; font-size: 1rem;">
                Duration: 80 seconds<br>
                Professional videogen design
            </p>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            #start-button:hover {
                background: var(--teal);
                border-color: var(--sky);
                transform: translateY(-2px);
            }
        `;
        document.head.appendChild(style);
        
        overlay.appendChild(startCard);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => this.startPresentation());
        this.startButton = overlay;
    }
    
    startPresentation() {
        if (this.isPlaying) return;
        
        console.log('🎬 Starting professional videogen presentation...');
        this.isPlaying = true;
        
        gsap.to(this.startButton, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => this.startButton.remove()
        });
        
        if (this.bgMusic) {
            this.bgMusic.play().catch(e => console.log('Music blocked'));
        }
        
        if (window.professionalTimeline) {
            window.professionalTimeline.restart();
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

function createVideoControls() {
    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'video-controls';
    controlsContainer.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background: var(--navy);
        z-index: 9999;
        display: flex;
        align-items: center;
        padding: 0 2rem;
        gap: 1rem;
        opacity: 0;
        transform: translateY(100%);
        transition: all 0.3s ease;
        border-top: 4px solid var(--teal);
    `;
    
    const progressBg = document.createElement('div');
    progressBg.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: var(--mid-blue);
        cursor: pointer;
    `;
    
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style.cssText = `
        height: 100%;
        width: 0%;
        background: var(--sky);
        transition: width 0.3s ease;
        pointer-events: none;
    `;
    
    const playBtn = document.createElement('button');
    playBtn.id = 'play-btn';
    playBtn.innerHTML = '⏸️';
    playBtn.style.cssText = `
        background: var(--teal);
        border: none;
        color: var(--white);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 4px;
        transition: background 0.2s ease;
    `;
    
    const restartBtn = document.createElement('button');
    restartBtn.innerHTML = '⏮️';
    restartBtn.style.cssText = `
        background: var(--mid-blue);
        border: none;
        color: var(--white);
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 4px;
        transition: background 0.2s ease;
    `;
    
    const sceneContainer = document.createElement('div');
    sceneContainer.style.cssText = `
        display: flex;
        gap: 0.5rem;
        margin-left: 1rem;
    `;
    
    ['1', '2', '3'].forEach((label, index) => {
        const sceneBtn = document.createElement('button');
        sceneBtn.innerHTML = label;
        sceneBtn.dataset.scene = index + 1;
        sceneBtn.style.cssText = `
            background: var(--mid-blue);
            border: 1px solid var(--sky);
            color: var(--white);
            font-size: 0.9rem;
            cursor: pointer;
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            transition: all 0.2s ease;
            min-width: 32px;
            font-weight: 600;
        `;
        sceneContainer.appendChild(sceneBtn);
    });
    
    const timeDisplay = document.createElement('div');
    timeDisplay.id = 'time-display';
    timeDisplay.innerHTML = '0:00 / 1:20';
    timeDisplay.style.cssText = `
        color: var(--white);
        font-size: 0.9rem;
        font-family: system-ui, monospace;
        margin-left: auto;
        margin-right: 1rem;
        font-weight: 600;
    `;
    
    const muteBtn = document.createElement('button');
    muteBtn.id = 'mute-btn';
    muteBtn.innerHTML = '🔊';
    muteBtn.style.cssText = `
        background: var(--teal);
        border: none;
        color: var(--white);
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 4px;
        transition: background 0.2s ease;
    `;
    
    progressBg.appendChild(progressBar);
    controlsContainer.appendChild(progressBg);
    controlsContainer.appendChild(playBtn);
    controlsContainer.appendChild(restartBtn);
    controlsContainer.appendChild(sceneContainer);
    controlsContainer.appendChild(timeDisplay);
    controlsContainer.appendChild(muteBtn);
    
    document.body.appendChild(controlsContainer);
    
    const style = document.createElement('style');
    style.textContent = `
        #video-controls button:hover {
            background: var(--sky) !important;
        }
        
        #video-controls.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    return { controlsContainer, progressBar, playBtn, restartBtn, sceneContainer, timeDisplay, muteBtn, progressBg };
}

function createSimpleTransition() {
    const overlay = document.createElement('div');
    overlay.className = 'scene-transition-overlay';
    overlay.innerHTML = '<div class="transition-circle"></div>';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    `;
    
    const circle = overlay.querySelector('.transition-circle');
    circle.style.cssText = `
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--navy);
        transform: scale(0);
        opacity: 0;
    `;
    
    document.body.appendChild(overlay);
    return circle;
}

// Professional Animation System
window.addEventListener('load', () => {
    console.log('✅ Initializing professional videogen animation...');
    
    audioManager = new ProfessionalAudioManager();
    const controls = createVideoControls();
    const { controlsContainer, progressBar, playBtn, restartBtn, sceneContainer, timeDisplay, muteBtn, progressBg } = controls;
    const transitionCircle = createSimpleTransition();
    
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    const dateGroups = document.querySelectorAll('.left-panel .date-group');
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    console.log('Elements found:', { dateGroups: dateGroups.length, benefitItems: benefitItems.length });
    
    // Professional timeline with power2.out easing (videogen default)
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
    
    window.professionalTimeline = timeline;
    
    // SCENE 1: Professional Introduction
    timeline
        .call(() => audioManager.playChunk('vo-intro-welcome.mp3', 5.38))
        
        .from('.video-frame', {
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        })
        
        .from('.hero-video img', {
            scale: 1.1,
            duration: 21,
            ease: 'none'
        }, 0)
        
        .from('.sliding-card', {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, 0.5)
        
        .from('.main-title', {
            opacity: 0,
            y: 40,
            duration: 0.8
        }, 1)
        
        .call(() => audioManager.playChunk('vo-intro-feedback.mp3', 7.13), null, 5.88)
        
        .from('.subtitle', {
            opacity: 0,
            y: 40,
            duration: 0.8
        }, 6.5)
        
        .from('.highlight', {
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.2
        }, 8)
        
        .call(() => audioManager.playChunk('vo-intro-investing.mp3', 7.52), null, 13.51)
        
        .fromTo('.animated-line', 
            { scaleX: 0 },
            { scaleX: 1, duration: 1.5 }, 14)
        
        .to('.highlight', {
            scale: 1.05,
            duration: 0.4,
            stagger: 0.1,
            yoyo: true,
            repeat: 1
        }, 16)
        
        .to(transitionCircle, {
            scale: 15,
            opacity: 1,
            duration: 0.5
        }, 20.5)
        
        .to('#scene1', { opacity: 0, duration: 0.3 }, 20.7)
        .set('#scene1', { visibility: 'hidden' }, 21.03)
        
        // SCENE 2: Professional Split Screen
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 21.53)
        
        .to(transitionCircle, { scale: 0, opacity: 0, duration: 0.5 }, 21.53)
        
        .call(() => audioManager.playChunk('vo-dates-intro.mp3', 3.37), null, 21.53)
        
        .from('.split-screen', { opacity: 0, scale: 0.95, duration: 0.8 }, 21.53)
        
        .from('.left-panel', { x: -40, opacity: 0, duration: 1 }, 21.7)
        .from('.right-panel', { x: 40, opacity: 0, duration: 1 }, 21.7)
        
        .from('#scene2 .section-title', { y: -40, opacity: 0, duration: 0.8 }, 22.2)
        
        .call(() => audioManager.playChunk('vo-dates-january.mp3', 7.97), null, 25.40)
        .from(dateGroups[0], { y: 40, scale: 0.9, duration: 1 }, 25.40)
        
        .call(() => audioManager.playChunk('vo-dates-march.mp3', 7.52), null, 33.87)
        .from(dateGroups[1], { y: 40, scale: 0.9, duration: 1 }, 33.87)
        
        .call(() => audioManager.playChunk('vo-dates-december.mp3', 7.29), null, 41.89)
        .from(dateGroups[2], { y: 40, scale: 0.9, duration: 1 }, 41.89)
        
        .to('.left-panel', { x: -40, opacity: 0, duration: 0.5 }, 48.5)
        .to('.right-panel', { x: 40, opacity: 0, duration: 0.5 }, 48.5)
        .to('#scene2', { opacity: 0, duration: 0.3 }, 48.9)
        .set('#scene2', { visibility: 'hidden' }, 49.18)
        
        // SCENE 3: Professional Benefits Showcase
        .set('#scene3', { opacity: 1, visibility: 'visible', display: 'block' }, 49.68)
        
        .call(() => audioManager.playChunk('vo-benefits-intro.mp3', 4.78), null, 49.68)
        
        .from('#scene3', { scale: 1.05, duration: 0.8 }, 49.68)
        
        .from('#scene3 .section-title', { y: -40, scale: 0.9, duration: 0.8 }, 50)
        
        .call(() => audioManager.playChunk('vo-benefits-support.mp3', 9.04), null, 54.96)
        .from([benefitItems[0], benefitItems[1], benefitItems[2]], {
            y: 40, scale: 0.95, duration: 0.8, stagger: 0.2
        }, 55.5)
        
        .call(() => audioManager.playChunk('vo-benefits-hsa.mp3', 7.37), null, 64.50)
        .from([benefitItems[3], benefitItems[4]], {
            y: 40, scale: 0.95, duration: 0.8, stagger: 0.2
        }, 64.8)
        
        .to(benefitItems[3], { scale: 1.02, duration: 0.5, yoyo: true, repeat: 1 }, 67)
        
        .call(() => audioManager.playChunk('vo-benefits-cta.mp3', 5.88), null, 72.37)
        
        .to(benefitItems, { scale: 1.01, duration: 0.4, stagger: 0.05, yoyo: true, repeat: 1 }, 73)
        
        .to('#scene3', { opacity: 0, y: 40, duration: 1 }, 77.25)
        .set('#scene3', { visibility: 'hidden' }, 78.25);
    
    // Show controls when presentation starts
    audioManager.onStart = () => {
        controlsContainer.classList.add('visible');
    };
    
    // Control interactions
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
                btn.style.background = 'var(--mid-blue)';
            });
            e.target.style.background = 'var(--sky)';
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
    
    console.log('✅ Professional videogen animation ready!');
});

console.log('🎬 Professional videogen loaded - Clean, branded, and bulletproof!');