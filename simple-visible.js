// SIMPLE VISIBLE - Just show the text without any animations
console.log('🔍 Loading simple visible test...');

window.addEventListener('load', () => {
    console.log('🔍 Making all scenes and text visible...');
    
    // Force all scenes visible
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => {
        scene.style.opacity = '1';
        scene.style.visibility = 'visible';
        scene.style.display = 'block';
        scene.style.position = 'relative';
        console.log('Scene made visible:', scene.id);
    });
    
    // Force all text elements visible with !important styles
    const textElements = document.querySelectorAll('.date, .description, .bonus, .text, .bullet, .value, .section-title');
    textElements.forEach(el => {
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('visibility', 'visible', 'important');
        el.style.setProperty('display', 'block', 'important');
        el.style.setProperty('color', '#000', 'important');
        console.log('Text element made visible:', el.textContent?.substring(0, 50));
    });
    
    // Override any CSS that might be hiding text
    const style = document.createElement('style');
    style.textContent = `
        .scene {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            position: relative !important;
            margin-bottom: 50px !important;
        }
        
        .date, .description, .bonus, .text, .bullet, .value {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            color: #000 !important;
            font-size: 16px !important;
            margin: 5px 0 !important;
            background: rgba(255,255,255,0.9) !important;
            padding: 5px !important;
        }
        
        .section-title {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            color: #000 !important;
            font-size: 24px !important;
            margin: 20px 0 !important;
            background: rgba(255,255,255,0.9) !important;
            padding: 10px !important;
        }
        
        .left-panel, .right-panel {
            background: rgba(255,255,255,0.8) !important;
        }
        
        #scene3 {
            background: rgba(255,255,255,0.9) !important;
        }
    `;
    document.head.appendChild(style);
    
    console.log('🔍 All text should now be visible with white backgrounds');
});

console.log('🔍 Simple visible script loaded');