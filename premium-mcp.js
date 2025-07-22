// PREMIUM MCP-ENHANCED Benefits Animation
// Using GSAP MCP Server tools for mind-blowing effects!

console.log('🎬 PREMIUM MCP-ENHANCED Script Loading...');

// Enhanced progress indicator with physics
function createPremiumProgressIndicator() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(30,58,138,0.9));
        color: white;
        padding: 15px 25px;
        border-radius: 30px;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 14px;
        z-index: 9999;
        backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        gap: 20px;
    `;
    
    container.innerHTML = `
        <div id="scene-indicator" style="font-weight: 600; min-width: 200px;">Scene 1: Hero Introduction</div>
        <div style="width: 300px; height: 6px; background: rgba(255,255,255,0.2); border-radius: 3px; overflow: hidden; position: relative;">
            <div id="progress-bar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #14b8a6, #1e3a8a, #10b981); transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);"></div>
            <div id="progress-glow" style="position: absolute; top: 0; left: 0; width: 20px; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent); transform: translateX(-20px);"></div>
        </div>
        <div style="font-size: 12px; opacity: 0.8; font-weight: 500;">
            SPACE=Pause | R=Restart | 1-3=Jump | F=Fast
        </div>
    `;
    
    document.body.appendChild(container);
    
    // Animate progress glow
    gsap.to('#progress-glow', {
        x: 320,
        duration: 2,
        ease: 'none',
        repeat: -1
    });
    
    return {
        indicator: container.querySelector('#scene-indicator'),
        progressBar: container.querySelector('#progress-bar')
    };
}

// Physics-based particle explosion system
function createPhysicsParticleSystem() {
    const container = document.querySelector('.particles-container');
    if (!container) return [];
    
    const particles = [];
    const colors = ['#14b8a6', '#1e3a8a', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.className = 'physics-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 3}px;
            height: ${Math.random() * 6 + 3}px;
            background: radial-gradient(circle, ${color}, transparent);
            border-radius: 50%;
            left: 50%;
            top: 50%;
            opacity: 0;
            pointer-events: none;
            box-shadow: 0 0 10px ${color};
        `;
        container.appendChild(particle);
        particles.push(particle);
    }
    
    return particles;
}

