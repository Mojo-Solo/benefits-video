// AUDIO-MATCHED Benefits Animation
// Scene timings perfectly matched to voiceover durations
// Scene 1: 21.21s, Scene 2: 27.25s, Scene 3: 29.02s

console.log('💼 Loading audio-matched animation...');

// Scene-based Audio Manager
class AudioMatchedManager {
    constructor() {
        this.bgMusic = null;
        this.currentVoiceover = null;
        this.voiceovers = {
            scene1: { audio: new Audio('voiceover-scene1.mp3'), duration: 21.21 },
            scene2: { audio: new Audio('voiceover-scene2.mp3'), duration: 27.25 },
            scene3: { audio: new Audio('voiceover-scene3.mp3'), duration: 29.02 }
        };
        this.isPlaying = false;
        this.startButton = null;
        this.initAudio();
        this.createStartOverlay();
    }
    
    initAudio() {
        // Happy background music
        this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3');
        this.bgMusic.volume = 0.1; // Lower volume for longer scenes
        this.bgMusic.loop = true;
        
        // Fallback music
        this.bgMusic.onerror = () => {
            console.log('Trying fallback music...');
            this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2024/10/18/audio_936fac8e86.mp3');
            this.bgMusic.volume = 0.1;
            this.bgMusic.loop = true;
        };
        
        // Set voiceover volumes
        Object.values(this.voiceovers).forEach(vo => {
            vo.audio.volume = 1.0;
            vo.audio.preload = 'auto';
        });
        
        console.log('✅ Scene voiceovers initialized with proper durations');
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
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
            backdrop-filter: blur(8px);
        `;
        
        const startCard = document.createElement('div');
        startCard.style.cssText = `
            background: linear-gradient(135deg, #1e3a8a, #14b8a6);
            padding: 3rem 4rem;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
            animation: pulse 2s ease-in-out infinite;
            max-width: 500px;
        `;
        
        startCard.innerHTML = `
            <h2 style="color: white; font-size: 2.5rem; margin-bottom: 1rem; font-weight: 600;">2025 Employee Benefits</h2>
            <p style="color: rgba(255,255,255,0.9); font-size: 1.25rem; margin-bottom: 2rem;">Enhanced Coverage • Better Savings • Your Future</p>
            <button id="start-button" style="
                background: white;
                color: #1e3a8a;
                border: none;
                padding: 1rem 3rem;
                font-size: 1.25rem;
                font-weight: 600;
                border-radius: 50px;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(255,255,255,0.3);
                transition: all 0.3s;
            ">▶️ Start Presentation</button>
            <p style="color: rgba(255,255,255,0.7); margin-top: 1.5rem; font-size: 0.9rem;">
                Full presentation: ~78 seconds<br>
                Click to begin with audio
            </p>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }
            
            #start-button:hover {
                transform: translateY(-2px) scale(1.05);
                box-shadow: 0 8px 30px rgba(255,255,255,0.5);
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
        
        console.log('🚀 Starting audio-matched presentation...');
        this.isPlaying = true;
        
        // Hide overlay
        this.startButton.style.transition = 'opacity 0.5s';
        this.startButton.style.opacity = '0';
        setTimeout(() => this.startButton.remove(), 500);
        
        // Start background music
        if (this.bgMusic) {
            this.bgMusic.play().catch(e => console.log('⚠️ Music blocked:', e.message));
        }
        
        // Start animation timeline
        if (window.matchedTimeline) {
            window.matchedTimeline.restart();
            console.log('✅ Animation timeline started');
        }
    }
    
