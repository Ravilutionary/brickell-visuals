# Photographer Portfolio Template Guide

Welcome to the **Brickell Visuals** model. This project is designed to be a "gold standard" for high-end photography portfolios—highly maintainable, scalable, and performance-optimized.

## Getting Started

To adapt this template for your own photography practice, follow these steps:

### 1. Branding & Identity
Open `src/consts.ts` and update the `SITE` and `BRAND` constants:
-   `SITE.name`: Your business name.
-   `SITE.description`: Your unique value proposition.
-   `SITE.email`, `SITE.phone`, `SITE.address`: Your contact details.
-   `BRAND.navy`, `BRAND.sunset`: Your primary brand colors (these propagate to Tailwind tokens).

### 2. Updating Content
This site is data-driven. You don't need to touch `index.astro` to update your work.
-   **Services**: Edit/Add JSON files in `src/content/services/`.
-   **Portfolio**: Update `src/content/gallery/items.json` with your image URLs and categories.
-   **Testimonials**: Update `src/content/testimonials/list.json`.
-   **Journal/Blog**: Add Markdown (`.mdx`) files to `src/content/blog/`.

### 3. Image Strategy
-   **Backgrounds**: High-resolution Hero images should be placed in `public/` or linked from a CDN.
-   **Optimized Assets**: Use the `src/assets/` directory for local images to leverage Astro's automatic image optimization (use `<Image />` component).

### 4. Typography
-   We self-host fonts for speed. If you want to change fonts:
    1.  Download `.woff2` files to `public/fonts/`.
    2.  Update `@font-face` and the `@theme` block in `src/styles/global.css`.

### 5. Deployment
-   The project includes a `netlify.toml`. Simply link your GitHub repo to Netlify, and it will auto-deploy on every push.

---

## Technical Architecture
-   **Framework**: Astro v5
-   **Styling**: Tailwind CSS v4 + DaisyUI 5
-   **Interactivity**: Alpine.js
-   **Data**: Type-safe Content Collections
-   **Performance**: Zero-JS by default (where possible), self-hosted assets, and built-in image optimization.
