# Tinendra Kandula - Portfolio Website

A modern Vue.js portfolio website with Firebase integration and glassmorphism design.

## Features

- Modern Vue 3 with Composition API
- Responsive glassmorphism design
- Firebase integration (Firestore, Storage, Analytics)
- Contact form with email notifications
- Visitor tracking and analytics
- Admin dashboard with password protection
- Resume download from Firebase Storage
- Scroll position preservation for overlays
- Automatic GitHub Pages deployment

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your Firebase credentials
4. Update `vite.config.js` with your GitHub repository name
5. Run development server: `npm run dev`
6. Build for production: `npm run build`

## Firebase Setup

1. Create a new Firebase project
2. Enable Firestore, Storage, and Analytics
3. Update the config in `src/utils/firebase.js`
4. Add your domain to authorized domains

## Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## License

Private project - All rights reserved.