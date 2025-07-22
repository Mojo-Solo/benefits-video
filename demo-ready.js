// DEMO-READY Benefits Animation - Polished 3-Scene Version
// Designed to impress at tomorrow's presentation!

console.log('🎬 DEMO-READY Script Loading...');

// Create visual progress indicator
function createProgressIndicator() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 14px;
        z-index: 9999;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        gap: 15px;
    `;
    
    container.innerHTML = `
        <div id="scene-indicator" style="font-weight: 600;">Scene 1</div>
        <div style="width: 200px; height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; overflow: hidden;">
            <div id="progress-bar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #14b8a6, #1e3a8a); transition: width 0.2s ease;"></div>
        </div>
        <div style="font-size: 12px; opacity: 0.7;">SPACE = Pause | R = Restart</div>
    `;
    
    document.body.appendChild(container);
    return {
        indicator: container.querySelector('#scene-indicator'),
        progressBar: container.querySelector('#progress-bar')
    };
}

// Create particle system for Scene 1
function createParticleSystem() {
    const container = document.querySelector('.particles-container');
    if (!container) return [];
    
    const particles = [];
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: linear-gradient(45deg, #14b8a6, #1e3a8a);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0;
            pointer-events: none;
        `;
        container.appendChild(particle);
        particles.push(particle);
    }
    return particles;
}

