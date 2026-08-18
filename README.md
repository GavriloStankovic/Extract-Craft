# ExtractCraft

Marketing site and shopping cart for ExtractCraft home extraction equipment, built with React 19 and Vite.

## Requirements

Node.js 20.19 or newer (Vite 8 requirement).

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000 and opens a browser automatically.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot module replacement |
| `npm run build` | Produce an optimised production build in `dist/` |
| `npm run preview` | Serve the contents of `dist/` locally to check the build |
| `npm run lint` | Run ESLint across the project |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |

## Project layout

```
src/
  assets/       images and SVGs
  components/   one folder per component, each with its own .scss
  context/      CartContext — cart items, totals, preview visibility
  utils/        static content for the sliders and the FAQ accordion
  test/         Vitest setup
```

Routing lives in `src/App.jsx`: `/` renders the landing page and `/checkout`
renders the cart.

## Notes

- **SVGs** are imported two ways. `import icon from './icon.svg'` gives a URL for
  use in `<img>`; `import Icon from './icon.svg?react'` compiles the file into a
  React component via `vite-plugin-svgr`. Use the URL form for large artwork so
  it stays out of the JavaScript bundle.
- **Animations** come from `src/components/Reveal/Reveal.jsx`, a small
  IntersectionObserver-based replacement for the abandoned `react-reveal`. It
  clones its single child rather than wrapping it, and it honours
  `prefers-reduced-motion`.
