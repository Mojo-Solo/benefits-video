// DEMO-READY GSAP Animation Controller
// Simplified but spectacular for tomorrow's demo

console.log('🎬 DEMO SCRIPT LOADING...');

// Error handling setup
window.addEventListener('error', (e) => {
    console.error('💥 CRITICAL ERROR:', e.error);
    console.error('  📍 File:', e.filename + ':' + e.lineno);
    console.error('  📝 Message:', e.message);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('💥 UNHANDLED PROMISE REJECTION:', e.reason);
});

// GSAP error handling
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});

console.log('📊 GSAP Version:', gsap.version);
console.log('🌐 Screen Size:', window.innerWidth + 'x' + window.innerHeight);

// Check for required elements
console.log('🔍 CHECKING REQUIRED ELEMENTS...');
const requiredElements = [
    '.video-frame',
    '.particles-container',
    '.confetti-container',
    '#scene1', '#scene2', '#scene3', '#scene4', '#scene5', '#scene6'
];

let missingElements = [];
requiredElements.forEach(selector => {
    const element = document.querySelector(selector);
    if (!element) {
        missingElements.push(selector);
        console.error('❌ MISSING ELEMENT:', selector);
    } else {
        console.log('✅ Found:', selector);
    }
});

if (missingElements.length > 0) {
    console.error('💥 CRITICAL: Missing', missingElements.length, 'required elements!');
    console.error('🔧 Missing elements:', missingElements);
} else {
    console.log('✅ All required elements found!');
}

// Particle system creation
function createParticles(container, count = 30) {
    console.log('✨ Creating', count, 'particles in', container);
    
    if (!container) {
        console.error('❌ PARTICLE ERROR: Container is null/undefined');
        return [];
    }
    
    const particles = [];
    try {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
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
        console.log('✅ Created', particles.length, 'particles successfully');
    } catch (error) {
        console.error('❌ PARTICLE CREATION ERROR:', error);
        console.error('  📍 Container:', container);
        console.error('  📝 Error details:', error.message);
    }
    
    return particles;
}

// Create confetti
function createConfetti(container, count = 50) {
    console.log('🎉 Creating', count, 'confetti pieces in', container);
    
    if (!container) {
        console.error('❌ CONFETTI ERROR: Container is null/undefined');
        return [];
    }
    
    const colors = ['#14b8a6', '#1e3a8a', '#10b981', '#f59e0b'];
    const confetti = [];
    
    try {
        for (let i = 0; i < count; i++) {
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
        console.log('✅ Created', confetti.length, 'confetti pieces successfully');
    } catch (error) {
        console.error('❌ CONFETTI CREATION ERROR:', error);
        console.error('  📍 Container:', container);
        console.error('  📝 Error details:', error.message);
    }
    
    return confetti;
}

// Master timeline with reliable timing
let masterTimeline;
try {
    masterTimeline = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onStart: () => console.log('🚀 MASTER TIMELINE STARTED'),
        onComplete: () => console.log('✅ MASTER TIMELINE COMPLETED'),
        onInterrupt: () => console.warn('⚠️ MASTER TIMELINE INTERRUPTED'),
        onReverseComplete: () => console.log('🔄 MASTER TIMELINE REVERSE COMPLETED')
    });
    console.log('✅ Master timeline created successfully');
} catch (error) {
    console.error('❌ MASTER TIMELINE CREATION ERROR:', error);
    console.error('  📝 Error details:', error.message);
}

console.log('📋 Building scene timelines...');

// SCENE 1: Hero with particles
console.log('🎬 SCENE 1: Building cold open timeline...');
const scene1Timeline = gsap.timeline({
    onStart: () => console.log('▶️ Scene 1 STARTED'),
    onComplete: () => console.log('✅ Scene 1 COMPLETED')
});

const particleContainer = document.querySelector('.particles-container');
console.log('🔍 Particle container found:', !!particleContainer);
if (!particleContainer) {
    console.error('❌ CRITICAL: Particle container not found!');
    console.error('  🔧 Expected element: .particles-container');
}
const particles = createParticles(particleContainer);

