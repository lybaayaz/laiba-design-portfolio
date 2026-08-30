# Deploying laibaayyaz.com on Namecheap Shared Hosting

This project is a React + TypeScript + Vite single-page application. The Git repository should contain source files, not `node_modules` and not the generated `dist` folder.

## 1. Local setup

From the project folder in VS Code on Windows:

```powershell
npm ci
npm run lint
npm run test
npm run build
```

The production site is generated into `dist/`.

The production URL is already configured as:

```text
https://laibaayyaz.com
```

This is used by the sitemap and social metadata.

## 2. Push source code to the existing GitHub repository

```powershell
git add .
git commit -m "Optimize portfolio for production deployment"
git push
```

Do not commit `node_modules/` or `dist/`. They are ignored.

## 3. Upload the live site to Namecheap

1. Sign in to Namecheap and open **Hosting List → Go to cPanel**.
2. In cPanel, open **Domains** and confirm the **Document Root** for `laibaayyaz.com`.
   - If this is the primary hosting domain, it is usually `public_html`.
3. Back up the current live files before replacing them.
4. Open **File Manager** and go to that Document Root.
5. Enable **Settings → Show Hidden Files (dotfiles)** so `.htaccess` is visible.
6. Upload the **contents inside your local `dist/` folder**, not the `dist` folder itself.
7. The root should contain `index.html`, `.htaccess`, `assets/`, `robots.txt`, `sitemap.xml`, images, and the resume.
8. Visit `https://laibaayyaz.com/` and test the project routes directly, including refreshing a `/work/...` URL.

## 4. HTTPS and canonical domain

The included `.htaccess` redirects HTTP and `www.laibaayyaz.com` to:

```text
https://laibaayyaz.com
```

It also provides the React SPA fallback and long-lived caching for fingerprinted/static assets.

Make sure SSL is active in Namecheap/cPanel before relying on the HTTPS redirect.

## 5. Updating the site later

After making changes:

```powershell
npm run build
git add .
git commit -m "Describe the update"
git push
```

Then upload the new `dist/` contents to the same Namecheap Document Root, replacing the old generated files.

## Recommended safer launch workflow

Before replacing the live homepage, create a temporary subdomain such as `preview.laibaayyaz.com`, point it to its own folder in cPanel, and upload `dist/` there. Once verified on desktop and mobile, deploy the same `dist/` contents to the main domain.
