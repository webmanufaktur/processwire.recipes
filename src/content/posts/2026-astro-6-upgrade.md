---
title: "Astro 6 Upgrade: Faster, Safer, and More Efficient"
date: 2026-04-25
excerpt: "processwire.recipes is now running on Astro 6 with font optimization, smarter prefetching, XSS protection, and a cleaner build pipeline. Here's what changed and why it matters for ProcessWire developers."
authors:
  - Alexander
tags:
  - news
  - update
  - astro
  - performance
---

## Astro 6 Is Here

We have upgraded [processwire.recipes](/) from Astro 5.x to **Astro 6**, and the improvements are significant. For a static site built around ProcessWire recipes, this upgrade means faster builds, better performance, and stronger security out of the box.

If you are a ProcessWire developer exploring modern frontend stacks, this is exactly the kind of incremental improvement that keeps a project healthy without rewriting everything.

## What Changed Under the Hood

### Font Optimization with npm Providers

Astro 6 introduces native font optimization through `fontProviders.npm`. We now serve the **Outfit Variable** font directly from npm rather than relying on external CDNs. This reduces DNS lookups, eliminates third-party dependencies, and keeps everything self-contained. For a performance-focused static site, this is a meaningful win.

### Smarter Prefetching

We fixed a long-standing issue where `prefetchAll: true` was prefetching external links along with internal ones. Setting it to `false` stops unnecessary external requests, reducing bandwidth and avoiding unintentional traffic to third-party sites. Internal links still benefit from Astro's prefetching where it actually helps.

### Canonical Imports and Consistent Schema Validation

Astro 6 moves schema imports from `astro:schema` to `astro/zod`, which is now the canonical path. We also standardized `z.coerce.date()` across all collections for consistent date handling. These changes future-proof the codebase and align with Astro's recommended patterns.

### TypeScript Module Declarations

We added TypeScript module declarations for `@fontsource-variable` packages. This eliminates type errors during builds and keeps the developer experience smooth, especially when working with variable fonts in a strict TypeScript environment.

### Type-Safe Dynamic Routes

Dynamic routes now use proper `GetStaticPaths` types, `prerender=true`, and `escapeHtml` for XSS protection. This is a big deal for any site handling user-adjacent content. Even on a static site, defense in depth matters.

### Cleaned-Up Tag Handling

We deduplicated topic route parameters to handle edge cases like `api` vs `API` tag collisions, and fixed RSS feed slugs to use `id` consistently. The `normalizeTag` utility now handles more edge cases gracefully, and `Button.astro` uses `class:list` for cleaner conditional classes.

### Removed Legacy Dependencies

The dead `@astrojs/tailwind` dependency is gone. We deleted the legacy `tailwind.config.mjs` and removed duplicate CSS. Since the project already uses Tailwind CSS v4 with its CSS-first configuration, this cleanup removes confusion and reduces maintenance surface.

## Build Results

The upgrade completed with **0 errors, 0 warnings, and 179 pages generated**. That is the kind of clean build output every developer wants to see.

## Why This Matters for ProcessWire Developers

ProcessWire excels at flexible content management. Pairing it with a modern static site generator like Astro gives you the best of both worlds: ProcessWire's powerful API for content, and Astro's speed and simplicity for the frontend. Upgrading to Astro 6 ensures this stack stays current, secure, and fast without adding complexity.

## What's Next

We are not stopping here. Upcoming improvements include:

- More ProcessWire recipes and workflows
- Additional AI skills for ProcessWire development
- Continued performance optimizations
- Community-driven features

## Get Involved

Have feedback or want to contribute?

- [Submit a recipe](/submit-recipe/)
- [Report an issue](https://github.com/webmanufaktur/processwire.recipes-astro/issues)
- [Join the community](/community/)

Thanks for following along. Here's to faster, safer static sites.