scene1Timeline
    .from(".video-frame", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onStart: () => console.log('  🎬 Video frame scaling in...'),
        onComplete: () => console.log('  ✅ Video frame scale complete')
    })
    .from(".hero-video img", { 
        scale: 1.3, 
        duration: 6,
        ease: "power1.out",
        onStart: () => console.log('  🖼️ Hero image ken burns effect starting...'),
        onComplete: () => console.log('  ✅ Hero image animation complete')
    }, 0)
    .to(particles, {
        opacity: 0.6,
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        duration: 5,
        stagger: 0.05,
        ease: "none",
        onStart: () => console.log('  ✨ Particles floating animation starting...'),
        onComplete: () => console.log('  ✅ Particles animation complete')
    }, 0.5)
    .from(".sliding-card", { 
        yPercent: 100, 
        duration: 1.2,
        ease: "back.out(1.7)",
        onStart: () => console.log('  📱 Card sliding up from bottom...'),
        onComplete: () => console.log('  ✅ Card slide complete')
    }, "-=5")
    .from(".main-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "back.out(1.5)",
        onStart: () => console.log('  🎯 Main title fading in...'),
        onComplete: () => console.log('  ✅ Main title fade complete')
    }, "-=4.5")
    .from(".subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        onStart: () => console.log('  📝 Subtitle fading in...'),
        onComplete: () => console.log('  ✅ Subtitle fade complete')
    }, "-=4")
    .from(".highlight", {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(2)",
        onStart: () => console.log('  🏷️ Highlight badges scaling in...'),
        onComplete: () => console.log('  ✅ All highlight badges complete')
    }, "-=3.5")
    .fromTo(".animated-line", {
        scaleX: 0
    }, {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut",
        onStart: () => console.log('  📏 SVG line drawing...'),
        onComplete: () => console.log('  ✅ SVG line draw complete')
    }, "-=2");

// SCENE 2: Fixed effective dates
console.log('🎬 SCENE 2: Building effective dates timeline...');
const scene2Timeline = gsap.timeline({
    onStart: () => console.log('▶️ Scene 2 STARTED'),
    onComplete: () => console.log('✅ Scene 2 COMPLETED')
});

const scene2 = document.querySelector('#scene2');
const dateGroups = document.querySelectorAll('.date-group');
const bonusTexts = document.querySelectorAll('.bonus');
const checkmarks = document.querySelectorAll('.checkmark');

console.log('🔍 Scene 2 elements found:');
console.log('  - Scene container:', !!scene2);
console.log('  - Date groups:', dateGroups.length);
console.log('  - Bonus texts:', bonusTexts.length);
console.log('  - Checkmarks:', checkmarks.length);

scene2Timeline
    .set("#scene2", { 
        opacity: 1, 
        visibility: "visible",
        onComplete: () => console.log('  👁️ Scene 2 visibility set')
    })
    .from(".left-panel", {
        xPercent: -100,
        duration: 1,
        ease: "power3.out",
        onStart: () => console.log('  ⬅️ Left panel sliding in from left...'),
        onComplete: () => console.log('  ✅ Left panel slide complete')
    })
    .from(".right-panel", {
        xPercent: 100,
        duration: 1,
        ease: "power3.out",
        onStart: () => console.log('  ➡️ Right panel sliding in from right...'),
        onComplete: () => console.log('  ✅ Right panel slide complete')
    }, "-=0.7")
    .from("#scene2 .section-title", {
        opacity: 0,
        y: -40,
        duration: 0.8,
        ease: "back.out(1.5)",
        onStart: () => console.log('  📋 Section title "Coverage Timeline" fading in...'),
        onComplete: () => console.log('  ✅ Section title fade complete')
    }, "-=0.3")
    .from(".date-group", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        stagger: 0.3,
        ease: "back.out(1.5)",
        onStart: () => console.log('  📅 Date groups sliding in with stagger...'),
        onComplete: () => console.log('  ✅ All date groups slide complete')
    })
    .from(".bonus", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
        onStart: () => console.log('  💰 Bonus text revealing...'),
        onComplete: () => console.log('  ✅ All bonus text reveals complete')
    }, "-=0.8")
    .from(".checkmark", {
        scale: 0,
        rotation: -180,
        duration: 0.6,
        stagger: 0.3,
        ease: "back.out(2)",
        onStart: () => console.log('  ✓ Checkmarks spinning in...'),
        onComplete: () => console.log('  ✅ All checkmarks complete')
    }, "-=1");

