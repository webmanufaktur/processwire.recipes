---
title: "Collections - Airtable-Style Data Management for ProcessWire"
category: "New Module"
excerpt: "Collections gives any ProcessWire template a configurable admin table with live search, filters, bulk actions, CSV/JSON export, and a REST API -- all set up through a UI without writing code."
date: 2026-05-02
authors:
  - maximus
tags:
  - modules
  - api
  - data-management
---

ProcessWire's page tree is brilliant for site structure, but painful for data management. When you have thousands of pages as records -- products, listings, vacancies, menu items -- you hit the same walls on every project: no table view, no inline filters, no bulk actions, no export, no REST API, no role scoping per dataset.

**Collections** by maximus solves this once and for all. It has been running in production managing a spirits catalog with 12,000+ products for several months before being publicly released.

## What It Does

Collections gives any ProcessWire template a configurable admin table -- live search, dropdown filters, inline status toggles, bulk actions, CSV/JSON export, and a REST API -- all configured through a UI, without writing code.

### Admin UI

- Configurable columns per collection with custom labels
- Live search with 300ms debounce across multiple fields including Page references
- Dropdown filters for FieldtypePage and FieldtypeOptions fields
- Inline publish/unpublish toggle via AJAX
- Bulk actions: publish, unpublish, delete with CSRF protection
- CSV and JSON export with active filters preserved
- Role-based permissions matrix -- scope each role per collection
- "View in Collection" button injected into the page edit form

### REST API

- Bearer token, query param, HTTP Basic, and PW session auth
- API key management with expiration dates and per-key capability scopes
- SHA-256 hashed keys, usage tracking, rate limiting (100 req/min)
- WireCache support for GET responses

### Field Support

ProFields support includes Table, Textareas, Multiplier, Repeater Matrix, and Combo -- including dot-notation for subfields (`address.city`, `blocks.hero.title`, `prices.*.amount`).

Supported field types: Text, Textarea, Integer, Float, Checkbox, URL, Email, Date, Image, File, FieldtypeFileB2, FieldtypePage, FieldtypeOptions, MapMarker, Color.

## Community Feedback

Since its release, the community has been actively testing and improving the module. User **iank** contributed a `canAddNew()` method that checks template `noParents` settings -- hiding the Add button for singleton templates or those that disallow new pages. User **jacmaes** reported a sort direction bug that was quickly fixed in v1.9.3. The module continues to receive active development with issues tracked on GitHub.

## Requirements

- ProcessWire 3.0.244+
- PHP 8.2+

## Links

- [GitHub: mxmsmnv/Collections](https://github.com/mxmsmnv/Collections)
- [Forum thread](https://processwire.com/talk/topic/31848-collections-%E2%80%94-airtable-style-data-management-for-processwire/)
