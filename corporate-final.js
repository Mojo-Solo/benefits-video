// FINAL CORPORATE Benefits Animation
// Perfectly synced with ElevenLabs voiceover
// Minimal particles, happier music, matched timing

console.log('💼 Loading final corporate animation...');

// Audio Manager with multiple music fallbacks
class FinalAudioManager {
    constructor() {
        this.bgMusic = null;
        this.voiceover = null;
        this.isPlaying = false;
        this.startButton = null;
        this.musicSources = [
            'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3', // Happy corporate
            'https://cdn.pixabay.com/audio/2022/10/31/audio_16fcb38fe0.mp3', // Upbeat business
            'https://cdn.pixabay.com/audio/2021/11/24/audio_7cc86c2195.mp3'  // Positive energy
        ];
        this.currentMusicIndex = 0;
        this.initAudio();
        this.createStartOverlay();
    }
    
    initAudio() {
        // Try loading music with fallbacks
        this.loadMusic();
        
        // ElevenLabs voiceover
        this.voiceover = new Audio('voiceover.mp3');
        this.voiceover.volume = 1.0;
        
        // Sync voiceover end with animation loop
        this.voiceover.addEventListener('ended', () => {
            setTimeout(() => {
                if (this.isPlaying) {
                    this.voiceover.currentTime = 0;
                    this.voiceover.play();
                }
            }, 2000); // 2 second delay before loop
        });
    }
    
    loadMusic() {
        if (this.currentMusicIndex >= this.musicSources.length) {
            console.log('⚠️ No music sources available');
            return;
        }
        
        this.bgMusic = new Audio(this.musicSources[this.currentMusicIndex]);
        this.bgMusic.volume = 0.15;
        this.bgMusic.loop = true;
        
        this.bgMusic.onerror = () => {
            console.log(`⚠️ Music source ${this.currentMusicIndex + 1} failed, trying next...`);
            this.currentMusicIndex++;
            this.loadMusic();
        };
        
        this.bgMusic.oncanplaythrough = () => {
            console.log('✅ Music loaded successfully');
        };
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
            <p style="color: rgba(255,255,255,0.7); margin-top: 1.5rem; font-size: 0.9rem;">Click anywhere to begin • Audio will play</p>
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
        
        console.log('🚀 Starting synchronized presentation...');
        this.isPlaying = true;
        
        // Hide overlay with fade
        this.startButton.style.transition = 'opacity 0.5s';
        this.startButton.style.opacity = '0';
        setTimeout(() => this.startButton.remove(), 500);
        
        // Start audio
        if (this.bgMusic) {
            this.bgMusic.play().catch(e => console.log('⚠️ Music blocked:', e.message));
        }
        
        this.voiceover.play().catch(e => console.log('⚠️ Voiceover blocked:', e.message));
        
        // Start animation
        if (window.finalTimeline) {
            window.finalTimeline.restart();
            console.log('✅ Animation timeline started');
        }
    }
    
    pause() {
        if (this.bgMusic) this.bgMusic.pause();
        this.voiceover.pause();
        this.isPlaying = false;
    }
    
    resume() {
        if (this.bgMusic) this.bgMusic.play();
        this.voiceover.play();
        this.isPlaying = true;
    }
    
    setMusicVolume(vol) {
        if (this.bgMusic) this.bgMusic.volume = vol;
    }
    
    setVoiceVolume(vol) {
        this.voiceover.volume = vol;
    }
    
