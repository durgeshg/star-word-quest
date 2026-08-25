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
    words-data.js    Hangman word content — single source of truth for the game + review page
    riddles-data.js  Riddle content — single source of truth for the game + review page
review/
  word-list.html     Parent/teacher page to audit all word & riddle content
```

Each game is a single self-contained HTML file — no build step, no dependencies beyond a browser.

## Adding more content (or refreshing a stale list)

Word and riddle content each live in one file under `assets/data/`. The game and the review
page both load that file via a `<script src="...">` tag, so editing it in one place updates
both at the same time — nothing else to touch.

- **Hangman words** → `assets/data/words-data.js`. Append `{w, clue, cat}` objects to the
  tier (`T1`–`T7`) you want to grow.
- **Riddles** → `assets/data/riddles-data.js`. Append `{q, options, answer, cat}` objects to
  the tier (`R1`–`R7`) you want to grow.

Each tier currently holds 10 entries. A round pulls without repeats until the tier is
exhausted, then reshuffles — more entries per tier means longer before repeats show up.

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
