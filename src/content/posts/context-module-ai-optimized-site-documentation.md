---
title: "Context Module – AI-Optimized Site Documentation with TOON Format"
category: "New Module"
excerpt: "Context exports your ProcessWire site structure as comprehensive, AI-optimized documentation in JSON and TOON formats. It reduces AI token usage by 30-60%, supports CLI commands for AI coding agents, and generates code snippets, content samples, and AI prompt templates."
date: 2026-02-16
authors:
  - maximus
tags:
  - modules
  - ai
  - developer-tools
---

Context is a ProcessWire module by community member maximus that exports your complete site structure as documentation specifically optimized for AI coding assistants like ChatGPT, Claude, Copilot, Cursor, and Windsurf.

## What It Exports

### Site Structure

Complete page hierarchy exported as JSON, TOON, and ASCII tree -- showing all relationships, templates, URLs, and metadata with smart collapsing for large page lists.

### Templates and Fields

All template definitions with complete field configurations including field types, options, requirements, default values, and special handling for Repeater, Matrix, and Table fields.

### Content Samples

Real page examples exported for each template, showing actual data formats and field usage patterns to help AI understand your content.

### Code Snippets

Customized selector patterns for your site type, helper functions, utility code, and API implementation examples.

### AI Prompts

Ready-to-use project context files, template creation prompts, debugging assistance prompts, and session continuity templates.

## TOON Format (Token-Oriented Object Notation)

The standout feature is TOON format -- designed specifically for AI prompts:

- 30-60% fewer tokens than JSON
- Significantly reduces API costs
- Same data in a more compact representation
- No external dependencies -- pure PHP

For a typical ProcessWire site with 50 templates:

| File | JSON tokens | TOON tokens | Savings |
|------|------------|-------------|---------|
| structure | 15,000 | 8,500 | 43% |
| templates | 8,000 | 4,000 | 50% |
| samples | 12,000 | 6,500 | 46% |

## CLI Support for AI Agents

The module provides command-line commands for AI coding agent integration:

```bash
# Full export
php index.php --context-export

# Export TOON format only
php index.php --context-export --toon-only

# Query specific data
php index.php --context-query templates
php index.php --context-query fields
php index.php --context-query pages "template=product, limit=10"

# Quick stats
php index.php --context-stats
```

## Site Type Customization

Code snippets automatically adapt to your site type: Blog, E-commerce, Business, Catalog, or Generic. The module also auto-detects your CSS framework (Tailwind, Bootstrap, UIkit, Vanilla CSS, or custom).

## Generated File Structure

```
/site/assets/cache/context/
├── README.md
├── SKILL.md
├── structure.json / .toon
├── structure.txt
├── templates.json / .toon
├── config.json / .toon
├── modules.json / .toon
├── samples/
├── snippets/
│   ├── selectors.php
│   ├── helpers.php
│   └── api-examples.php
└── prompts/
    ├── project-context.md
    ├── create-template.md
    ├── create-api.md
    └── debug-issue.md
```

## Active Development

Since its release in February 2026, the module has received regular updates driven by community feedback. Notable improvements include configurable export paths (useful for AI agent skill directories), manual CSS framework selection, SKILL.md auto-generation for Cline and Junie, field definition exports with metadata, and fixes for edge cases with FieldtypeQRCode and Matrix fields.

## Requirements

- ProcessWire 3.0+
- PHP 8.2+

## Resources

- [Context module on GitHub](https://github.com/mxmsmnv/Context)
- [TOON Format specification](https://toonformat.dev)
- [ProcessWire Modules Directory listing](https://processwire.com/modules/context/)
- [Forum announcement](https://processwire.com/talk/topic/31735-context-module-ai-optimized-site-documentation-with-toon-format/)
