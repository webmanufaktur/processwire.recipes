---
title: "Changelog"
seorobots: "index, follow"
excerpt: "All recent updates on this website summarized from new to old. In case you missed an announcement or release notification."
toc: true
---

## 🗓️ 2024-07-30

- Domain: processwire-recipes.com aquired

## 🗓️ 2024-07-28

- Migration to Astro JS (almost) completed
- Migration to Cloudflare Pages completed
- Added author pages
- Removed search temporarily
- Typesafe definitions for recipes

### Migration to Astro JS and Cloudflare Pages

This site has moved from 11ty to Astro JS for generating its static content. Currently, there's no need for partial dynamic <abbr title="Server-Side-Rendered">SSR</abbr> content or a database. However, to future-proof the site and allow for potential expansions, moving to Astro was the logical next step. An added bonus: it's incredibly fast!

Another important step was moving (back) to Cloudflare Page as we have everything there, we need now and in the future.

### Added author pages

Each recipe author now boasts a personalized showcase page, offering readers a curated collection of their culinary masterpieces and highlighting their unique contributions to our gastronomic community.

### Removed search temporarily

A new search will be implented soon. For now all recipes are listed as they are on the [recipe page](/recipes/). In case you look for something specific, add _processwire recipe_ to your Google search query.

### Typesafe definitions for recipes

We're excited to announce that recipes are now inherently type-safe thanks to Zod integration. The recipes collection is now defined using a strongly-typed schema, ensuring that all recipe entries conform to a consistent structure. This includes required fields like `title`, `authors`, `tags`, and `date`, as well as optional fields such as `version`, `image`, and `draft`. This enhancement improves data integrity and provides better developer experience with autocomplete and type checking support.

```typescript
const recipes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    version: z.string().optional(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
    date: z.date(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});
```

## 🗓️ 2024-05-13

- Almost a year later 😭
- Get this up and running again
- First preparations for rebuilding with [Astro JS](https://astro.build/)

## 🗓️ 2023-05-18

- **New Host**:<br>Moved to a new host: [Netlify](https://netlify.com/)
- **Added recipes**:<br>[Load Remote Assets On-Demand from another ProcessWire Instance](/recipes/load-images-assets/)

## 🗓️ 2023-05-14

- **Added recipes**:<br>[Automatically check for module updates (get notified by mail)](/recipes/automate-module-upgrade-check/)

## 🗓️ 2023-04-08

### ⚒️ Features

- **Search**<br>Added a first version (proof-of-concept) of the recipe search. [#6](https://github.com/webmanufaktur/processwire-recipes/issues/6)
- **Prev/Next Links**<br>Added previous/next links on the recipe pages to for faster navigation around recipes. [#7](https://github.com/webmanufaktur/processwire-recipes/issues/7)

### 🐛 Bugfixes

- Twitter Meta/Social Tags [#4](https://github.com/webmanufaktur/processwire-recipes/issues/4)
- Internal links, SEO tags and assets [#5](https://github.com/webmanufaktur/processwire-recipes/issues/5)

### 🍕 Misc changes

- Added: [Transparency Report](/transparency/)
- Added: [Advertisement](/advertisement/)
- Added: [Community projects](/community/)
- Updated: [About](/about/), [Changelog](/changelog/)
- Listing only **5 recent recipes** on homepage, makes it a bit faster
- Enabled _**Table of contens**_ on pages where necessary

## 🗓️ 2023-03-18

- Added:
  - `date` to all existing recipes based on old Github dates
  - [Roadmap](/roadmap/) page for upcoming changes
- Removed:
  - **Upcoming** from changelog
- Clean up:
  - `processwire-recipes/Recipes`
  - Tagged: the `processwire-recipes/Recipes` repository with `v1`
  - Branch:
    - new branch for `processwire-recipes/Recipes` repository to `legacy`
    - updated the `processwire-recipes/Recipes` repository with all updated recipes from `webmanufaktur/processwire-recipes` -- _sure, we lost a few commits here, but the future is bright!_

---

## 🗓️ 2023-03-16

- Minor _design_ tweaks and formatting
- Updated recipe formatting (see [Submit recipe](/submit-recipe/))
- Added CSS and JS cache busting via `?cache={{ config.timestamp }}`

---

## 🗓️ 2023-03-14

### ✅ Recipe updates and snippets

Merged a few recipe updates from **@gebeer** today, while he also already created the [first batch](https://github.com/webmanufaktur/processwire-recipes/pull/1) of possible **VS Code Recipe Snippets** -- for the moment totally untested. So if anyone wants to take a look at them and test them. Let us know.

### ✅ _Design_ tweaks

[As Ivan mentioned](https://processwire.com/talk/topic/7572-processwire-recipes/page/4/#comment-231355) -- for a very good reason -- in the forums already... the design had and has some flaws. Some of those were just fixed with this latest update. Yet some are still in the pipeline. But at the end we will get there and have a nice interface to browse all recipes and future content. Keep in mind that desktop will have the focus here, as most of us work on full setup. Yet... mobile for a quick research will be implemented.

In case you want to jump in... watch our [Github](https://github.com/processwire-recipes/) for the upcoming www/11ty setup repository containing all layout files.

### 🔥 Changelog

Added [Changelog](/changelog/) (this page).

### 🔥 CoC

Added [Code of Conduct](/code-of-conduct/). _(Please read!)_

---

## 🗓️ 2023-03-11

### 💯 Old/New Github Account

In the last few days [@marcus](https://processwire.com/talk/profile/912-marcus/) and I talked and he made me a member and owner of the _old_ [organization account on Github](https://github.com/processwire-recipes/) so we can still use the old/former official repository - that's **awesome**!

Yet... the old domain is long gone. I tried to contact the new owner but no chance so far. Even through buyback-services and domainer/s that's why...

### 💯 New domain

That's why I bought the [processwire.recipes](https://processwire.recipes/) domain - so I hope it was worth it. 😉

### 🗓️ Upcoming changes

I will update all recipes to the new markdown format, while keeping a copy of the legacy version in a separate branch/version. I will update all guides on how to submit and update recipes in the next few days.

See [ProcessWire community support thread](https://processwire.com/talk/topic/7572-processwire-recipes/page/3/#comment-231247) for more details and discussions. Maybe even request a feature or recipe to be added.
