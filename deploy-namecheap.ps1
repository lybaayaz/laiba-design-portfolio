$ErrorActionPreference = "Stop"

Write-Host "Installing exact dependencies..."
npm ci

Write-Host "Running checks..."
npm run lint
npm run test

Write-Host "Building production site for https://laibaayyaz.com ..."
$env:VITE_SITE_URL = "https://laibaayyaz.com"
npm run build

Write-Host ""
Write-Host "Build complete. Upload the CONTENTS of the dist folder to the Namecheap document root for laibaayyaz.com."
Write-Host "Usually this is public_html for the primary domain. Confirm it in cPanel > Domains."
