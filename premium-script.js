// PREMIUM GSAP Animation Controller - Demo Version
// Designed to blow minds at tomorrow's demo!

// Premium audio effects (click anywhere to enable)
let audioEnabled = false;
document.addEventListener('click', () => {
    if (!audioEnabled) {
        // We'll add premium audio later
        audioEnabled = true;
    }
}, { once: true });

// Create particle system
function createParticleSystem(container, count = 60) {
    const particles = [];
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${gsap.utils.random(2, 8)}px;
            height: ${gsap.utils.random(2, 8)}px;
            background: linear-gradient(45deg, #14b8a6, #1e3a8a);
            border-radius: 50%;
            left: ${gsap.utils.random(0, 100)}%;
            top: ${gsap.utils.random(0, 100)}%;
            opacity: 0;
        `;
        container.appendChild(particle);
        particles.push(particle);
    }
    return particles;
}

// Create premium master timeline with cinematic easing
const masterTimeline = gsap.timeline({
    defaults: { ease: "expo.inOut" }
});

// SCENE 1: MIND-BLOWING COLD OPEN
const scene1Timeline = gsap.timeline();
const particles1 = createParticleSystem(document.querySelector('.particles-container'));

scene1Timeline
    // Cinematic zoom intro
    .from(".video-frame", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    })
    // Hero image with parallax effect
    .from(".hero-video img", { 
        scale: 1.4, 
        duration: 8,
        ease: "power1.inOut"
    }, 0)
    // Particle explosion
    .to(particles1, {
        opacity: 0.8,
        duration: 0.5,
        stagger: 0.02
    }, 0.5)
    .to(particles1, {
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        scale: () => gsap.utils.random(0.5, 2),
        duration: 6,
        ease: "none"
    }, 1)
    // Premium card slide with elastic bounce
    .from(".sliding-card", { 
        yPercent: 120, 
        duration: 1.5,
        ease: "elastic.out(1, 0.6)"
    }, "-=6")
    // Text reveals with stagger magic
    .from(".main-title", {
        opacity: 0,
        y: 50,
        rotationX: -90,
        transformOrigin: "center bottom",
        duration: 1.2,
        ease: "back.out(2)"
    }, "-=5")
    .from(".subtitle", {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
    }, "-=4.5")
    // Benefit highlights with premium stagger
    .from(".highlight", {
        opacity: 0,
        scale: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(2)"
    }, "-=3.5")
    // SVG line draw animation
    .fromTo(".animated-line", {
        scaleX: 0,
        transformOrigin: "left center"
    }, {
        scaleX: 1,
        duration: 2,
        ease: "power3.inOut"
    }, "-=3");

// SCENE 2: PREMIUM SPLIT SCREEN WITH 3D EFFECTS
const scene2Timeline = gsap.timeline();
scene2Timeline
    .set("#scene2", { opacity: 1, visibility: "visible" })
    // Simplified panel entrances (removed problematic 3D transforms)
    .from(".left-panel", {
        xPercent: -100,
        duration: 1,
        ease: "power4.out"
    })
    .from(".right-panel", {
        xPercent: 100,
        duration: 1,
        ease: "power4.out"
    }, "-=0.8")
    // Title with dramatic entrance
    .from("#scene2 .section-title", {
        opacity: 0,
        y: -50,
        scale: 0.8,
        duration: 1,
        ease: "back.out(2)"
    }, "-=0.5")
    // Date groups with premium stagger
    .from(".date-group", {
        opacity: 0,
        x: -80,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.3,
        ease: "back.out(1.7)"
    })
    // Bonus text reveals
    .from(".bonus", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out"
    }, "-=0.5")
    // Checkmark celebrations
    .from(".checkmark", {
        scale: 0,
        rotation: -180,
        duration: 0.6,
        stagger: 0.3,
        ease: "back.out(3)"
    }, "-=1");

// SCENE 3: DYNAMIC TEXT ANIMATIONS
const scene3Timeline = gsap.timeline();
scene3Timeline
    .set("#scene3", { opacity: 1, visibility: "visible" })
    // Background morphing entrance
    .from("#scene3", {
        scale: 0.9,
        borderRadius: "50%",
        duration: 1,
        ease: "power4.out"
    })
    // Title with character split animation
    .from("#scene3 .section-title", {
        opacity: 0,
        y: -60,
        scale: 1.2,
        duration: 1,
        ease: "elastic.out(1, 0.6)"
    }, "-=0.5")
    // Benefit items with wave effect
    .from(".benefit-item", {
        opacity: 0,
        x: -150,
        scale: 0.9,
        duration: 0.8,
        stagger: {
            amount: 1.5,
            from: "start",
            ease: "power2.out"
        },
        ease: "back.out(1.7)"
    })
    // Value indicators with premium pop
    .from(".value", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.25,
        ease: "back.out(2)"
    }, "-=1.5")
    // Bullet points with physics bounce
    .from(".bullet", {
        scale: 0,
        rotation: -360,
        duration: 0.8,
        stagger: 0.25,
        ease: "elastic.out(1.2, 0.4)"
    }, "-=2");

// SCENE 4: 3D TIMELINE WITH PHYSICS
const scene4Timeline = gsap.timeline();
scene4Timeline
    .set("#scene4", { opacity: 1, visibility: "visible" })
    // Background with color shift
    .from("#scene4", {
        backgroundColor: "#000000",
        duration: 0.8
    })
    // Title with dramatic entrance
    .from("#scene4 .section-title", {
        scale: 0,
        rotation: 360,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.5")
    // Timeline items with dramatic entrance
    .from(".timeline-item", {
        scale: 0,
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: {
            amount: 1.2,
            from: "start",
            ease: "power2.out"
        },
        ease: "back.out(1.7)"
    })
    // Timeline details with stagger reveal
    .from(".timeline-detail", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.8")
    // Date bubbles with celebration spin
    .from(".date-bubble", {
        rotation: -360,
        scale: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(2)"
    }, "-=1.5");

// SCENE 5: PORTAL REVEAL WITH PREMIUM EFFECTS
const scene5Timeline = gsap.timeline();
scene5Timeline
    .set("#scene5", { opacity: 1, visibility: "visible" })
    // Title slide with blur effect
    .from("#scene5 .section-title", {
        opacity: 0,
        x: -100,
        filter: "blur(20px)",
        duration: 1,
        ease: "power4.out"
    })
    // Portal preview with 3D reveal
    .from(".portal-preview img", {
        scale: 0.7,
        rotationY: 45,
        filter: "blur(10px)",
        duration: 1.5,
        ease: "power4.out"
    }, "-=0.5")
    // Overlay with glass morphism effect
    .from(".portal-overlay", {
        scale: 0,
        opacity: 0,
        backdropFilter: "blur(0px)",
        duration: 1,
        ease: "back.out(2)"
    })
    // Step numbers with premium pop
    .from(".step-number", {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(2)"
    })
    // Step content with elegant reveal
    .from(".step-text", {
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.5")
    .from(".step-note", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.3");

// SCENE 6: EXPLOSIVE FINALE
const scene6Timeline = gsap.timeline();
const confetti = [];

// Create confetti particles
for (let i = 0; i < 100; i++) {
    const piece = document.createElement('div');
    piece.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        background: ${gsap.utils.random(['#14b8a6', '#1e3a8a', '#10b981', '#f59e0b'])};
        left: 50%;
        top: 50%;
        opacity: 0;
    `;
    document.querySelector('.confetti-container').appendChild(piece);
    confetti.push(piece);
}

scene6Timeline
    .set("#scene6", { opacity: 1, visibility: "visible" })
    // Team photo with cinematic zoom
    .from(".team-photo", {
        scale: 1.3,
        filter: "blur(5px)",
        duration: 1.5,
        ease: "power2.out"
    })
    // CTA overlay with premium entrance
    .from(".cta-overlay", {
        scale: 0.8,
        opacity: 0,
        y: 50,
        backdropFilter: "blur(0px)",
        duration: 1,
        ease: "elastic.out(1, 0.6)"
    }, "-=1")
    // Title with dramatic effect
    .from(".cta-title", {
        opacity: 0,
        y: -40,
        scale: 1.2,
        duration: 0.8,
        ease: "back.out(2)"
    })
    // Support options reveal
    .from(".support-options .cta-text", {
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out"
    }, "-=0.3")
    // Stats with premium entrance
    .from(".stat", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(2)"
    })
    // Button with premium hover state
    .from(".cta-button", {
        scale: 0,
        rotation: 180,
        duration: 1,
        ease: "elastic.out(1.2, 0.4)"
    })
    // Urgency message with attention-grabbing effect
    .from(".urgency", {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)"
    })
    // CONFETTI EXPLOSION!
    .to(confetti, {
        opacity: 1,
        duration: 0.1
    })
    .to(confetti, {
        x: () => gsap.utils.random(-400, 400),
        y: () => gsap.utils.random(-200, 600),
        rotation: () => gsap.utils.random(0, 720),
        scale: () => gsap.utils.random(0.5, 2),
        duration: 3,
        ease: "power2.out",
        stagger: 0.02
    }, "-=0.1")
    // Button celebration pulse
    .to(".cta-button", {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 5
    }, "-=2.5");

