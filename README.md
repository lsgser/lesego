# Lesego Seritili — Portfolio

Personal portfolio site built with Vue 3, TypeScript, and Vite.

**Live site:** [https://lsgser.github.io/lesego/](https://lsgser.github.io/lesego/)

**Code documentation:** [docs/CODEBASE.md](docs/CODEBASE.md) (architecture, file-by-file guide, composables, and how to extend the project).

---

## Local development

```sh
yarn
yarn dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Build and preview the production bundle locally:

```sh
yarn build
yarn preview
```

For local preview to match GitHub Pages paths, Vite is configured with `base: '/lesego/'`. Use:

```sh
yarn preview --base /lesego/
```

---

## Deploy to GitHub Pages (`github.io`)

This project is set up for a **project site**:

| Item | Value |
|------|--------|
| GitHub repo | `lsgser/lesego` (or your fork) |
| Public URL | `https://<username>.github.io/lesego/` |
| Vite `base` | `/lesego/` (see `vite.config.ts`) |
| Build output | `dist/` |

The `base` path **must match the repository name**. If you rename the repo, update `base` in `vite.config.ts` and `homepage` in `package.json`, then redeploy.

### One-time setup

1. **Create the GitHub repository** (if it does not exist yet), e.g. `lesego` under [github.com/lsgser](https://github.com/lsgser).

2. **Install the deploy tool** (publishes `dist` to the `gh-pages` branch):

   ```sh
   yarn add -D gh-pages
   ```

3. **Push your code** to the default branch (`main` or `master`):

   ```sh
   git remote add origin git@github.com:lsgser/lesego.git
   git push -u origin main
   ```

4. **Enable GitHub Pages** on the repo:
   - GitHub → **Settings** → **Pages**
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` → `/ (root)` → **Save**

   After the first deploy (next section), the site will be available at  
   `https://lsgser.github.io/lesego/`.

### Deploy (every update)

From the project root:

```sh
yarn deploy
```

This runs:

1. `yarn build` (type-check + Vite production build into `dist/`)
2. `gh-pages -d dist` (pushes `dist` to the `gh-pages` branch)

Wait one or two minutes, then hard-refresh the live URL (`Cmd+Shift+R` / `Ctrl+Shift+R`).

### Manual deploy (without `gh-pages`)

If you prefer not to use the CLI:

```sh
yarn build
cd dist
git init
git add -A
git commit -m "Deploy"
git push -f git@github.com:lsgser/lesego.git main:gh-pages
```

Use your actual remote URL and ensure GitHub Pages still points at the `gh-pages` branch.

---

## Troubleshooting

**Blank page or 404 on refresh**

- Confirm `base: '/lesego/'` in `vite.config.ts` matches the repo name.
- Confirm you open `https://lsgser.github.io/lesego/` (with trailing path), not only `github.io`.

**Assets (CSS/JS) 404**

- Usually a wrong `base`. Rebuild after fixing `vite.config.ts`, then redeploy.

**`gh-pages: command not found`**

- Run `yarn add -D gh-pages` and try `yarn deploy` again.

**Old version still showing**

- Hard refresh or clear cache. Check the **Actions** or **Pages** tab on GitHub that the latest `gh-pages` deploy finished.

**User site instead of project site**

- A repo named `<username>.github.io` is served at `https://<username>.github.io/` (no subpath). For that setup, set `base: '/'` in `vite.config.ts`, update `homepage` in `package.json`, and point Pages at `gh-pages` or `main` `/docs` as you prefer.

---

## Project scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Dev server with hot reload |
| `yarn build` | Type-check + production build |
| `yarn preview` | Preview production build locally |
| `yarn deploy` | Build and publish to GitHub Pages |

---

## Customize content

Edit **`src/data/portfolio.ts`** for bio, projects, skills, experience, and links. No code changes are required for most content updates.
