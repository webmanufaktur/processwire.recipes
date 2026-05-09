---
title: "Start - Personal Quick-Access Dashboard with Visual Link Editor"
category: "New Module"
excerpt: "Start replaces the default ProcessWire admin home screen with a configurable personal dashboard where you pin modules, pages, and tools -- think of it as the Windows Start button for your PW admin."
date: 2026-04-21
authors:
  - maximus
tags:
  - modules
  - admin
  - dashboard
---

As your ProcessWire install grows, the Setup menu gets long -- on smaller screens it overflows and you end up scrolling just to reach the tools you use every day. **Start** by maximus is the fix: think of it as the Windows Start button for your PW admin. Pin exactly what you need -- modules, pages, whatever -- and get to it in one click from the home screen.

## What It Does

Start replaces the default ProcessWire admin home screen with a fully configurable personal dashboard. Instead of digging through nested menus, you arrange your most-used links in groups and access them instantly.

## Features

- **Two view modes** -- list and icon grid, preference saved per-browser
- **Visual drag-and-drop editor** at `/setup/start/edit/` -- reorder groups and links without page reloads
- **Font Awesome 6 icons** -- 1,887 icons with a searchable popup picker
- **PagePicker** -- browse the full page tree directly from the URL field
- **Example button** -- auto-populates with your installed Process modules and their FA icons
- **Widget on the default admin home page**
- **Access control** via `start-dashboard` permission
- **Fully translated editor UI** -- 20 languages including RTL support for Hebrew and Arabic

## Supported Languages

English, Russian, German, French, Spanish, Polish, Ukrainian, Italian, Dutch, Portuguese, Chinese, Japanese, Turkish, Czech, Finnish, Korean, Hindi, Hebrew, Arabic, Hungarian.

## Installation

Install like any other module -- upload or place in `/site/modules/`, then install via **Modules > Refresh**. A Start item will appear under Setup in the admin menu.

### Make Start Your Admin Home Screen (Optional)

By default Start lives under Setup. To make it open whenever you click the admin logo or navigate to `/admin/`:

1. Go to **Pages** in the admin menu
2. Find the **Admin** page and click Edit
3. In the **Process** field, select **Start** from the dropdown
4. Save

## Relation to Dashboard Module

When asked about the existing [Dashboard module](https://daun.github.io/processwire-dashboard/) by daun, maximus shared that he has used it on almost every project. But as projects grew, customizing Dashboard meant writing PHP for each install, and widget lists got unwieldy. Start (and its companion module Collections) came out of that frustration -- the goal was a fully visual, no-code editor where you just drag, drop, and pick icons without touching any config files.

## Links

- [GitHub: mxmsmnv/Start](https://github.com/mxmsmnv/Start)
- [Forum thread](https://processwire.com/talk/topic/31828-start-personal-quick-access-dashboard-with-visual-link-editor/)
