// MATCHED CORPORATE Benefits Animation
// Perfectly synced with ElevenLabs voiceover content
// Happier, uplifting background music

console.log('💼 Loading matched corporate animation...');

// Enhanced Audio Manager with sync capabilities
class MatchedAudioManager {
    constructor() {
        this.bgMusic = null;
        this.voiceover = null;
        this.isPlaying = false;
        this.startButton = null;
        this.initAudio();
        this.createStartOverlay();
    }
    
    initAudio() {
        // Happier background music options
        this.bgMusic = new Audio('https://www.bensound.com/bensound-music/bensound-ukulele.mp3');
        this.bgMusic.volume = 0.15;
        this.bgMusic.loop = true;
        
        // Fallback to another happy track
        this.bgMusic.onerror = () => {
            console.log('Trying alternative happy music...');
            this.bgMusic = new Audio('https://www.bensound.com/bensound-music/bensound-sunny.mp3');
            this.bgMusic.volume = 0.15;
            this.bgMusic.loop = true;
            
            // Third fallback - upbeat corporate
            this.bgMusic.onerror = () => {
                console.log('Using third music option...');
                this.bgMusic = new Audio('https://www.bensound.com/bensound-music/bensound-buddy.mp3');
                this.bgMusic.volume = 0.15;
                this.bgMusic.loop = true;
            };
        };
        
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
    
    createStartOverlay() {
        // Create click-to-start overlay
        const overlay = document.createElement('div');
        overlay.id = 'start-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
            backdrop-filter: blur(5px);
        `;
        
        const startCard = document.createElement('div');
        startCard.style.cssText = `
            background: linear-gradient(135deg, #1e3a8a, #14b8a6);
            padding: 3rem 4rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            animation: pulse 2s ease-in-out infinite;
        `;
        
        startCard.innerHTML = `
            <h2 style="color: white; font-size: 2.5rem; margin-bottom: 1rem;">2025 Employee Benefits</h2>
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
            <p style="color: rgba(255,255,255,0.7); margin-top: 1rem; font-size: 0.9rem;">Click anywhere to begin</p>
        `;
        
        // Add pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }
            
            #start-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 30px rgba(255,255,255,0.4);
            }
        `;
        document.head.appendChild(style);
        
        overlay.appendChild(startCard);
        document.body.appendChild(overlay);
        
        // Click handler
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
        
        // Start both audio tracks
        try {
            await this.bgMusic.play();
            console.log('✅ Background music started');
        } catch (e) {
            console.log('⚠️ Music autoplay blocked:', e.message);
        }
        
        try {
            await this.voiceover.play();
            console.log('✅ Voiceover started');
        } catch (e) {
            console.log('⚠️ Voiceover blocked:', e.message);
        }
        
        // Start animation timeline
        if (window.matchedTimeline) {
            window.matchedTimeline.restart();
            console.log('✅ Animation timeline started');
        }
    }
    
    pause() {
        this.bgMusic.pause();
        this.voiceover.pause();
        this.isPlaying = false;
    }
    
    resume() {
        this.bgMusic.play();
        this.voiceover.play();
        this.isPlaying = true;
    }
    
    setMusicVolume(vol) {
        this.bgMusic.volume = vol;
    }
    
    setVoiceVolume(vol) {
        this.voiceover.volume = vol;
    }
    
    mute() {
        this.bgMusic.muted = !this.bgMusic.muted;
        this.voiceover.muted = !this.voiceover.muted;
    }
}

// Global audio manager
let audioManager;

// Subtle magic particles
function createSubtleMagic() {
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
    
    // Create subtle floating particles
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: rgba(20, 184, 166, 0.2);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        magicContainer.appendChild(particle);
        
        // Gentle floating animation
        gsap.to(particle, {
            y: 'random(-30, 30)',
            x: 'random(-20, 20)',
            opacity: 'random(0.1, 0.3)',
            duration: 'random(15, 20)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// Clean progress indicator
function createCorporateProgress() {
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
    console.log('✅ Initializing matched corporate animations...');
    
    // Initialize audio manager
    audioManager = new MatchedAudioManager();
    
    // Create minimal progress bar and subtle magic
    const progressBar = createCorporateProgress();
    createSubtleMagic();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    // MATCHED Timeline - synced with voiceover content
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        defaults: { ease: 'power2.inOut' },
        paused: true, // Start paused until user clicks
        onUpdate: () => {
            const progress = timeline.progress() * 100;
            progressBar.style.width = progress + '%';
            
            // Send progress to control panel if open
            if (window.opener || window.parent !== window) {
                const target = window.opener || window.parent;
                target.postMessage({ currentTime: timeline.time() }, '*');
            }
        }
    });
    
    // Store timeline globally for audio sync
    window.matchedTimeline = timeline;
    
    // SCENE 1: Introduction (0-8 seconds)
    // Voiceover: "Welcome to an exciting preview..." (0.5s)
    timeline
        .from('.video-frame', {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            ease: 'power2.out'
        })
        
        // Hero image gentle zoom during intro
        .from('.hero-video img', {
            scale: 1.1,
            duration: 8,
            ease: 'power1.inOut'
        }, 0)
        
        // Title appears with "exciting preview" (0.5-2s)
        .from('.sliding-card', {
            y: 120,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, 0.5)
        
        .from('.main-title', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        }, 0.8)
        
        // Subtitle with "listened to feedback" (3s)
        .from('.subtitle', {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, 3)
        
        // Benefits badges with "increased coverage" (5.5s)
        .from('.highlight', {
            opacity: 0,
            y: 20,
            scale: 0.8,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.4)'
        }, 5.5)
        
        // Line animation
        .fromTo('.animated-line', 
            { scaleX: 0, transformOrigin: 'left' },
            { scaleX: 1, duration: 1 }, 6.5)
        
        // Transition out
        .to('#scene1', {
            opacity: 0,
            duration: 0.5
        }, 7.5)
        .set('#scene1', { visibility: 'hidden' }, 8)
        
        // SCENE 2: Coverage Timeline (8-16 seconds)
        // Voiceover: "Let's review important dates..." (8.5s)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 8)
        
        .from('.split-screen', {
            opacity: 0,
            duration: 0.5
        }, 8)
        
        .from('.left-panel', {
            x: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, 8.3)
        
        .from('.right-panel', {
            x: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, 8.3)
        
        // Section title with "important dates"
        .from('#scene2 .section-title', {
            opacity: 0,
            y: -30,
            duration: 0.6
        }, 8.8)
        
        // All date groups appear in sequence - matching voiceover timing
        .from('.date-group', {
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 2.5  // Spaced to match voiceover mentions
        }, 10)
        
        // Checkmarks appear after each date
        .from('.checkmark', {
            scale: 0,
            rotation: 360,
            duration: 0.5,
            ease: 'back.out(2)',
            stagger: 2.5
        }, 10.4)
        
        // Transition out
        .to('#scene2', {
            opacity: 0,
            duration: 0.5
        }, 15.5)
        
        // SCENE 3: Benefits Overview (16-24 seconds)
        // Voiceover: "Now let's explore game-changing benefits..." (16.5s)
        .set('#scene3', { 
            opacity: 1, 
            visibility: 'visible'
        }, 16)
        .set('#scene2', { visibility: 'hidden' }, 16)
        
        // Title animation
        .from('#scene3 .section-title', {
            opacity: 0,
            y: -30,
            scale: 0.9,
            duration: 0.8,
            ease: 'power2.out'
        }, 16.3)
        
        // All benefit items appear when mentioned in voiceover
        // Mental health & telemedicine (18s), Wellness (19s), HSA (20.5s), Fertility (21s)
        .from('.benefit-item', {
            opacity: 0,
            x: -40,
            duration: 0.5,
            stagger: {
                each: 0.5,
                from: 'start'
            }
        }, 18)
        
        // Value badges appear after each benefit
        .from('.value', {
            scale: 0,
            duration: 0.3,
            ease: 'back.out',
            stagger: 0.5
        }, 18.3)
        
        // Add celebratory pulse to all values at end
        .to('.value', {
            scale: 1.1,
            duration: 0.3,
            stagger: 0.05,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 22)
        
        // Final fade out for loop (matching "Visit benefits.company.com" at 22.5s)
        .to('#scene3', {
            opacity: 0,
            duration: 1
        }, 23)
        .set('#scene3', { visibility: 'hidden' }, 24);
    
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
                audioManager.voiceover.currentTime = 0;
                audioManager.voiceover.play();
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
    
    // Handle messages from control panel
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
                    audioManager.voiceover.play();
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
    
    // Clean responsive scaling
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
    
    console.log('✅ Matched animation ready - click to start!');
});

console.log('✅ Matched corporate animation loaded');