# Chase Quantum Lab

Website for the Chase Quantum Lab at the University of Illinois Chicago. It is plain HTML, CSS and a little JavaScript, so there is no build step and no framework to install.

Live site: https://hessamshahbazi.github.io/quantumlab.github.io/

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| People | `people.html`, and one profile page for everyone at `person.html?p=<slug>` |
| Research | `research.html`, plus one page per research area: `research-<slug>.html` |
| Publications | `publications.html` |
| Contact Us | `contact.html` |

## Editing content

Page titles and intro text live in the HTML files. Everything that is a list lives in `assets/data/`, and the pages fill themselves in from there:

| To change | Edit |
| --- | --- |
| Lab name, contact details, recent news, visit photos, partners | `assets/data/lab.js` |
| People (each person gets a profile page automatically) | `assets/data/people.js` |
| Research areas and the projects inside them | `assets/data/research.js` |
| Publications (grouped by year automatically) | `assets/data/publications.js` |

The project descriptions in `research.js` are stand-in copy to be replaced with the lab's own wording.

**Visit photos.** Put image files in `assets/img/visits/` and list them in `LAB.photos` in `lab.js`. The "Photos from our visits" section on the home page stays hidden until the list has entries.

**Funding.** `LAB.funding` in `lab.js` holds the IBM funding line. It is not shown on any page right now; add `data-render="funding"` to an element to show it.

To add a research area, add it to `research.js`, then copy an existing `research-<slug>.html`, rename it to match the new slug and update `data-area`, `data-current`, the title and the first heading.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly also works.

## Look and feel

- Colors and type are tokens at the top of `assets/css/styles.css`. Change `--accent` to re-theme the whole site.
- Background art uses only blue, red, white and black (plus tints and greys). Keep new images within that palette.
- The home page hero is `assets/img/hero.svg`. Banner art is a set of small SVGs in `assets/img/motif-*.svg`; a research area picks its art with `motif` in `research.js`.
- Fonts are IBM Plex Sans (SIL Open Font License), self-hosted in `assets/fonts/plex/`.

## Deployment

A push to `main` is published by `.github/workflows/static.yml` (GitHub Pages).
