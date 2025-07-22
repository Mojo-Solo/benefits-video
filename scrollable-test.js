// SCROLLABLE TEST - Make page scrollable and show all scenes
console.log('🔍 Loading scrollable test...');

window.addEventListener('load', () => {
    console.log('🔍 Making page scrollable and stacking all scenes...');
    
    // Override ALL styles that prevent scrolling and positioning
    const style = document.createElement('style');
    style.textContent = `
        * {
            position: static !important;
        }
        
        body {
            overflow: auto !important;
            height: auto !important;
            background: #f0f0f0 !important;
        }
        
        .video-container {
            width: 100% !important;
            height: auto !important;
            display: block !important;
            overflow: visible !important;
            background: none !important;
            position: static !important;
        }
        
        .video-frame {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            max-width: none !important;
            background: white !important;
            overflow: visible !important;
            box-shadow: none !important;
        }
        
        .scene {
            position: static !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            height: auto !important;
            min-height: 300px !important;
            margin: 20px 0 !important;
            padding: 30px !important;
            border: 5px solid #ff0000 !important;
            background: rgba(255,255,255,0.95) !important;
            overflow: visible !important;
        }
        
        .section-title {
            color: #000 !important;
            font-size: 28px !important;
            font-weight: bold !important;
            margin: 20px 0 !important;
            background: yellow !important;
            padding: 15px !important;
            display: block !important;
        }
        
        .date {
            color: #000 !important;
            font-size: 20px !important;
            font-weight: bold !important;
            display: block !important;
            background: lightblue !important;
            padding: 10px !important;
            margin: 15px 0 !important;
            border: 2px solid blue !important;
        }
        
        .description {
            color: #000 !important;
            font-size: 18px !important;
            display: block !important;
            background: lightgreen !important;
            padding: 10px !important;
            margin: 10px 0 !important;
            border: 2px solid green !important;
        }
        
        .bonus {
            color: #000 !important;
            font-size: 16px !important;
            display: block !important;
            background: lightyellow !important;
            padding: 10px !important;
            margin: 10px 0 !important;
            border: 2px solid orange !important;
        }
        
        .text {
            color: #000 !important;
            font-size: 18px !important;
            display: block !important;
            background: lightcyan !important;
            padding: 10px !important;
            margin: 10px 0 !important;
            border: 2px solid cyan !important;
        }
        
        .value {
            color: #000 !important;
            font-size: 16px !important;
            display: inline-block !important;
            background: lightpink !important;
            padding: 8px !important;
            margin: 10px !important;
            border: 2px solid pink !important;
        }
        
        .bullet {
            font-size: 24px !important;
            margin-right: 15px !important;
            display: inline-block !important;
        }
        
        .benefit-item {
            display: block !important;
            margin: 20px 0 !important;
            padding: 15px !important;
            background: rgba(200,200,200,0.5) !important;
            border: 3px solid #666 !important;
        }
        
        .date-group {
            margin: 25px 0 !important;
            padding: 20px !important;
            background: rgba(200,200,200,0.3) !important;
            border: 3px solid #333 !important;
        }
        
        .left-panel, .right-panel {
            background: rgba(240,240,240,0.9) !important;
            padding: 25px !important;
            display: block !important;
            width: 100% !important;
        }
        
        .split-screen {
            display: block !important;
            flex-direction: column !important;
        }
        
        .right-panel {
            display: none !important;
        }
        
        .hero-video {
            display: none !important;
        }
        
        .sliding-card {
            position: static !important;
            background: rgba(255,255,255,0.9) !important;
            color: #000 !important;
        }
        
        .main-title, .subtitle {
            color: #000 !important;
            background: none !important;
            -webkit-text-fill-color: #000 !important;
        }
    `;
    document.head.appendChild(style);
    
    // Add scene labels
    setTimeout(() => {
        const scenes = document.querySelectorAll('.scene');
        scenes.forEach((scene, i) => {
            const label = document.createElement('div');
            label.style.cssText = `
                background: #000 !important;
                color: #fff !important;
                padding: 10px !important;
                font-size: 20px !important;
                font-weight: bold !important;
                margin-bottom: 20px !important;
            `;
            label.textContent = `SCENE ${i+1} - ${scene.id.toUpperCase()}`;
            scene.insertBefore(label, scene.firstChild);
        });
        
        // Log what we find
        console.log('🔍 Checking text content:');
        
        // Scene 2
        const scene2 = document.querySelector('#scene2');
        if (scene2) {
            console.log('Scene 2 found:', scene2);
            const dateGroups = scene2.querySelectorAll('.date-group');
            console.log('Date groups:', dateGroups.length);
            dateGroups.forEach((group, j) => {
                const date = group.querySelector('.date');
                const desc = group.querySelector('.description');
                const bonus = group.querySelector('.bonus');
                console.log(`Group ${j+1}:`, {
                    date: date?.textContent,
                    desc: desc?.textContent,
                    bonus: bonus?.textContent
                });
            });
        }
        
        // Scene 3
        const scene3 = document.querySelector('#scene3');
        if (scene3) {
            console.log('Scene 3 found:', scene3);
            const benefitItems = scene3.querySelectorAll('.benefit-item');
            console.log('Benefit items:', benefitItems.length);
            benefitItems.forEach((item, j) => {
                const text = item.querySelector('.text');
                const value = item.querySelector('.value');
                console.log(`Benefit ${j+1}:`, {
                    text: text?.textContent,
                    value: value?.textContent
                });
            });
        }
    }, 1000);
    
    console.log('🔍 Page should now be scrollable with all scenes visible');
});

console.log('🔍 Scrollable test script loaded');