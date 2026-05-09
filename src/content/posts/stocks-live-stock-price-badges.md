---
title: "Stocks – Live Stock Price Badges for ProcessWire"
category: "New Module"
excerpt: "Stocks embeds live stock price badges inline in ProcessWire content via a TextFormatter. Supports three data providers, four CSS frameworks, cashtag and auto-detection parse modes, company aliases, file-based caching, and a circuit breaker for API resilience."
date: 2026-05-06
authors:
  - maximus
tags:
  - modules
  - fieldtype
  - textformatter
---

Stocks is a ProcessWire module by community member maximus built for a financial news site that needed live stock quotes embedded inline in editorial content. Drop a ticker into any text field and it renders as a live badge with price, change, and direction -- clicking opens a full detail popup.

## Live Price Badges

Each badge displays the ticker symbol, current price, change amount and percentage, and a direction arrow. Clicking a badge opens a popup with additional details: open/high/low, 52-week range, P/E ratio, volume, and market state.

## Three Data Providers

- **Yahoo Finance** -- free, no API key required
- **Finnhub** -- real-time and websocket data
- **Alpha Vantage** -- widely used financial data API

## TextFormatter Parse Modes

The module works as a TextFormatter with three parse modes:

1. **Explicit tags** -- `[stock:AAPL]`
2. **Cashtag/hashtag** -- `$AAPL`, `#TSLA`
3. **Auto-detection** -- recognizes company names and aliases in text

## Company Manager

A built-in Company Manager lets you track companies with names, aliases, enable/disable toggles, and bulk CSV import. This powers the auto-detection parse mode and ensures only intended tickers are rendered.

## CSS Framework Support

Four CSS frameworks are supported with auto-detection or manual selection:

- Vanilla CSS (built-in)
- Tailwind CSS
- Bootstrap 5
- UIkit 3

## API Usage

```php
$stocks = $modules->get('Stocks');
echo $stocks->renderBadge('AAPL');
echo $stocks->renderBadgeAs('TSLA', 'bootstrap');
```

## Caching and Resilience

- **File-based cache** with configurable TTL and per-ticker clear from admin
- **Circuit breaker** pauses API calls after repeated failures, serving stale cache with a `~` marker to indicate the price may be delayed

## Custom Providers

A provider API allows adding any data source by extending `StocksProviderBase`, making the module adaptable to proprietary or regional data feeds.

## Requirements

- ProcessWire 3.0+
- PHP 8.2+

## Resources

- [Stocks module on GitHub](https://github.com/mxmsmnv/Stocks)
- [Forum announcement](https://processwire.com/talk/topic/31852-stocks-live-stock-price-badges/)
