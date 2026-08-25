# Star Word Quest

Fun, safe, ad-free learning games for school kids — word, vocabulary, and math games that run entirely in the browser. Built to work well on school Chromebooks: no installs, no accounts, no ads, no tracking.

## Structure

```
index.html          Games hub / landing page
games/
  hangman.html       Hangman: Rocket Launch (3 levels, hint points)
  riddles.html       Riddles (3 levels, multiple choice)
assets/
  data/
    riddles-data.js  Riddle content — single source of truth for the game + review page
review/
  word-list.html     Parent/teacher page to audit all word & riddle content
```

Each game is a single self-contained HTML file — no build step, no dependencies beyond a browser.

## Adding more riddles (or refreshing a stale list)

Riddle content lives in one place: `assets/data/riddles-data.js`. Both `games/riddles.html`
and `review/word-list.html` load it via a `<script src="...">` tag, so editing that one file
updates the game and the review page at the same time — nothing else to touch.

To add more: open `assets/data/riddles-data.js` and append objects to the tier (`R1`–`R7`) you
want to grow, following the existing `{q, options, answer, cat}` shape. Tiers currently hold
10 riddles each; a 5-question round pulls without repeats until the tier is exhausted, then
reshuffles. More riddles per tier means longer before repeats show up.

The same pattern can be used for Hangman's word list if it starts feeling repetitive too —
just ask, and it can be pulled into its own `assets/data/words-data.js` the same way.

## Adding a new game

1. Create a new file under `games/`, e.g. `games/vocab-match.html`.
2. Add a card for it in `index.html` (copy an existing `.card` block and update the link, icon, title, and description).
3. Commit and push — GitHub Pages updates automatically.

## Hosting on GitHub Pages

1. Push this folder to a public GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then save.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Local preview

No server needed — just open `index.html` directly in a browser, or run:

```
python3 -m http.server 8000
```

and visit `http://localhost:8000`.