// SCENE 3: Enhanced benefits list
console.log('🎬 SCENE 3: Building benefits list timeline...');
const scene3Timeline = gsap.timeline({
    onStart: () => console.log('▶️ Scene 3 STARTED'),
    onComplete: () => console.log('✅ Scene 3 COMPLETED')
});

const scene3 = document.querySelector('#scene3');
const benefitItems = document.querySelectorAll('.benefit-item');
const valueElements = document.querySelectorAll('.value');
const bullets = document.querySelectorAll('.bullet');

console.log('🔍 Scene 3 elements found:');
console.log('  - Scene container:', !!scene3);
console.log('  - Benefit items:', benefitItems.length);
console.log('  - Value elements:', valueElements.length);
console.log('  - Bullets:', bullets.length);

scene3Timeline
    .set("#scene3", { 
        opacity: 1, 
        visibility: "visible",
        onComplete: () => console.log('  👁️ Scene 3 visibility set')
    })
    .from("#scene3", {
        scale: 0.9,
        duration: 0.6,
        ease: "power2.out",
        onStart: () => console.log('  🔍 Scene 3 scaling up...'),
        onComplete: () => console.log('  ✅ Scene 3 scale complete')
    })
    .from("#scene3 .section-title", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "back.out(1.5)",
        onStart: () => console.log('  🚀 "Game-Changing Benefits" title fading in...'),
        onComplete: () => console.log('  ✅ Benefits title fade complete')
    }, "-=0.3")
    .from(".benefit-item", {
        opacity: 0,
        x: -120,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.5)",
        onStart: () => console.log('  📋 Benefit items sliding in with stagger...'),
        onComplete: () => console.log('  ✅ All benefit items slide complete')
    })
    .from(".value", {
        scale: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(2)",
        onStart: () => console.log('  💎 Value badges scaling in...'),
        onComplete: () => console.log('  ✅ All value badges complete')
    }, "-=1")
    .from(".bullet", {
        scale: 0,
        rotation: -360,
        duration: 0.6,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        onStart: () => console.log('  🎯 Bullet emojis spinning in...'),
        onComplete: () => console.log('  ✅ All bullet emojis complete')
    }, "-=1.5");

// SCENE 4: Timeline with all content
console.log('🎬 SCENE 4: Building timeline...');
const scene4Timeline = gsap.timeline({
    onStart: () => console.log('▶️ Scene 4 STARTED'),
    onComplete: () => console.log('✅ Scene 4 COMPLETED')
});

const scene4 = document.querySelector('#scene4');
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineDetails = document.querySelectorAll('.timeline-detail');
const dateBubbles = document.querySelectorAll('.date-bubble');

console.log('🔍 Scene 4 elements found:');
console.log('  - Scene container:', !!scene4);
console.log('  - Timeline items:', timelineItems.length);
console.log('  - Timeline details:', timelineDetails.length);
console.log('  - Date bubbles:', dateBubbles.length);

scene4Timeline
    .set("#scene4", { 
        opacity: 1, 
        visibility: "visible",
        onComplete: () => console.log('  👁️ Scene 4 visibility set')
    })
    .from("#scene4 .section-title", {
        scale: 0,
        duration: 1,
        ease: "back.out(1.5)",
        onStart: () => console.log('  ⏰ "Critical Enrollment Timeline" title scaling in...'),
        onComplete: () => console.log('  ✅ Timeline title scale complete')
    })
    .from(".timeline-item", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        onStart: () => console.log('  📅 Timeline items scaling in with stagger...'),
        onComplete: () => console.log('  ✅ All timeline items scale complete')
    })
    .from(".timeline-detail", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        onStart: () => console.log('  📝 Timeline details fading in...'),
        onComplete: () => console.log('  ✅ All timeline details fade complete')
    }, "-=0.8")
    .from(".date-bubble", {
        rotation: -360,
        scale: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
        onStart: () => console.log('  🔵 Date bubbles spinning in...'),
        onComplete: () => console.log('  ✅ All date bubbles complete')
    }, "-=1.2");

