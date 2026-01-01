# Screenshot Thumbnail Generator

This script generates optimized 720p thumbnails from full-resolution screenshots.

## Prerequisites

Install ffmpeg

## Usage

Run from the blog root directory:

```powershell
.\scripts\generate-thumbnails.ps1
```

## What it does

- Reads all images from `public/screenshots/full/`
- Generates 720p thumbnails in `public/screenshots/thumbs/`
