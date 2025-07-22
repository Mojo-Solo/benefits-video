// Test matched animation
const { chromium } = require('playwright');

async function testMatched() {
    console.log('🧪 Testing matched animation...');
    
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    try {
        await page.goto('http://localhost:8000');
        console.log('✅ Page loaded');
        
        // Check for console errors
        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.log('❌ Console error:', msg.text());
            }
        });
        
        // Wait for GSAP
        await page.waitForFunction(() => typeof window.gsap !== 'undefined');
        console.log('✅ GSAP loaded');
        
        // Check if elements exist
        const elements = await page.evaluate(() => {
            return {
                scenes: {
                    scene1: !!document.querySelector('#scene1'),
                    scene2: !!document.querySelector('#scene2'),
                    scene3: !!document.querySelector('#scene3')
                },
                scene2Elements: {
                    dateGroups: document.querySelectorAll('.date-group').length,
                    checkmarks: document.querySelectorAll('.checkmark').length,
                    leftPanel: !!document.querySelector('.left-panel'),
                    rightPanel: !!document.querySelector('.right-panel')
                },
                scene3Elements: {
                    benefitItems: document.querySelectorAll('.benefit-item').length,
                    values: document.querySelectorAll('.value').length,
                    bullets: document.querySelectorAll('.bullet').length
                }
            };
        });
        
        console.log('\n📊 Element Analysis:');
        console.log('Scenes:', elements.scenes);
        console.log('Scene 2:', elements.scene2Elements);
        console.log('Scene 3:', elements.scene3Elements);
        
        // Click to start
        await page.click('body');
        console.log('\n✅ Clicked to start');
        
        // Wait a moment
        await page.waitForTimeout(2000);
        
        // Check if animation is running
        const animationStatus = await page.evaluate(() => {
            const timeline = window.matchedTimeline;
            return {
                exists: !!timeline,
                isActive: timeline ? timeline.isActive() : false,
                progress: timeline ? timeline.progress() : 0,
                time: timeline ? timeline.time() : 0
            };
        });
        
        console.log('\n🎬 Animation Status:', animationStatus);
        
        // Take screenshot
        await page.screenshot({ path: 'matched-test.png' });
        console.log('\n✅ Screenshot saved: matched-test.png');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    }
    
    await browser.close();
}

testMatched();