# Star Word Quest

Fun, safe, ad-free learning games for school kids — word, vocabulary, and math games that run entirely in the browser. Built to work well on school Chromebooks: no installs, no accounts, no ads, no tracking.

## Structure

```
index.html          Games hub / landing page
games/
  hangman.html       Hangman: Rocket Launch (3 levels, hint points)
assets/              Shared assets for future games (currently empty)
```

Each game is a single self-contained HTML file — no build step, no dependencies beyond a browser.

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