    playSceneAudio(sceneName) {
        // Stop any current voiceover
        if (this.currentVoiceover) {
            this.currentVoiceover.pause();
            this.currentVoiceover.currentTime = 0;
        }
        
        // Play new scene voiceover
        const vo = this.voiceovers[sceneName];
        if (vo) {
            this.currentVoiceover = vo.audio;
            vo.audio.currentTime = 0;
            vo.audio.play().catch(e => console.log(`⚠️ ${sceneName} voiceover blocked:`, e.message));
            console.log(`🎵 Playing ${sceneName} voiceover (${vo.duration}s)`);
        }
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
    
    setMusicVolume(vol) {
        if (this.bgMusic) this.bgMusic.volume = vol;
    }
    
    setVoiceVolume(vol) {
        Object.values(this.voiceovers).forEach(vo => vo.audio.volume = vol);
    }
    
    mute() {
        if (this.bgMusic) this.bgMusic.muted = !this.bgMusic.muted;
        Object.values(this.voiceovers).forEach(vo => vo.audio.muted = !vo.audio.muted);
    }
}

// Global audio manager
let audioManager;

// Minimal magic particles
function createMinimalMagic() {
    const magicContainer = document.createElement('div');
    magicContainer.id = 'magic-particles';
    magicContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(magicContainer);
    
    // Very subtle particles for longer presentation
    for (let i = 0; i < 4; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(20, 184, 166, 0.15);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        magicContainer.appendChild(particle);
        
        gsap.to(particle, {
            y: 'random(-15, 15)',
            x: 'random(-10, 10)',
            opacity: 'random(0.05, 0.15)',
            duration: 'random(30, 40)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// Progress indicator
function createProgress() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(30, 58, 138, 0.1);
        z-index: 9999;
    `;
    
    const bar = document.createElement('div');
    bar.id = 'progress-bar';
    bar.style.cssText = `
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #1e3a8a, #14b8a6);
        transition: width 0.3s ease;
    `;
    
    container.appendChild(bar);
    document.body.appendChild(container);
    
    return bar;
}

// Main animation
window.addEventListener('load', () => {
    console.log('✅ Initializing audio-matched animation...');
    
    // Initialize audio manager
    audioManager = new AudioMatchedManager();
    
    // Create UI elements
    const progressBar = createProgress();
    createMinimalMagic();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    // Audio-matched timeline
    // Total: ~78 seconds (21.21 + 27.25 + 29.02 + 2 gap)
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        defaults: { ease: 'power2.inOut' },
        paused: true,
        onUpdate: () => {
            const progress = timeline.progress() * 100;
            progressBar.style.width = progress + '%';
        }
    });
    
    // Store globally
    window.matchedTimeline = timeline;
    
    // SCENE 1: Introduction (0 - 21.21 seconds)
    timeline
        // Play Scene 1 audio
        .call(() => {
            audioManager.playSceneAudio('scene1');
        })
        
        // Frame fade in
        .from('.video-frame', {
            opacity: 0,
            scale: 0.98,
            duration: 1,
            ease: 'power3.out'
        })
        
        // Hero image slow zoom for long scene
        .from('.hero-video img', {
            scale: 1.1,
            duration: 21,
            ease: 'power1.inOut'
        }, 0)
        
        // Card and title - "Welcome to exciting preview" (0.5s)
        .from('.sliding-card', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        }, 0.5)
        
        .from('.main-title', {
            opacity: 0,
            y: 20,
            duration: 1
        }, 1)
        
        // Subtitle - "listened to feedback" (~3s in audio)
        .from('.subtitle', {
            opacity: 0,
            y: 15,
            duration: 1
        }, 4)
        
        // Benefits badges - "increased coverage" (~7s in audio)
        .from('.highlight', {
            opacity: 0,
            y: 15,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.3,
            ease: 'back.out(1.3)'
        }, 7)
        
        // Accent line
        .fromTo('.animated-line', 
            { scaleX: 0, transformOrigin: 'left' },
            { scaleX: 1, duration: 1.5 }, 10)
        
        // Add subtle animations to fill time
        .to('.highlight', {
            scale: 1.05,
            duration: 0.5,
            stagger: 0.2,
            yoyo: true,
            repeat: 1
        }, 14)
        
        // Scene transition at 21.21s
        .to('#scene1', {
            opacity: 0,
            duration: 0.8
        }, 20.4)
        .set('#scene1', { visibility: 'hidden' }, 21.21)
        
        // SCENE 2: Coverage Timeline (21.21 - 48.46 seconds = 27.25s duration)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 21.21)
        
        // Play Scene 2 audio
        .call(() => {
            audioManager.playSceneAudio('scene2');
        }, null, 21.21)
        
        // Panels slide in
        .from('.split-screen', {
            opacity: 0,
            duration: 0.8
        }, 21.21)
        
        .from(['.left-panel', '.right-panel'], {
            opacity: 0,
            x: (i) => i === 0 ? -60 : 60,
            duration: 1,
            ease: 'power3.out'
        }, 21.5)
        
        // Title - "important dates"
        .from('#scene2 .section-title', {
            opacity: 0,
            y: -25,
            duration: 0.8
        }, 22.5)
        
        // First date - "January first" (~3s into scene)
        .from('.date-group:nth-child(1)', {
            opacity: 0,
            x: -40,
            duration: 0.8
        }, 24.2)
        .from('.date-group:nth-child(1) .description, .date-group:nth-child(1) .bonus', {
            opacity: 0,
            duration: 0.6,
            stagger: 0.3
        }, 24.8)
        .from('.date-group:nth-child(1) .checkmark', {
            scale: 0,
            rotation: 180,
            duration: 0.5,
            ease: 'back.out(2)'
        }, 25.5)
        
        // Second date - "March first" (~8s into scene)
        .from('.date-group:nth-child(2)', {
            opacity: 0,
            x: -40,
            duration: 0.8
        }, 29.2)
        .from('.date-group:nth-child(2) .description, .date-group:nth-child(2) .bonus', {
            opacity: 0,
            duration: 0.6,
            stagger: 0.3
        }, 29.8)
        .from('.date-group:nth-child(2) .checkmark', {
            scale: 0,
            rotation: 180,
            duration: 0.5,
            ease: 'back.out(2)'
        }, 30.5)
        
        // Third date - "December thirty-first" (~14s into scene)
        .from('.date-group:nth-child(3)', {
            opacity: 0,
            x: -40,
            duration: 0.8
        }, 35.2)
        .from('.date-group:nth-child(3) .description, .date-group:nth-child(3) .bonus', {
            opacity: 0,
            duration: 0.6,
            stagger: 0.3
        }, 35.8)
        .from('.date-group:nth-child(3) .checkmark', {
            scale: 0,
            rotation: 180,
            duration: 0.5,
            ease: 'back.out(2)'
        }, 36.5)
        
        // Pulse checkmarks to fill remaining time
        .to('.checkmark', {
            scale: 1.2,
            duration: 0.4,
            stagger: 0.2,
            yoyo: true,
            repeat: 1
        }, 40)
        
        // Image subtle zoom
        .to('.right-panel img', {
            scale: 1.05,
            duration: 4,
            ease: 'power1.inOut'
        }, 42)
        
        // Scene transition at 48.46s
        .to('#scene2', {
            opacity: 0,
            duration: 0.8
        }, 47.66)
        .set('#scene2', { visibility: 'hidden' }, 48.46)
        
        // SCENE 3: Benefits Overview (48.46 - 77.48 seconds = 29.02s duration)
        .set('#scene3', { 
            opacity: 1, 
            visibility: 'visible'
        }, 48.46)
        
        // Play Scene 3 audio
        .call(() => {
            audioManager.playSceneAudio('scene3');
        }, null, 48.46)
        
        // Title - "game-changing benefits"
        .from('#scene3 .section-title', {
            opacity: 0,
            y: -25,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out'
        }, 48.8)
        
        // Benefits appear gradually as mentioned
        // Mental health & telemedicine (~3s into scene)
        .from('.benefit-item:nth-child(1), .benefit-item:nth-child(2)', {
            opacity: 0,
            x: -40,
            duration: 0.8,
            stagger: 0.3
        }, 51.5)
        
        // Wellness rewards (~6s into scene)
        .from('.benefit-item:nth-child(3)', {
            opacity: 0,
            x: -40,
            duration: 0.8
        }, 54.5)
        
        // HSA contribution (~9s into scene)
        .from('.benefit-item:nth-child(4)', {
            opacity: 0,
            x: -40,
            duration: 0.8
        }, 57.5)
        
        // Fertility coverage (~11s into scene)
        .from('.benefit-item:nth-child(5)', {
            opacity: 0,
            x: -40,
            duration: 0.8
        }, 59.5)
        
        // Animate all bullets
        .from('.bullet', {
            scale: 0,
            duration: 0.4,
            stagger: 0.2
        }, 52)
        
        // Animate all values
        .from('.value', {
            scale: 0,
            duration: 0.5,
            ease: 'back.out(1.5)',
            stagger: 0.3
        }, 53)
        
        // Add shine effect to values
        .call(() => {
            document.querySelectorAll('.value').forEach((val, i) => {
                gsap.to(val, {
                    backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    backgroundPosition: '200% 0',
                    backgroundSize: '200% 100%',
                    duration: 2,
                    delay: i * 0.2,
                    ease: 'power2.inOut'
                });
            });
        }, null, 62)
        
        // Final celebration pulse (~20s into scene for "Visit benefits.company.com")
        .to('.value', {
            scale: 1.1,
            duration: 0.5,
            stagger: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 68.5)
        
        // Hold for remaining time
        
        // Fade out for loop at 77.48s
        .to('#scene3', {
            opacity: 0,
            duration: 1
        }, 76.48)
        .set('#scene3', { visibility: 'hidden' }, 77.48);
    
    // Keyboard controls
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
                audioManager.playSceneAudio('scene1');
                break;
            case '2':
                timeline.seek(21.21);
                audioManager.playSceneAudio('scene2');
                break;
            case '3':
                timeline.seek(48.46);
                audioManager.playSceneAudio('scene3');
                break;
            case 'm':
                audioManager.mute();
                break;
        }
    });
    
    // Message handler for control panel
    window.addEventListener('message', (e) => {
        if (e.data.command) {
            switch(e.data.command) {
                case 'play':
                    timeline.play();
                    audioManager.resume();
                    break;
                case 'pause':
                    timeline.pause();
                    audioManager.pause();
                    break;
                case 'restart':
                    timeline.restart();
                    break;
                case 'mute':
                    audioManager.mute();
                    break;
                case 'scene1':
                    timeline.seek(0);
                    audioManager.playSceneAudio('scene1');
                    break;
                case 'scene2':
                    timeline.seek(21.21);
                    audioManager.playSceneAudio('scene2');
                    break;
                case 'scene3':
                    timeline.seek(48.46);
                    audioManager.playSceneAudio('scene3');
                    break;
            }
        }
        
        if (e.data.volumeType) {
            if (e.data.volumeType === 'music') {
                audioManager.setMusicVolume(e.data.volume);
            } else if (e.data.volumeType === 'voice') {
                audioManager.setVoiceVolume(e.data.volume);
            }
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
    
    console.log('✅ Audio-matched animation ready - click to start!');
    console.log('📏 Scene durations: Scene 1: 21.21s, Scene 2: 27.25s, Scene 3: 29.02s');
    console.log('⏱️ Total duration: ~78 seconds');
});

console.log('✅ Audio-matched animation loaded');