// SCENE 5: Enrollment steps
console.log('🎬 SCENE 5: Building enrollment steps...');
const scene5Timeline = gsap.timeline({
    onStart: () => console.log('▶️ Scene 5 STARTED'),
    onComplete: () => console.log('✅ Scene 5 COMPLETED')
});

const scene5 = document.querySelector('#scene5');
const stepNumbers = document.querySelectorAll('.step-number');
const stepTexts = document.querySelectorAll('.step-text');
const stepNotes = document.querySelectorAll('.step-note');

console.log('🔍 Scene 5 elements found:');
console.log('  - Scene container:', !!scene5);
console.log('  - Step numbers:', stepNumbers.length);
console.log('  - Step texts:', stepTexts.length);
console.log('  - Step notes:', stepNotes.length);

scene5Timeline
    .set("#scene5", { 
        opacity: 1, 
        visibility: "visible",
        onComplete: () => console.log('  👁️ Scene 5 visibility set')
    })
    .from("#scene5 .section-title", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out",
        onStart: () => console.log('  💻 "Enroll in 3 Easy Steps" title sliding in...'),
        onComplete: () => console.log('  ✅ Enrollment title slide complete')
    })
    .from(".portal-preview img", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onStart: () => console.log('  🖼️ Portal preview image scaling in...'),
        onComplete: () => console.log('  ✅ Portal image scale complete')
    }, "-=0.3")
    .from(".portal-overlay", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)",
        onStart: () => console.log('  📋 Portal overlay scaling in...'),
        onComplete: () => console.log('  ✅ Portal overlay complete')
    })
    .from(".step-number", {
        scale: 0,
        rotation: 180,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(2)",
        onStart: () => console.log('  🔢 Step numbers spinning in...'),
        onComplete: () => console.log('  ✅ All step numbers complete')
    })
    .from(".step-text", {
        opacity: 0,
        x: 30,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        onStart: () => console.log('  📝 Step text sliding in...'),
        onComplete: () => console.log('  ✅ All step text complete')
    }, "-=0.5")
    .from(".step-note", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.15,
        ease: "power2.out",
        onStart: () => console.log('  📌 Step notes fading in...'),
        onComplete: () => console.log('  ✅ All step notes complete')
    }, "-=0.3");

// SCENE 6: Grand finale with confetti
console.log('🎬 SCENE 6: Building grand finale...');
const scene6Timeline = gsap.timeline({
    onStart: () => console.log('▶️ Scene 6 STARTED'),
    onComplete: () => console.log('✅ Scene 6 COMPLETED - DEMO FINISHED! 🎉')
});

const scene6 = document.querySelector('#scene6');
const supportOptions = document.querySelectorAll('.support-options .cta-text');
const stats = document.querySelectorAll('.stat');
const ctaButton = document.querySelector('.cta-button');
const urgencyText = document.querySelector('.urgency');

console.log('🔍 Scene 6 elements found:');
console.log('  - Scene container:', !!scene6);
console.log('  - Support options:', supportOptions.length);
console.log('  - Stats:', stats.length);
console.log('  - CTA button:', !!ctaButton);
console.log('  - Urgency text:', !!urgencyText);

const confettiContainer = document.querySelector('.confetti-container');
console.log('🔍 Confetti container found:', !!confettiContainer);
const confetti = createConfetti(confettiContainer);

