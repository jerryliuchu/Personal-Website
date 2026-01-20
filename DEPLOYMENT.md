# Deployment Guide for GitHub Pages

This guide will help you deploy your Personal Website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Method 1: Using GitHub Actions (Recommended)

This is the easiest method as it automatically deploys whenever you push to the main branch.

### Step 1: Configure GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** (top right)
3. Scroll down to **Pages** (in the left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Save

### Step 2: Push Your Code

```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Initial commit: Setup GitHub Pages deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/jerryliuchu/Personal-Website.git

# Push to main branch
git push -u origin main
```

The GitHub Action will automatically:
- Install dependencies
- Build your project
- Deploy to GitHub Pages

Your site will be live at: `https://jerryliuchu.github.io/Personal-Website/`

## Method 2: Manual Deployment

If you prefer to deploy manually:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Push the `dist/public` folder to the `gh-pages` branch

### Configure GitHub Pages for Manual Deployment

1. Go to your GitHub repository settings
2. Navigate to **Settings > Pages**
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `root`
4. Save

## Verifying Deployment

After deployment (either method), wait 1-2 minutes, then visit:

```
https://jerryliuchu.github.io/Personal-Website/
```

## Common Issues

### Issue: Page shows 404 or blank screen

**Solutions:**
1. Verify the `base` path in `vite.config.ts` matches your repository name
2. Check that GitHub Pages is enabled in your repository settings
3. Make sure the `.nojekyll` file exists in `client/public/`

### Issue: Assets not loading

**Solution:**
Ensure the `base` path in `vite.config.ts` matches your repository name:
```typescript
base: "/Personal-Website"
```

### Issue: Routing not working

**Solution:**
The `404.html` file should handle SPA routing. Make sure it's in `client/public/` and gets copied to the build output.

## Testing Locally Before Deployment

```bash
# Build the production version
npm run build

# Preview the production build
npm run preview
```

Open `http://localhost:4173/Personal-Website/` to test the production build locally.

## Updating Your Site

### Using GitHub Actions:
```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main
```

### Using Manual Deployment:
```bash
# Make your changes
npm run deploy
```

## Custom Domain (Optional)

To use a custom domain like `www.yourname.com`:

1. Create a file `client/public/CNAME` with your domain:
```
www.yourname.com
```

2. Update the base path to root:
   - In `vite.config.ts`: `base: "/"`
   - In `client/src/App.tsx`: `const base = "/"`

3. Configure your DNS:
   - Add a CNAME record pointing to `jerryliuchu.github.io`
   - Or add A records pointing to GitHub's IPs

4. Redeploy your site

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- Check the [Issues](https://github.com/jerryliuchu/Personal-Website/issues) page

---

Happy Deploying! 🚀
