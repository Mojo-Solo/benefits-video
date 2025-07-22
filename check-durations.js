const { chromium } = require('playwright');

async function checkDurations() {
    console.log('🎵 Checking audio file durations...\n');
    
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    try {
        await page.goto('http://localhost:8000/check-audio-duration.html');
        
        // Wait for all audio to load
        await page.waitForTimeout(3000);
        
        // Get durations from console
        const durations = await page.evaluate(() => {
            const results = [];
            document.querySelectorAll('#results p').forEach(p => {
                const text = p.textContent;
                const match = text.match(/(.+): ([\d.]+) seconds/);
                if (match) {
                    results.push({
                        file: match[1],
                        duration: parseFloat(match[2])
                    });
                }
            });
            return results;
        });
        
        console.log('📊 Audio File Durations:');
        durations.forEach(d => {
            console.log(`  ${d.file}: ${d.duration} seconds`);
        });
        
        console.log('\n💡 Recommended Scene Timings:');
        let totalTime = 0;
        durations.forEach((d, i) => {
            const sceneNum = i + 1;
            const startTime = totalTime;
            const endTime = totalTime + d.duration;
            console.log(`  Scene ${sceneNum}: ${startTime}s - ${endTime}s (${d.duration}s)`);
            totalTime = endTime;
        });
        
        console.log(`\n📏 Total Duration: ${totalTime} seconds`);
        console.log('➕ Add 2-3 second gap between loops for total: ~' + (totalTime + 2) + ' seconds');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
    
    await browser.close();
}

checkDurations();