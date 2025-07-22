// Playwright test to verify animations are actually working
const { test, expect } = require('@playwright/test');

test.describe('Benefits Video Animation Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Start local server and navigate to page
    await page.goto('http://localhost:8000');
    
    // Wait for GSAP to load
    await page.waitForFunction(() => typeof window.gsap !== 'undefined');
  });

  test('should load all required elements', async ({ page }) => {
    // Check if all scenes exist
    for (let i = 1; i <= 6; i++) {
      const scene = page.locator(`#scene${i}`);
      await expect(scene).toBeVisible();
    }
    
    // Check if GSAP loaded
    const gsapVersion = await page.evaluate(() => window.gsap?.version);
    expect(gsapVersion).toBeTruthy();
    console.log('GSAP Version:', gsapVersion);
  });

  test('should make Scene 1 visible initially', async ({ page }) => {
    const scene1 = page.locator('#scene1');
    
    // Scene 1 should be visible by default
    await expect(scene1).toBeVisible();
    
    // Check computed styles
    const opacity = await scene1.evaluate(el => window.getComputedStyle(el).opacity);
    const visibility = await scene1.evaluate(el => window.getComputedStyle(el).visibility);
    
    console.log('Scene 1 opacity:', opacity);
    console.log('Scene 1 visibility:', visibility);
    
    expect(parseFloat(opacity)).toBeGreaterThan(0);
    expect(visibility).toBe('visible');
  });

  test('should verify test animation actually works', async ({ page }) => {
    // Wait for debug overlay to appear
    const debugOverlay = page.locator('#debug-overlay');
    await expect(debugOverlay).toBeVisible();
    
    // Check debug messages
    const debugText = await debugOverlay.textContent();
    console.log('Debug messages:', debugText);
    
    // Verify GSAP is working by checking for successful fade test
    await expect(debugOverlay).toContainText('✅ GSAP loaded');
    
    // Wait for the simple animation test to complete
    await page.waitForTimeout(5000);
    
    // Check if fade test completed
    const finalDebugText = await debugOverlay.textContent();
    console.log('Final debug messages:', finalDebugText);
    
    // Should show animation completion
    expect(finalDebugText).toContain('Fade out complete');
  });

  test('should capture screenshots of each scene', async ({ page }) => {
    // Take screenshot of initial state
    await page.screenshot({ path: 'test-results/scene-initial.png' });
    
    // Wait for animations to start
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'test-results/scene-animation-2s.png' });
    
    // Press space to pause/play and test controls
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/scene-paused.png' });
    
    // Resume
    await page.keyboard.press('Space');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'test-results/scene-animation-5s.png' });
  });

  test('should verify scene transitions are working', async ({ page }) => {
    const scenes = ['#scene1', '#scene2', '#scene3'];
    
    // Start the timeline and wait for it to progress
    await page.waitForTimeout(1000);
    
    // Check Scene 1 is visible initially
    let scene1Opacity = await page.locator('#scene1').evaluate(el => 
      window.getComputedStyle(el).opacity
    );
    console.log('Scene 1 initial opacity:', scene1Opacity);
    
    // Wait for transition to Scene 2 (should happen around 4 seconds)
    await page.waitForTimeout(5000);
    
    // Check if Scene 2 becomes visible
    let scene2Opacity = await page.locator('#scene2').evaluate(el => 
      window.getComputedStyle(el).opacity
    );
    console.log('Scene 2 opacity after 5s:', scene2Opacity);
    
    // Scene 1 should be fading out, Scene 2 should be fading in
    scene1Opacity = await page.locator('#scene1').evaluate(el => 
      window.getComputedStyle(el).opacity
    );
    console.log('Scene 1 opacity after 5s:', scene1Opacity);
    
    // At least one transition should have occurred
    expect(parseFloat(scene2Opacity)).toBeGreaterThan(0);
  });

  test('should verify elements are actually animating', async ({ page }) => {
    // Get initial transform values
    const initialTransform = await page.locator('#scene1').evaluate(el => 
      window.getComputedStyle(el).transform
    );
    console.log('Initial transform:', initialTransform);
    
    // Wait for animation
    await page.waitForTimeout(2000);
    
    // Get transform after animation
    const animatedTransform = await page.locator('#scene1').evaluate(el => 
      window.getComputedStyle(el).transform
    );
    console.log('Animated transform:', animatedTransform);
    
    // Transforms should be different if animation is working
    expect(animatedTransform).not.toBe(initialTransform);
  });
});