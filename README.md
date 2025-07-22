# 2025 Employee Benefits Video 🎬

A high-performance, mobile-optimized animated benefits video built with **GSAP** and vanilla JavaScript.

## ✨ Features

- **🎯 6 Dynamic Scenes** - 36 seconds of professional animation
- **🎵 Audio Integration** - Background music + sound effects
- **📱 Mobile Optimized** - Responsive design with performance scaling
- **⚡ Hardware Accelerated** - GPU-powered GSAP animations
- **🎮 Interactive Controls** - Keyboard, mouse, and touch controls
- **♿ Accessible** - Respects prefers-reduced-motion

## 🚀 Quick Start

```bash
# Clone and run
cd benefits
python3 -m http.server 8000
# Visit http://localhost:8000
```

## 🎮 Controls

| Key | Action |
|-----|--------|
| `Space` | Play/Pause |
| `←/→` | Scrub timeline |
| `R` | Restart |
| `M` | Mute/Unmute |

## 🎨 Scene Breakdown

1. **Cold Open** - Hero video with particle effects and sliding card
2. **Effective Dates** - Split-screen layout with floating elements  
3. **What's New** - Dynamic bullet points with staggered reveals
4. **Key Dates** - Timeline bubbles with physics animations
5. **How to Enroll** - Portal preview with step-by-step guide
6. **Call to Action** - Team photo with confetti celebration

## 🔧 Technical Details

### Performance Optimizations
- **Adaptive quality** based on device capabilities
- **Reduced particle counts** on mobile devices
- **GPU-accelerated transforms** only
- **Efficient DOM structure** with minimal repaints

### Audio Sources
Replace placeholder audio URLs with:

**Free Music Libraries:**
- [Freesound.org](https://freesound.org) - CC licensed sounds
- [Zapsplat](https://zapsplat.com) - Professional sound effects  
- [Adobe Stock Audio](https://stock.adobe.com/audio) - Royalty-free music
- [Pixabay Music](https://pixabay.com/music/) - Free background tracks

**Recommended Tracks:**
- Background: Corporate/upbeat instrumental (30-40 seconds)
- Whoosh: Transition sound effect
- Pop: UI interaction sound

### Browser Support
- **Modern browsers** with GSAP 3.12+ support
- **Mobile Safari** 14+, **Chrome** 88+, **Firefox** 85+
- **Graceful degradation** for older browsers

## 🎯 Customization

### Update Content
```javascript
// Edit text in index.html
<h1 class="main-title">Your Company Benefits</h1>

// Modify timing in enhanced-script.js
masterTimeline.add(scene1Timeline, "0") // Start time
```

### Swap Images
```html
<!-- Use your company images -->
<img src="your-hero-image.jpg" alt="Team">
```

### Adjust Animations
```javascript
// Modify duration, easing, or effects
.from(".element", {
    duration: 1.5,  // Animation length
    ease: "back.out(1.7)", // Easing function
    stagger: 0.2    // Delay between elements
})
```

## 📊 Performance Metrics

| Device Type | Particle Count | FPS Target | Load Time |
|-------------|----------------|------------|-----------|
| Desktop | 50 | 60fps | < 2s |
| Mobile | 20 | 30fps | < 3s |
| Low-end | 0 | 30fps | < 4s |

## 🔄 Development Workflow

1. **Design** - Update scenes in `index.html`
2. **Style** - Modify `styles.css` with CSS variables
3. **Animate** - Enhance `enhanced-script.js` timelines
4. **Test** - Check across devices and browsers
5. **Deploy** - Upload to web server or CDN

## 📝 File Structure

```
benefits/
├── index.html          # Main HTML structure
├── styles.css          # Responsive styling + CSS variables  
├── enhanced-script.js  # GSAP animations + audio
├── script.js          # Original simple version
├── package.json       # Project metadata
└── README.md          # This file
```

Built with ❤️ using **GSAP**, vanilla **JavaScript**, and **modern CSS**.