# Sandesh Vengala GD&P Portfolio

Premium React + Tailwind portfolio with dark mode, smooth scrolling, animations, project filters, case studies, and a responsive mobile menu.

## Run Locally

1. Install dependencies:
   npm install
2. Start dev server:
   npm run dev
3. Build production bundle:
   npm run build

## Contact Form Setup (Real Submission)

1. Copy .env.example to .env
2. Set VITE_CONTACT_ENDPOINT to your Formspree endpoint or backend API endpoint.
3. Restart the dev server after editing .env.

## Replace Assets With Your Real Work

Drop your files into:
- public/assets/images/hero-showcase.jpg (or update path in code)
- public/assets/images/about-portrait.jpg (or update path in code)
- public/assets/mockups/*.png in src/data/projects.js image field
- public/assets/resume.pdf for resume download links

To switch to JPG/PNG/WebP assets, update the image paths in src/data/projects.js, src/pages/Home.jsx, src/pages/About.jsx, and src/components/ScrollMediaSection.jsx.
