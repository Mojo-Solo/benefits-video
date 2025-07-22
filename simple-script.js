// ULTRA-SIMPLE GSAP Animation - Focus on reliability
// Strip everything down to basics that definitely work

console.log('🚀 Loading simple animation script...');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 DOM ready, starting animations...');
    
    // Step 1: Force Scene 1 to be visible (override CSS)
    const scene1 = document.querySelector('#scene1');
    if (scene1) {
        scene1.style.opacity = '1';
        scene1.style.visibility = 'visible';
        console.log('✅ Scene 1 forced visible');
    }
    
    // Step 2: Hide all other scenes
    for (let i = 2; i <= 6; i++) {
        const scene = document.querySelector(`#scene${i}`);
        if (scene) {
            scene.style.opacity = '0';
            scene.style.visibility = 'hidden';
        }
    }
    
    // Step 3: Create the simplest possible timeline
    const timeline = gsap.timeline({
        repeat: -1, // Loop forever for demo
        repeatDelay: 1
    });
    
    // Scene 1: Just a simple scale animation (6 seconds)
    timeline
        .set('#scene1', { opacity: 1, visibility: 'visible' })
        .to('#scene1 .hero-video img', { 
            scale: 1.1, 
            duration: 5,
            ease: 'none'
        })
        .to('#scene1 .sliding-card', {
            y: 0,
            duration: 1,
            ease: 'power2.out'
        }, 1)
        
        // Transition to Scene 2
        .to('#scene1', { opacity: 0, duration: 1 })
        .set('#scene1', { visibility: 'hidden' })
        .set('#scene2', { opacity: 1, visibility: 'visible' })
        
        // Scene 2: Simple panel animation (6 seconds)
        .from('#scene2 .left-panel', { x: -200, duration: 1 })
        .from('#scene2 .right-panel', { x: 200, duration: 1 }, '-=0.5')
        .from('#scene2 .section-title', { opacity: 0, y: 30, duration: 1 })
        .to('#scene2', { scale: 1.02, duration: 3 })
        
        // Transition to Scene 3
        .to('#scene2', { opacity: 0, duration: 1 })
        .set('#scene2', { visibility: 'hidden' })
        .set('#scene3', { opacity: 1, visibility: 'visible' })
        
        // Scene 3: Benefits list (6 seconds)
        .from('#scene3 .section-title', { opacity: 0, scale: 0.8, duration: 1 })
        .from('#scene3 .benefit-item', { 
            opacity: 0, 
            x: -100, 
            duration: 0.5,
            stagger: 0.2
        })
        .to('#scene3', { scale: 1.02, duration: 2 })
        
        // Back to Scene 1 (for loop)
        .to('#scene3', { opacity: 0, duration: 1 })
        .set('#scene3', { visibility: 'hidden' });
    
    console.log('🎬 Starting simple timeline...');
    timeline.play();
    
    // Add keyboard controls
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case ' ':
                e.preventDefault();
                if (timeline.paused()) {
                    timeline.play();
                    console.log('▶️ Playing');
                } else {
                    timeline.pause();
                    console.log('⏸️ Paused');
                }
                break;
            case 'r':
                timeline.restart();
                console.log('🔄 Restarted');
                break;
        }
    });
    
    // Add visual progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        height: 4px;
        background: #14b8a6;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    // Update progress bar
    gsap.ticker.add(() => {
        const progress = timeline.progress() * 100;
        progressBar.style.width = progress + '%';
    });
    
    console.log('✅ Simple animation setup complete');
});

// Also try immediate execution in case DOM is already ready
if (document.readyState === 'loading') {
    console.log('⏳ Waiting for DOM...');
} else {
    console.log('✅ DOM already ready, executing immediately');
    // DOM is already ready, execute the code
    document.dispatchEvent(new Event('DOMContentLoaded'));
}