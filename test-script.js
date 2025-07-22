// SIMPLIFIED VISUAL TEST - Focus on what actually works
// Remove all console logging and focus on visual debugging

console.log('🧪 STARTING VISUAL TEST VERSION');

// Create visual debug overlay
function createDebugOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'debug-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px;
        border-radius: 8px;
        font-family: monospace;
        font-size: 12px;
        z-index: 9999;
        max-width: 300px;
        line-height: 1.4;
    `;
    document.body.appendChild(overlay);
    return overlay;
}

const debugOverlay = createDebugOverlay();

function updateDebug(message) {
    debugOverlay.innerHTML += message + '<br>';
    debugOverlay.scrollTop = debugOverlay.scrollHeight;
}

updateDebug('🔍 Debug overlay active');

// Test 1: Check if GSAP is actually loaded
updateDebug('Testing GSAP...');
if (typeof gsap !== 'undefined') {
    updateDebug('✅ GSAP loaded: v' + gsap.version);
} else {
    updateDebug('❌ GSAP not loaded!');
    return;
}

// Test 2: Check if scenes exist
updateDebug('Testing scenes...');
const scenes = ['#scene1', '#scene2', '#scene3', '#scene4', '#scene5', '#scene6'];
let foundScenes = 0;
scenes.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
        foundScenes++;
        updateDebug(`✅ Found: ${selector}`);
    } else {
        updateDebug(`❌ Missing: ${selector}`);
    }
});

if (foundScenes === 0) {
    updateDebug('💥 CRITICAL: No scenes found!');
    return;
}

// Test 3: Simple animation test - just fade Scene 1 in and out
updateDebug('Testing basic animation...');

// Make sure Scene 1 is visible first
const scene1 = document.querySelector('#scene1');
if (scene1) {
    // Force Scene 1 to be visible
    scene1.style.opacity = '1';
    scene1.style.visibility = 'visible';
    
    updateDebug('Scene 1 forced visible');
    
    // Test simple fade animation
    setTimeout(() => {
        updateDebug('Testing fade out...');
        gsap.to('#scene1', {
            opacity: 0.5,
            duration: 1,
            onComplete: () => {
                updateDebug('✅ Fade out complete');
                setTimeout(() => {
                    updateDebug('Testing fade in...');
                    gsap.to('#scene1', {
                        opacity: 1,
                        duration: 1,
                        onComplete: () => {
                            updateDebug('✅ Fade in complete');
                            startRealTest();
                        }
                    });
                }, 500);
            }
        });
    }, 1000);
} else {
    updateDebug('❌ Scene 1 not found for test');
}

function startRealTest() {
    updateDebug('Starting real animation test...');
    
    // Test 4: Very simple scene sequence - no complex animations
    const simpleTimeline = gsap.timeline({
        onUpdate: () => {
            updateDebug(`Timeline progress: ${(simpleTimeline.progress() * 100).toFixed(1)}%`);
        }
    });
    
    // Scene 1: Just show it for 3 seconds
    simpleTimeline
        .set('#scene1', { opacity: 1, visibility: 'visible' })
        .to('#scene1', { scale: 1.02, duration: 3 })
        
        // Transition to Scene 2
        .to('#scene1', { opacity: 0, duration: 0.5 })
        .set('#scene1', { visibility: 'hidden' })
        .set('#scene2', { opacity: 1, visibility: 'visible' })
        .to('#scene2', { scale: 1.02, duration: 3 })
        
        // Transition to Scene 3
        .to('#scene2', { opacity: 0, duration: 0.5 })
        .set('#scene2', { visibility: 'hidden' })
        .set('#scene3', { opacity: 1, visibility: 'visible' })
        .to('#scene3', { scale: 1.02, duration: 3 });
    
    updateDebug('Simple timeline created, starting...');
    simpleTimeline.play();
    
    // Add manual controls
    updateDebug('Use SPACE to pause/play');
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
            e.preventDefault();
            if (simpleTimeline.paused()) {
                simpleTimeline.play();
                updateDebug('▶️ Playing');
            } else {
                simpleTimeline.pause();
                updateDebug('⏸️ Paused');
            }
        }
    });
}

// Add a visual indicator to scenes when they're supposed to be active
function addSceneIndicators() {
    scenes.forEach((selector, index) => {
        const scene = document.querySelector(selector);
        if (scene) {
            const indicator = document.createElement('div');
            indicator.style.cssText = `
                position: absolute;
                top: 10px;
                left: 10px;
                background: red;
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-weight: bold;
                z-index: 1000;
            `;
            indicator.textContent = `SCENE ${index + 1}`;
            scene.appendChild(indicator);
        }
    });
}

addSceneIndicators();
updateDebug('Scene indicators added');