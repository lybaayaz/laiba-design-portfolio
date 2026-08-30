# Laiba Ayyaz — Portfolio

A production-minded portfolio for **graphic design, branding, packaging and print production**. The visible positioning stays focused on design and print; UI/UX and front-end experience appear only as supporting context in the experience section.

## Tech Stack
- React + TypeScript
- Vite
- React Router
- CSS design tokens and responsive layout
- Vitest + Testing Library
- ESLint
- GitHub Actions CI

## Design System
Core visual decisions live in `src/styles/global.css` as CSS custom properties for colour, typography, spacing and layout. This keeps the interface consistent without hiding the design behind a component library.

## Architecture
- `src/components/` — reusable interface pieces such as navigation, SEO, images, marquee and footer
- `src/data/` — project and experience content separated from rendering logic
- `src/pages/` — routed page-level compositions
- `src/assets/images/` — local optimized portfolio imagery
- `scripts/` — build-time SEO helpers

Project pages are data-driven through one reusable route (`/work/:slug`) instead of copied HTML files.

## Performance
- Existing artwork is stored as WebP and paired with generated AVIF versions.
- Project imagery is lazy-loaded by default.
- Hero imagery is explicitly eager-loaded with high fetch priority.
- Vite handles bundling, minification and asset hashing for production.
- No oversized UI framework is included.

For a final production pass, run Lighthouse against the deployed URL and address any findings caused by the hosting environment or final content.

## Accessibility
- Semantic landmarks and headings
- Descriptive image alternatives where imagery carries meaning
- Keyboard-friendly native links
- High-contrast text and controls
- `prefers-reduced-motion` disables marquee animation and removes non-essential transitions

## Responsive Behaviour
Desktop uses a split hero with the portrait at the edge of the viewport. Tablet and mobile collapse content naturally, enlarge project thumbnails and simplify navigation without creating a separate duplicate layout.

## SEO & Social
The reusable `Seo` component manages page title, description, Open Graph and Twitter card metadata. `npm run build` also generates `robots.txt` and `sitemap.xml`.

Before deployment, copy `.env.example` to `.env` and replace `https://laibaayyaz.com` with the real production domain. Add a final `public/social-preview.jpg` when the preferred Open Graph artwork is selected.

## Local Development
```bash
npm install
npm run dev
```

The first `npm install` will also create `package-lock.json`; commit that file before the first GitHub push so installs stay reproducible.

Quality checks:
```bash
npm run lint
npm run test
npm run build
```

## Deployment
### Vercel
Import the GitHub repository, use the Vite defaults, and add `VITE_SITE_URL` as a production environment variable. `vercel.json` includes the SPA fallback.

### Netlify
Import the GitHub repository. `netlify.toml` already defines the build command, output folder and SPA redirect. Add the same `VITE_SITE_URL` environment variable.

## Git Workflow
Do not manufacture commit history merely to make the repository look busy. A strong history is small and understandable. A sensible sequence after importing this project is:
1. `chore: initialize React TypeScript portfolio`
2. `feat: build responsive portfolio shell`
3. `feat: add data-driven project routes`
4. `perf: add AVIF sources and lazy image loading`
5. `test: add basic component and data checks`
6. `docs: document architecture and deployment`

That produces actual evidence of frontend judgement instead of decorative commits, which recruiters can smell from orbit.

## Selected production experience

The portfolio intentionally distinguishes original design authorship from print-production support. Selected production work has included preflighting, preparing, checking and outputting supplied artwork for organizations and brands such as Nanak, lululemon, Amazon, the City of Surrey, the City of Langley, New Westminster and Vancouver recreation facilities. This wording describes production responsibility and does not imply endorsement or authorship of those organizations' underlying brand identities.

## Opening the project locally

This is a Vite application, so `index.html` should not be opened directly from the filesystem.

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite, normally `http://localhost:5173`.

## Production / Git note

`node_modules/` and `dist/` are intentionally excluded from Git. The repository contains source code and optimized portfolio assets only. Run `npm ci` after cloning and `npm run build` to create the production `dist/` folder. See `DEPLOYMENT.md` for GitHub, Vercel, Netlify, and traditional shared-hosting instructions.


## Production deployment

The production domain is **https://laibaayyaz.com** on Namecheap shared hosting. See `DEPLOYMENT.md` or run `./deploy-namecheap.ps1` from PowerShell to install, check, and build the production bundle.
