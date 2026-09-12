# Sylvan Restaurant | Premium Dining Web Experience

Built for **[auraX-technologies](https://github.com/auraX-technologies)**

Sylvan is a production-grade, highly-performant restaurant website designed to convey a sophisticated, earthy, and intimate culinary brand. Bypassing generic startup templates, this project utilizes an asymmetric, editorial design language, smooth scroll-triggered animations, and a rich, color-corrected visual aesthetic.

## 🚀 Tech Stack & Architecture

This project was built with modern, cutting-edge web technologies prioritizing performance, maintainability, and developer experience.

- **React 19** – Component-driven UI architecture.
- **TypeScript** – Strict type-safety, robust tooling, and predictable code behavior.
- **Vite** – Next-generation frontend tooling for near-instant HMR and optimized production builds.
- **Tailwind CSS v4** – The latest utility-first CSS framework using the new lightning-fast CSS-native `@theme` configuration.
- **Framer Motion** – Physics-based, production-ready animation library for natural, scroll-driven page reveals and interactions.
- **React Router v7** – Future-proofed routing architecture.
- **Lucide React** – Clean, consistent, and lightweight SVG icons.

## ✨ Technical Highlights

- **Custom Tailwind v4 Theming**: Completely customized design tokens using the new CSS-based `@theme` API, bypassing standard configurations to create a deeply specific brand identity (Forest Green, Muted Sage, Soft Cream, Beige).
- **Asymmetric Editorial Layouts**: CSS Grid masonry and asymmetric flexbox compositions designed for high-end photography, deviating from rigid card-based layouts.
- **Scroll-Aware Navigation**: A custom React hook dynamically observes window scroll position to transition the Navbar's glassmorphism and text contrast, ensuring maximum readability over dynamic hero images.
- **Performant Animations**: `framer-motion` implementations using hardware-accelerated transforms (`y`, `scale`, `opacity`) wrapped in `whileInView` for jitter-free, intersection-observer-based reveals.
- **Responsive Typography**: Fluid scaling between `Inter` (sans-serif utility) and `Playfair Display` (serif editorial) with strict tracking/leading control across all viewports.
- **Dynamic Vite Config for GitHub Pages**: The `vite.config.ts` has been engineered to automatically detect the `GITHUB_REPOSITORY` environment variable during deployment, seamlessly setting the correct `base` path regardless of the repository name!
- **Semantic & Accessible Structure**: Proper HTML5 semantic elements (`<section>`, `<nav>`, `<header>`, `<footer>`) with ARIA labels and focus states for keyboard navigation.

## 📦 Local Development

1. Clone the repository:
```bash
git clone https://github.com/auraX-technologies/<repository-name>.git
```
2. Install dependencies:
```bash
npm install
```
3. Start the Vite development server:
```bash
npm run dev
```

## 🌐 Deploying to GitHub Pages

This project is fully configured for automated deployment to GitHub Pages via **GitHub Actions**. You do not need to manually run builds or push `gh-pages` branches!

1. Push this code to a new repository on your GitHub account.
2. In your GitHub repository, go to **Settings > Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
4. That's it! The included `.github/workflows/deploy.yml` will automatically build and deploy the site whenever you push to the `main` or `master` branch.

Because `vite.config.ts` dynamically handles the base path, it will deploy flawlessly no matter what you name your repository.
