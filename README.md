# English Engine (website version)

This folder is the GitHub Pages copy of English Engine, the practice site for Dasz's English students.

## What's in the folder

| File | What it is |
| --- | --- |
| `index.html` | The whole English Engine app: Today, vocabulary, Tense lab, irregular verbs, video, practice, games and progress. |
| `vocab.json` | This month's words: 10 formal and 10 informal at each level from A1 to C2, with Polish and Romanian help. |
| `vocab-archive/` | Previous months' word sets, shown under "Previous vocabulary". |
| `video.json` | The video of the week and its exercises. |
| `word-grove.html` | Word Grove: Word Hunt, Tile Rush and Crossplay. |
| `vacuum-racer.html` | Vacuum Racer (3D game). |
| `.nojekyll` | Tells GitHub Pages to publish the files exactly as they are. |

## How it differs from the Claude version

- The YouTube video of the week plays inside the page.
- "Ask Claude for feedback" is hidden, because it only works on Claude.
- Student progress is saved in each browser for this site's address. Progress from the Claude version doesn't carry over.
- Progress codes work the same way: students copy their code, and you paste it into Class ranking on Claude.

## Updating

At first, the weekly video and the monthly words keep updating the Claude version. To update this site, upload the changed `video.json`, `vocab.json` or `vocab-archive/` files to the repository. A later step can make the scheduled tasks update the site for you.

Word lists: SCOWL, copyright 2000–2016 Kevin Atkinson, used with permission to copy, modify and distribute.
