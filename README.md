# Textile Engineer Portfolio Website

A modern, responsive, high-performance static portfolio website engineered specifically for **Textile Engineers**, **Materials Specialists**, and **R&D Scientists**.

Suitable for immediate deployment on **GitHub Pages**, **Vercel**, or **Netlify** with zero backend or database required.

---

## 🌟 Key Features

1. **Placeholder-First Image Architecture**:
   - Every image slot (Profile, About, Hero, Projects, and Gallery) renders a clean, styled CSS placeholder with textile-themed icons, slot labels, and recommended dimension badges if no photo is supplied.
   - You can add real photos **one at a time** as you collect them—the website layout never breaks or shifts.
2. **Central Image Configuration**:
   - Manage all image paths and captions in one central `IMAGES` configuration object at the top of `script.js`.
3. **Aspect Ratio Locking**:
   - Uses CSS `aspect-ratio` and `object-fit: cover` to ensure that uploaded photos are automatically framed with zero layout shift (CLS: 0).
4. **Interactive Vanilla JS Lightbox Gallery**:
   - Responsive masonry/grid (3 columns desktop, 2 tablet, 1 mobile).
   - Click to inspect full-size photo or specimen with caption, previous/next controls, and keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
5. **Interactive Project Case Study Modals**:
   - In-depth modal dialogs for each project detailing the industrial challenge, engineering solution, applied ASTM/AATCC/ISO standards, and quantitative results.
6. **Dark / Light Theme Toggle**:
   - Smooth transition between high-contrast dark mode and clean linen light mode, with user preference saved in `localStorage`.
7. **Interactive Category Filtering**:
   - Filter projects and skill competencies by domain (Sustainability, Smart Textiles, Manufacturing, Testing, CAD).
8. **Semantic & Accessible**:
   - WCAG AA compliant contrast, keyboard navigation support, screen-reader friendly landmarks, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```
textile-engineer-portfolio/
│
├── index.html                     # Semantic HTML5 website structure
├── style.css                      # Modern CSS tokens, light/dark themes, responsive layout
├── script.js                      # Central IMAGES config, lightbox, filters, theme manager
├── README.md                      # Deployment & customization guide (this file)
└── assets/
    └── images/
        ├── IMAGE_GUIDE.txt        # Detailed image dimensions & replacement manual
        ├── profile/               # Personal photos (profile.jpg, about.jpg)
        ├── projects/              # Project photos (project-1.jpg ... project-6.jpg)
        ├── hero/                  # Hero background / banner photos (hero.jpg)
        └── texture/               # Textile SVG patterns (weave-pattern.svg, herringbone.svg)
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Python Local HTTP Server (Recommended)
If you have Python installed, open your terminal/PowerShell in this directory and run:

```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🖼️ How to Add Your Photos (Step-by-Step)

You do **not** need all photos ready at once. Follow this simple process whenever you have a new photo:

1. **Save your photo** in the recommended folder inside `assets/images/`:
   - Profile photo (1:1 ratio, 400×400px) &rarr; `assets/images/profile/profile.jpg`
   - About me photo (4:3 ratio, 500×375px) &rarr; `assets/images/profile/about.jpg`
   - Hero banner (1920×600px) &rarr; `assets/images/hero/hero.jpg`
   - Project cards (16:9 ratio, 600×340px) &rarr; `assets/images/projects/project-1.jpg`
2. **Open `script.js`** in your code editor.
3. **Locate the `IMAGES` object** at the top of `script.js` and paste your file path into `src`:

```javascript
const IMAGES = {
  profile: {
    src: "assets/images/profile/profile.jpg", // <-- Real photo of Waseur Rahman
    alt: "Profile photo of Waseur Rahman",
    ...
  },
  about: {
    src: "assets/images/profile/about.jpg", // Real photo at Ha-Meem Group!
    ...
  },
  projects: [
    { src: "assets/images/projects/project-1.jpg", ... },
    ...
    { src: "", ... } // Remaining slots show elegant CSS placeholders!
  ]
};
```
4. **Save and reload your browser!**
   - Slots with real file paths will immediately display your photo with a smooth fade-in.
   - Any slots with empty strings (`""`) remain as clean placeholders until you provide their files.
   - For complete dimensions, aspect ratios, and compression tips, see `assets/images/IMAGE_GUIDE.txt`.

---

## 🌐 Free Deployment Instructions

### 1. GitHub Pages (100% Free)
1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Textile Engineer portfolio"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Link and push your local branch:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** &rarr; **Pages**.
5. Under **Build and deployment** &rarr; **Branch**, select `main` and `/ (root)`. Click **Save**.
6. Your portfolio will be live at `https://<your-username>.github.io/<repo-name>/` in about 60 seconds!

---

### 2. Vercel (100% Free, Instant Global CDN)
1. Push your code to GitHub (as above).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** &rarr; **"Import"** your GitHub repository.
4. Leave all settings at default (**Framework Preset: Other**).
5. Click **"Deploy"**. Your site is live on a custom `.vercel.app` URL with free automated HTTPS!

---

### 3. Netlify (Drag & Drop, 100% Free)
1. Open [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `textile-engineer-portfolio` folder directly into the browser window.
3. Your portfolio goes live instantly!

---

## ✏️ How to Customize Personal Details

- **Name & Title**: Edit name and titles in `index.html` and `script.js`.
- **Contact Details**: In `index.html` under `<section id="contact">`, update:
  - Email: `waseur.rahman@example.com`
  - LinkedIn: `linkedin.com/in/waseur-rahman`
  - Location: Dhaka, Bangladesh
- **Skills & Badges**: Add or modify skill items in the `<section id="skills">` grid.
- **Case Studies**: In `script.js`, edit the `CASE_STUDIES` array to detail your specific industrial trials, competition presentations, or thesis research.

---

## 📜 License
MIT License. Free to use, adapt, and customize for personal and professional portfolios.
