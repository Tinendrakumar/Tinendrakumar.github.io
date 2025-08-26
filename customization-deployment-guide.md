# Complete Customization & Deployment Guide

This comprehensive guide will help you customize your Vue.js portfolio and deploy it to GitHub Pages.

## 📋 Table of Contents

1. [Project Setup](#project-setup)
2. [Customization Guide](#customization-guide)
3. [GitHub Deployment](#github-deployment)
4. [Firebase Configuration](#firebase-configuration)
5. [Troubleshooting](#troubleshooting)

---

## 🚀 Project Setup

### Prerequisites
- **Node.js** (version 16 or higher) - Download from https://nodejs.org
- **Git** - Download from https://git-scm.com
- **GitHub Account** - Sign up at https://github.com
- **Firebase Account** - Sign up at https://firebase.google.com

### Initial Setup Steps

1. **Extract the ZIP file** to your desired location
2. **Open terminal/command prompt** in the project folder
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Copy environment file**:
   ```bash
   cp .env.example .env
   ```
5. **Test the project**:
   ```bash
   npm run dev
   ```

---

## 🎨 Customization Guide

### 1. Colors & Design System

#### **Primary File**: `src/assets/styles/variables.css`

**Change Main Color Palette:**
```css
:root {
  /* PRIMARY COLORS - Change these for your brand */
  --color-primary-500: #3B82F6;    /* Main blue - change to your brand color */
  --color-secondary-500: #D946EF;  /* Purple accent - change to secondary color */
  
  /* BACKGROUND COLORS */
  --color-background-primary: #FEFCE8;  /* Main background - cream/off-white */
  --color-background-secondary: #F8FAFC; /* Secondary background */
  
  /* TEXT COLORS */
  --color-text-primary: #1E293B;    /* Main text color */
  --color-text-secondary: #64748B;  /* Secondary text color */
}
```

**Quick Color Changes:**
- **Brand Color**: Change `--color-primary-500` (affects buttons, links, accents)
- **Background**: Change `--color-background-primary` (main page background)
- **Text**: Change `--color-text-primary` (main text color)

#### **Gradient Colors**: `src/assets/styles/main.css`

**Change Floating Background Elements:**
```css
.floating-element-1 {
  /* Change this gradient for floating bubble 1 */
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
}

.floating-element-2 {
  /* Change this gradient for floating bubble 2 */
  background: linear-gradient(135deg, #F472B6 0%, #FB7185 100%);
}
```

### 2. Typography & Fonts

#### **Font Family**: `src/assets/styles/main.css`

**Change Main Font:**
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  /* Replace 'Inter' with your preferred font */
}
```

**Add Google Fonts**: `public/index.html`
```html
<head>
  <!-- Add this line before closing </head> -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
```

**Then update CSS:**
```css
body {
  font-family: 'Poppins', sans-serif;
}
```

#### **Font Sizes**: `src/assets/styles/variables.css`

```css
:root {
  /* TYPOGRAPHY SCALE - Adjust these sizes */
  --font-size-xs: 0.75rem;    /* Small text */
  --font-size-sm: 0.875rem;   /* Small text */
  --font-size-base: 1rem;     /* Body text */
  --font-size-lg: 1.125rem;   /* Large text */
  --font-size-xl: 1.25rem;    /* Headings */
  --font-size-2xl: 1.5rem;    /* Large headings */
  --font-size-3xl: 1.875rem;  /* Hero text */
  --font-size-4xl: 2.25rem;   /* Large hero */
  --font-size-5xl: 3rem;      /* Massive text */
}
```

### 3. Personal Information

#### **Update Your Details**: `src/views/Home.vue`

```javascript
const personalInfo = {
  intro: "YOUR INTRODUCTION TEXT HERE",
  description: "YOUR DETAILED DESCRIPTION HERE"
}
```

#### **Update Experience**: `src/views/Resume.vue`

```javascript
const experience = [
  {
    period: "2022 - Present",
    position: "YOUR JOB TITLE",
    company: "YOUR COMPANY",
    location: "YOUR LOCATION",
    description: "YOUR JOB DESCRIPTION"
  },
  // Add more experience entries
]
```

#### **Update Skills**: `src/views/Resume.vue`

```javascript
const skills = {
  professional: [
    "YOUR SKILL 1",
    "YOUR SKILL 2",
    // Add your skills
  ],
  tools: [
    "YOUR TOOL 1", 
    "YOUR TOOL 2",
    // Add your tools
  ]
}
```

#### **Update Projects**: `src/views/Projects.vue`

```javascript
const projects = ref([
  {
    id: 1,
    title: "YOUR PROJECT TITLE",
    role: "YOUR ROLE",
    description: "PROJECT DESCRIPTION",
    technologies: ["Tech 1", "Tech 2"],
    duration: "PROJECT DURATION",
    teamSize: "TEAM SIZE",
    url: "PROJECT_URL"
  }
  // Add more projects
])
```

#### **Update Contact Info**: `src/components/layout/Footer.vue`

```vue
<div class="contact-item">
  <span class="contact-label">Call</span>
  <span class="contact-value">YOUR-PHONE-NUMBER</span>
</div>
<div class="contact-item">
  <span class="contact-label">Write</span>
  <span class="contact-value">your-email@domain.com</span>
</div>
```

#### **Update Brand Name**: `src/components/layout/Navbar.vue`

```vue
<div class="nav-brand">
  <span class="brand-text">Your Name</span>
</div>
```

### 4. Component Styling

#### **Button Styles**: `src/components/ui/BaseButton.vue`

**Change Primary Button:**
```css
.base-button--primary {
  background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
  color: white;
  box-shadow: 0 4px 14px rgba(YOUR_COLOR_RGB, 0.3);
}
```

#### **Modal Styles**: `src/components/ui/BaseModal.vue`

**Change Modal Background:**
```css
.modal-container {
  background: rgba(255, 255, 255, 0.95); /* Change opacity/color */
  backdrop-filter: blur(20px); /* Adjust blur amount */
}
```

#### **Card Styles**: `src/components/common/ProjectCard.vue`

**Change Project Card Background:**
```css
.project-card {
  background: rgba(255, 255, 255, 0.7); /* Adjust transparency */
  backdrop-filter: blur(10px); /* Adjust blur */
}
```

### 5. Layout & Spacing

#### **Container Widths**: Throughout components

```css
.container {
  max-width: 1200px; /* Change max container width */
  margin: 0 auto;
  padding: 0 2rem; /* Adjust side padding */
}
```

#### **Section Spacing**: `src/assets/styles/variables.css`

```css
:root {
  /* SPACING SCALE - Adjust these for different spacing */
  --spacing-4: 1rem;    /* Small spacing */
  --spacing-8: 2rem;    /* Medium spacing */
  --spacing-16: 4rem;   /* Large spacing */
  --spacing-24: 6rem;   /* Extra large spacing */
}
```

### 6. Animations & Effects

#### **Animation Speed**: `src/assets/styles/variables.css`

```css
:root {
  /* ANIMATION DURATION - Make slower/faster */
  --duration-fast: 0.15s;    /* Quick animations */
  --duration-normal: 0.3s;   /* Standard animations */
  --duration-slow: 0.5s;     /* Slow animations */
}
```

#### **Disable Animations**: `src/assets/styles/animations.css`

**Add this class to any element:**
```css
.no-animation {
  animation: none !important;
  transition: none !important;
}
```

### 7. Admin Configuration

#### **Change Admin Password**: `.env`

```env
VITE_ADMIN_PASSWORD=your_new_password
```

#### **Change Admin Email**: `.env`

```env
VITE_ADMIN_EMAIL=your-admin@email.com
```

---

## 🚀 GitHub Deployment

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New repository"**
3. **Repository name**: `your-username.github.io` (for personal site) or `portfolio-website`
4. **Make it Public**
5. **Don't initialize** with README (we have files already)
6. **Click "Create repository"**

### Step 2: Configure Your Project

#### **Update Repository Name**: `vite.config.js`

```javascript
export default defineConfig({
  plugins: [vue()],
  base: '/your-repository-name/', // Change this to your actual repo name
  // If using your-username.github.io, use base: '/'
})
```

**Examples:**
- For `john-doe.github.io`: use `base: '/'`
- For `portfolio-website`: use `base: '/portfolio-website/'`

### Step 3: Initialize Git and Push

**Open terminal in your project folder:**

```bash
# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio setup"

# Add GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll to "Pages"** in the left sidebar
4. **Source**: Select "GitHub Actions"
5. **Save**

### Step 5: Automatic Deployment

The included GitHub Action (`.github/workflows/deploy.yml`) will automatically:
- Build your project when you push changes
- Deploy to GitHub Pages
- Your site will be available at: `https://your-username.github.io/repository-name/`

### Step 6: Future Updates

To update your portfolio:

```bash
# Make your changes to files
# Then push to GitHub:

git add .
git commit -m "Update portfolio content"
git push origin main
```

The site will automatically rebuild and deploy!

---

## 🔥 Firebase Configuration

### Step 1: Create Firebase Project

1. **Go to**: https://console.firebase.google.com
2. **Click "Create a project"**
3. **Enter project name**: `portfolio-website`
4. **Enable Google Analytics**: Yes (recommended)
5. **Click "Create project"**

### Step 2: Enable Required Services

#### **Enable Firestore Database:**
1. **Go to "Firestore Database"** in left menu
2. **Click "Create database"**
3. **Start in "production mode"**
4. **Choose location** closest to you
5. **Click "Done"**

#### **Enable Storage:**
1. **Go to "Storage"** in left menu
2. **Click "Get started"**
3. **Start in "production mode"**
4. **Choose location** (same as Firestore)
5. **Click "Done"**

#### **Enable Analytics:**
1. **Go to "Analytics"** in left menu
2. **Should already be enabled**

### Step 3: Get Configuration

1. **Go to "Project settings"** (gear icon)
2. **Scroll to "Your apps"**
3. **Click "Web app" icon** `</>`
4. **Enter app nickname**: `Portfolio Website`
5. **Check "Firebase Hosting"**: No (we're using GitHub Pages)
6. **Click "Register app"**
7. **Copy the configuration object**

### Step 4: Update Environment Variables

**Edit your `.env` file:**

```env
# Replace with your actual Firebase configuration
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id

# Admin Configuration
VITE_ADMIN_PASSWORD=your_secure_password
VITE_ADMIN_EMAIL=your-email@domain.com
```

### Step 5: Upload Resume PDF

1. **Go to Firebase Storage**
2. **Create folder**: `files`
3. **Upload your resume** as `resume.pdf`
4. **Set permissions** to public read

### Step 6: Test Firebase Integration

```bash
# Run your project locally
npm run dev

# Test:
# 1. Submit contact form
# 2. Check Firestore for new document
# 3. Try downloading resume
# 4. Access admin dashboard
```

---

## 🛠 Troubleshooting

### Common Issues

#### **1. Build Fails**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### **2. GitHub Pages Shows 404**
- Check `base` path in `vite.config.js`
- Ensure repository name matches base path
- Wait 5-10 minutes for deployment

#### **3. Firebase Connection Issues**
- Verify `.env` file has correct values
- Check Firebase console for any errors
- Ensure services are enabled

#### **4. Admin Dashboard Not Working**
- Check password in `.env` file
- Try clearing browser localStorage
- Verify authentication logic

#### **5. Responsive Issues**
- Test on multiple screen sizes
- Check CSS media queries
- Use browser dev tools

### Performance Optimization

#### **1. Optimize Images**
- Use WebP format when possible
- Compress images before upload
- Consider lazy loading

#### **2. Reduce Bundle Size**
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

#### **3. Improve Loading Speed**
- Enable gzip compression
- Use CDN for assets
- Minimize CSS/JS

### Debugging Tips

#### **1. Console Errors**
- Open browser DevTools (F12)
- Check Console tab for errors
- Fix any red error messages

#### **2. Network Issues**
- Check Network tab in DevTools
- Look for failed requests
- Verify API endpoints

#### **3. Firebase Debugging**
```javascript
// Add this to src/utils/firebase.js for debugging
console.log('Firebase Config:', firebaseConfig)
console.log('Firebase initialized:', app)
```

---

## 📚 Additional Resources

### **Vue.js Documentation**
- https://vuejs.org/guide/

### **Firebase Documentation**
- https://firebase.google.com/docs

### **GitHub Pages Documentation**
- https://docs.github.com/en/pages

### **CSS Grid & Flexbox**
- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### **Web Accessibility**
- https://www.w3.org/WAI/WCAG21/quickref/

---

## 🎉 Final Checklist

Before going live, ensure:

- [ ] All personal information updated
- [ ] Firebase configuration working
- [ ] Contact form sends emails
- [ ] Resume download works
- [ ] Admin dashboard accessible
- [ ] Responsive design tested
- [ ] All links working
- [ ] SEO meta tags updated
- [ ] Performance optimized
- [ ] GitHub repository configured
- [ ] Domain name configured (if using custom domain)

**Congratulations!** Your professional portfolio is now live and ready to impress potential employers and clients! 🚀