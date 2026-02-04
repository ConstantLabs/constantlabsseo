# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Deployment

**CRITICAL:** This repo deploys via Cloudflare Pages connected to `Astrobubu/constant-labs-showcase`.

- Push to `main` branch triggers auto-deploy to constantlabs.ai
- Verify remote before pushing: `git remote -v` should show `Astrobubu/constant-labs-showcase`
- If remote is wrong: `git remote set-url origin https://github.com/Astrobubu/constant-labs-showcase.git`
- `Moenamatics` is a contributor but pushing to `Moenamatics/constant-labs-showcase` will NOT deploy

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:8080)
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

**Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn-ui + Framer Motion

**Routing:** React Router with lazy loading in `src/App.tsx` - add routes above the catch-all `*` route

**Key Pages:**
- `/` - Index.tsx (Constant Labs homepage)
- `/navii` - NaviiLanding.tsx (Navii product page)
- `/smartroads/*` - SmartRoads product pages
- `/robotics/*` - Robotics showcase

**Project Images:** Store in `src/assets/projects/` as webp (use sharp to convert)

## Important Rules

- NEVER overwrite existing files during merges - always ADD, don't replace
- When conflicts occur, merge carefully - don't use `--ours` blindly
- Test build before pushing: `npm run build`
