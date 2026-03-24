# Hero Assets

This directory contains local media assets for HeroBackground component in Storybook.

## How to Add New Assets

### Adding Images

1. Place your image files in this directory:

   ```bash
   cp /path/to/your/image.png /path/to/ui/apps/storybook/public/hero/images/
   ```

2. Supported formats:
   - PNG
   - JPG/JPEG
   - WebP

3. Recommended specifications:
   - Resolution: 1920x1080 or larger
   - Size: < 2MB
   - Naming: kebab-case (e.g., `hero-background.jpg`, `landing-hero.png`)

### Adding Videos

1. Place your video files in the videos directory:

   ```bash
   cp /path/to/your/video.mp4 /path/to/ui/apps/storybook/public/hero/videos/
   ```

2. Supported formats:
   - MP4 (H.264)
   - WebM (VP9)

3. Recommended specifications:
   - Resolution: 1920x1080 or 1280x720
   - Bitrate: 3-8 Mbps for 1080p
   - Length: 10-30 seconds for loop
   - Size: < 10MB
   - Naming: kebab-case (e.g., `hero-video.mp4`, `background-loop.mp4`)

## Automatic Integration

Once you add files to these directories, they will automatically appear in Storybook as options in the HeroBackground stories:

- **With Image** story: All images in `images/` directory
- **With Video** story: All videos in `videos/` directory
- **Multiple Local Images** story: All images with interactive buttons
- **Local Image Gallery** story: Grid view of all images

**Note:** You need to restart Storybook for new files to appear in the dropdown controls.

## Current Assets

### Images (6 files)

- freepik**dark-mode-abstract-background-with-grainy-gradient**5239.png
- freepik**generate-9-different-angles-of-this-image-medium-l**5211.png
- freepik**muted-grainy-out-of-focus-photo-of-rock-surface-wi**5273.png
- freepik**muted-grainy-outoffocus-dark-abstract-backdrop-wit**5283.png
- freepik**muted-grainy-outoffocus-dark-abstract-backdrop-wit**5287.png
- freepik**muted-grainy-outoffocus-photo-of-a-rock-surface-so**5276.png

### Videos (2 files)

- freepik_slow-motion-macroshot-of-particles-and-waves-soft-\_kling_720p_16-9_24fps_94815.mp4
- freepik_slow-motion-macroshot-of-particles-and-waves-soft-\_kling_720p_16-9_24fps_94815_1.mp4

## Usage Example

```tsx
<HeroBackground
  mediaType="image"
  mediaSrc="/hero/images/your-image.png"
  particleCount={80}
  particleColor="moss"
>
  <SectionHeader
    title="Your Title"
    description="Your Description"
    tagline="Local Media"
  />
</HeroBackground>
```

## Troubleshooting

**New files not appearing in Storybook?**

1. Restart Storybook
2. Check that files are in the correct directory
3. Verify file formats are supported
4. Check browser console for errors

**Videos not playing?**

- Ensure videos have proper encoding (H.264 for MP4)
- Check that files are under 10MB
- Verify muted/playsInline attributes are set in component

**Images not loading?**

- Check file paths are correct
- Verify file formats are supported
- Check browser console for 404 errors
