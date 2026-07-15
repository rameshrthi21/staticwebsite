# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page static marketing site for "Sunil P", a digital product studio. Plain HTML/CSS/JS with no build step, no package manager, and no dependencies.

## Structure

- `index.html` — the entire page. All sections (header/nav, hero, services, about, contact, footer) live here as one document.
- `css/styles.css` — all styling, including responsive breakpoints. Uses CSS custom properties defined in `:root` (`--color-*`, `--radius`, `--max-width`, `--shadow-*`, `--transition`) for theming; reuse these instead of hardcoding values.
- `js/main.js` — vanilla JS, no framework. Handles the footer year, mobile nav toggle, and contact form submit (currently a no-op demo that just shows a status message — not wired to a backend).

## Development

There is no build, bundle, lint, or test tooling in this repo — just open `index.html` in a browser, or serve the directory with any static file server (e.g. `python3 -m http.server`) to test relative paths. Changes are visible on refresh.

## Conventions

- Sections in `index.html` are identified by id (`#top`, `#services`, `#about`, `#contact`) and linked from both the header nav and footer — keep these in sync when adding/renaming sections.
- CSS is organized into comment-delimited blocks per component (`/* ---------- Section ---------- */`) in the same order as sections appear in the HTML; add new component styles as a new block in that position.
- Responsive overrides live at the bottom of `styles.css` in two breakpoints (`900px`, `720px`) rather than inline per-component — add new responsive rules there, not next to the base rule.
- The mobile nav toggle relies on the `.open` class on both `.nav` and `.nav-toggle`, toggled together in `main.js`.
