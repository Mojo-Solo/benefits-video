// Test Scene 3 visibility
const { chromium } = require('playwright');

async function testScene3() {
    console.log('🧪 Testing Scene 3 visibility...');
    
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    try {
        await page.goto('http://localhost:8000');
        console.log('✅ Page loaded');
        
        // Wait for GSAP
        await page.waitForFunction(() => typeof window.gsap !== 'undefined');
        console.log('✅ GSAP loaded');
        
        // Jump directly to Scene 3
        await page.keyboard.press('3');
        console.log('✅ Pressed 3 to jump to Scene 3');
        
        // Wait a moment
        await page.waitForTimeout(2000);
        
        // Check Scene 3 visibility
        const scene3Data = await page.evaluate(() => {
            const scene3 = document.querySelector('#scene3');
            const styles = window.getComputedStyle(scene3);
            const title = document.querySelector('#scene3 .section-title');
            const items = document.querySelectorAll('#scene3 .benefit-item');
            
            return {
                opacity: styles.opacity,
                visibility: styles.visibility,
                display: styles.display,
                backgroundColor: styles.backgroundColor,
                titleExists: !!title,
                titleText: title?.textContent,
                itemCount: items.length
            };
        });
        
        console.log('\n📊 Scene 3 Analysis:');
        console.log('  Opacity:', scene3Data.opacity);
        console.log('  Visibility:', scene3Data.visibility);
        console.log('  Display:', scene3Data.display);
        console.log('  Background:', scene3Data.backgroundColor);
        console.log('  Title exists:', scene3Data.titleExists);
        console.log('  Title text:', scene3Data.titleText);
        console.log('  Benefit items:', scene3Data.itemCount);
        
        // Take screenshot
        await page.screenshot({ path: 'scene3-test.png' });
        console.log('\n✅ Screenshot saved: scene3-test.png');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    }
    
    await browser.close();
}

testScene3();