// PREMIUM SCENE TRANSITIONS
masterTimeline
    .add(scene1Timeline)
    // Cinematic transition 1->2
    .to("#scene1", {
        scale: 1.1,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power3.inOut"
    })
    .set("#scene1", { visibility: "hidden" })
    .add(scene2Timeline, "-=0.4")
    // Slide transition 2->3
    .to("#scene2", {
        x: -window.innerWidth,
        rotationY: -30,
        duration: 0.8,
        ease: "power3.inOut"
    }, "+=5.5")
    .set("#scene2", { visibility: "hidden" })
    .add(scene3Timeline, "-=0.4")
    // Morph transition 3->4
    .to("#scene3", {
        scale: 0.8,
        opacity: 0,
        borderRadius: "50%",
        duration: 0.8,
        ease: "power3.inOut"
    }, "+=5.5")
    .set("#scene3", { visibility: "hidden" })
    .add(scene4Timeline, "-=0.4")
    // 3D flip transition 4->5
    .to("#scene4", {
        rotationY: 90,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut"
    }, "+=5.5")
    .set("#scene4", { visibility: "hidden" })
    .add(scene5Timeline, "-=0.4")
    // Zoom transition 5->6
    .to("#scene5", {
        scale: 0.7,
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.8,
        ease: "power3.inOut"
    }, "+=5.5")
    .set("#scene5", { visibility: "hidden" })
    .add(scene6Timeline, "-=0.4");