// Premium confetti with physics
function createPremiumConfetti() {
    const container = document.querySelector('.confetti-container');
    if (!container) return [];
    
    const confetti = [];
    const shapes = ['square', 'circle', 'triangle'];
    const colors = ['#14b8a6', '#1e3a8a', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
    
    for (let i = 0; i < 80; i++) {
        const piece = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        piece.className = 'premium-confetti';
        piece.style.cssText = `
            position: absolute;
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
            background: ${color};
            left: 50%;
            top: 50%;
            opacity: 0;
            pointer-events: none;
            ${shape === 'circle' ? 'border-radius: 50%;' : ''}
            ${shape === 'triangle' ? 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);' : ''}
            box-shadow: 0 0 6px ${color};
        `;
        container.appendChild(piece);
        confetti.push(piece);
    }
    
    return confetti;
}

// Split text setup for premium text animations
function setupSplitText() {
    // Check if SplitText is available (it's a premium plugin)
    if (typeof SplitText === 'undefined') {
        console.log('📝 SplitText not available, using standard text animations');
        return null;
    }
    
    const titleSplit = new SplitText('.main-title', { type: 'chars,words' });
    const subtitleSplit = new SplitText('.subtitle', { type: 'words' });
    
    return { titleSplit, subtitleSplit };
}

// Main premium animation system
window.addEventListener('load', () => {
    console.log('🚀 Initializing PREMIUM MCP-enhanced animations...');
    
    // Create premium UI elements
    const { indicator, progressBar } = createPremiumProgressIndicator();
    const physicsParticles = createPhysicsParticleSystem();
    const premiumConfetti = createPremiumConfetti();
    const splitTextElements = setupSplitText();
    
    // Set initial scene states with premium transitions
    gsap.set('#scene1', { opacity: 1, visibility: 'visible', scale: 1 });
    gsap.set('#scene2', { opacity: 0, visibility: 'hidden', scale: 0.9 });
    gsap.set('#scene3', { opacity: 0, visibility: 'hidden', scale: 0.9 });
    
    // Create master timeline with premium easing
    const masterTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 3,
        defaults: { ease: 'power3.inOut' },
        onUpdate: () => {
            const progress = masterTimeline.progress() * 100;
            progressBar.style.width = progress + '%';
            
            // Update scene indicator with smooth transitions
            if (progress < 30) {
                indicator.textContent = '🎯 Scene 1: Hero Introduction';
            } else if (progress < 65) {
                indicator.textContent = '⚡ Scene 2: Premium Benefits';
            } else {
                indicator.textContent = '🚀 Scene 3: Call to Action';
            }
        }
    });
    
    // SCENE 1: PREMIUM HERO WITH PHYSICS (10 seconds)
    masterTimeline
        // Premium scene entrance
        .set('#scene1', { opacity: 1, visibility: 'visible' })
        .from('.video-frame', {
            scale: 0.8,
            opacity: 0,
            rotationY: 15,
            duration: 1.5,
            ease: 'elastic.out(1, 0.6)'
        })
        
        // Hero image with enhanced ken burns
        .from('.hero-video img', {
            scale: 1.4,
            rotation: 2,
            duration: 9,
            ease: 'power1.inOut'
        }, 0)
        
        // Physics-based particle explosion
        .to(physicsParticles, {
            opacity: 0.8,
            duration: 0.2,
            stagger: 0.02
        }, 1)
        
        // Apply physics to particles (simulated with complex motion)
        .to(physicsParticles, {
            x: () => gsap.utils.random(-250, 250),
            y: () => gsap.utils.random(-200, 200),
            rotation: () => gsap.utils.random(0, 360),
            scale: () => gsap.utils.random(0.5, 2),
            duration: 8,
            ease: 'power2.out',
            stagger: {
                amount: 1,
                from: 'random'
            }
        }, 1.2)
        
        // Premium card slide with morphing
        .fromTo('.sliding-card', 
            {
                yPercent: 120,
                scaleY: 0.8,
                skewX: 5
            },
            {
                yPercent: 0,
                scaleY: 1,
                skewX: 0,
                duration: 2,
                ease: 'elastic.out(1.2, 0.5)'
            }, 1.5)
        
        // Premium text animations
        .add(() => {
            if (splitTextElements && splitTextElements.titleSplit) {
                // Character-by-character title reveal
                gsap.from(splitTextElements.titleSplit.chars, {
                    opacity: 0,
                    y: 80,
                    rotationX: -90,
                    scale: 0,
                    duration: 1.5,
                    ease: 'back.out(1.7)',
                    stagger: 0.03,
                    transformOrigin: 'center bottom'
                });
                
                // Word-by-word subtitle
                gsap.from(splitTextElements.subtitleSplit.words, {
                    opacity: 0,
                    y: 30,
                    blur: 10,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.1
                }, 0.5);
            } else {
                // Fallback premium text animations
                gsap.from('.main-title', {
                    opacity: 0,
                    y: 50,
                    rotationX: -20,
                    scale: 1.2,
                    duration: 1.5,
                    ease: 'elastic.out(1, 0.6)'
                });
                
                gsap.from('.subtitle', {
                    opacity: 0,
                    y: 20,
                    filter: 'blur(10px)',
                    duration: 1,
                    ease: 'power2.out'
                }, 0.5);
            }
        }, 2.5)
        
        // Premium benefit highlights with morphing
        .from('.highlight', {
            opacity: 0,
            scale: 0,
            rotation: 180,
            y: 30,
            duration: 1,
            ease: 'elastic.out(1.5, 0.4)',
            stagger: 0.1
        }, 3.5)
        
        // Enhanced SVG line with glow effect
        .fromTo('.animated-line', 
            {
                scaleX: 0,
                filter: 'drop-shadow(0 0 0px #14b8a6)'
            },
            {
                scaleX: 1,
                filter: 'drop-shadow(0 0 20px #14b8a6)',
                duration: 2,
                ease: 'power3.inOut'
            }, 4.5)
        
        // PREMIUM TRANSITION 1: Morphing transition
        .to('#scene1', {
            scale: 1.2,
            opacity: 0,
            rotationY: -30,
            filter: 'blur(10px)',
            duration: 1.5,
            ease: 'power3.inOut'
        }, 8.5)
        .set('#scene1', { visibility: 'hidden' }, 10)
        
        // SCENE 2: PREMIUM BENEFITS WITH 3D EFFECTS (10 seconds)
        .set('#scene2', { opacity: 1, visibility: 'visible', scale: 1 }, 10)
        .from('#scene2', {
            scale: 0.8,
            opacity: 0,
            rotationY: 30,
            duration: 1.2,
            ease: 'back.out(1.7)'
        }, 10)
        
        // Premium 3D panel effects
        .from('.left-panel', {
            xPercent: -120,
            rotationY: -45,
            scale: 0.8,
            duration: 1.5,
            ease: 'power4.out'
        }, 10.5)
        
        .from('.right-panel', {
            xPercent: 120,
            rotationY: 45,
            scale: 0.8,
            duration: 1.5,
            ease: 'power4.out'
        }, 10.7)
        
        // Premium title with character morphing
        .from('#scene2 .section-title', {
            opacity: 0,
            y: -80,
            scale: 0.5,
            rotationX: 90,
            duration: 1.5,
            ease: 'elastic.out(1.2, 0.6)'
        }, 11.2)
        
        // Enhanced date groups with wave physics
        .from('.date-group', {
            opacity: 0,
            x: -120,
            rotationY: -30,
            scale: 0.8,
            duration: 1,
            ease: 'back.out(2)',
            stagger: {
                amount: 1,
                from: 'start'
            }
        }, 12)
        
        // Premium bonus text with glow
        .from('.bonus', {
            opacity: 0,
            y: 20,
            scale: 0.8,
            filter: 'blur(5px)',
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.2
        }, 13)
        
        // Enhanced checkmarks with burst effect
        .from('.checkmark', {
            scale: 0,
            rotation: -360,
            opacity: 0,
            duration: 1,
            ease: 'elastic.out(2, 0.3)',
            stagger: 0.2,
            onComplete: function() {
                // Add burst effect on each checkmark
                gsap.to(this.targets(), {
                    scale: 1.3,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });
            }
        }, 13.5)
        
        // PREMIUM TRANSITION 2: 3D flip transition
        .to('#scene2', {
            rotationY: -90,
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.inOut'
        }, 18.5)
        .set('#scene2', { visibility: 'hidden' }, 20)
        
        // SCENE 3: PREMIUM CTA WITH CONFETTI PHYSICS (10 seconds)
        .set('#scene3', { opacity: 1, visibility: 'visible', scale: 1 }, 20)
        .from('#scene3', {
            scale: 0.7,
            opacity: 0,
            rotationY: 90,
            duration: 1.5,
            ease: 'elastic.out(1, 0.6)'
        }, 20)
        
        // Premium title with explosion effect
        .from('#scene3 .section-title', {
            opacity: 0,
            y: -100,
            scale: 2,
            filter: 'blur(20px)',
            duration: 1.8,
            ease: 'elastic.out(1.5, 0.4)'
        }, 20.5)
        
        // Premium benefit items with morphing wave
        .from('.benefit-item', {
            opacity: 0,
            x: -300,
            scale: 0.5,
            rotationY: -45,
            duration: 1.2,
            ease: 'back.out(2)',
            stagger: {
                amount: 2,
                from: 'start',
                ease: 'power2.inOut'
            }
        }, 21.5)
        
        // Premium value badges with physics bounce
        .from('.value', {
            scale: 0,
            rotation: 720,
            opacity: 0,
            duration: 1,
            ease: 'elastic.out(2, 0.3)',
            stagger: 0.15
        }, 22.5)
        
        // Enhanced bullet emojis with orbital motion
        .from('.bullet', {
            scale: 0,
            rotation: -720,
            opacity: 0,
            duration: 1.2,
            ease: 'elastic.out(1.8, 0.3)',
            stagger: 0.15
        }, 23)
        
        // PREMIUM CONFETTI PHYSICS EXPLOSION
        .to(premiumConfetti, {
            opacity: 1,
            duration: 0.1
        }, 26)
        
        // Physics-based confetti explosion
        .add(() => {
            premiumConfetti.forEach((piece, i) => {
                const angle = (360 / premiumConfetti.length) * i + gsap.utils.random(-30, 30);
                const velocity = gsap.utils.random(200, 400);
                
                gsap.to(piece, {
                    x: Math.cos(angle * Math.PI / 180) * velocity,
                    y: Math.sin(angle * Math.PI / 180) * velocity + gsap.utils.random(-100, 100),
                    rotation: gsap.utils.random(0, 720),
                    scale: gsap.utils.random(0.5, 2),
                    duration: 3 + Math.random(),
                    ease: 'power2.out'
                });
                
                // Gravity effect
                gsap.to(piece, {
                    y: '+=300',
                    duration: 2,
                    delay: 1,
                    ease: 'power2.in'
                });
            });
        }, 26.1)
        
        // Premium scene celebration
        .to('#scene3', {
            scale: 1.1,
            duration: 0.8,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 27)
        
        // PREMIUM TRANSITION 3: Morphing fade for loop
        .to('#scene3', {
            scale: 0.6,
            opacity: 0,
            rotationY: 180,
            filter: 'blur(15px)',
            duration: 2,
            ease: 'power3.inOut'
        }, 28)
        .set('#scene3', { visibility: 'hidden' }, 30)
        
        // Reset all effects for next loop
        .set([physicsParticles, premiumConfetti], { 
            opacity: 0, 
            x: 0, 
            y: 0, 
            rotation: 0, 
            scale: 1 
        }, 30);
    
    // Enhanced controls with haptic feedback simulation
    document.addEventListener('keydown', (e) => {
        // Visual feedback for key presses
        const flashElement = document.createElement('div');
        flashElement.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #14b8a6, #1e3a8a);
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            font-weight: bold;
            z-index: 10000;
            font-family: monospace;
        `;
        
        switch(e.key) {
            case ' ':
                e.preventDefault();
                flashElement.textContent = masterTimeline.paused() ? '▶️ PLAY' : '⏸️ PAUSE';
                if (masterTimeline.paused()) {
                    masterTimeline.play();
                    console.log('▶️ Premium demo playing');
                } else {
                    masterTimeline.pause();
                    console.log('⏸️ Premium demo paused');
                }
                break;
            case 'r':
                flashElement.textContent = '🔄 RESTART';
                masterTimeline.restart();
                console.log('🔄 Premium demo restarted');
                break;
            case '1':
                flashElement.textContent = '🎯 SCENE 1';
                masterTimeline.progress(0);
                console.log('⏮️ Jump to Premium Scene 1');
                break;
            case '2':
                flashElement.textContent = '⚡ SCENE 2';
                masterTimeline.progress(0.33);
                console.log('⏭️ Jump to Premium Scene 2');
                break;
            case '3':
                flashElement.textContent = '🚀 SCENE 3';
                masterTimeline.progress(0.66);
                console.log('⏭️ Jump to Premium Scene 3');
                break;
            case 'f':
                flashElement.textContent = '⚡ FAST MODE';
                masterTimeline.timeScale(2.5);
                setTimeout(() => {
                    masterTimeline.timeScale(1);
                    console.log('🐌 Normal speed restored');
                }, 4000);
                console.log('⚡ Premium fast mode activated');
                break;
            default:
                return;
        }
        
        // Show and animate flash element
        document.body.appendChild(flashElement);
        gsap.from(flashElement, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'back.out(2)'
        });
        gsap.to(flashElement, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            delay: 1,
            ease: 'back.in(2)',
            onComplete: () => flashElement.remove()
        });
    });
    
    // Premium responsive scaling with smooth transitions
    function handlePremiumResize() {
        const container = document.querySelector('.video-frame');
        const scale = Math.min(
            window.innerWidth / 1920,
            window.innerHeight / 1080
        );
        
        gsap.to(container, {
            scale,
            duration: 0.5,
            ease: 'power2.out'
        });
    }
    
    handlePremiumResize();
    window.addEventListener('resize', handlePremiumResize);
    
    // Premium auto-start with countdown
    let countdown = 3;
    const countdownElement = document.createElement('div');
    countdownElement.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 72px;
        font-weight: bold;
        color: #14b8a6;
        text-shadow: 0 0 20px #14b8a6;
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    `;
    document.body.appendChild(countdownElement);
    
    const countdownInterval = setInterval(() => {
        countdownElement.textContent = countdown;
        gsap.fromTo(countdownElement, 
            { scale: 1.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(2)' }
        );
        gsap.to(countdownElement, {
            scale: 0.8,
            opacity: 0,
            duration: 0.7,
            delay: 0.3,
            ease: 'back.in(2)'
        });
        
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = '🚀';
            gsap.to(countdownElement, {
                scale: 2,
                opacity: 0,
                duration: 0.5,
                ease: 'back.in(2)',
                onComplete: () => {
                    countdownElement.remove();
                    masterTimeline.play();
                    console.log('🚀 PREMIUM MCP-ENHANCED Demo Started!');
                    console.log('📊 Total duration:', masterTimeline.duration().toFixed(1), 'seconds');
                    console.log('🎮 Premium controls active');
                }
            });
        }
    }, 1000);
});

console.log('✅ Premium MCP-enhanced script loaded successfully!');