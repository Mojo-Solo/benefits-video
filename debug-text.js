// DEBUG TEXT - Simple test to see what's happening
console.log('🔍 Debug: Loading text visibility test...');

window.addEventListener('load', () => {
    console.log('🔍 Debug: Page loaded, checking elements...');
    
    // Check Scene 2 elements
    const scene2 = document.querySelector('#scene2');
    const dateGroups = document.querySelectorAll('.left-panel .date-group');
    
    console.log('🔍 Scene 2:', scene2);
    console.log('🔍 Date groups found:', dateGroups.length);
    
    dateGroups.forEach((group, i) => {
        console.log(`🔍 Date group ${i + 1}:`, group);
        
        const date = group.querySelector('.date');
        const description = group.querySelector('.description');
        const bonus = group.querySelector('.bonus');
        
        console.log(`  - Date element:`, date, date?.textContent);
        console.log(`  - Description element:`, description, description?.textContent);
        console.log(`  - Bonus element:`, bonus, bonus?.textContent);
        
        // Force visibility with inline styles
        if (date) {
            date.style.opacity = '1';
            date.style.visibility = 'visible';
            date.style.display = 'block';
            console.log(`  - Date forced visible:`, date.style.cssText);
        }
        
        if (description) {
            description.style.opacity = '1';
            description.style.visibility = 'visible';
            description.style.display = 'block';
            console.log(`  - Description forced visible:`, description.style.cssText);
        }
        
        if (bonus) {
            bonus.style.opacity = '1';
            bonus.style.visibility = 'visible';
            bonus.style.display = 'block';
            console.log(`  - Bonus forced visible:`, bonus.style.cssText);
        }
    });
    
    // Check Scene 3 elements
    const scene3 = document.querySelector('#scene3');
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    console.log('🔍 Scene 3:', scene3);
    console.log('🔍 Benefit items found:', benefitItems.length);
    
    benefitItems.forEach((item, i) => {
        console.log(`🔍 Benefit item ${i + 1}:`, item);
        
        const text = item.querySelector('.text');
        const bullet = item.querySelector('.bullet');
        const value = item.querySelector('.value');
        
        console.log(`  - Text element:`, text, text?.textContent);
        console.log(`  - Bullet element:`, bullet, bullet?.textContent);
        console.log(`  - Value element:`, value, value?.textContent);
        
        // Force visibility with inline styles
        if (text) {
            text.style.opacity = '1';
            text.style.visibility = 'visible';
            text.style.display = 'block';
            console.log(`  - Text forced visible:`, text.style.cssText);
        }
        
        if (bullet) {
            bullet.style.opacity = '1';
            bullet.style.visibility = 'visible';
            bullet.style.display = 'block';
        }
        
        if (value) {
            value.style.opacity = '1';
            value.style.visibility = 'visible';
            value.style.display = 'block';
        }
    });
    
    // Make scenes visible for testing
    setTimeout(() => {
        console.log('🔍 Making Scene 2 visible for testing...');
        if (scene2) {
            scene2.style.opacity = '1';
            scene2.style.visibility = 'visible';
            scene2.style.display = 'block';
        }
        
        setTimeout(() => {
            console.log('🔍 Making Scene 3 visible for testing...');
            if (scene3) {
                scene3.style.opacity = '1';
                scene3.style.visibility = 'visible';
                scene3.style.display = 'block';
            }
        }, 3000);
    }, 2000);
    
    console.log('🔍 Debug setup complete - check scenes in 2-5 seconds');
});

console.log('🔍 Debug script loaded');