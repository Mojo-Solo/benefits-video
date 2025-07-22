// SCENE-BASED AUDIO Benefits Animation
// Each scene has its own voiceover file for perfect sync
// Happier background music throughout

console.log('💼 Loading scene-based audio animation...');

// Scene-based Audio Manager
class SceneAudioManager {
    constructor() {
        this.bgMusic = null;
        this.currentVoiceover = null;
        this.voiceovers = {
            scene1: new Audio('voiceover-scene1.mp3'),
            scene2: new Audio('voiceover-scene2.mp3'),
            scene3: new Audio('voiceover-scene3.mp3')
        };
        this.isPlaying = false;
        this.startButton = null;
        this.initAudio();
        this.createStartOverlay();
    }
    
    initAudio() {
        // Happy background music
        this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3');
        this.bgMusic.volume = 0.12;
        this.bgMusic.loop = true;
        
        // Fallback music
        this.bgMusic.onerror = () => {
            console.log('Trying fallback music...');
            this.bgMusic = new Audio('https://cdn.pixabay.com/audio/2022/10/31/audio_16fcb38fe0.mp3');
            this.bgMusic.volume = 0.12;
            this.bgMusic.loop = true;
        };
        
        // Set voiceover volumes
        Object.values(this.voiceovers).forEach(vo => {
            vo.volume = 1.0;
            vo.preload = 'auto';
        });
        
        console.log('✅ Scene voiceovers initialized');
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
            <p style="color: rgba(255,255,255,0.7); margin-top: 1.5rem; font-size: 0.9rem;">Click to begin • Audio synchronized by scene</p>
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
        
        console.log('🚀 Starting scene-based presentation...');
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
        if (window.sceneTimeline) {
            window.sceneTimeline.restart();
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
            this.currentVoiceover = vo;
            vo.currentTime = 0;
            vo.play().catch(e => console.log(`⚠️ ${sceneName} voiceover blocked:`, e.message));
            console.log(`🎵 Playing ${sceneName} voiceover`);
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
        Object.values(this.voiceovers).forEach(vo => vo.volume = vol);
    }
    
    mute() {
        if (this.bgMusic) this.bgMusic.muted = !this.bgMusic.muted;
        Object.values(this.voiceovers).forEach(vo => vo.muted = !vo.muted);
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
    
    // Very subtle particles
    for (let i = 0; i < 5; i++) {
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
            y: 'random(-20, 20)',
            x: 'random(-10, 10)',
            opacity: 'random(0.05, 0.15)',
            duration: 'random(25, 30)',
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
    console.log('✅ Initializing scene-based animation...');
    
    // Initialize audio manager
    audioManager = new SceneAudioManager();
    
    // Create UI elements
    const progressBar = createProgress();
    createMinimalMagic();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    // Scene-based timeline
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
    window.sceneTimeline = timeline;
    
    // SCENE 1: Introduction (0-8 seconds)
    timeline
        // Play Scene 1 audio
        .call(() => {
            audioManager.playSceneAudio('scene1');
        })
        
        // Frame fade in
        .from('.video-frame', {
            opacity: 0,
            scale: 0.98,
            duration: 0.8,
            ease: 'power3.out'
        })
        
        // Hero image subtle zoom
        .from('.hero-video img', {
            scale: 1.08,
            duration: 8,
            ease: 'power1.inOut'
        }, 0)
        
        // Card and title appear early (0.5s)
        .from('.sliding-card', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, 0.5)
        
        .from('.main-title', {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, 0.8)
        
        // Subtitle appears at 2.5s
        .from('.subtitle', {
            opacity: 0,
            y: 15,
            duration: 0.8
        }, 2.5)
        
        // Benefits badges at 5s
        .from('.highlight', {
            opacity: 0,
            y: 15,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.3)'
        }, 5)
        
        // Accent line
        .fromTo('.animated-line', 
            { scaleX: 0, transformOrigin: 'left' },
            { scaleX: 1, duration: 0.8 }, 6.5)
        
        // Scene transition
        .to('#scene1', {
            opacity: 0,
            duration: 0.5
        }, 7.5)
        .set('#scene1', { visibility: 'hidden' }, 8)
        
        // SCENE 2: Coverage Timeline (8-16 seconds)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 8)
        
        // Play Scene 2 audio
        .call(() => {
            audioManager.playSceneAudio('scene2');
        })
        
        // Panels slide in
        .from('.split-screen', {
            opacity: 0,
            duration: 0.5
        }, 8)
        
        .from(['.left-panel', '.right-panel'], {
            opacity: 0,
            x: (i) => i === 0 ? -50 : 50,
            duration: 0.8,
            ease: 'power3.out'
        }, 8.3)
        
        // Title
        .from('#scene2 .section-title', {
            opacity: 0,
            y: -20,
            duration: 0.6
        }, 8.8)
        
        // Date groups appear as mentioned in audio
        // All dates and content visible by 10s for reading
        .from('.date-group', {
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.3
        }, 9.5)
        
        .from('.description', {
            opacity: 0,
            duration: 0.4,
            stagger: 0.3
        }, 10)
        
        .from('.bonus', {
            opacity: 0,
            duration: 0.4,
            stagger: 0.3
        }, 10.5)
        
        // Checkmarks appear
        .from('.checkmark', {
            scale: 0,
            rotation: 180,
            duration: 0.4,
            ease: 'back.out(1.7)',
            stagger: 0.3
        }, 11)
        
        // Hold scene for reading
        
        // Scene transition
        .to('#scene2', {
            opacity: 0,
            duration: 0.5
        }, 15.5)
        
        // SCENE 3: Benefits Overview (16-24 seconds)
        .set('#scene3', { 
            opacity: 1, 
            visibility: 'visible'
        }, 16)
        .set('#scene2', { visibility: 'hidden' }, 16)
        
        // Play Scene 3 audio
        .call(() => {
            audioManager.playSceneAudio('scene3');
        })
        
        // Title
        .from('#scene3 .section-title', {
            opacity: 0,
            y: -20,
            scale: 0.95,
            duration: 0.8,
            ease: 'power3.out'
        }, 16.3)
        
        // All benefits appear quickly for reading
        .from('.benefit-item', {
            opacity: 0,
            x: -30,
            duration: 0.5,
            stagger: 0.2
        }, 17)
        
        // Bullets
        .from('.bullet', {
            scale: 0,
            duration: 0.3,
            stagger: 0.2
        }, 17.2)
        
        // Values with shine
        .from('.value', {
            scale: 0,
            duration: 0.4,
            ease: 'back.out(1.5)',
            stagger: 0.2
        }, 17.5)
        
        // Add shine effect to values
        .call(() => {
            document.querySelectorAll('.value').forEach((val, i) => {
                gsap.to(val, {
                    backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    backgroundPosition: '200% 0',
                    backgroundSize: '200% 100%',
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: 'power2.inOut'
                });
            });
        }, 19)
        
        // Final celebration pulse
        .to('.value', {
            scale: 1.08,
            duration: 0.3,
            stagger: 0.05,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 21.5)
        
        // Fade out for loop
        .to('#scene3', {
            opacity: 0,
            duration: 1
        }, 23)
        .set('#scene3', { visibility: 'hidden' }, 24);
    
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
                timeline.seek(8);
                audioManager.playSceneAudio('scene2');
                break;
            case '3':
                timeline.seek(16);
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
                    timeline.seek(8);
                    audioManager.playSceneAudio('scene2');
                    break;
                case 'scene3':
                    timeline.seek(16);
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
    
    console.log('✅ Scene-based animation ready - click to start!');
});

console.log('✅ Scene-based audio animation loaded');