# Video Export Plan - Server-Side MP4 Generation

## Overview
Generate MP4 videos from GSAP animations without screen recording by rendering frames programmatically and compiling to video.

## Core Approach: GSAP Timeline → Canvas Frames → MP4

### Phase 1: Frame Capture System
```javascript
// Capture frames at 60fps from existing GSAP timeline
const timeline = gsap.timeline();
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const frames = [];

// Set canvas size to video dimensions (1920x1080)
canvas.width = 1920;
canvas.height = 1080;

for (let frame = 0; frame < totalFrames; frame++) {
  timeline.seek(frame / 60); // Seek to specific frame time
  
  // Render current DOM state to canvas
  await html2canvas(document.body, { 
    canvas: canvas,
    width: 1920,
    height: 1080 
  });
  
  // Save frame as image data
  frames.push(canvas.toDataURL('image/png'));
}
```

### Phase 2: Server-Side Implementation
```javascript
// Node.js server approach
const { createCanvas } = require('canvas');
const ffmpeg = require('fluent-ffmpeg');

// Recreate animations using Node Canvas + GSAP timeline data
const canvas = createCanvas(1920, 1080);
const ctx = canvas.getContext('2d');

// Export timeline keyframe data from client
const timelineData = {
  scenes: [
    { start: 0, duration: 21, animations: [...] },
    { start: 21, duration: 28, animations: [...] },
    { start: 49, duration: 29, animations: [...] }
  ]
};

// Render each frame computationally
for (let frame = 0; frame < 4800; frame++) { // 80 seconds * 60fps
  const currentTime = frame / 60;
  
  // Clear canvas
  ctx.clearRect(0, 0, 1920, 1080);
  
  // Apply animations based on timeline data
  renderSceneAtTime(currentTime, ctx, timelineData);
  
  // Save frame
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`./frames/frame_${frame.toString().padStart(6, '0')}.png`, buffer);
}

// Compile frames to MP4
ffmpeg()
  .input('./frames/frame_%06d.png')
  .inputFPS(60)
  .videoCodec('libx264')
  .outputOptions('-pix_fmt yuv420p')
  .output('./output.mp4')
  .run();
```

### Phase 3: Client API Integration
```javascript
// Client-side export trigger
async function exportVideo(customizations) {
  const response = await fetch('/api/export-video', {
    method: 'POST',
    body: JSON.stringify({
      timelineData: extractTimelineData(),
      customizations: {
        companyName: customizations.companyName,
        colors: customizations.colors,
        logo: customizations.logo
      }
    })
  });
  
  const { jobId } = await response.json();
  
  // Poll for completion
  const videoUrl = await pollForCompletion(jobId);
  window.open(videoUrl); // Download MP4
}
```

## Technology Stack

### Required Dependencies
- **Server**: Node.js + Express
- **Canvas Rendering**: `node-canvas` or `skia-canvas`
- **Video Compilation**: `fluent-ffmpeg` + FFmpeg binary
- **Queue System**: Bull/Bee-Queue for background processing
- **Storage**: AWS S3 or local filesystem for output files

### Alternative Approaches
1. **Remotion** - React-based video generation (could adapt GSAP code)
2. **Motion Canvas** - TypeScript video generation framework  
3. **Lottie Export** - Convert GSAP animations to Lottie, render with Skia
4. **WebGL Approach** - Use Three.js/WebGL for high-performance rendering

## Implementation Timeline

### MVP (Phase 1)
- [ ] Extract GSAP timeline data to JSON
- [ ] Client-side frame capture with html2canvas
- [ ] Basic FFmpeg compilation pipeline
- [ ] Simple download endpoint

### Production (Phase 2)  
- [ ] Server-side canvas rendering
- [ ] Background job processing
- [ ] Customization system (text, colors, logos)
- [ ] Progress tracking and notifications

### Advanced (Phase 3)
- [ ] Real-time preview system
- [ ] Multiple video formats (MP4, WebM, GIF)
- [ ] Batch processing for multiple variations
- [ ] CDN integration for fast delivery

## Notes
- Current presentation is 80 seconds = 4,800 frames at 60fps
- 1920x1080 PNG frames ≈ 2MB each = ~10GB temp storage per video
- Consider frame optimization (JPEG, lower resolution during processing)
- Audio sync will need separate handling (current system uses separate audio files)
- Server needs sufficient RAM and CPU for canvas rendering operations

## Benefits Over Screen Recording
- ✅ Runs completely headless on server
- ✅ No browser dependency in production
- ✅ Perfect frame timing and quality
- ✅ Scalable for multiple concurrent exports
- ✅ Customizable without regenerating entire presentation
- ✅ No display/windowing requirements