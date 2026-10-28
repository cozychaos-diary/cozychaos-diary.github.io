# The Girl Next Door's cozy chaos

A scrapbook-style diary blog. Built with **Jekyll**, which GitHub Pages runs for free:
you upload Markdown files, GitHub turns them into the website automatically.

---

## 1. Put it online (one time, ~10 minutes, all in the browser)

1. Create a free account at **github.com** (if you don't have one).
2. Click **+ → New repository**.
   - **Repository name:** `YOUR-USERNAME.github.io` (your exact GitHub username).
     → your blog will live at `https://YOUR-USERNAME.github.io`.
     (Any other name also works, but the address becomes
     `https://YOUR-USERNAME.github.io/REPO-NAME` and you must set `baseurl` — see step 4.)
   - Set it to **Public** (free GitHub Pages needs a public repo).
   - Click **Create repository**.
3. On the new repo page click **uploading an existing file**, then drag in **everything inside
   this folder** (the folders `_layouts`, `_includes`, `_posts`, `assets` and the files
   `_config.yml`, `index.html`, `404.html`, `Gemfile`, `.gitignore`, `README.md`).
   Drag the *contents*, not the outer folder. Click **Commit changes**.
   > Hidden files: if `.gitignore` doesn't show in your file picker, skip it — the site works without it.
4. Open `_config.yml` on GitHub (click it → pencil icon) and edit two lines:
   - `url: "https://YOUR-USERNAME.github.io"`
   - `baseurl: ""` — keep it empty if the repo is `YOUR-USERNAME.github.io`;
     otherwise write `"/REPO-NAME"`.
   Commit.
5. **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**,
   Branch: **main**, folder **/ (root)** → **Save**.
6. Wait 1–2 minutes. The **Actions** tab shows the build; when it's green, open your address.

---

## 2. Write a new post (every time)

1. In the repo, open the **`_posts`** folder → **Add file → Create new file**.
2. Name it **`YYYY-MM-DD-short-title.md`** — e.g. `2026-11-02-the-cafe-on-the-corner.md`.
   The date and `.md` ending are required or the post won't appear.
3. Paste this and fill it in:

```markdown
---
title: "the cafe on the corner"
chapter: 2
date: 2026-11-02 18:00:00 +0100
photo: /assets/img/2026-11-02-cafe.jpg
photo_alt: "A warm cup of coffee on a wooden table"
note: "one sentence for the little framed box on the left."
---

Your first paragraph. This one also shows as the preview on the home page.

Leave an empty line between paragraphs.

You can use *italics*, **bold**, and [links](https://example.com).
```

4. **Commit changes.** It's live in about a minute.

**Rules that matter:**
- `photo`, `photo_alt`, `note`, `chapter` are optional — delete any line you don't want.
- Text containing a colon `:` must stay inside the quotes, as in the example.
- **Future times are hidden.** If `date` is later than the moment GitHub builds the site,
  the post won't show until the next rebuild after that time. Use a time that has already passed.
- `+0100` is Budapest winter time; use `+0200` in summer (late March – late October).

### Adding a photo
**`assets` → `img` → Add file → Upload files.** Use lowercase names without spaces
(`2026-11-02-cafe.jpg`), then point `photo:` at `/assets/img/that-name.jpg`.
Photos straight from a phone are huge; shrink them to ~1200px wide first (any free resizer)
so the page loads fast. Square-ish photos look best in the polaroid frame.

---

## 3. What's where

| Path | What it does |
|---|---|
| `_config.yml` | Title, tagline, your address. Edit to rename the blog. |
| `_posts/` | One Markdown file per diary entry. |
| `_layouts/post.html` | Arrangement of a post page (date label, polaroid, note, red panel). |
| `_layouts/default.html` | The shell around every page (fonts, header, footer). |
| `index.html` | Home page — lists all posts, newest first. |
| `_includes/` | Header, footer, doodle icons, the vine/flower header art. |
| `assets/css/style.css` | All the looks. Colours are at the top under `:root`. |
| `404.html` | "Page not found" page. |

Free extras already switched on: an RSS feed at `/feed.xml`, a sitemap for search engines,
and proper share previews.

## 4. Preview on your computer (optional)
Needs Ruby. In this folder: `bundle install` then `bundle exec jekyll serve`,
open `http://localhost:4000`. Not required — GitHub builds it for you.

## Privacy note
A public repo means anyone can see the files and their edit history, including your GitHub
username. Photos you upload are public too. If you want your email hidden from commits,
turn on **Settings → Emails → Keep my email addresses private** on your GitHub account.
