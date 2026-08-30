# Laiba Ayyaz Portfolio

Portfolio website for Laiba Ayyaz, focused on graphic design and print production.

## Tech
- React + TypeScript
- Vite
- React Router
- CSS
- Vitest
- ESLint

## Run locally
```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run lint
npm run test
npm run build
```

## Project structure
- `src/components/` reusable components
- `src/pages/` routed pages
- `src/data/` portfolio content
- `src/styles/` global styles
- `assets/` portfolio imagery

## Deployment
Production domain: **https://laibaayyaz.com**

The production build is created with:
```bash
npm run build
```

Upload the contents of `dist/` to the production web root. See `DEPLOYMENT.md` for hosting details.

`node_modules/` and `dist/` are intentionally excluded from Git.
