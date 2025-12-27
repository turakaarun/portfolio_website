# Videos Folder

Place your motion design videos here.

## Supported Video Formats:

1. **Local Video Files:**
   - MP4 (recommended)
   - WebM
   - MOV

2. **Video Platforms:**
   - YouTube (embed URLs)
   - Vimeo (embed URLs)

## How to Add Videos:

### Option 1: Local Video Files
1. Place video files in `public/videos/` folder
2. Update `motionProjects` in `src/components/MotionDesign.jsx`:
   ```javascript
   {
     id: 1,
     title: 'My Motion Project',
     video: '/videos/motion1.mp4',
     type: 'video',
     // ... other properties
   }
   ```

### Option 2: YouTube
Update the video property with YouTube embed URL:
```javascript
video: 'https://www.youtube.com/embed/VIDEO_ID',
// or
video: 'https://youtu.be/VIDEO_ID',
type: 'video'
```

### Option 3: Vimeo
Update the video property with Vimeo URL:
```javascript
video: 'https://vimeo.com/VIDEO_ID',
type: 'video'
```

## Recommended Video Specs:

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (16:9 aspect ratio)
- **File Size**: Optimize for web (under 10MB if possible)
- **Duration**: Keep videos concise for portfolio

## Example Configuration:

```javascript
const motionProjects = [
  {
    id: 1,
    title: 'Motion Design Project',
    description: 'Description here...',
    video: '/videos/motion1.mp4', // Local file
    // OR
    video: 'https://www.youtube.com/embed/abc123', // YouTube
    // OR
    video: 'https://vimeo.com/123456789', // Vimeo
    type: 'video',
    link: '/case-study/1',
    category: 'Motion Design'
  }
]
```




