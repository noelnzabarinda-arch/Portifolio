# Personal portfolio

## Run locally

From this folder, run:

```sh
npm install
npm run dev
```

Use `npm run build` for a production build and `npm run lint` for ESLint.

## Personalize the site

Edit `frontend/src/data/portfolio.js` to change your name, location, email, biography, availability, social links, skills, projects, experience, gallery labels, and service descriptions. Replace the example project names, copy, technologies, features, and URLs with your own. Project live/GitHub links appear when their URL fields are non-empty.

## Images

Your current portraits live in `frontend/public/images/` and are used in the hero and About section. Add `project-01.jpg` through `project-04.jpg` for project cards and `gallery-01.jpg` through `gallery-03.jpg` for the gallery. Update the corresponding image paths in `frontend/src/data/portfolio.js` if you use other filenames. Missing slots show a local placeholder until an image is added.