scene6Timeline
    .set("#scene6", { 
        opacity: 1, 
        visibility: "visible",
        onComplete: () => console.log('  👁️ Scene 6 visibility set')
    })
    .from(".team-photo", {
        scale: 1.2,
        duration: 1.5,
        ease: "power2.out",
        onStart: () => console.log('  📸 Team photo zooming out...'),
        onComplete: () => console.log('  ✅ Team photo zoom complete')
    })
    .from(".cta-overlay", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.5)",
        onStart: () => console.log('  📋 CTA overlay scaling in...'),
        onComplete: () => console.log('  ✅ CTA overlay scale complete')
    }, "-=1")
    .from(".cta-title", {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "back.out(1.5)",
        onStart: () => console.log('  🙋‍♀️ CTA title "Need Help? We\'ve Got You!" fading in...'),
        onComplete: () => console.log('  ✅ CTA title fade complete')
    })
    .from(".support-options .cta-text", {
        opacity: 0,
        x: -30,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        onStart: () => console.log('  📞 Support options sliding in with stagger...'),
        onComplete: () => console.log('  ✅ All support options complete')
    })
    .from(".stat", {
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(2)",
        onStart: () => console.log('  📊 Statistics badges scaling in...'),
        onComplete: () => console.log('  ✅ All statistics complete')
    })
    .from(".cta-button", {
        scale: 0,
        rotation: 180,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        onStart: () => console.log('  🚀 CTA button "START MY ENROLLMENT NOW" spinning in...'),
        onComplete: () => console.log('  ✅ CTA button animation complete')
    })
    .from(".urgency", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "back.out(1.5)",
        onStart: () => console.log('  ⏰ Urgency message "Only 12 days left" fading in...'),
        onComplete: () => console.log('  ✅ Urgency message fade complete')
    })
    // CONFETTI EXPLOSION
    .to(confetti, {
        opacity: 1,
        duration: 0.1,
        onStart: () => console.log('  🎉 CONFETTI EXPLOSION STARTING!'),
        onComplete: () => console.log('  ✨ Confetti visibility set')
    })
    .to(confetti, {
        x: () => gsap.utils.random(-300, 300),
        y: () => gsap.utils.random(-100, 400),
        rotation: () => gsap.utils.random(0, 360),
        duration: 3,
        stagger: 0.03,
        ease: "power2.out",
        onStart: () => console.log('  💥 Confetti explosion animation starting...'),
        onComplete: () => console.log('  🎊 CONFETTI EXPLOSION COMPLETE!')
    }, "-=0.1")
    .to(".cta-button", {
        scale: 1.1,
        duration: 0.3,
        yoyo: true,
        repeat: 3,
        ease: "power2.inOut",
        onStart: () => console.log('  ⭐ CTA button celebration pulse starting...'),
        onComplete: () => console.log('  ✅ CTA button pulse complete')
    }, "-=2");

// Build master timeline with proper transitions
console.log('🔗 Building master timeline with all scenes...');

console.log('📊 Timeline Summary:');
console.log('  - Scene 1 duration: ~12 seconds');
console.log('  - Scene 2 duration: ~6 seconds');  
console.log('  - Scene 3 duration: ~6 seconds');
console.log('  - Scene 4 duration: ~6 seconds');
console.log('  - Scene 5 duration: ~6 seconds');
console.log('  - Scene 6 duration: ~6 seconds');
console.log('  - Total estimated: ~42 seconds');

