# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A high-performance employee benefits video built with GSAP and vanilla JavaScript. Creates a 36-second animated presentation with 6 scenes, optimized for all devices including mobile and lower-end hardware.

## Development Setup

```bash
# Start local development server
python3 -m http.server 8000
# Or alternatively
npm run start

# Visit http://localhost:8000
```

## Project Structure

```
├── index.html           # Main HTML with 6 animated scenes
├── styles.css          # Responsive CSS with performance optimizations
├── enhanced-script.js  # Advanced GSAP animations with audio sync
├── script.js          # Original simple version (fallback)
├── package.json       # Basic project configuration
└── README.md          # Full documentation
```

## Architecture

### Core Technologies
- **GSAP 3.12+** - All animations (GPU accelerated)
- **Vanilla JavaScript** - No frameworks for maximum performance  
- **CSS Variables** - Responsive design with `clamp()` functions
- **HTML5 Audio** - Background music and sound effects

### Animation System
- **Master Timeline** - Controls all 6 scenes (6 seconds each)
- **Individual Scene Timelines** - Modular, reusable animation blocks
- **Performance Scaling** - Reduced effects on mobile/low-end devices
- **Progressive Enhancement** - Complex effects only on capable browsers

### Performance Optimizations
- Device capability detection (`isMobile`, `isLowEnd`)
- Adaptive particle counts (50 desktop → 20 mobile → 0 low-end)
- GPU acceleration via `transform3d()` and `will-change`
- Efficient DOM structure with minimal reflows
- Audio lazy-loading with user interaction requirement

## Development Guidelines

### Making Changes
1. **HTML Structure** - Update scene content in `index.html`
2. **Styling** - Modify CSS variables in `styles.css` for consistent theming
3. **Animations** - Enhance scene timelines in `enhanced-script.js`
4. **Assets** - Replace Unsplash URLs with company images
5. **Audio** - Update audio source URLs with proper licensing

### GSAP Best Practices
- Always use `transform` properties (x, y, scale, rotation) for animations
- Leverage `stagger` for multiple element animations
- Use appropriate easing functions (`power3.out`, `back.out(1.7)`, etc.)
- Set `will-change: transform` on animated elements
- Clean up timelines to prevent memory leaks

### Mobile Considerations  
- Test on actual devices, not just browser dev tools
- Audio requires user interaction to play on mobile
- Reduce complexity on `max-width: 480px` breakpoint
- Respect `prefers-reduced-motion` accessibility setting

### Audio Integration
Replace placeholder URLs with licensed audio from:
- Freesound.org (CC licensed)
- Adobe Stock Audio (royalty-free)
- Zapsplat (professional SFX)

## Testing Commands

```bash
# Test on different screen sizes
# Resize browser window or use device emulation

# Performance testing  
# Open Chrome DevTools > Performance tab
# Record while animation plays

# Accessibility testing
# Enable "Reduce motion" in OS settings
```

## Key Files to Modify

- `enhanced-script.js:15-25` - Device performance detection
- `enhanced-script.js:85-120` - Scene 1 timeline (cold open)  
- `styles.css:347-354` - Reduced motion accessibility
- `index.html:115-124` - Audio element sources

Follow TDD approach: implement, test across devices, iterate, verify performance.