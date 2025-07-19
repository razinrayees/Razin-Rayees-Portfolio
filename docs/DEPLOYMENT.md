# Deployment Guide

This document outlines the deployment process for the Razin Rayees Portfolio using Netlify.

## Prerequisites

- Node.js 18+ installed
- Git repository (GitHub, GitLab, or Bitbucket)
- Netlify account

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/razinrayees/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Production Build

1. Create production build:
```bash
npm run build
```

2. Preview production build locally:
```bash
npm run preview
```

## Netlify Deployment

### Automatic Deployment (Recommended)

1. **Connect Repository to Netlify**:
   - Go to [Netlify](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Connect your Git provider (GitHub, GitLab, Bitbucket)
   - Select your portfolio repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (set in netlify.toml)

3. **Deploy**:
   - Click "Deploy site"
   - Your site will be automatically deployed and updated on every push to main branch

### Manual Deployment

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder to the deploy area
   - Your site will be live immediately

### Environment Variables

No environment variables are required for the basic setup. The project uses:
- Static configuration in `src/lib/constants.ts`
- Formspree for contact form handling

If you need environment variables:
1. Go to Site settings → Environment variables in Netlify
2. Add your variables (they should start with `VITE_` to be accessible in the app)

## Custom Domain

To set up a custom domain:
1. In Netlify dashboard, go to Site settings → Domain management
2. Add custom domain
3. Follow Netlify instructions for DNS configuration
4. SSL certificate will be automatically provisioned

## Netlify Features

The project is configured to take advantage of:
- **Automatic HTTPS**: SSL certificates are automatically provisioned
- **CDN**: Global content delivery network
- **Form Handling**: Can be used instead of Formspree if preferred
- **Redirects**: SPA routing configured in `netlify.toml`
- **Headers**: Optimized caching for assets

## Monitoring

- Netlify provides built-in analytics
- Monitor deployment status in Netlify dashboard
- Check build logs for any issues

## Branch Previews

Netlify automatically creates preview deployments for:
- Pull requests
- Branch pushes (if configured)

## Troubleshooting

### Build Fails
- Check TypeScript errors: `npm run type-check`
- Verify all dependencies are installed: `npm install`
- Check build logs in Netlify dashboard

### Deployment Fails
- Check build logs in Netlify dashboard
- Verify build directory exists: `npm run build`
- Ensure `netlify.toml` configuration is correct

### Site Not Loading Properly
- Verify publish directory is set to `dist`
- Check that all assets are being built correctly
- Review redirect rules in `netlify.toml`