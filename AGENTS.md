# AGENTS.md - Developer Guidelines for processwire.recipes-astro

## Project Overview

This is an Astro 5.x static site for ProcessWire recipes. It uses content collections with markdown/mdx files, Tailwind CSS v4 for styling, and Alpine.js for interactivity.

## Commands

```bash
# Development
npm run dev           # Start Astro dev server
npm run start         # Alias for astro dev

# Build & Preview
npm run build         # Run astro check + astro build
npm run preview       # Clean, build, and preview
npm run checkpreview  # Full check + build + preview

# Type Checking
npm run check        # Run astro check (TypeScript validation)
npm run astro        # Run astro CLI directly
```

**No test framework is currently configured** - the project relies on `astro check` for type validation.

## Code Style Guidelines

### General Conventions

- **Language**: TypeScript with strict mode enabled (`astro/tsconfigs/strict`)
- **Module system**: ESM (type: "module" in package.json)
- **Quotes**: Use double quotes for all strings (see code examples)
- **Trailing commas**: Allowed for readability

### TypeScript

- All strict TypeScript rules enabled via `astro/tsconfigs/strict`
- Use Zod schemas for content collection validation (see `src/content.config.ts`)
- Define explicit interfaces for Astro component props:

```astro
---
interface Props {
  slug: string;
  title: string;
  date: Date;
  authors: string[];
  tags: string[];
}
const { slug, title, date, authors, tags } = Astro.props;
---
```

### Astro Components

- Frontmatter uses `---` fences at top and bottom
- Imports use relative paths: `import FormattedDate from "./FormattedDate.astro";`
- Props destructured at top of component
- Use `transition:name` for View Transitions support
- Always use self-closing tags for components without children

### Tailwind CSS v4

- Tailwind v4 uses CSS-first configuration with `@theme` directive
- Custom utilities defined in `tailwind.config.mjs`
- Custom colors: `pwblue` (#2480E6), `pwpink` (#e83561)
- Use `md:` and other responsive prefixes consistently
- Prefer Tailwind classes over custom CSS

### Content Collections

- Collections defined in `src/content.config.ts`
- Use Zod for schema validation
- Loaders: `glob()` for local files, `feedLoader()` for RSS
- Frontmatter files in `src/content/{recipes,pages,skills}/`
- Prefix draft files with underscore: `_draft.md`

### File Organization

```
src/
├── components/     # Astro components
├── content/        # Content collections (recipes, pages, skills)
├── layouts/        # Base layouts
├── pages/          # Route pages (including [id].astro dynamic routes)
└── utils/          # Utility functions (utils.ts)
```

### Imports & Path Aliases

Configured in `tsconfig.json`:
```json
"@assets/*": ["src/assets/*"],
"@components/*": ["src/components/*"],
"@layouts/*": ["src/layouts/*"],
"@utils/*": ["src/utils/*"]
```

### Markdown/MDX

- Use `remark-breaks` for line breaks in markdown
- External links get `rel="external noopener noreferrer"` automatically
- Use MDX for components inside markdown

### Error Handling

- Let TypeScript catch type errors at compile time
- Use Zod for runtime validation of content frontmatter
- Use Astro's built-in error pages (`src/pages/404.astro`)

### Git Conventions

- No specific commit message format enforced
- Pre-commit hooks not configured

### Key Dependencies

- **Astro** 5.x - Static site framework
- **Tailwind CSS** 4.x - CSS framework
- **Alpine.js** - Lightweight JS interactivity
- **Zod** - Schema validation
- **TypeScript** - Type safety
