// WORKING GSAP Animation - Start from scratch with basics that definitely work
console.log('🎬 WORKING SCRIPT LOADING...');

// Wait for everything to be ready
window.addEventListener('load', () => {
    console.log('🚀 Window loaded, starting working animations...');
    
    // Force initial state - override any CSS conflicts
    console.log('🔧 Setting initial scene states...');
    
    // Show Scene 1, hide others
    const scene1 = document.querySelector('#scene1');
    const scene2 = document.querySelector('#scene2');
    const scene3 = document.querySelector('#scene3');
    
    if (scene1) {
        scene1.style.opacity = '1';
        scene1.style.visibility = 'visible';
        scene1.style.display = 'flex';
        console.log('✅ Scene 1 made visible');
    }
    
    if (scene2) {
        scene2.style.opacity = '0';
        scene2.style.visibility = 'hidden';
        console.log('✅ Scene 2 hidden');
    }
    
    if (scene3) {
        scene3.style.opacity = '0';
        scene3.style.visibility = 'hidden';
        console.log('✅ Scene 3 hidden');
    }
    
    // Test GSAP is actually working with a simple animation first
    console.log('🧪 Testing GSAP with simple animation...');
    
    gsap.to(scene1, {
        scale: 1.01,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
        onComplete: () => {
            console.log('✅ GSAP test animation completed - GSAP is working!');
            startMainAnimations();
        }
    });
});

function startMainAnimations() {
    console.log('🎬 Starting main animations...');
    
    // Create a simple, working timeline
    const mainTimeline = gsap.timeline({
        onStart: () => console.log('🚀 Main timeline started'),
        onComplete: () => console.log('✅ Main timeline completed'),
        onUpdate: () => {
            const progress = Math.round(mainTimeline.progress() * 100);
            if (progress % 10 === 0) { // Log every 10%
                console.log(`📊 Timeline progress: ${progress}%`);
            }
        }
    });
    
    // Scene 1 animations (4 seconds)
    mainTimeline
        .set('#scene1', { opacity: 1, visibility: 'visible' })
        .from('#scene1 .hero-video img', {
            scale: 1.2,
            duration: 3,
            ease: 'power2.out'
        })
        .from('#scene1 .sliding-card', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        }, 0.5)
        .from('#scene1 .main-title', {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, 1)
        .from('#scene1 .subtitle', {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, 1.3)
        
        // Transition to Scene 2 (1 second)
        .to('#scene1', {
            opacity: 0,
            duration: 0.5
        }, 4)
        .set('#scene1', { visibility: 'hidden' }, 4.5)
        .set('#scene2', { opacity: 1, visibility: 'visible' }, 4.5)
        
        // Scene 2 animations (3 seconds)
        .from('#scene2 .left-panel', {
            x: -200,
            duration: 0.8,
            ease: 'power3.out'
        }, 4.5)
        .from('#scene2 .right-panel', {
            x: 200,
            duration: 0.8,
            ease: 'power3.out'
        }, 4.8)
        .from('#scene2 .section-title', {
            opacity: 0,
            y: -30,
            duration: 0.6
        }, 5.3)
        .from('#scene2 .date-group', {
            opacity: 0,
            x: -50,
            duration: 0.4,
            stagger: 0.2
        }, 5.6)
        
        // Transition to Scene 3 (1 second)
        .to('#scene2', {
            opacity: 0,
            duration: 0.5
        }, 8)
        .set('#scene2', { visibility: 'hidden' }, 8.5)
        .set('#scene3', { opacity: 1, visibility: 'visible' }, 8.5)
        
        // Scene 3 animations (3 seconds)
        .from('#scene3 .section-title', {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, 8.5)
        .from('#scene3 .benefit-item', {
            opacity: 0,
            x: -100,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out'
        }, 9)
        .from('#scene3 .bullet', {
            scale: 0,
            duration: 0.3,
            stagger: 0.15,
            ease: 'back.out(2)'
        }, 9.2);
    
    console.log('📅 Timeline duration:', mainTimeline.duration(), 'seconds');
    
    // Add controls
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case ' ':
                e.preventDefault();
                if (mainTimeline.paused()) {
                    mainTimeline.play();
                    console.log('▶️ Timeline playing');
                } else {
                    mainTimeline.pause();
                    console.log('⏸️ Timeline paused');
                }
                break;
            case 'r':
                mainTimeline.restart();
                console.log('🔄 Timeline restarted');
                break;
            case '1':
                mainTimeline.progress(0);
                console.log('⏮️ Jump to Scene 1');
                break;
            case '2':
                mainTimeline.progress(0.4);
                console.log('⏭️ Jump to Scene 2');
                break;
            case '3':
                mainTimeline.progress(0.7);
                console.log('⏭️ Jump to Scene 3');
                break;
        }
    });
    
    // Auto-start the animation
    console.log('🎬 Auto-starting in 1 second...');
    setTimeout(() => {
        mainTimeline.play();
        console.log('🚀 Timeline started!');
    }, 1000);
}