// PREMIUM INTERACTIONS
document.querySelector('.cta-button')?.addEventListener('mouseenter', () => {
    gsap.to('.cta-button', {
        scale: 1.15,
        boxShadow: "0 10px 30px rgba(20, 184, 166, 0.4)",
        duration: 0.3,
        ease: "back.out(2)"
    });
});

document.querySelector('.cta-button')?.addEventListener('mouseleave', () => {
    gsap.to('.cta-button', {
        scale: 1,
        boxShadow: "0 0 0px rgba(20, 184, 166, 0)",
        duration: 0.3,
        ease: "back.out(2)"
    });
});

// Responsive scaling with smooth transitions
function handleResize() {
    const container = document.querySelector('.video-frame');
    const scale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
    );
    
    gsap.to(container, {
        scale: scale,
        duration: 0.5,
        ease: "power2.out"
    });
}

// Enhanced keyboard controls for demo
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ':
            e.preventDefault();
            masterTimeline.paused() ? masterTimeline.play() : masterTimeline.pause();
            break;
        case 'ArrowRight':
            masterTimeline.progress(Math.min(1, masterTimeline.progress() + 0.1));
            break;
        case 'ArrowLeft':  
            masterTimeline.progress(Math.max(0, masterTimeline.progress() - 0.1));
            break;
        case 'r':
            masterTimeline.restart();
            break;
        case 'f':
            // Fast forward for demo
            masterTimeline.timeScale(3);
            setTimeout(() => masterTimeline.timeScale(1), 2000);
            break;
    }
});

// Initialize and launch the premium experience
handleResize();
window.addEventListener('resize', handleResize);

// Auto-start after 1 second for demo impact
setTimeout(() => {
    masterTimeline.play();
}, 1000);

console.log('🚀 PREMIUM Benefits Video loaded! Demo controls: Space, Arrows, R=restart, F=fast-forward');