try {
    console.log('🔗 Adding Scene 1 to master timeline...');
    masterTimeline.add(scene1Timeline);
    console.log('✅ Scene 1 added successfully');
    
    console.log('🌅 Adding Scene 1 transition...');
    masterTimeline.to("#scene1", { 
        opacity: 0, 
        scale: 0.95,
        duration: 0.6,
        onStart: () => console.log('  🌅 Scene 1 transitioning out...'),
        onComplete: () => console.log('  ✅ Scene 1 transition complete')
    }, "+=5.5");
    masterTimeline.set("#scene1", { 
        visibility: "hidden",
        onComplete: () => console.log('  👁️ Scene 1 hidden')
    });
    
    console.log('🔗 Adding Scene 2 to master timeline...');
    masterTimeline.add(scene2Timeline, "-=0.3");
    console.log('✅ Scene 2 added successfully');
    
    console.log('🌅 Adding Scene 2 transition...');
    masterTimeline.to("#scene2", { 
        opacity: 0,
        x: -100,
        duration: 0.6,
        onStart: () => console.log('  🌅 Scene 2 transitioning out...'),
        onComplete: () => console.log('  ✅ Scene 2 transition complete')
    }, "+=5.5");
    masterTimeline.set("#scene2", { 
        visibility: "hidden",
        onComplete: () => console.log('  👁️ Scene 2 hidden')
    });
    
    console.log('🔗 Adding Scene 3 to master timeline...');
    masterTimeline.add(scene3Timeline, "-=0.3");
    console.log('✅ Scene 3 added successfully');
    
    console.log('🌅 Adding Scene 3 transition...');
    masterTimeline.to("#scene3", { 
        opacity: 0,
        scale: 1.1,
        duration: 0.6,
        onStart: () => console.log('  🌅 Scene 3 transitioning out...'),
        onComplete: () => console.log('  ✅ Scene 3 transition complete')
    }, "+=5.5");
    masterTimeline.set("#scene3", { 
        visibility: "hidden",
        onComplete: () => console.log('  👁️ Scene 3 hidden')
    });
    
    console.log('🔗 Adding Scene 4 to master timeline...');
    masterTimeline.add(scene4Timeline, "-=0.3");
    console.log('✅ Scene 4 added successfully');
    
    console.log('🌅 Adding Scene 4 transition...');
    masterTimeline.to("#scene4", { 
        opacity: 0,
        y: 100,
        duration: 0.6,
        onStart: () => console.log('  🌅 Scene 4 transitioning out...'),
        onComplete: () => console.log('  ✅ Scene 4 transition complete')
    }, "+=5.5");
    masterTimeline.set("#scene4", { 
        visibility: "hidden",
        onComplete: () => console.log('  👁️ Scene 4 hidden')
    });
    
    console.log('🔗 Adding Scene 5 to master timeline...');
    masterTimeline.add(scene5Timeline, "-=0.3");
    console.log('✅ Scene 5 added successfully');
    
    console.log('🌅 Adding Scene 5 transition...');
    masterTimeline.to("#scene5", { 
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        onStart: () => console.log('  🌅 Scene 5 transitioning out...'),
        onComplete: () => console.log('  ✅ Scene 5 transition complete')
    }, "+=5.5");
    masterTimeline.set("#scene5", { 
        visibility: "hidden",
        onComplete: () => console.log('  👁️ Scene 5 hidden')
    });
    
    console.log('🔗 Adding Scene 6 to master timeline...');
    masterTimeline.add(scene6Timeline, "-=0.3");
    console.log('✅ Scene 6 added successfully');
    console.log('🎉 MASTER TIMELINE CONSTRUCTION COMPLETE!');
    
} catch (error) {
    console.error('❌ MASTER TIMELINE CONSTRUCTION ERROR:', error);
    console.error('  📝 Error details:', error.message);
    console.error('  📍 Stack trace:', error.stack);
}

