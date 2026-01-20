# Personal Website - Jerry Chu

A modern, minimalist portfolio website showcasing work experience, projects, and activities.

## 🚀 Live Site

Visit the live site at: [https://jerryliuchu.github.io/Personal-Website/](https://jerryliuchu.github.io/Personal-Website/)

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Wouter** - Lightweight routing
- **Radix UI** - Accessible UI components

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🏃 Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5000`

## 🔨 Build

```bash
# Build for production
npm run build
```

This will create a `dist/public` directory with all static assets ready for deployment.

## 🌐 Deployment to GitHub Pages

### Manual Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

This command will:
1. Build the project using Vite
2. Deploy the `dist/public` folder to the `gh-pages` branch
3. Make it available at your GitHub Pages URL

### Automatic Deployment with GitHub Actions

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup Steps:**

1. Go to your GitHub repository settings
2. Navigate to **Settings > Pages**
3. Under "Build and deployment", select:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `root`
4. Save the settings

5. Push to the `main` branch:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The GitHub Action will automatically build and deploy your site!

## 📁 Project Structure

```
Personal-Website/
├── client/
│   ├── public/           # Static assets
│   │   ├── .nojekyll    # Prevent Jekyll processing
│   │   ├── 404.html     # SPA routing fallback
│   │   └── favicon.png
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main app component
│   │   └── main.tsx     # Entry point
│   └── index.html       # HTML template
├── attached_assets/     # Images and assets
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

Edit `client/src/pages/Home.tsx` to update:
- Work experience
- Projects
- Activities
- Contact information

### Change Base Path

If you want to deploy to a different repository or use a custom domain:

1. Update `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo-name/"
```

2. Update `vite.config.ts`:
```typescript
base: "/your-repo-name"
```

3. Update `client/src/App.tsx`:
```typescript
const base = "/your-repo-name";
```

### Custom Domain

To use a custom domain:
1. Add a `CNAME` file in `client/public/` with your domain
2. Update the `base` path to `"/"` in both `vite.config.ts` and `App.tsx`
3. Configure your DNS settings to point to GitHub Pages

## 🧪 Testing Production Build Locally

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio website, but feel free to fork it and customize it for your own use!

---

Built with ❤️ using React and deployed on GitHub Pages
