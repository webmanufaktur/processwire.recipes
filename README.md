# ProcessWire Recipes

[![Site](https://img.shields.io/badge/site-processwire.recipes-blue)](https://processwire.recipes)

A collection of **ProcessWire API snippets and recipes** to solve common tasks, provide full solutions, and some little helpers that make working with the API easier. Covers topics like fields, images, hooks, modules, multilingual setups, caching, APIs and more — contributed by the ProcessWire community.

The project revives a long-standing ProcessWire foundation that has helped developers for years, now rebuilt for the modern era.

## Features

- **Recipes** — searchable, taggable ProcessWire code snippets with full solutions and helpers
- **Skills / guides** — structured learning resources for general, git, markdown, PHP and ProcessWire workflows
- **Blog / posts** — project updates and ProcessWire ecosystem news
- RSS ([recipes.xml](https://processwire.recipes/recipes.xml)) and sitemap feeds
- Client-side search with Alpine.js
- View Transitions throughout

## Tech Stack

- [Astro 7](https://astro.build) — content collections with markdown/mdx
- [Tailwind CSS v4](https://tailwindcss.com) — custom theme with `pwblue` / `pwpink`
- [Alpine.js](https://alpinejs.dev) — interactivity & live search
- [Zod](https://zod.dev) — content schema validation
- TypeScript (strict)

## Commands

```bash
npm run dev           # Start Astro dev server
npm run start         # Alias for astro dev
npm run check         # Run astro check (TypeScript validation)
npm run build         # Run astro check + astro build
npm run preview       # Clean, build, and preview
npm run checkpreview  # Full check + build + preview
```

## Content

Content lives in `src/content/` content collections:

```
src/content/
├── recipes/   # ProcessWire API snippets & recipes
├── pages/     # Static pages (about, changelog, community, …)
├── posts/     # Blog / project updates
└── skills/    # Structured guides (general, git, markdown, php, processwire)
```

Frontmatter is validated via Zod in `src/content.config.ts`. Draft files are prefixed with an underscore.

Astro v7 renders Markdown with the native Sätteri processor. This project keeps remark/rehype plugins (`remark-breaks`, `rehype-external-links`, `rehype-accessible-emojis`) by running the unified() pipeline from `@astrojs/markdown-remark`, configured in `astro.config.mjs` under `markdown.processor`.

## Contributing

Recipes and content are community-contributed. See [Community](https://processwire.recipes/community/) and [Submit a recipe](https://processwire.recipes/submit-recipe/) for details. Please follow the [Code of Conduct](https://processwire.recipes/code-of-conduct/).

## Changelog

See the [full changelog](https://processwire.recipes/changelog/) on the live site.

## License

See repository for license details.