    mute() {
        if (this.bgMusic) this.bgMusic.muted = !this.bgMusic.muted;
        this.voiceover.muted = !this.voiceover.muted;
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
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(20, 184, 166, 0.2);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        magicContainer.appendChild(particle);
        
        gsap.to(particle, {
            y: 'random(-20, 20)',
            x: 'random(-15, 15)',
            opacity: 'random(0.1, 0.2)',
            duration: 'random(20, 25)',
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
    console.log('✅ Initializing final animation...');
    
    // Initialize audio manager
    audioManager = new FinalAudioManager();
    
    // Create UI elements
    const progressBar = createProgress();
    createMinimalMagic();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    // Master timeline - perfectly matched to voiceover
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        defaults: { ease: 'power2.inOut' },
        paused: true,
        onUpdate: () => {
            const progress = timeline.progress() * 100;
            progressBar.style.width = progress + '%';
            
            // Send progress to control panel
            if (window.opener || window.parent !== window) {
                const target = window.opener || window.parent;
                target.postMessage({ currentTime: timeline.time() }, '*');
            }
        }
    });
    
    // Store globally
    window.finalTimeline = timeline;
    
    // SCENE 1: Introduction (0-8 seconds)
    timeline
        // Frame fade in - "Welcome to exciting preview" (0.5s)
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
        
        // Card and title - matching "exciting preview"
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
        
        // Subtitle - "listened to feedback" (3s)
        .from('.subtitle', {
            opacity: 0,
            y: 15,
            duration: 0.8
        }, 3)
        
        // Benefit badges - "increased coverage" (5.5s)
        .from('.highlight', {
            opacity: 0,
            y: 15,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.3)'
        }, 5.5)
        
        // Accent line
        .fromTo('.animated-line', 
            { scaleX: 0, transformOrigin: 'left' },
            { scaleX: 1, duration: 0.8 }, 6.8)
        
        // Scene transition
        .to('#scene1', {
            opacity: 0,
            duration: 0.5
        }, 7.5)
        .set('#scene1', { visibility: 'hidden' }, 8)
        
        // SCENE 2: Coverage Timeline (8-16 seconds)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 8)
        
        // Panels slide in - "Let's review" (8.5s)
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
        
        // Title - "important dates"
        .from('#scene2 .section-title', {
            opacity: 0,
            y: -20,
            duration: 0.6
        }, 8.8)
        
        // Date groups with proper timing
        // January 1st (10s), March 1st (12.5s), December 31st (14.5s)
        .from('.date-group', {
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 2.5
        }, 10)
        
        // Bonus text appears with dates
        .from('.bonus', {
            opacity: 0,
            duration: 0.4,
            stagger: 2.5
        }, 10.3)
        
        // Checkmarks after each date
        .from('.checkmark', {
            scale: 0,
            rotation: 180,
            duration: 0.4,
            ease: 'back.out(1.7)',
            stagger: 2.5
        }, 10.5)
        
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
        
        // Title - "game-changing benefits" (16.5s)
        .from('#scene3 .section-title', {
            opacity: 0,
            y: -20,
            scale: 0.95,
            duration: 0.8,
            ease: 'power3.out'
        }, 16.3)
        
        // Benefits appear as mentioned in voiceover
        // Staggered to match: mental health (18s), wellness (19s), HSA (20.5s)
        .from('.benefit-item', {
            opacity: 0,
            x: -30,
            duration: 0.5,
            stagger: 0.4
        }, 18)
        
        // Bullets animate
        .from('.bullet', {
            scale: 0,
            duration: 0.3,
            stagger: 0.4
        }, 18.2)
        
        // Values appear with shine
        .from('.value', {
            scale: 0,
            duration: 0.4,
            ease: 'back.out(1.5)',
            stagger: 0.4
        }, 18.5)
        
        // Final celebration pulse (22s)
        .to('.value', {
            scale: 1.08,
            duration: 0.3,
            stagger: 0.05,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 22)
        
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
                audioManager.voiceover.currentTime = 0;
                break;
            case '1':
                timeline.progress(0);
                audioManager.voiceover.currentTime = 0;
                break;
            case '2':
                timeline.progress(0.33);
                audioManager.voiceover.currentTime = 8;
                break;
            case '3':
                timeline.progress(0.66);
                audioManager.voiceover.currentTime = 16;
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
                    audioManager.voiceover.currentTime = 0;
                    break;
                case 'mute':
                    audioManager.mute();
                    break;
                case 'scene1':
                    timeline.progress(0);
                    audioManager.voiceover.currentTime = 0;
                    break;
                case 'scene2':
                    timeline.progress(0.33);
                    audioManager.voiceover.currentTime = 8;
                    break;
                case 'scene3':
                    timeline.progress(0.66);
                    audioManager.voiceover.currentTime = 16;
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
    
    console.log('✅ Final animation ready - click to start!');
});

console.log('✅ Final corporate animation loaded');