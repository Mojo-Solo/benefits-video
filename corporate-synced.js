// SYNCED CORPORATE Benefits Animation
// With ElevenLabs voiceover and background music
// Click to start everything in perfect sync

console.log('💼 Loading synced corporate animation...');

// Enhanced Audio Manager with sync capabilities
class SyncedAudioManager {
    constructor() {
        this.bgMusic = null;
        this.voiceover = null;
        this.isPlaying = false;
        this.startButton = null;
        this.initAudio();
        this.createStartOverlay();
    }
    
    initAudio() {
        // Background music - using royalty-free corporate music
        this.bgMusic = new Audio('https://www.bensound.com/bensound-music/bensound-corporate.mp3');
        this.bgMusic.volume = 0.2;
        this.bgMusic.loop = true;
        
        // If bensound doesn't work, try alternative
        this.bgMusic.onerror = () => {
            console.log('Trying alternative music source...');
            this.bgMusic = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
            this.bgMusic.volume = 0.15;
            this.bgMusic.loop = true;
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
        if (window.corporateTimeline) {
            window.corporateTimeline.restart();
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
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(20, 184, 166, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        magicContainer.appendChild(particle);
        
        // Gentle floating animation
        gsap.to(particle, {
            y: 'random(-50, 50)',
            x: 'random(-30, 30)',
            opacity: 'random(0.1, 0.5)',
            duration: 'random(10, 15)',
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
        background: #1e3a8a;
        transition: width 0.3s ease;
    `;
    
    container.appendChild(bar);
    document.body.appendChild(container);
    
    return bar;
}

// Main animation
window.addEventListener('load', () => {
    console.log('✅ Initializing synced corporate animations...');
    
    // Initialize audio manager
    audioManager = new SyncedAudioManager();
    
    // Create minimal progress bar and subtle magic
    const progressBar = createCorporateProgress();
    createSubtleMagic();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    // Corporate timeline - clean and professional
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
    window.corporateTimeline = timeline;
    
    // SCENE 1: Professional Hero (8 seconds)
    timeline
        // Subtle fade in with slight scale
        .from('.video-frame', {
            opacity: 0,
            scale: 0.98,
            duration: 1,
            ease: 'power2.out'
        })
        
        // Gentle ken burns on hero image
        .from('.hero-video img', {
            scale: 1.05,
            duration: 7,
            ease: 'none'
        }, 0)
        
        // Clean card slide
        .from('.sliding-card', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        }, 0.5)
        
        // Professional text fade with subtle glow
        .from('.main-title', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            onComplete: () => {
                // Add subtle glow effect
                gsap.to('.main-title', {
                    textShadow: '0 0 20px rgba(20, 184, 166, 0.3)',
                    duration: 1,
                    yoyo: true,
                    repeat: 1
                });
            }
        }, 1.2)
        
        .from('.subtitle', {
            opacity: 0,
            y: 10,
            duration: 0.8
        }, 1.5)
        
        // Clean badge reveals with subtle bounce
        .from('.highlight', {
            opacity: 0,
            y: 10,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.2)'
        }, 2)
        
        // Subtle line animation
        .fromTo('.animated-line', 
            { scaleX: 0 },
            { scaleX: 1, duration: 1 }, 3)
        
        // Clean transition
        .to('#scene1', {
            opacity: 0,
            duration: 0.5
        }, 7.5)
        .set('#scene1', { visibility: 'hidden' }, 8)
        
        // SCENE 2: Corporate Timeline (8 seconds)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 8)
        
        // Professional panel slides
        .from('.left-panel', {
            x: -50,
            opacity: 0,
            duration: 0.8
        }, 8.2)
        
        .from('.right-panel', {
            x: 50,
            opacity: 0,
            duration: 0.8
        }, 8.4)
        
        // Clean title fade
        .from('#scene2 .section-title', {
            opacity: 0,
            y: -20,
            duration: 0.6
        }, 8.8)
        
        // Minimal date reveals
        .from('.date-group', {
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.2
        }, 9.2)
        
        // Subtle bonus text
        .from('.bonus', {
            opacity: 0,
            duration: 0.4,
            stagger: 0.2
        }, 10)
        
        // Simple checkmarks with subtle magic
        .from('.checkmark', {
            scale: 0,
            rotation: 180,
            duration: 0.4,
            stagger: 0.2,
            ease: 'back.out(1.5)',
            onComplete: function() {
                // Add subtle pulse to checkmarks
                gsap.to('.checkmark', {
                    scale: 1.1,
                    duration: 0.3,
                    stagger: 0.1,
                    yoyo: true,
                    repeat: 1
                });
            }
        }, 10.5)
        
        // Clean transition with overlap
        .to('#scene2', {
            opacity: 0,
            duration: 0.8
        }, 15.2)
        
        // SCENE 3: Professional Benefits (8 seconds)
        // Set Scene 3 visible BEFORE Scene 2 is hidden
        .set('#scene3', { 
            opacity: 1, 
            visibility: 'visible',
            onComplete: () => console.log('Scene 3 now visible')
        }, 15.5)
        
        .set('#scene2', { visibility: 'hidden' }, 16)
        
        // Clean title
        .from('#scene3 .section-title', {
            opacity: 0,
            y: -20,
            duration: 0.8
        }, 16.3)
        
        // Professional benefit list
        .from('.benefit-item', {
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.15
        }, 17)
        
        // Subtle value badges with shine effect
        .from('.value', {
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
            stagger: 0.15,
            onComplete: function() {
                // Add subtle shine animation
                document.querySelectorAll('.value').forEach((val, i) => {
                    gsap.to(val, {
                        backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                        backgroundPosition: '200% 0',
                        duration: 1.5,
                        delay: i * 0.1,
                        ease: 'power2.inOut'
                    });
                });
            }
        }, 17.8)
        
        // Minimal bullets
        .from('.bullet', {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            stagger: 0.15
        }, 18.3)
        
        // Clean fade out for loop
        .to('#scene3', {
            opacity: 0,
            duration: 0.8
        }, 23.2)
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
    
    console.log('✅ Synced corporate animation ready - click to start!');
});

console.log('✅ Corporate synced animation loaded');