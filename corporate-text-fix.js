// TEXT FIX - Benefits Animation
// Ensuring all text elements are visible in scenes 2 and 3

console.log('💼 Loading text-fixed animation...');

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
        
        console.log('✅ Text-fixed audio initialized');
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
                ⏱️ Duration: ~80 seconds
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
        
        console.log('🚀 Starting text-fixed presentation...');
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
            console.log('✅ Text-fixed timeline started');
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

// Enhanced magic particles
function createEnhancedMagic() {
    const magicContainer = document.createElement('div');
    magicContainer.id = 'magic-particles';
    document.body.appendChild(magicContainer);
    
    // Create glowing particles
    for (let i = 0; i < 6; i++) {
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
            opacity: 'random(0.1, 0.3)',
            duration: 'random(20, 30)',
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
    console.log('✅ Initializing text-fixed animation...');
    
    // Load enhanced styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'enhanced-styles.css';
    document.head.appendChild(link);
    
    // Initialize systems
    audioManager = new PerfectTimingAudioManager();
    const progressBar = createEnhancedProgress();
    const transitionCircle = createTransitionOverlay();
    createEnhancedMagic();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    // IMPORTANT: Set all text elements to be visible by default
    gsap.set('.date, .description, .bonus', { opacity: 1 });
    gsap.set('.benefit-item .text', { opacity: 1 });
    
    // Get elements for animations
    const dateGroups = document.querySelectorAll('.left-panel .date-group');
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    console.log('📊 Found elements:');
    console.log('  - Date groups:', dateGroups.length);
    console.log('  - Benefit items:', benefitItems.length);
    
    // Check text content
    dateGroups.forEach((group, i) => {
        const date = group.querySelector('.date');
        const desc = group.querySelector('.description');
        const bonus = group.querySelector('.bonus');
        console.log(`  - Date group ${i+1}: "${date?.textContent}" / "${desc?.textContent}" / "${bonus?.textContent}"`);
    });
    
    benefitItems.forEach((item, i) => {
        const text = item.querySelector('.text');
        console.log(`  - Benefit ${i+1}: "${text?.textContent}"`);
    });
    
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
        
        // SCENE 2: VISIBLE TEXT TIMELINE (21.53-49.18s = 27.65s)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 21.53)
        
        .to(transitionCircle, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
        }, 21.53)
        
        // MAKE SURE ALL TEXT ELEMENTS ARE VISIBLE FROM THE START
        .set('.date, .description, .bonus', { opacity: 1, visibility: 'visible' }, 21.53)
        
        // Play dates intro (3.37s) at 21.53s
        .call(() => {
            audioManager.playChunk('vo-dates-intro.mp3', 3.37);
            console.log('🗓️ SYNC: Timeline intro playing - showing panels with visible text');
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
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: 'power3.out'
        }, 22.2)
        
        // January VO starts at 25.40s
        .call(() => {
            audioManager.playChunk('vo-dates-january.mp3', 7.97);
            console.log('🗓️ SYNC: January VO - animating January with TEXT VISIBLE');
        }, null, 25.40)
        
        // January animation with visible text
        .from(dateGroups[0], {
            x: -60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, 25.40)
        
        // Keep text visible during animations
        .from(dateGroups[0].querySelector('.date'), {
            scale: 0.8,
            // NO opacity animation - keep visible
            duration: 0.6
        }, 25.7)
        
        .from(dateGroups[0].querySelector('.description'), {
            // NO opacity animation - keep visible
            y: 10,
            duration: 0.6
        }, 26.1)
        
        .from(dateGroups[0].querySelector('.bonus'), {
            // NO opacity animation - keep visible
            scale: 0.8,
            duration: 0.5
        }, 26.7)
        
        .from(dateGroups[0].querySelector('.checkmark'), {
            scale: 0,
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(2)'
        }, 27.2)
        
        // March VO starts at 33.87s
        .call(() => {
            audioManager.playChunk('vo-dates-march.mp3', 7.52);
            console.log('🗓️ SYNC: March VO - animating March with TEXT VISIBLE');
        }, null, 33.87)
        
        // March animation with visible text
        .from(dateGroups[1], {
            x: -60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, 33.87)
        
        .from(dateGroups[1].querySelector('.date'), {
            scale: 0.8,
            // NO opacity animation - keep visible
            duration: 0.6
        }, 34.17)
        
        .from(dateGroups[1].querySelector('.description'), {
            // NO opacity animation - keep visible
            y: 10,
            duration: 0.6
        }, 34.57)
        
        .from(dateGroups[1].querySelector('.bonus'), {
            // NO opacity animation - keep visible
            scale: 0.8,
            duration: 0.5
        }, 35.17)
        
        .from(dateGroups[1].querySelector('.checkmark'), {
            scale: 0,
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(2)'
        }, 35.67)
        
        // December VO starts at 41.89s
        .call(() => {
            audioManager.playChunk('vo-dates-december.mp3', 7.29);
            console.log('🗓️ SYNC: December VO - animating December with TEXT VISIBLE');
        }, null, 41.89)
        
        // December animation with visible text
        .from(dateGroups[2], {
            x: -60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, 41.89)
        
        .from(dateGroups[2].querySelector('.date'), {
            scale: 0.8,
            // NO opacity animation - keep visible
            duration: 0.6
        }, 42.19)
        
        .from(dateGroups[2].querySelector('.description'), {
            // NO opacity animation - keep visible
            y: 10,
            duration: 0.6
        }, 42.59)
        
        .from(dateGroups[2].querySelector('.bonus'), {
            // NO opacity animation - keep visible
            scale: 0.8,
            duration: 0.5
        }, 43.19)
        
        .from(dateGroups[2].querySelector('.checkmark'), {
            scale: 0,
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(2)'
        }, 43.69)
        
        // Add some visual interest during remaining time
        .to(dateGroups, {
            x: 5,
            duration: 1,
            stagger: 0.2,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut'
        }, 46)
        
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
        
        // SCENE 3: VISIBLE TEXT BENEFITS (49.68-78.25s = 28.57s)
        .set('#scene3', { 
            opacity: 1, 
            visibility: 'visible',
            display: 'block' 
        }, 49.68)
        
        // MAKE SURE ALL TEXT ELEMENTS ARE VISIBLE FROM THE START
        .set('.benefit-item .text', { opacity: 1, visibility: 'visible' }, 49.68)
        
        // Play benefits intro (4.78s) at 49.68s
        .call(() => {
            audioManager.playChunk('vo-benefits-intro.mp3', 4.78);
            console.log('🎯 Starting Scene 3 - Benefits with VISIBLE TEXT');
        }, null, 49.68)
        
        // Scene entrance
        .fromTo('#scene3', {
            scale: 1.1,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, 49.68)
        
        // Title
        .from('#scene3 .section-title', {
            opacity: 0,
            y: -40,
            scale: 0.9,
            duration: 1,
            ease: 'power3.out'
        }, 50)
        
        // Play support (9.04s) at 54.96s
        .call(() => {
            audioManager.playChunk('vo-benefits-support.mp3', 9.04);
            console.log('🎯 Animating first benefits with VISIBLE TEXT');
        }, null, 54.96)
        
        // First 3 benefits with visible text
        .from([benefitItems[0], benefitItems[1], benefitItems[2]], {
            x: -80,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power3.out'
        }, 55.5)
        
        .from([
            benefitItems[0].querySelector('.bullet'),
            benefitItems[1].querySelector('.bullet'),
            benefitItems[2].querySelector('.bullet')
        ], {
            scale: 0,
            rotation: 'random(-180, 180)',
            duration: 0.4,
            stagger: 0.2,
            ease: 'back.out(3)'
        }, 56.5)
        
        .from([
            benefitItems[0].querySelector('.value'),
            benefitItems[1].querySelector('.value'),
            benefitItems[2].querySelector('.value')
        ], {
            x: 50,
            opacity: 0,
            scale: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'back.out(2)'
        }, 57)
        
        // Play HSA (7.37s) at 64.50s
        .call(() => {
            audioManager.playChunk('vo-benefits-hsa.mp3', 7.37);
            console.log('🎯 Animating HSA benefits with VISIBLE TEXT');
        }, null, 64.50)
        
        // HSA and fertility benefits with visible text
        .from([benefitItems[3], benefitItems[4]], {
            x: -80,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power3.out'
        }, 64.8)
        
        .from([
            benefitItems[3].querySelector('.bullet'),
            benefitItems[4].querySelector('.bullet')
        ], {
            scale: 0,
            rotation: 'random(-180, 180)',
            duration: 0.4,
            stagger: 0.2,
            ease: 'back.out(3)'
        }, 65.5)
        
        .from([
            benefitItems[3].querySelector('.value'),
            benefitItems[4].querySelector('.value')
        ], {
            x: 50,
            opacity: 0,
            scale: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'back.out(2)'
        }, 66)
        
        // Highlight HSA
        .to(benefitItems[3], {
            scale: 1.05,
            duration: 0.5,
            yoyo: true,
            repeat: 1
        }, 67)
        
        // Play CTA (5.88s) at 72.37s
        .call(() => {
            audioManager.playChunk('vo-benefits-cta.mp3', 5.88);
            console.log('🎯 Final celebration with VISIBLE TEXT');
        }, null, 72.37)
        
        // Final celebration
        .to('.value', {
            scale: 1.1,
            rotation: 'random(-5, 5)',
            duration: 0.4,
            stagger: 0.05,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 73)
        
        // Add shine to all values
        .call(() => {
            document.querySelectorAll('.value').forEach((val, i) => {
                gsap.to(val, {
                    backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
                    backgroundPosition: '200% 0',
                    backgroundSize: '200% 100%',
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: 'power2.inOut'
                });
            });
        }, null, 74)
        
        // Fade out at 78.25s
        .to('#scene3', {
            opacity: 0,
            scale: 0.95,
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
    
    console.log('✅ Text-fixed animation ready!');
    console.log('🎬 All text elements should now be visible in scenes 2 and 3');
});

console.log('✅ Text-fixed animation loaded');