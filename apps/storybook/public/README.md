# Storybook Assets

This directory contains local media assets used for Storybook demos.

## Structure

```
assets/
└── hero/
    ├── images/       - Hero background images
    │   ├── hero-1.jpg
    │   ├── hero-2.jpg
    │   └── fallback.jpg
    └── videos/       - Hero background videos
        ├── hero-1.mp4
        └── hero-2.mp4
```

## Usage

Use these assets in HeroBackground stories:

```tsx
<HeroBackground mediaType="image" mediaSrc="/assets/hero/images/hero-1.jpg">
  {/* Content */}
</HeroBackground>
```

## Image Guidelines

- Resolution: 1920x1080 or larger
- Format: JPG, PNG, WebP
- Size: < 2MB
- Naming: kebab-case (e.g., hero-1.jpg)

## Video Guidelines

- Resolution: 1920x1080 or 1280x720
- Format: MP4 (H.264), WebM (VP9)
- Bitrate: 3-8 Mbps for 1080p
- Length: 10-30 seconds for loop
- Size: < 10MB
- Naming: kebab-case (e.g., hero-1.mp4)

## Adding New Assets

1. Place files in appropriate directory
2. Update stories to reference new paths
3. Test in Storybook
