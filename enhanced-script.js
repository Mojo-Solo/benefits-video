// Enhanced GSAP Animation Controller with Audio & Advanced Effects
// Optimized for mobile and lower-end devices

// Device performance detection
const isMobile = window.innerWidth <= 768;
const isLowEnd = window.innerWidth <= 480 || navigator.hardwareConcurrency < 4;

// Audio setup
const bgMusic = document.getElementById('bg-music');
const whooshSound = document.getElementById('whoosh-sound');
const popSound = document.getElementById('pop-sound');

// Audio control with user interaction requirement
let audioEnabled = false;
document.addEventListener('click', () => {
    if (!audioEnabled) {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(e => console.log('Audio play failed:', e));
        audioEnabled = true;
    }
}, { once: true });

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, Observer);
if (!isLowEnd) {
    // Only load heavy plugins on capable devices
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, Physics2DPlugin);
}

// Utility functions for particles and effects
function createParticles(container, count = isMobile ? 20 : 50) {
    if (isLowEnd) return [];
    
    const particles = [];
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: rgba(20, 184, 166, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            pointer-events: none;
        `;
        container.appendChild(particle);
        particles.push(particle);
    }
    return particles;
}

function createConfetti(container, count = isMobile ? 30 : 60) {
    if (isLowEnd) return [];
    
    const colors = ['#14b8a6', '#1e3a8a', '#10b981', '#f59e0b'];
    const confetti = [];
    
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            pointer-events: none;
        `;
        container.appendChild(piece);
        confetti.push(piece);
    }
    return confetti;
}

// Enhanced master timeline
const masterTimeline = gsap.timeline({
    defaults: { ease: "power3.inOut" }
});

// Scene 1: Enhanced Cold Open with particles
const scene1Timeline = gsap.timeline();

// Create particles for scene 1
const particleContainer = document.querySelector('.particles-container');
const particles = createParticles(particleContainer);

scene1Timeline
    .set("#scene1", { opacity: 1, visibility: "visible" })
    .from(".hero-video img", { 
        scale: 1.3, 
        duration: 6,
        ease: "power2.out"
    })
    .to(particles, {
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        opacity: () => gsap.utils.random(0.3, 1),
        duration: 6,
        stagger: 0.1,
        ease: "none",
        repeat: -1,
        yoyo: true
    }, 0)
    .from(".sliding-card", { 
        yPercent: 100, 
        duration: 1.2,
        ease: "back.out(1.7)",
        onStart: () => whooshSound.play().catch(e => {})
    }, "-=5")
    .from(".main-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "back.out(1.5)"
    }, "-=4")
    .from(".subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
    }, "-=3.5");

// Animate the SVG line if DrawSVG is available
if (!isLowEnd && window.DrawSVGPlugin) {
    scene1Timeline.fromTo(".animated-line line", {
        drawSVG: "0% 0%"
    }, {
        drawSVG: "0% 100%",
        duration: 2,
        ease: "power2.inOut"
    }, "-=2");
}

// Scene 2: Enhanced split screen with floating elements
const scene2Timeline = gsap.timeline();

