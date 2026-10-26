# Psotek English (website version)

This folder is Psotek English (formerly English Engine), the practice site for Dasz's English students. It is published at **https://psotnyjez.com** by Cloudflare, and every push to `main` goes live there automatically. The old GitHub Pages address still works while students move their progress.

## What's in the folder

| File | What it is |
| --- | --- |
| `src/psotek.html` | **The source**: the whole app in one file. Edit this, then run the build (below). Not published. |
| `index.html`, `app.js`, `extra.js` | The built app that people download. `app.js` is what the first screen needs; `extra.js` (Tenses, Grammar, Use it, Exam, Sounds, Game, Badges, Previous vocabulary) loads just after it. Don't edit these by hand. |
| `build.js`, `package.json` | The build: `npm install` once, then `node build.js src/psotek.html . --site`. Not published. |
| `vocab.json` | This month's words: 30 formal and 30 informal at each level from A1 to C2, 4 new ones every 48 hours, with Polish and Romanian help. |
| `vocab-archive/` | Previous months' word sets, shown under "Previous vocabulary". |
| `video.json`, `reading.json` | This week's six videos (one per level) and the reading. |
| `word-grove.html` | Word Grove: Word Hunt, Tile Rush and Crossplay. |
| `favicon.*`, `icon-*.png`, `apple-touch-icon.png`, `site.webmanifest` | The Psotek icon in browser tabs and on phone home screens. |
| `_headers` | Lets browsers keep `app.js` and `extra.js` for a year (their links change with every build). |
| `.nojekyll` | Tells GitHub Pages to publish the files exactly as they are. |
| `wrangler.jsonc` | Cloudflare settings: the site name (`psotek`) and which folder to publish. |
| `.assetsignore` | Files Cloudflare should not publish (the source, the build and settings files, this README). |

The weekly video task and the monthly vocabulary task only change the `.json` files, so they never need the build.

Word lists: SCOWL, copyright 2000–2016 Kevin Atkinson, used with permission to copy, modify and distribute.
