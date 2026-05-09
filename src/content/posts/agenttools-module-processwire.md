---
title: "AgentTools – AI Coding Agents Meet ProcessWire"
category: "New Module"
excerpt: "AgentTools enables AI coding agents like Claude Code to access ProcessWire's API via CLI, providing an Engineer interface, database migrations, and a Page Engineer fieldtype for in-page AI content editing."
date: 2026-04-03
authors:
  - ryan
tags:
  - modules
  - api
  - ai
---

AgentTools is a ProcessWire module by Ryan Cramer that enables AI coding agents such as Claude Code to have full access to the ProcessWire API via a command-line interface. Once connected to your site, you can ask an AI agent to create and modify pages, templates, and fields, or do anything the ProcessWire API supports.

Notably, Claude collaborated on the development of the AgentTools module itself, and the accompanying ProcessAgentTools admin module was developed entirely by Claude Code.

## Command Line Tools for AI Agents

The module provides three distinct ways for AI agents to access the ProcessWire API from the command line. Agents can also use the CLI to create migrations, generate JSON sitemaps that provide an overview of the entire ProcessWire installation, and install AI agent skills. AI agents connected through the CLI can do anything that the ProcessWire API can do.

## ProcessAgentTools Admin Module

Packaged alongside AgentTools is the **ProcessAgentTools** module, which provides an admin application under **Setup > Agent Tools** with the following features:

### Engineer

A natural language AI interface to your site. Ask questions, request changes, or have it create migrations, all from your browser. The Engineer has four tools available:

- **`eval_php`** – Query live site data
- **`save_migration`** – Create a migration for review
- **`site_info`** – Fetch the site's page tree or fields/templates schema on demand
- **`api_docs`** – Discover and retrieve ProcessWire API documentation on demand

The Engineer supports conversation memory so it can refer back to earlier exchanges in the same session. Multiple AI providers and models can be configured and switched between from a Control room in the Engineer form.

The Engineer is also available from the command line via `--at-engineer "REQUEST"` and `--at-engineer-migrate "REQUEST"`, allowing AI agents to spawn it as a ProcessWire-specialist sub-agent.

### Migrations

Create, apply, list, view, and delete migrations that were created by the Engineer or by your AI agent using the command line tools. Migrations can be exported and imported between sites with encryption tied to your site's unique config salt values.

## Page Engineer Fieldtype

The **Page Engineer** is an AI content assistant that lives directly inside the ProcessWire page editor. It is provided as a fieldtype (`FieldtypePageEngineer`) that you can add to any template, giving editors a natural-language interface for editing page content without leaving the page editor.

Editors submit requests like *"Rewrite the intro paragraph in a friendlier tone"* or *"Translate the title and body to French"* and the agent updates the appropriate page fields directly. Each exchange is recorded in a conversation history shown in the field, and editors can undo the most recent AI edit or reset the full conversation at any time.

If the PagesVersions module is installed, the Page Engineer automatically creates a backup of the page before applying any changes.

### Setup

1. Go to **Setup > Fields > Add New** and choose the **Page Engineer** fieldtype.
2. Configure the agent scope (current page, page and children, or children only), add custom instructions, and optionally restrict which fields the agent can edit.
3. Add the field to any template where you want AI content assistance available.

## Resources

- [AgentTools on GitHub](https://github.com/ryancramerdesign/AgentTools)
- [Forum announcement: PW 3.0.261 – Core updates + AgentTools updates](https://processwire.com/talk/topic/31860-pw-30261-%E2%80%93-core-updates-agenttools-updates/)