// Create floating elements
const floatingContainer = document.querySelector('.floating-elements');
const floatingElements = [];
if (!isLowEnd) {
    for (let i = 0; i < 8; i++) {
        const el = document.createElement('div');
        el.style.cssText = `
            position: absolute;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        floatingContainer.appendChild(el);
        floatingElements.push(el);
    }
}

scene2Timeline
    .set("#scene2", { opacity: 1, visibility: "visible" })
    .from(".left-panel", {
        xPercent: -100,
        duration: 1,
        ease: "power4.out",
        onStart: () => whooshSound.play().catch(e => {})
    })
    .from(".right-panel", {
        xPercent: 100,
        duration: 1,
        ease: "power4.out"
    }, "-=0.7")
    .to(floatingElements, {
        y: () => gsap.utils.random(-30, 30),
        x: () => gsap.utils.random(-30, 30),
        duration: 4,
        stagger: 0.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
    }, 0)
    .from("#scene2 .section-title", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.5)"
    }, "-=0.5")
    .from(".date-group", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        stagger: 0.4,
        ease: "back.out(1.7)",
        onComplete: () => popSound.play().catch(e => {})
    })
    .from(".checkmark", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.4,
        ease: "back.out(2)",
        rotation: -180
    }, "-=0.5");

// Scene 3: Enhanced text animations
const scene3Timeline = gsap.timeline();

scene3Timeline
    .set("#scene3", { opacity: 1, visibility: "visible" })
    .from("#scene3", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from("#scene3 .section-title", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "back.out(1.5)"
    }, "-=0.4")
    .from(".benefit-item", {
        opacity: 0,
        x: -120,
        duration: 0.6,
        stagger: {
            amount: 1.2,
            from: "start",
            ease: "power2.out"
        },
        ease: "back.out(1.5)"
    })
    .from(".bullet", {
        scale: 0,
        duration: 0.5,
        stagger: 0.25,
        ease: "back.out(3)",
        onComplete: () => popSound.play().catch(e => {})
    }, "-=1.5");

// Scene 4: Enhanced timeline with physics
const scene4Timeline = gsap.timeline();

scene4Timeline
    .set("#scene4", { opacity: 1, visibility: "visible" })
    .from("#scene4", {
        opacity: 0,
        duration: 0.6
    })
    .from("#scene4 .section-title", {
        scale: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
    })
    .from(".timeline-item", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: {
            amount: 0.6,
            from: "start"
        },
        ease: "back.out(2)",
        onStart: () => popSound.play().catch(e => {})
    })
    .from(".date-bubble", {
        rotation: -720,
        duration: 1.2,
        stagger: 0.3,
        ease: "back.out(1.5)"
    }, "-=1.2");

// Add physics bouncing if available
if (!isLowEnd && window.Physics2DPlugin) {
    scene4Timeline.to(".date-bubble", {
        duration: 2,
        physics2D: {
            velocity: () => gsap.utils.random(-200, 200),
            angle: () => gsap.utils.random(-90, -70),
            gravity: 300,
            friction: 0.1
        }
    }, "-=0.5");
}

// Scene 5: Enhanced reveal animations
const scene5Timeline = gsap.timeline();

scene5Timeline
    .set("#scene5", { opacity: 1, visibility: "visible" })
    .from("#scene5", {
        opacity: 0,
        duration: 0.6
    })
    .from("#scene5 .section-title", {
        opacity: 0,
        x: -80,
        duration: 0.8,
        ease: "power4.out"
    })
    .from(".portal-preview img", {
        scale: 0.7,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.3)"
    })
    .from(".portal-overlay", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2)"
    })
    .from(".step", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.3,
        ease: "power3.out"
    });

// Scene 6: Enhanced CTA with confetti celebration
const scene6Timeline = gsap.timeline();

// Create confetti
const confettiContainer = document.querySelector('.confetti-container');
const confetti = createConfetti(confettiContainer);

scene6Timeline
    .set("#scene6", { opacity: 1, visibility: "visible" })
    .from(".team-photo", {
        scale: 1.2,
        opacity: 0,
        duration: 1
    })
    .from(".cta-overlay", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
    })
    .from(".cta-title", {
        opacity: 0,
        y: -30,
        duration: 0.6
    })
    .from(".cta-text", {
        opacity: 0,
        y: 30,
        duration: 0.6
    }, "-=0.3")
    .fromTo(".cta-button", {
        scale: 0
    }, {
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
        onComplete: () => popSound.play().catch(e => {})
    })
    .to(confetti, {
        y: () => gsap.utils.random(200, 400),
        x: () => gsap.utils.random(-200, 200),
        rotation: () => gsap.utils.random(0, 360),
        opacity: 0,
        duration: 3,
        stagger: 0.05,
        ease: "power2.out"
    }, "-=0.5")
    .to(".cta-button", {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 3,
        ease: "power2.inOut"
    }, "-=2");

// Build master timeline with smooth transitions
masterTimeline
    .add(scene1Timeline)
    .to("#scene1", { 
        opacity: 0, 
        scale: 0.95,
        duration: 0.6,
        ease: "power3.inOut"
    })
    .set("#scene1", { visibility: "hidden" })
    .add(scene2Timeline, "-=0.4")
    .to("#scene2", { 
        opacity: 0,
        x: -150,
        duration: 0.6,
        ease: "power3.inOut"
    }, "+=5")
    .set("#scene2", { visibility: "hidden" })
    .add(scene3Timeline, "-=0.4")
    .to("#scene3", { 
        opacity: 0,
        scale: 1.1,
        duration: 0.6,
        ease: "power3.inOut"
    }, "+=5")
    .set("#scene3", { visibility: "hidden" })
    .add(scene4Timeline, "-=0.4")
    .to("#scene4", { 
        opacity: 0,
        y: 150,
        duration: 0.6,
        ease: "power3.inOut"
    }, "+=5")
    .set("#scene4", { visibility: "hidden" })
    .add(scene5Timeline, "-=0.4")
    .to("#scene5", { 
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.inOut"
    }, "+=5")
    .set("#scene5", { visibility: "hidden" })
    .add(scene6Timeline, "-=0.4");

// Enhanced hover interactions
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.15,
            duration: 0.4,
            ease: "back.out(1.7)"
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)"
        });
    });
});

// GSAP Observer for advanced controls
Observer.create({
    target: window,
    type: "wheel,touch,scroll,pointer",
    onUp: () => {
        if (masterTimeline.paused()) {
            masterTimeline.progress(Math.min(1, masterTimeline.progress() + 0.05));
        }
    },
    onDown: () => {
        if (masterTimeline.paused()) {
            masterTimeline.progress(Math.max(0, masterTimeline.progress() - 0.05));
        }
    }
});

// Responsive scaling with performance optimization
let resizeTimeout;
function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const container = document.querySelector('.video-frame');
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        
        // Calculate optimal scaling
        const targetWidth = Math.min(vw * 0.9, vh * 1.78);
        const targetHeight = targetWidth * 0.5625;
        
        gsap.set(container, {
            width: targetWidth,
            height: targetHeight,
            transformOrigin: "center center"
        });
    }, 100);
}

// Initialize and start
handleResize();
window.addEventListener('resize', handleResize);
masterTimeline.play();

// Enhanced keyboard controls
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ':
            e.preventDefault();
            masterTimeline.paused() ? masterTimeline.play() : masterTimeline.pause();
            break;
        case 'ArrowRight':
            masterTimeline.progress(Math.min(1, masterTimeline.progress() + 0.05));
            break;
        case 'ArrowLeft':
            masterTimeline.progress(Math.max(0, masterTimeline.progress() - 0.05));
            break;
        case 'r':
            masterTimeline.restart();
            break;
        case 'm':
            bgMusic.muted = !bgMusic.muted;
            break;
    }
});

console.log('🎬 Enhanced Benefits Video loaded! Controls: Space=play/pause, Arrows=scrub, R=restart, M=mute');