// SLEEK MINIMAL - Clean, modern design with guaranteed text visibility
console.log('✨ Loading sleek minimal design...');

window.addEventListener('load', () => {
    console.log('🎯 Creating sleek minimal design with bulletproof text...');
    
    // Clean minimal styling
    const minimalStyle = document.createElement('style');
    minimalStyle.textContent = `
        /* BULLETPROOF TEXT VISIBILITY */
        .date, .description, .bonus, .text, .bullet, .value, .section-title {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            z-index: 999999 !important;
            position: relative !important;
        }
        
        /* Scene 2 - Clean Dark */
        .date {
            color: #ffffff !important;
            font-size: 1.5rem !important;
            font-weight: 600 !important;
            margin: 0 0 0.75rem 0 !important;
            padding: 0 !important;
            background: none !important;
        }
        
        .description {
            color: rgba(255, 255, 255, 0.85) !important;
            font-size: 1rem !important;
            font-weight: 400 !important;
            line-height: 1.5 !important;
            margin: 0 0 1rem 0 !important;
            padding: 0 !important;
            background: none !important;
        }
        
        .bonus {
            display: inline-block !important;
            color: #000000 !important;
            background: #ffffff !important;
            padding: 0.5rem 1rem !important;
            border-radius: 4px !important;
            font-size: 0.85rem !important;
            font-weight: 500 !important;
            margin: 0 !important;
        }
        
        /* Scene 3 - Clean Light */
        #scene3 {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 4rem !important;
            position: relative !important;
            flex-direction: column !important;
        }
        
        #scene3 .section-title {
            color: #000000 !important;
            font-size: 2.5rem !important;
            font-weight: 700 !important;
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
            background: #f8f9fa !important;
            border-radius: 8px !important;
            border: 1px solid #e9ecef !important;
            transition: all 0.2s ease !important;
            width: 700px !important;
            max-width: 90vw !important;
        }
        
        .benefit-item:hover {
            background: #f1f3f4 !important;
            transform: translateY(-2px) !important;
        }
        
        .bullet {
            width: 3rem !important;
            height: 3rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 1.5rem !important;
            background: #000000 !important;
            color: #ffffff !important;
            border-radius: 50% !important;
            flex-shrink: 0 !important;
        }
        
        .text {
            color: #000000 !important;
            font-size: 1.1rem !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            flex: 1 !important;
            margin: 0 !important;
            padding: 0 !important;
            background: none !important;
        }
        
        .value {
            display: inline-block !important;
            color: #ffffff !important;
            background: #000000 !important;
            padding: 0.5rem 1rem !important;
            border-radius: 4px !important;
            font-size: 0.85rem !important;
            font-weight: 500 !important;
            white-space: nowrap !important;
        }
        
        /* Scene 2 - Minimal Dark */
        .left-panel {
            background: #1a1a1a !important;
            color: white !important;
            position: relative !important;
            padding: 4rem !important;
        }
        
        .right-panel {
            position: relative !important;
            overflow: hidden !important;
        }
        
        .right-panel img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            filter: grayscale(20%) !important;
        }
        
        .date-group {
            background: rgba(255, 255, 255, 0.05) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 8px !important;
            padding: 2rem !important;
            margin-bottom: 2rem !important;
            transition: all 0.2s ease !important;
        }
        
        .date-group:hover {
            background: rgba(255, 255, 255, 0.08) !important;
            transform: translateX(8px) !important;
        }
        
        .checkmark {
            width: 20px !important;
            height: 20px !important;
            margin-left: 1rem !important;
            opacity: 1 !important;
            visibility: visible !important;
        }
        
        #scene2 .section-title {
            color: #ffffff !important;
            font-size: 2.5rem !important;
            font-weight: 700 !important;
            margin: 0 0 3rem 0 !important;
            padding: 0 !important;
            background: none !important;
        }
        
        /* Clean positioning */
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
        
        /* Simple transitions */
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
            background: #000000 !important;
            transform: scale(0) !important;
            opacity: 0 !important;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .date { font-size: 1.3rem !important; }
            .description { font-size: 0.95rem !important; }
            .text { font-size: 1rem !important; }
            .section-title { font-size: 2rem !important; }
            .benefit-item { 
                flex-direction: column !important;
                text-align: center !important;
                gap: 1rem !important;
            }
        }
    `;
    document.head.appendChild(minimalStyle);
    
    // BULLETPROOF text visibility - aggressive approach
    const forceTextVisible = () => {
        const allText = document.querySelectorAll('.date, .description, .bonus, .text, .bullet, .value, .section-title');
        allText.forEach(el => {
            // Force styles with highest priority
            el.style.setProperty('opacity', '1', 'important');
            el.style.setProperty('visibility', 'visible', 'important');
            el.style.setProperty('display', 'block', 'important');
            
            // Special handling for inline elements
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
            const parent = item.parentElement; // benefits-list
            const parentWidth = parent.getBoundingClientRect().width;
            const itemWidth = item.getBoundingClientRect().width;
            const leftOffset = (parentWidth - itemWidth) / 2;
            
            item.style.setProperty('margin-left', `${leftOffset}px`, 'important');
            item.style.setProperty('margin-right', `${leftOffset}px`, 'important');
        });
    };
    
    // Run immediately and frequently
    forceTextVisible();
    setInterval(forceTextVisible, 50); // Very frequent updates
    
    // Center benefit items dynamically
    setTimeout(centerBenefitItems, 100); // Initial centering after elements load
    setInterval(centerBenefitItems, 200); // Keep recentering
    window.addEventListener('resize', centerBenefitItems); // Recenter on resize
    
    console.log('✅ Sleek minimal styling applied with bulletproof text system and dynamic centering');
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

// Simple Audio Manager
class SimpleAudioManager {
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
            background: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const startCard = document.createElement('div');
        startCard.style.cssText = `
            background: #ffffff;
            padding: 4rem 5rem;
            border-radius: 8px;
            text-align: center;
            max-width: 600px;
        `;
        
        startCard.innerHTML = `
            <h2 style="color: #000000; font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: 700;">
                2025 Employee Benefits
            </h2>
            <p style="color: #666666; font-size: 1.2rem; margin-bottom: 3rem; font-weight: 400;">
                Simple • Clear • Effective
            </p>
            <button id="start-button" style="
                background: #000000;
                color: #ffffff;
                border: none;
                padding: 1rem 3rem;
                font-size: 1.2rem;
                font-weight: 600;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.2s ease;
            ">Start Presentation</button>
            <p style="color: #999999; margin-top: 2rem; font-size: 1rem;">
                Duration: 80 seconds<br>
                Clean minimal design
            </p>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            #start-button:hover {
                background: #333333;
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
        
        console.log('🚀 Starting sleek minimal presentation...');
        this.isPlaying = true;
        
        gsap.to(this.startButton, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => this.startButton.remove()
        });
        
        if (this.bgMusic) {
            this.bgMusic.play().catch(e => console.log('Music blocked'));
        }
        
        if (window.minimalTimeline) {
            window.minimalTimeline.restart();
        }
        
        // Call onStart callback if it exists
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
    // Main controls container
    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'video-controls';
    controlsContainer.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        z-index: 9999;
        display: flex;
        align-items: center;
        padding: 0 2rem;
        gap: 1rem;
        opacity: 0;
        transform: translateY(100%);
        transition: all 0.3s ease;
    `;
    
    // Progress bar background
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
    
    // Progress bar fill
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style.cssText = `
        height: 100%;
        width: 0%;
        background: #ffffff;
        transition: width 0.3s ease;
        pointer-events: none;
    `;
    
    // Play/Pause button
    const playBtn = document.createElement('button');
    playBtn.id = 'play-btn';
    playBtn.innerHTML = '⏸️';
    playBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 4px;
        transition: background 0.2s ease;
    `;
    
    // Restart button
    const restartBtn = document.createElement('button');
    restartBtn.innerHTML = '⏮️';
    restartBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 4px;
        transition: background 0.2s ease;
    `;
    
    // Scene buttons
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
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            transition: all 0.2s ease;
            min-width: 32px;
        `;
        sceneContainer.appendChild(sceneBtn);
    });
    
    // Time display
    const timeDisplay = document.createElement('div');
    timeDisplay.id = 'time-display';
    timeDisplay.innerHTML = '0:00 / 1:20';
    timeDisplay.style.cssText = `
        color: white;
        font-size: 0.9rem;
        font-family: monospace;
        margin-left: auto;
        margin-right: 1rem;
    `;
    
    // Mute button
    const muteBtn = document.createElement('button');
    muteBtn.id = 'mute-btn';
    muteBtn.innerHTML = '🔊';
    muteBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 4px;
        transition: background 0.2s ease;
    `;
    
    // Assemble controls
    progressBg.appendChild(progressBar);
    controlsContainer.appendChild(progressBg);
    controlsContainer.appendChild(playBtn);
    controlsContainer.appendChild(restartBtn);
    controlsContainer.appendChild(sceneContainer);
    controlsContainer.appendChild(timeDisplay);
    controlsContainer.appendChild(muteBtn);
    
    document.body.appendChild(controlsContainer);
    
    // Hover styles
    const style = document.createElement('style');
    style.textContent = `
        #video-controls button:hover {
            background: rgba(255, 255, 255, 0.1) !important;
        }
        
        #video-controls button[data-scene]:hover {
            background: rgba(255, 255, 255, 0.2) !important;
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

function createSimpleTransition() {
    const overlay = document.createElement('div');
    overlay.className = 'scene-transition-overlay';
    overlay.innerHTML = '<div class="transition-circle"></div>';
    document.body.appendChild(overlay);
    return overlay.querySelector('.transition-circle');
}

// Main animation - SIMPLE and GUARANTEED TO WORK
window.addEventListener('load', () => {
    console.log('✅ Initializing sleek minimal animation...');
    
    audioManager = new SimpleAudioManager();
    const controls = createVideoControls();
    const { controlsContainer, progressBar, playBtn, restartBtn, sceneContainer, timeDisplay, muteBtn, progressBg } = controls;
    const transitionCircle = createSimpleTransition();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    const dateGroups = document.querySelectorAll('.left-panel .date-group');
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    console.log('Elements found:', { dateGroups: dateGroups.length, benefitItems: benefitItems.length });
    
    // Simple, reliable timeline
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
    
    window.minimalTimeline = timeline;
    
    // SCENE 1: Clean Introduction
    timeline
        .call(() => audioManager.playChunk('vo-intro-welcome.mp3', 5.38))
        
        .from('.video-frame', {
            scale: 0.9,
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
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, 0.5)
        
        .from('.main-title', {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, 1)
        
        .call(() => audioManager.playChunk('vo-intro-feedback.mp3', 7.13), null, 5.88)
        
        .from('.subtitle', {
            opacity: 0,
            y: 15,
            duration: 0.8
        }, 6.5)
        
        .from('.highlight', {
            opacity: 0,
            scale: 0.8,
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
        
        // Simple transition
        .to(transitionCircle, {
            scale: 15,
            opacity: 1,
            duration: 0.5
        }, 20.5)
        
        .to('#scene1', { opacity: 0, duration: 0.3 }, 20.7)
        .set('#scene1', { visibility: 'hidden' }, 21.03)
        
        // SCENE 2: Simple Dark Theme - NO OPACITY ANIMATIONS ON TEXT
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 21.53)
        
        .to(transitionCircle, { scale: 0, opacity: 0, duration: 0.5 }, 21.53)
        
        .call(() => audioManager.playChunk('vo-dates-intro.mp3', 3.37), null, 21.53)
        
        .from('.split-screen', { opacity: 0, scale: 0.95, duration: 0.8 }, 21.53)
        
        .from('.left-panel', { x: -80, opacity: 0, duration: 1 }, 21.7)
        .from('.right-panel', { x: 80, opacity: 0, duration: 1 }, 21.7)
        
        .from('#scene2 .section-title', { y: -20, opacity: 0, duration: 0.8 }, 22.2)
        
        // January - animate container only, NO opacity animation
        .call(() => audioManager.playChunk('vo-dates-january.mp3', 7.97), null, 25.40)
        .from(dateGroups[0], { x: -50, scale: 0.9, duration: 1 }, 25.40)
        
        // March - animate container only, NO opacity animation
        .call(() => audioManager.playChunk('vo-dates-march.mp3', 7.52), null, 33.87)
        .from(dateGroups[1], { x: -50, scale: 0.9, duration: 1 }, 33.87)
        
        // December - animate container only, NO opacity animation
        .call(() => audioManager.playChunk('vo-dates-december.mp3', 7.29), null, 41.89)
        .from(dateGroups[2], { x: -50, scale: 0.9, duration: 1 }, 41.89)
        
        // Transition out
        .to('.left-panel', { x: -80, opacity: 0, duration: 0.5 }, 48.5)
        .to('.right-panel', { x: 80, opacity: 0, duration: 0.5 }, 48.5)
        .to('#scene2', { opacity: 0, duration: 0.3 }, 48.9)
        .set('#scene2', { visibility: 'hidden' }, 49.18)
        
        // SCENE 3: Clean White Theme - NO OPACITY ANIMATIONS ON TEXT
        .set('#scene3', { opacity: 1, visibility: 'visible', display: 'block' }, 49.68)
        
        .call(() => audioManager.playChunk('vo-benefits-intro.mp3', 4.78), null, 49.68)
        
        .from('#scene3', { scale: 1.05, duration: 0.8 }, 49.68)
        
        .from('#scene3 .section-title', { y: -30, scale: 0.9, duration: 0.8 }, 50)
        
        // Benefits - smooth entrance animations
        .call(() => audioManager.playChunk('vo-benefits-support.mp3', 9.04), null, 54.96)
        .from([benefitItems[0], benefitItems[1], benefitItems[2]], {
            y: 30, 
            opacity: 0, 
            duration: 1.2, 
            stagger: 0.15,
            ease: 'power2.out'
        }, 55.5)
        
        .call(() => audioManager.playChunk('vo-benefits-hsa.mp3', 7.37), null, 64.50)
        .from([benefitItems[3], benefitItems[4]], {
            y: 30, 
            opacity: 0, 
            duration: 1.2, 
            stagger: 0.15,
            ease: 'power2.out'
        }, 64.8)
        
        .to(benefitItems[3], { 
            scale: 1.02, 
            duration: 0.8, 
            yoyo: true, 
            repeat: 1,
            ease: 'power2.inOut'
        }, 67)
        
        .call(() => audioManager.playChunk('vo-benefits-cta.mp3', 5.88), null, 72.37)
        
        .to(benefitItems, { 
            y: -4, 
            duration: 0.6, 
            stagger: 0.08, 
            yoyo: true, 
            repeat: 1,
            ease: 'power2.inOut'
        }, 73)
        
        .to('#scene3', { opacity: 0, duration: 1 }, 77.25)
        .set('#scene3', { visibility: 'hidden' }, 78.25);
    
    // Show controls when presentation starts
    audioManager.onStart = () => {
        controlsContainer.classList.add('visible');
    };
    
    // Video control interactions
    let isMuted = false;
    
    // Play/Pause button
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
    
    // Restart button
    restartBtn.addEventListener('click', () => {
        timeline.restart();
        playBtn.innerHTML = '⏸️';
    });
    
    // Scene navigation buttons
    sceneContainer.addEventListener('click', (e) => {
        if (e.target.dataset.scene) {
            const scene = parseInt(e.target.dataset.scene);
            const times = [0, 21.53, 49.68];
            timeline.seek(times[scene - 1]);
            playBtn.innerHTML = '⏸️';
            
            // Update active scene button
            sceneContainer.querySelectorAll('button').forEach(btn => {
                btn.style.background = 'rgba(255, 255, 255, 0.1)';
            });
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
        }
    });
    
    // Mute button
    muteBtn.addEventListener('click', () => {
        audioManager.mute();
        isMuted = !isMuted;
        muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
    });
    
    // Progress bar clicking
    progressBg.addEventListener('click', (e) => {
        const rect = progressBg.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const progressPercent = clickX / rect.width;
        const seekTime = timeline.duration() * progressPercent;
        timeline.seek(seekTime);
    });
    
    // Update time display
    timeline.eventCallback('onUpdate', () => {
        const current = timeline.time();
        const total = timeline.duration();
        const currentMin = Math.floor(current / 60);
        const currentSec = Math.floor(current % 60).toString().padStart(2, '0');
        const totalMin = Math.floor(total / 60);
        const totalSec = Math.floor(total % 60).toString().padStart(2, '0');
        timeDisplay.innerHTML = `${currentMin}:${currentSec} / ${totalMin}:${totalSec}`;
    });
    
    // Enhanced video controls
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
    
    // Simple responsive
    function handleResize() {
        const container = document.querySelector('.video-frame');
        const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
        gsap.set(container, { scale });
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    console.log('✅ Sleek minimal animation ready - GUARANTEED TO WORK!');
});

console.log('✨ Sleek minimal loaded - Simple, clean, and bulletproof!');