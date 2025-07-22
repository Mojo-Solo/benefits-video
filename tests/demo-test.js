// Updated test for demo-ready version
const { test, expect } = require('@playwright/test');

test.describe('Demo-Ready Benefits Animation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8000');
    await page.waitForFunction(() => typeof window.gsap !== 'undefined');
  });

  test('should show demo progress indicator', async ({ page }) => {
    // Wait for progress indicator to appear
    await page.waitForSelector('#scene-indicator', { timeout: 10000 });
    
    const indicator = page.locator('#scene-indicator');
    await expect(indicator).toBeVisible();
    
    const indicatorText = await indicator.textContent();
    expect(indicatorText).toContain('Scene 1');
    
    console.log('Progress indicator shows:', indicatorText);
  });

  test('should transition through all 3 scenes', async ({ page }) => {
    // Wait for Scene 1 to be fully visible
    await page.waitForTimeout(2000);
    
    const scene1 = page.locator('#scene1');
    const scene2 = page.locator('#scene2');
    const scene3 = page.locator('#scene3');
    
    // Check Scene 1 is initially visible
    let scene1Opacity = await scene1.evaluate(el => window.getComputedStyle(el).opacity);
    console.log('Scene 1 initial opacity:', scene1Opacity);
    expect(parseFloat(scene1Opacity)).toBeGreaterThan(0.5);
    
    // Wait for transition to Scene 2 (happens at 8 seconds)
    console.log('Waiting for Scene 2 transition...');
    await page.waitForTimeout(9000); // Wait 9 seconds total
    
    // Check Scene 2 becomes visible
    let scene2Opacity = await scene2.evaluate(el => window.getComputedStyle(el).opacity);
    console.log('Scene 2 opacity after 9s:', scene2Opacity);
    expect(parseFloat(scene2Opacity)).toBeGreaterThan(0.5);
    
    // Wait for transition to Scene 3 (happens at 16 seconds)
    console.log('Waiting for Scene 3 transition...');
    await page.waitForTimeout(8000); // Wait 8 more seconds (17s total)
    
    // Check Scene 3 becomes visible
    let scene3Opacity = await scene3.evaluate(el => window.getComputedStyle(el).opacity);
    console.log('Scene 3 opacity after 17s:', scene3Opacity);
    expect(parseFloat(scene3Opacity)).toBeGreaterThan(0.5);
    
    console.log('✅ All scene transitions working!');
  });

  test('should respond to keyboard controls', async ({ page }) => {
    // Wait for animation to start
    await page.waitForTimeout(2000);
    
    // Test pause/play with spacebar
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);
    console.log('Paused animation');
    
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);
    console.log('Resumed animation');
    
    // Test scene jumping
    await page.keyboard.press('2');
    await page.waitForTimeout(1000);
    
    const scene2Opacity = await page.locator('#scene2').evaluate(el => 
      window.getComputedStyle(el).opacity
    );
    console.log('Scene 2 opacity after pressing "2":', scene2Opacity);
    expect(parseFloat(scene2Opacity)).toBeGreaterThan(0.5);
    
    // Test restart
    await page.keyboard.press('r');
    await page.waitForTimeout(1000);
    
    const scene1Opacity = await page.locator('#scene1').evaluate(el => 
      window.getComputedStyle(el).opacity
    );
    console.log('Scene 1 opacity after restart:', scene1Opacity);
    expect(parseFloat(scene1Opacity)).toBeGreaterThan(0.5);
  });

  test('should show particles and confetti effects', async ({ page }) => {
    // Check for particles in Scene 1
    await page.waitForTimeout(2000);
    
    const particleContainer = page.locator('.particles-container');
    await expect(particleContainer).toBeVisible();
    
    const particleCount = await particleContainer.evaluate(el => el.children.length);
    console.log('Particle count:', particleCount);
    expect(particleCount).toBeGreaterThan(20);
    
    // Jump to Scene 3 to check confetti
    await page.keyboard.press('3');
    await page.waitForTimeout(2000);
    
    const confettiContainer = page.locator('.confetti-container');
    await expect(confettiContainer).toBeVisible();
    
    const confettiCount = await confettiContainer.evaluate(el => el.children.length);
    console.log('Confetti count:', confettiCount);
    expect(confettiCount).toBeGreaterThan(40);
  });

  test('should take presentation screenshots', async ({ page }) => {
    // Scene 1 screenshot
    await page.waitForTimeout(3000);
    await page.screenshot({ 
      path: 'demo-screenshots/scene1-hero.png',
      fullPage: false
    });
    
    // Scene 2 screenshot
    await page.keyboard.press('2');
    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: 'demo-screenshots/scene2-benefits.png',
      fullPage: false
    });
    
    // Scene 3 screenshot
    await page.keyboard.press('3');
    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: 'demo-screenshots/scene3-cta.png',
      fullPage: false
    });
    
    console.log('✅ Demo screenshots saved to demo-screenshots/');
  });
});