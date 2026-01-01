# Generate 720p thumbnails from full-resolution screenshots
# Requires ffmpeg to be installed and available in PATH
# Usage: .\scripts\generate-thumbnails.ps1

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootDir = Split-Path -Parent $scriptDir
$fullDir = Join-Path $rootDir "public\screenshots\full"
$thumbDir = Join-Path $rootDir "public\screenshots\thumbs"

# Check if ffmpeg is available
try {
    $null = ffmpeg -version 2>&1
} catch {
    Write-Host "Error: ffmpeg is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Install ffmpeg from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    exit 1
}

# Create thumbs directory if it doesn't exist
if (-not (Test-Path $thumbDir)) {
    New-Item -ItemType Directory -Path $thumbDir -Force | Out-Null
}

# Get all image files from full directory
$imageFiles = Get-ChildItem -Path $fullDir -Include *.png,*.jpg,*.jpeg -Recurse

if ($imageFiles.Count -eq 0) {
    Write-Host "No images found in $fullDir" -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($imageFiles.Count) images to process" -ForegroundColor Cyan
Write-Host ""

$processed = 0
$skipped = 0

foreach ($file in $imageFiles) {
    $outputFile = Join-Path $thumbDir $file.Name
    
    # Skip if thumbnail already exists and is newer than source
    if ((Test-Path $outputFile) -and ((Get-Item $outputFile).LastWriteTime -gt $file.LastWriteTime)) {
        Write-Host "⏭️  Skipping $($file.Name) (thumbnail up to date)" -ForegroundColor Gray
        $skipped++
        continue
    }
    
    Write-Host "🔄 Processing: $($file.Name)" -ForegroundColor Yellow
    
    # Generate 720p thumbnail with ffmpeg
    # -vf scale=-2:720 maintains aspect ratio, height=720px
    # -q:v 2 sets quality (1-31, lower is better, 2 is high quality)
    $ffmpegArgs = @(
        "-i", $file.FullName,
        "-vf", "scale=-2:720",
        "-q:v", "2",
        "-y",  # Overwrite without asking
        $outputFile
    )
    
    $result = & ffmpeg @ffmpegArgs 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        $originalSize = [math]::Round($file.Length / 1MB, 2)
        $thumbSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 2)
        $reduction = [math]::Round((1 - ($thumbSize / $originalSize)) * 100, 1)
        
        Write-Host "✅ Created: $($file.Name) ($originalSize MB → $thumbSize MB, $reduction% reduction)" -ForegroundColor Green
        $processed++
    } else {
        Write-Host "❌ Failed: $($file.Name)" -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ Processed: $processed" -ForegroundColor Green
Write-Host "⏭️  Skipped: $skipped" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan
