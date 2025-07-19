# Deployment Guide

This document outlines the deployment process for the Razin Rayees Portfolio.

## Prerequisites

- Node.js 18+ installed
- Firebase CLI installed (`npm install -g firebase-tools`)
- Firebase project set up

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

## Firebase Deployment

### Manual Deployment

1. Login to Firebase:
```bash
firebase login
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Firebase:
```bash
firebase deploy
```

### Automated Deployment (GitHub Actions)

The project includes GitHub Actions workflows for automated deployment:

- **CI Workflow**: Runs on every push and pull request to test the build
- **Deploy Workflow**: Automatically deploys to Firebase on pushes to the main branch

#### Setup GitHub Actions

1. Add Firebase service account key to GitHub secrets:
   - Go to Firebase Console → Project Settings → Service Accounts
   - Generate new private key
   - Add the JSON content as `FIREBASE_SERVICE_ACCOUNT` secret in GitHub

2. The deployment will run automatically on every push to main branch

## Environment Variables

No environment variables are required for the basic setup. The project uses:

- Static configuration in `src/lib/constants.ts`
- Formspree for contact form handling

## Custom Domain

To set up a custom domain:

1. In Firebase Console, go to Hosting
2. Add custom domain
3. Follow Firebase instructions for DNS configuration

## Monitoring

- Firebase Hosting provides built-in analytics
- Monitor deployment status in Firebase Console
- Check GitHub Actions for build/deploy status

## Troubleshooting

### Build Fails
- Check TypeScript errors: `npm run type-check`
- Verify all dependencies are installed: `npm install`

### Deployment Fails
- Ensure Firebase CLI is logged in: `firebase login`
- Check Firebase project configuration in `.firebaserc`
- Verify build directory exists: `npm run build`

### GitHub Actions Fails
- Check secrets are properly configured
- Verify workflow permissions in repository settings