# Open Graph Image Guide for Constant Labs

## Required Image

**Filename:** `og-image.png`  
**Location:** `/public/og-image.png`  
**Dimensions:** 1200 x 630 pixels  
**Format:** PNG (preferred) or JPG  
**Max File Size:** < 200KB for optimal performance

## Design Recommendations

### Content
- **Main text:** "CONSTANT LABS" in the HACKED or Orbitron font
- **Tagline:** "WE BUILD. WE BREAK. WE OWN IT."
- **Style:** Cyberpunk/hacker aesthetic matching the site
- **Background:** Dark (#121212) with subtle CRT scanline effect

### Colors
- Background: #121212 (dark gray/black)
- Text: #FAFAFA (off-white)
- Accents: Use green (#22C55E) for terminal-style highlights

### Typography
- Primary: HACKED or Orbitron (700-900 weight)
- Secondary: Rajdhani or Share Tech Mono
- Keep text large and readable (will be shown as thumbnail)

### Visual Elements
- Subtle chromatic aberration effect
- Terminal-style design elements
- Grid or dot pattern in background (low opacity)
- Avoid too much detail (will be shown small)

## Quick Creation Options

### Option 1: Use Figma
1. Create 1200x630px canvas
2. Use design system from website
3. Export as PNG

### Option 2: Use Canva
1. Use "Facebook Post" template (1200x630)
2. Apply dark cyberpunk theme
3. Download as PNG

### Option 3: Code it (HTML + Screenshot)
1. Create HTML file with exact dimensions
2. Use headless browser to screenshot
3. Example tool: https://www.bannerbear.com/

## Testing

After creating the image, test it:
- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator
- **LinkedIn:** Share the URL and check preview

## Example Layout

```
┌─────────────────────────────────────────────┐
│                                             │
│        ▓▓▓▓▓ CONSTANT LABS ▓▓▓▓▓           │
│                                             │
│       WE BUILD. WE BREAK. WE OWN IT.       │
│                                             │
│    [Subtle dot grid pattern background]    │
│    [CRT scanline overlay]                  │
│                                             │
└─────────────────────────────────────────────┘
       1200px x 630px
