---
title: "ProcessLegalDocs – AI-Powered Legal Document Generator"
category: "New Module"
excerpt: "ProcessLegalDocs generates privacy policies, terms of use, cookie policies, and more directly from the ProcessWire admin. Supports 93 jurisdictions, 44 languages, and integrates with the Context AI module."
date: 2026-05-09
authors:
  - maximus
tags:
  - modules
  - ai
  - security
  - legal
---

ProcessLegalDocs is a new ProcessWire module by community member maximus that generates legal documents directly from the ProcessWire admin. It is the first module built on top of the new **Context** module, which acts as an AI and site-analysis base layer.

## Supported Document Types

- Privacy Policy
- Terms of Use
- Cookie Policy
- Data Processing Agreement
- CCPA Notice
- Refund Policy
- Disclaimer

## Jurisdiction and Language Support

ProcessLegalDocs currently supports **93 jurisdictions** and **44 languages**, with jurisdiction-aware language selection and document requirements. It covers many privacy and data protection regimes including:

- GDPR
- UK GDPR
- CCPA/CPRA
- COPPA
- PIPEDA
- LGPD
- APPI
- PIPL
- DPDP
- PDPA variants
- Numerous US state privacy laws

## Context Module Integration

ProcessLegalDocs is built on top of the new [Context module](https://github.com/mxmsmnv/Context), which provides the AI and site-analysis base layer. When Context is installed and configured, ProcessLegalDocs uses it to understand your site structure, installed modules, fields, pages, and configured AI gateway, generating more relevant and tailored legal documents.

The module can still work without Context, but in that case it falls back to more generic templates. For best results, Context should be installed and configured with an AI provider.

## Features

- Generates Markdown legal documents with YAML frontmatter
- Stores files in `/site/assets/legal/`
- Includes a dashboard with preview, download, validation, regenerate, delete, and ZIP export actions
- Settings for owner/company data, DPO, business audience, data categories, processors, analytics, payments, email and marketing tools, cookies, refunds, subscriptions, and review status
- Optional ProcessWire page publishing
- Uses ProcessWire admin UI conventions (AdminThemeUikit)

## Requirements

- ProcessWire >= 3.0.255
- PHP >= 8.3
- Context module (optional, but recommended for AI generation)

## Installation

1. Clone into `/site/modules/ProcessLegalDocs/`
2. Refresh modules in the ProcessWire admin
3. Install ProcessLegalDocs
4. Open **Setup > Legal Docs**

This is an early release, so feedback, testing, issue reports, and ideas are very welcome.

## Resources

- [ProcessLegalDocs on GitHub](https://github.com/mxmsmnv/ProcessLegalDocs)
- [Context module on GitHub](https://github.com/mxmsmnv/Context)
- [Forum topic: ProcessLegalDocs](https://processwire.com/talk/topic/31861-processlegaldocs-ai-powered-legal-document-generator/)
