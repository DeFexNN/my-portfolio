# my-portfolio

React + TypeScript portfolio built with Vite showcasing projects, component-driven design, and fast development experience.

Tech stack

- React + TypeScript — type-safe UI, predictable props/state.
- Vite — fast dev server and optimized production bundles.
- Node / NPM — dependency management; package-lock.json for deterministic installs.
- CSS modules / utility-first styling — modular and maintainable styles.

Purpose & where to look

- src/components/: reusable UI components (ProjectCard, TechStack, ContactForm).
- src/data/: JSON/MDX project metadata used to statically generate project pages.

Interesting code patterns

- Type-safe manifests validated with TypeScript interfaces or zod for early error catching.
- Static generation of project pages to combine SPA UX with good SEO for recruiters.
- Accessibility considerations: semantic HTML, focus management, ARIA attributes.

Build & test

1. Node 18+ recommended.
2. npm ci && npm run dev for local dev; npm run build for production.

Interview points

- How TypeScript reduced runtime bugs.
- Trade-offs between SPA and pre-rendered static pages for SEO/performance.