// CLEAN CORPORATE Benefits Animation
// Minimal, professional, and aligned with brand guidelines
// Enhanced with audio and subtle magic

console.log('💼 Loading corporate animation...');

// Audio Management
class AudioManager {
    constructor() {
        this.bgMusic = null;
        this.voiceLines = [];
        this.initAudio();
    }
    
    initAudio() {
        // Background music - professional, corporate
        this.bgMusic = new Audio('https://www.bensound.com/bensound-music/bensound-corporate.mp3');
        this.bgMusic.volume = 0.3;
        this.bgMusic.loop = true;
        
        // Initialize Web Speech API for TTS
        if ('speechSynthesis' in window) {
            this.synth = window.speechSynthesis;
            this.voice = null;
            
            // Wait for voices to load
            setTimeout(() => {
                const voices = this.synth.getVoices();
                // Prefer professional female voice
                this.voice = voices.find(v => v.name.includes('Samantha')) || 
                            voices.find(v => v.name.includes('Female')) ||
                            voices[0];
            }, 100);
        }
    }
    
    playMusic() {
        this.bgMusic.play().catch(e => console.log('Music autoplay blocked'));
    }
    
    speak(text, delay = 0) {
        if (!this.synth || !this.voice) return;
        
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = this.voice;
            utterance.rate = 0.95;
            utterance.pitch = 1.0;
            utterance.volume = 0.9;
            this.synth.speak(utterance);
        }, delay);
    }
    
    fadeMusic(out = true) {
        const targetVolume = out ? 0 : 0.3;
        gsap.to(this.bgMusic, {
            volume: targetVolume,
            duration: 2
        });
    }
}

const audioManager = new AudioManager();

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
    console.log('✅ Initializing corporate animations...');
    
    // Create minimal progress bar and subtle magic
    const progressBar = createCorporateProgress();
    createSubtleMagic();
    
    // Set initial states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set(['#scene2', '#scene3'], { opacity: 0, visibility: 'hidden' });
    
    // Start background music on user interaction
    document.addEventListener('click', () => {
        audioManager.playMusic();
    }, { once: true });
    
    // Corporate timeline - clean and professional
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        defaults: { ease: 'power2.inOut' },
        onUpdate: () => {
            const progress = timeline.progress() * 100;
            progressBar.style.width = progress + '%';
        }
    });
    
    // SCENE 1: Professional Hero (8 seconds)
    timeline
        // Subtle fade in with slight scale
        .from('.video-frame', {
            opacity: 0,
            scale: 0.98,
            duration: 1,
            ease: 'power2.out'
        })
        .call(() => {
            audioManager.speak('Welcome to an exciting preview of your enhanced 2025 employee benefits package.', 500);
        })
        .call(() => {
            audioManager.speak("This year, we've listened to your feedback and created a comprehensive benefits program that truly supports you and your family.", 3000);
        })
        .call(() => {
            audioManager.speak('With increased coverage, significant cost savings, and new wellness initiatives, we\'re investing in what matters most - you.', 5500);
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
            ease: 'back.out(1.2)',
            // Removed duplicate voiceover - main script handles this
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
        .call(() => {
            audioManager.speak("Let's review the important dates for your 2025 benefits.", 500);
        })
        .call(() => {
            audioManager.speak('Starting January first, your enhanced medical, dental, and vision coverage begins - with a fifteen percent reduction in premiums.', 2000);
        })
        .call(() => {
            audioManager.speak('On March first, our new wellness program launches, along with an increased H-S-A match of up to three thousand dollars.', 4500);
        })
        .call(() => {
            audioManager.speak('Remember, December thirty-first is when your coverage period ends, with automatic renewal available for your convenience.', 6500);
        })
        
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
            onComplete: () => {
                console.log('Scene 3 now visible');
                audioManager.speak("Now, let's explore the game-changing benefits we're introducing for 2025.", 500);
                audioManager.speak('You\'ll have access to twenty-four seven mental health support, zero-dollar telemedicine visits, and comprehensive wellness rewards worth up to twelve hundred dollars.', 2000);
                audioManager.speak("We've doubled our H-S-A contribution to three thousand dollars, and introduced industry-leading fertility and family planning coverage.", 4500);
            }
        }, 15.5)
        
        .set('#scene2', { visibility: 'hidden' }, 16)
        
        // Clean title (removed redundant scene3 opacity animation)
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
            duration: 0.8,
            onStart: () => {
                audioManager.speak('Visit benefits dot company dot com to start your enrollment today. Your future is our investment.', 0);
                audioManager.fadeMusic(true);
            }
        }, 23.2)
        .set('#scene3', { visibility: 'hidden' }, 24)
        .call(() => {
            // Reset music for loop
            setTimeout(() => audioManager.fadeMusic(false), 2000);
        });
    
    // Minimal keyboard controls
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case ' ':
                e.preventDefault();
                timeline.paused() ? timeline.play() : timeline.pause();
                break;
            case 'r':
                timeline.restart();
                break;
            case '1':
                timeline.progress(0);
                break;
            case '2':
                timeline.progress(0.33);
                break;
            case '3':
                timeline.progress(0.66);
                break;
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
    
    // Start after brief pause
    setTimeout(() => {
        timeline.play();
        console.log('▶️ Corporate animation started');
    }, 1000);
});

console.log('✅ Corporate animation ready');