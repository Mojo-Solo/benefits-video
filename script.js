// GSAP Animation Controller for Benefits Video
// All animations handled by GSAP for smooth, performant results

// Register GSAP plugins if needed
gsap.registerPlugin();

// Create master timeline
const masterTimeline = gsap.timeline({
    defaults: {
        ease: "power3.inOut"
    }
});

// Scene 1: Cold Open (0-6 seconds)  
const scene1Timeline = gsap.timeline();
scene1Timeline
    .from(".hero-video img", { 
        scale: 1.2, 
        duration: 6,
        ease: "power2.out"
    })
    .from(".sliding-card", { 
        yPercent: 100, 
        duration: 1,
        ease: "power4.out"
    }, "-=5")
    .from(".main-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
    }, "-=4")
    .from(".subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
    }, "-=3.5");

// Scene 2: Effective Dates (6-12 seconds)
const scene2Timeline = gsap.timeline();
scene2Timeline
    .set("#scene2", { opacity: 1, visibility: "visible" })
    .from(".left-panel", {
        xPercent: -100,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".right-panel", {
        xPercent: 100,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from("#scene2 .section-title", {
        opacity: 0,
        y: -30,
        duration: 0.6
    }, "-=0.3")
    .from(".date-group", {
        opacity: 0,
        x: -50,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out"
    });

// Scene 3: What's New (12-18 seconds)
const scene3Timeline = gsap.timeline();
scene3Timeline
    .set("#scene3", { opacity: 1, visibility: "visible" })
    .from("#scene3", {
        scale: 0.9,
        duration: 0.6
    })
    .from("#scene3 .section-title", {
        opacity: 0,
        y: -40,
        duration: 0.6
    }, "-=0.3")
    .from(".benefit-item", {
        opacity: 0,
        x: -100,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out"
    })
    .from(".bullet", {
        scale: 0,
        duration: 0.3,
        stagger: 0.2,
        ease: "back.out(1.7)"
    }, "-=1.5");

// Scene 4: Key Dates (18-24 seconds)
const scene4Timeline = gsap.timeline();
scene4Timeline
    .set("#scene4", { opacity: 1, visibility: "visible" })
    .from("#scene4 .section-title", {
        scale: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
    })
    .from(".timeline-item", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
    })
    .from(".date-bubble", {
        rotation: -360,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=1");

// Scene 5: How to Enroll (24-30 seconds)
const scene5Timeline = gsap.timeline();
scene5Timeline
    .set("#scene5", { opacity: 1, visibility: "visible" })
    .from("#scene5 .section-title", {
        opacity: 0,
        x: -50,
        duration: 0.6
    })
    .from(".portal-preview img", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    })
    .from(".portal-overlay", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.5)"
    })
    .from(".step", {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.2
    });

// Scene 6: Help & CTA (30-36 seconds)
const scene6Timeline = gsap.timeline();
scene6Timeline
    .set("#scene6", { opacity: 1, visibility: "visible" })
    .from(".team-photo", {
        scale: 1.1,
        opacity: 0,
        duration: 0.8
    })
    .from(".cta-overlay", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    })
    .from(".cta-title", {
        opacity: 0,
        y: -20,
        duration: 0.5
    })
    .from(".cta-text", {
        opacity: 0,
        y: 20,
        duration: 0.5
    }, "-=0.3")
    .fromTo(".cta-button", {
        scale: 0
    }, {
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
    })
    .to(".cta-button", {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
    });

// Build master timeline with scene transitions
masterTimeline
    .add(scene1Timeline)
    .to("#scene1", { 
        opacity: 0, 
        scale: 0.95,
        duration: 0.5 
    })
    .set("#scene1", { visibility: "hidden" })
    .add(scene2Timeline, "-=0.3")
    .to("#scene2", { 
        opacity: 0,
        x: -100,
        duration: 0.5 
    }, "+=5")
    .set("#scene2", { visibility: "hidden" })
    .add(scene3Timeline, "-=0.3")
    .to("#scene3", { 
        opacity: 0,
        scale: 1.1,
        duration: 0.5 
    }, "+=5")
    .set("#scene3", { visibility: "hidden" })
    .add(scene4Timeline, "-=0.3")
    .to("#scene4", { 
        opacity: 0,
        y: 100,
        duration: 0.5 
    }, "+=5")
    .set("#scene4", { visibility: "hidden" })
    .add(scene5Timeline, "-=0.3")
    .to("#scene5", { 
        opacity: 0,
        scale: 0.9,
        duration: 0.5 
    }, "+=5")
    .set("#scene5", { visibility: "hidden" })
    .add(scene6Timeline, "-=0.3");

// Add hover interactions with GSAP
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Add responsive scaling
function handleResize() {
    const container = document.querySelector('.video-frame');
    const scale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
    );
    
    gsap.set(container, {
        scale: scale,
        transformOrigin: "center center"
    });
}

// Initialize
handleResize();
window.addEventListener('resize', handleResize);

// Play the animation
masterTimeline.play();

// Add playback controls (optional)
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ':
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
    }
});