// Create confetti for Scene 3
function createConfetti() {
    const container = document.querySelector('.confetti-container');
    if (!container) return [];
    
    const confetti = [];
    const colors = ['#14b8a6', '#1e3a8a', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < 60; i++) {
        const piece = document.createElement('div');
        piece.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: 50%;
            top: 50%;
            opacity: 0;
            pointer-events: none;
        `;
        container.appendChild(piece);
        confetti.push(piece);
    }
    return confetti;
}

// Main animation system
window.addEventListener('load', () => {
    console.log('🚀 Initializing demo-ready animations...');
    
    // Create UI elements
    const { indicator, progressBar } = createProgressIndicator();
    const particles = createParticleSystem();
    const confetti = createConfetti();
    
    // Set initial scene states
    gsap.set('#scene1', { opacity: 1, visibility: 'visible' });
    gsap.set('#scene2', { opacity: 0, visibility: 'hidden' });
    gsap.set('#scene3', { opacity: 0, visibility: 'hidden' });
    
    // Create master timeline with premium easing
    const masterTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        defaults: { ease: 'power2.inOut' },
        onUpdate: () => {
            const progress = masterTimeline.progress() * 100;
            progressBar.style.width = progress + '%';
            
            // Update scene indicator
            if (progress < 33) {
                indicator.textContent = 'Scene 1: Hero Introduction';
            } else if (progress < 66) {
                indicator.textContent = 'Scene 2: Key Benefits';
            } else {
                indicator.textContent = 'Scene 3: Call to Action';
            }
        }
    });
    
    // SCENE 1: HERO INTRODUCTION (8 seconds)
    masterTimeline
        // Initial hero setup
        .set('#scene1', { opacity: 1, visibility: 'visible' })
        .from('.video-frame', {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        })
        
        // Hero image with ken burns effect
        .from('.hero-video img', {
            scale: 1.3,
            duration: 7,
            ease: 'power1.inOut'
        }, 0)
        
        // Particle animation
        .to(particles, {
            opacity: 0.6,
            x: () => gsap.utils.random(-150, 150),
            y: () => gsap.utils.random(-150, 150),
            duration: 6,
            stagger: 0.05,
            ease: 'none'
        }, 0.5)
        
        // Card slide up with premium bounce
        .from('.sliding-card', {
            yPercent: 120,
            duration: 1.5,
            ease: 'elastic.out(1, 0.6)'
        }, 1)
        
        // Text reveals with stagger
        .from('.main-title', {
            opacity: 0,
            y: 40,
            rotationX: -20,
            duration: 1.2,
            ease: 'back.out(1.7)'
        }, 1.8)
        
        .from('.subtitle', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out'
        }, 2.3)
        
        // Benefit highlights with premium stagger
        .from('.highlight', {
            opacity: 0,
            scale: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(2)'
        }, 2.8)
        
        // SVG line draw
        .fromTo('.animated-line', {
            scaleX: 0
        }, {
            scaleX: 1,
            duration: 1.5,
            ease: 'power3.inOut'
        }, 3.5)
        
        // TRANSITION 1: Cinematic fade to Scene 2
        .to('#scene1', {
            scale: 1.1,
            opacity: 0,
            filter: 'blur(5px)',
            duration: 1,
            ease: 'power3.inOut'
        }, 7)
        .set('#scene1', { visibility: 'hidden' }, 8)
        
        // SCENE 2: KEY BENEFITS (8 seconds)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 8)
        .from('#scene2', {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, 8)
        
        // Split panels with 3D effect
        .from('.left-panel', {
            xPercent: -100,
            rotationY: -20,
            duration: 1.2,
            ease: 'power4.out'
        }, 8.3)
        
        .from('.right-panel', {
            xPercent: 100,
            rotationY: 20,
            duration: 1.2,
            ease: 'power4.out'
        }, 8.5)
        
        // Title with dramatic entrance
        .from('#scene2 .section-title', {
            opacity: 0,
            y: -50,
            scale: 0.8,
            duration: 1,
            ease: 'elastic.out(1, 0.6)'
        }, 9)
        
        // Date groups with wave animation
        .from('.date-group', {
            opacity: 0,
            x: -80,
            rotationY: -15,
            duration: 0.8,
            stagger: 0.25,
            ease: 'back.out(1.7)'
        }, 9.5)
        
        // Bonus text reveals
        .from('.bonus', {
            opacity: 0,
            y: 15,
            duration: 0.6,
            stagger: 0.25,
            ease: 'power2.out'
        }, 10.5)
        
        // Checkmarks with celebration
        .from('.checkmark', {
            scale: 0,
            rotation: -180,
            duration: 0.6,
            stagger: 0.25,
            ease: 'elastic.out(1.2, 0.5)'
        }, 11)
        
        // TRANSITION 2: Slide transition to Scene 3
        .to('#scene2', {
            x: -window.innerWidth,
            rotationY: -30,
            duration: 1,
            ease: 'power3.inOut'
        }, 15)
        .set('#scene2', { visibility: 'hidden' }, 16)
        
        // SCENE 3: CALL TO ACTION (8 seconds)
        .set('#scene3', { opacity: 1, visibility: 'visible' }, 16)
        .from('#scene3', {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        }, 16)
        
        // Benefits list entrance
        .from('#scene3 .section-title', {
            opacity: 0,
            y: -60,
            scale: 1.3,
            duration: 1.2,
            ease: 'elastic.out(1, 0.6)'
        }, 16.5)
        
        // Benefit items with premium wave
        .from('.benefit-item', {
            opacity: 0,
            x: -200,
            scale: 0.9,
            duration: 0.8,
            stagger: {
                amount: 1.5,
                from: 'start',
                ease: 'power2.out'
            },
            ease: 'back.out(1.7)'
        }, 17.5)
        
        // Value badges with premium pop
        .from('.value', {
            scale: 0,
            rotation: 180,
            duration: 0.6,
            stagger: 0.2,
            ease: 'elastic.out(1.2, 0.5)'
        }, 18.5)
        
        // Bullet emojis with physics
        .from('.bullet', {
            scale: 0,
            rotation: -360,
            duration: 0.8,
            stagger: 0.2,
            ease: 'elastic.out(1.5, 0.4)'
        }, 19)
        
        // CONFETTI FINALE
        .to(confetti, {
            opacity: 1,
            duration: 0.1
        }, 22)
        .to(confetti, {
            x: () => gsap.utils.random(-300, 300),
            y: () => gsap.utils.random(-100, 400),
            rotation: () => gsap.utils.random(0, 360),
            scale: () => gsap.utils.random(0.5, 2),
            duration: 2.5,
            stagger: 0.03,
            ease: 'power2.out'
        }, 22.1)
        
        // Scene 3 celebration scale
        .to('#scene3', {
            scale: 1.05,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 22.5)
        
        // TRANSITION 3: Fade out for loop
        .to('#scene3', {
            scale: 0.9,
            opacity: 0,
            filter: 'blur(3px)',
            duration: 1,
            ease: 'power3.inOut'
        }, 23)
        .set('#scene3', { visibility: 'hidden' }, 24)
        
        // Reset confetti for next loop
        .set(confetti, { 
            opacity: 0, 
            x: 0, 
            y: 0, 
            rotation: 0, 
            scale: 1 
        }, 24);
    
    // Premium controls
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case ' ':
                e.preventDefault();
                if (masterTimeline.paused()) {
                    masterTimeline.play();
                    console.log('▶️ Demo playing');
                } else {
                    masterTimeline.pause();
                    console.log('⏸️ Demo paused');
                }
                break;
            case 'r':
                masterTimeline.restart();
                console.log('🔄 Demo restarted');
                break;
            case '1':
                masterTimeline.progress(0);
                console.log('⏮️ Jump to Scene 1');
                break;
            case '2':
                masterTimeline.progress(0.33);
                console.log('⏭️ Jump to Scene 2');
                break;
            case '3':
                masterTimeline.progress(0.66);
                console.log('⏭️ Jump to Scene 3');
                break;
            case 'f':
                // Fast demo mode
                masterTimeline.timeScale(2);
                setTimeout(() => masterTimeline.timeScale(1), 3000);
                console.log('⚡ Fast demo mode activated');
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
    
    // Auto-start with dramatic effect
    console.log('🎬 Starting demo in 1 second...');
    setTimeout(() => {
        masterTimeline.play();
        console.log('🚀 DEMO-READY Animation Started!');
        console.log('📊 Total duration:', masterTimeline.duration().toFixed(1), 'seconds');
        console.log('🎮 Controls: SPACE=pause, R=restart, 1/2/3=jump scenes, F=fast mode');
    }, 1000);
});

console.log('✅ Demo-ready script loaded successfully!');