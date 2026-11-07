# Saniya Shaikh — Portfolio

React 19 + Vite + Tailwind CSS 4. No other runtime dependencies.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Where to edit things

| What | Where |
| --- | --- |
| All text content (bio, skills, projects, experience, certifications, papers) | `src/data/portfolio.js` |
| Project screenshots | `src/assets/projects/` (then import in `portfolio.js`) |
| Profile photo | `src/assets/profile.webp` |
| Resume PDF | `public/resume.pdf` |
| Page title and meta description | `index.html` |
| Animations | `src/index.css` (Motion section) and `src/components/Reveal.jsx` |

To add a project, copy one object in the `projects` array. Set `demo` to a URL to show a "Live Demo" button.

## Animations

- Hero: staggered load sequence, name rises out of a mask, portrait is revealed bottom-up.
- Sections: content reveals once as it scrolls into view (`Reveal` component).
- Skill tags stagger in; timeline lines draw themselves.
- Scroll progress bar and active-section highlight in the navbar.
- All motion is disabled for visitors who enable "reduce motion" in their OS.