// Premium button interactions with error handling
console.log('🎮 Setting up button interactions...');
try {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        console.log('✅ CTA button found, adding hover interactions');
        
        ctaButton.addEventListener('mouseenter', () => {
            try {
                console.log('🎯 CTA button hover IN');
                gsap.to('.cta-button', {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            } catch (error) {
                console.error('❌ CTA button hover IN error:', error);
            }
        });

        ctaButton.addEventListener('mouseleave', () => {
            try {
                console.log('🎯 CTA button hover OUT');
                gsap.to('.cta-button', {
                    scale: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            } catch (error) {
                console.error('❌ CTA button hover OUT error:', error);
            }
        });
        
        ctaButton.addEventListener('click', () => {
            try {
                console.log('🎯 CTA button CLICKED!');
                gsap.to('.cta-button', {
                    scale: 0.95,
                    duration: 0.1,
                    ease: "power2.out",
                    yoyo: true,
                    repeat: 1
                });
            } catch (error) {
                console.error('❌ CTA button click error:', error);
            }
        });
        
        console.log('✅ Button interactions setup complete');
    } else {
        console.warn('⚠️ WARNING: CTA button not found for interactions');
    }
} catch (error) {
    console.error('❌ BUTTON INTERACTION SETUP ERROR:', error);
    console.error('  📝 Error details:', error.message);
}

console.log('🎮 Setting up demo controls...');

// Demo controls
document.addEventListener('keydown', (e) => {
    console.log('⌨️ Key pressed:', e.key);
    switch(e.key) {
        case ' ':
            e.preventDefault();
            if (masterTimeline.paused()) {
                console.log('▶️ PLAYING timeline');
                masterTimeline.play();
            } else {
                console.log('⏸️ PAUSING timeline');
                masterTimeline.pause();
            }
            break;
        case 'ArrowRight':
            const newProgress = Math.min(1, masterTimeline.progress() + 0.1);
            console.log('⏭️ SCRUBBING forward to', (newProgress * 100).toFixed(1) + '%');
            masterTimeline.progress(newProgress);
            break;
        case 'ArrowLeft':
            const backProgress = Math.max(0, masterTimeline.progress() - 0.1);
            console.log('⏮️ SCRUBBING backward to', (backProgress * 100).toFixed(1) + '%');
            masterTimeline.progress(backProgress);
            break;
        case 'r':
            console.log('🔄 RESTARTING demo');
            masterTimeline.restart();
            break;
        case 'f':
            console.log('⚡ FAST DEMO MODE activated (2.5x speed for 3 seconds)');
            masterTimeline.timeScale(2.5);
            setTimeout(() => {
                masterTimeline.timeScale(1);
                console.log('🐌 Normal speed restored');
            }, 3000);
            break;
    }
});

// Responsive handling with error handling
function handleResize() {
    try {
        console.log('📏 Responsive resize triggered...');
        const container = document.querySelector('.video-frame');
        if (!container) {
            console.error('❌ RESIZE ERROR: .video-frame container not found');
            return;
        }
        
        const scale = Math.min(
            window.innerWidth / 1920,
            window.innerHeight / 1080
        );
        console.log('📏 Responsive scaling to:', scale.toFixed(3));
        console.log('  📱 Window size:', window.innerWidth + 'x' + window.innerHeight);
        
        gsap.set(container, { 
            scale,
            onComplete: () => console.log('  ✅ Responsive scale applied successfully')
        });
    } catch (error) {
        console.error('❌ RESPONSIVE RESIZE ERROR:', error);
        console.error('  📝 Error details:', error.message);
    }
}

// Initialize responsive handler with error handling
console.log('🔧 Initializing responsive handler...');
try {
    handleResize();
    window.addEventListener('resize', handleResize);
    console.log('✅ Responsive handler initialized successfully');
} catch (error) {
    console.error('❌ RESPONSIVE HANDLER INITIALIZATION ERROR:', error);
    console.error('  📝 Error details:', error.message);
}

console.log('⏰ Auto-starting demo in 500ms...');

// Auto-start for demo impact with error handling
setTimeout(() => {
    try {
        console.log('🎬 AUTO-STARTING DEMO NOW!');
        if (masterTimeline && typeof masterTimeline.play === 'function') {
            masterTimeline.play();
            console.log('✅ Demo auto-start successful');
        } else {
            console.error('❌ AUTO-START ERROR: Master timeline is not available or play() method missing');
            console.error('  📍 Master timeline:', masterTimeline);
        }
    } catch (error) {
        console.error('❌ DEMO AUTO-START ERROR:', error);
        console.error('  📝 Error details:', error.message);
        console.error('  📍 Stack trace:', error.stack);
    }
}, 500);

console.log('');
console.log('🎬 DEMO-READY! Controls:');
console.log('  Space = Play/Pause');
console.log('  ← → = Scrub timeline');  
console.log('  R = Restart');
console.log('  F = Fast demo mode');
console.log('');
console.log('💡 Watch the console for real-time animation feedback!');