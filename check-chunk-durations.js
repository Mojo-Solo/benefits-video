const { chromium } = require('playwright');

async function checkChunkDurations() {
    console.log('🎵 Checking voiceover chunk durations...\n');
    
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    try {
        await page.goto('http://localhost:8000/check-chunk-durations.html');
        
        // Wait for all audio to load
        await page.waitForTimeout(3000);
        
        // Get durations
        const durations = await page.evaluate(() => {
            const results = [];
            document.querySelectorAll('#results p').forEach(p => {
                const text = p.textContent;
                const match = text.match(/(.+): ([\d.]+) seconds/);
                if (match && !text.includes('Total')) {
                    results.push({
                        file: match[1].split(' - ')[1],
                        duration: parseFloat(match[2])
                    });
                }
            });
            return results;
        });
        
        // Get totals
        const totals = await page.evaluate(() => {
            const totals = {};
            document.querySelectorAll('#results div p').forEach(p => {
                const text = p.textContent;
                if (text.includes('Scene 1 Total')) {
                    totals.scene1 = parseFloat(text.match(/[\d.]+/)[0]);
                } else if (text.includes('Scene 2 Total')) {
                    totals.scene2 = parseFloat(text.match(/[\d.]+/)[0]);
                } else if (text.includes('Scene 3 Total')) {
                    totals.scene3 = parseFloat(text.match(/[\d.]+/)[0]);
                } else if (text.includes('Grand Total')) {
                    totals.total = parseFloat(text.match(/[\d.]+/)[0]);
                }
            });
            return totals;
        });
        
        console.log('📊 Individual Chunk Durations:');
        let currentTime = 0;
        durations.forEach((d, i) => {
            const scene = i < 3 ? 1 : i < 7 ? 2 : 3;
            console.log(`  Scene ${scene} - ${d.file}: ${d.duration.toFixed(2)}s (starts at ${currentTime.toFixed(2)}s)`);
            currentTime += d.duration + 0.5; // Add 0.5s gap between chunks
        });
        
        console.log('\n📏 Scene Totals:');
        console.log(`  Scene 1: ${totals.scene1?.toFixed(2)}s`);
        console.log(`  Scene 2: ${totals.scene2?.toFixed(2)}s`);
        console.log(`  Scene 3: ${totals.scene3?.toFixed(2)}s`);
        console.log(`  Total Audio: ${totals.total?.toFixed(2)}s`);
        console.log(`  With gaps: ~${(totals.total + 5.5).toFixed(2)}s`); // 11 chunks = 10 gaps + 0.5s each
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
    
    await browser.close();
}

checkChunkDurations();