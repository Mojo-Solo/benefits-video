// SHOW ALL SCENES - Stack them vertically so we can see all text
console.log('🔍 Loading show all scenes test...');

window.addEventListener('load', () => {
    console.log('🔍 Stacking all scenes vertically...');
    
    // Override the absolute positioning to stack scenes vertically
    const style = document.createElement('style');
    style.textContent = `
        .video-container {
            height: auto !important;
            overflow-y: auto !important;
        }
        
        .video-frame {
            height: auto !important;
            overflow: visible !important;
        }
        
        .scene {
            position: relative !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            min-height: 400px !important;
            margin-bottom: 50px !important;
            padding: 20px !important;
            border: 3px solid #ff0000 !important;
            background: rgba(255,255,255,0.95) !important;
        }
        
        .section-title {
            color: #000 !important;
            font-size: 24px !important;
            font-weight: bold !important;
            margin: 20px 0 !important;
            background: yellow !important;
            padding: 10px !important;
        }
        
        .date {
            color: #000 !important;
            font-size: 18px !important;
            font-weight: bold !important;
            display: block !important;
            background: lightblue !important;
            padding: 5px !important;
            margin: 10px 0 !important;
        }
        
        .description {
            color: #000 !important;
            font-size: 16px !important;
            display: block !important;
            background: lightgreen !important;
            padding: 5px !important;
            margin: 5px 0 !important;
        }
        
        .bonus {
            color: #000 !important;
            font-size: 14px !important;
            display: block !important;
            background: lightyellow !important;
            padding: 5px !important;
            margin: 5px 0 !important;
        }
        
        .text {
            color: #000 !important;
            font-size: 16px !important;
            display: block !important;
            background: lightcyan !important;
            padding: 5px !important;
            margin: 5px 0 !important;
        }
        
        .value {
            color: #000 !important;
            font-size: 14px !important;
            display: inline-block !important;
            background: lightpink !important;
            padding: 5px !important;
            margin: 5px !important;
        }
        
        .bullet {
            font-size: 20px !important;
            margin-right: 10px !important;
        }
        
        .benefit-item {
            display: block !important;
            margin: 15px 0 !important;
            padding: 10px !important;
            background: rgba(200,200,200,0.5) !important;
            border: 1px solid #ccc !important;
        }
        
        .date-group {
            margin: 20px 0 !important;
            padding: 15px !important;
            background: rgba(200,200,200,0.3) !important;
            border: 1px solid #999 !important;
        }
        
        .left-panel, .right-panel {
            background: rgba(255,255,255,0.8) !important;
            padding: 20px !important;
        }
        
        .split-screen {
            display: block !important;
        }
        
        .right-panel {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
    
    // Also log what we find
    setTimeout(() => {
        console.log('🔍 Checking scenes:');
        const scenes = document.querySelectorAll('.scene');
        scenes.forEach((scene, i) => {
            console.log(`Scene ${i+1} (${scene.id}):`, scene);
            
            // Check Scene 2 specifically
            if (scene.id === 'scene2') {
                const dateGroups = scene.querySelectorAll('.date-group');
                console.log('  Date groups:', dateGroups.length);
                dateGroups.forEach((group, j) => {
                    const date = group.querySelector('.date');
                    const desc = group.querySelector('.description');
                    const bonus = group.querySelector('.bonus');
                    console.log(`  Group ${j+1}: "${date?.textContent}" | "${desc?.textContent}" | "${bonus?.textContent}"`);
                });
            }
            
            // Check Scene 3 specifically
            if (scene.id === 'scene3') {
                const benefitItems = scene.querySelectorAll('.benefit-item');
                console.log('  Benefit items:', benefitItems.length);
                benefitItems.forEach((item, j) => {
                    const text = item.querySelector('.text');
                    const value = item.querySelector('.value');
                    console.log(`  Benefit ${j+1}: "${text?.textContent}" | "${value?.textContent}"`);
                });
            }
        });
    }, 1000);
    
    console.log('🔍 All scenes should now be stacked vertically with colored backgrounds');
});

console.log('🔍 Show all scenes script loaded');