# Employee Benefits Video Presentation

A high-performance animated presentation built with GSAP and vanilla JavaScript. Creates professional benefits overview videos with multiple themes and delivery options.

## Live Demo

View the presentation: Open `index.html` in a web browser
- Currently using the **sleek-minimal** theme (black & white)
- 80-second presentation with 3 scenes
- Includes audio narration and background music

## Project Structure

```
benefits/
├── index.html              # Main presentation file
├── corporate-styles.css    # Core styling
├── src/
│   └── themes/            # Visual themes
│       ├── sleek-minimal.js      # Current theme (black & white)
│       ├── beautiful-videogen.js # Professional blue theme
│       └── professional-videogen.js # Corporate theme
├── assets/
│   └── audio/             # Voiceover and music files
├── docs/                  # Planning & architecture docs
│   ├── AUTOMATED_VIDEO_SYSTEM.md
│   ├── PERFORMANCE_FALLBACK_PLAN.md
│   └── VIDEO_EXPORT_PLAN.md
└── archive/               # Old versions and test files
```

## Features

- **3 Professional Themes**: Sleek minimal, Beautiful videogen, Professional
- **Responsive Design**: Works on all devices and screen sizes
- **Performance Optimized**: Device detection with adaptive effects
- **Audio Integration**: Synchronized voiceover with background music
- **Interactive Controls**: Play/pause, scene navigation, mute
- **Accessibility**: Respects reduced motion preferences

## Quick Start

1. Open `index.html` in a modern web browser
2. Click "Play Video" to start the presentation
3. Use keyboard shortcuts:
   - `Space`: Play/Pause
   - `1/2/3`: Jump to scenes
   - `M`: Mute/Unmute
   - `R`: Restart

## Switching Themes

To change the visual theme, edit `index.html` line 209:

```html
<!-- Current theme -->
<script src="src/themes/sleek-minimal.js"></script>

<!-- Alternative themes -->
<script src="src/themes/beautiful-videogen.js"></script>
<script src="src/themes/professional-videogen.js"></script>
```

## Development

### Running Locally

```bash
# Start a local server
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Project Dependencies

- GSAP 3.12.2 (loaded from CDN)
- No build process required
- Pure vanilla JavaScript

## Future Enhancements

See documentation in `/docs`:
- **Automated Video System**: Full SaaS platform for generating custom presentations
- **Video Export**: Server-side MP4 generation without screen recording
- **Performance Fallbacks**: Adaptive system for older devices

## Repository

- GitHub: https://github.com/Mojo-Solo/benefits-video
- License: MIT

## Credits

Created as a proof of concept for enterprise benefits communication.