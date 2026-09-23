# Editing existing text

Where a piece of text lives depends on what it is:

## Hero text, resume, tags, "about" intro

All in one file: `_data/home.yml`. Open it, change the value after the
colon, keep the quotes if the line already has them, and commit.

```yaml
hero_title: "hi, i build things and write them down."
resume:
  - when: "2024—now"
    what: "Senior Something, Company Name"
    note: "What you actually do there, in plain words."
```

To add a new resume line, copy one `- when: ... / what: ... / note: ...`
block and edit it — indentation must match exactly (2 spaces), since YAML
uses indentation to know what belongs together.

To add or remove a tag, edit the `tags:` list — it's a single line,
comma-separated, in square brackets.

## A project's summary, status, stack, or links

Open its file in `_projects/` and edit the front matter (the part between
the `---` lines) or the writeup below it. See `docs/adding-a-project.md`
for what each field does.

## A musing's title, subtitle, or body text

Open its file in `_posts/` and edit the front matter or the Markdown body.
See `docs/adding-a-musing.md`.

## Site-wide styling (colors, fonts, spacing)

All in `assets/css/style.css`. The gradient colors are set once, near the
top, as CSS variables:

```css
--grad:linear-gradient(160deg,#fce9a8 0%,#f0c9a0 46%,#f2b6ae 100%);
```

Change the three hex colors to change the light-mode gradient; the
matching block under `prefers-color-scheme: dark` controls the dark
gradient. Everything else on the site (cards, borders, text color) is
built from these same variables, so changing them here updates the whole
site consistently.

## A note on images

This site is plain static files — there's no image upload button. To use
a photo, host it somewhere with a public URL (for example, upload it to a
folder in this same repo, like `assets/images/`, then reference it as
`{{ '/assets/images/your-photo.jpg' | relative_url }}` in a Markdown file,
or use any external image host) and use that URL in your Markdown or
front matter.
