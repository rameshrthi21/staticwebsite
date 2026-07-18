# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page static portfolio site for a Cloud Platform Architect (Azure enterprise landing zones / governance). Plain HTML/CSS/JS with no build step, no package manager, and no dependencies. Dark "blueprint" visual theme (Archivo + IBM Plex Sans/Mono via Google Fonts).

## Structure

- `index.html` — the entire page. All sections (nav, hero, platform schematic, design records, skills, writing, contact/footer) live here as one document.
- `css/styles.css` — all styling, including responsive breakpoints. Uses CSS custom properties defined in `:root` (`--ink`, `--panel`, `--panel-2`, `--grid`, `--line`, `--text`, `--muted`, `--amber`, `--cyan`, `--radius`) for theming; reuse these instead of hardcoding values.
- `js/main.js` — vanilla JS, no framework. Drives the interactive architecture schematic in `#platform`: clicking/keying a `.node` in the inline SVG looks up its entry in the `DETAILS` map and updates the detail panel text plus the `.active`/`.hot` highlight classes on nodes and edges.

## Development

There is no build, bundle, lint, or test tooling in this repo — just open `index.html` in a browser, or serve the directory with any static file server (e.g. `python3 -m http.server`) to test relative paths. Changes are visible on refresh.

## Conventions

- Sections in `index.html` are identified by id (`#platform`, `#cases`, `#skills`, `#writing`, `#contact`) and linked from the header nav — keep these in sync when adding/renaming sections.
- CSS is organized into comment-delimited blocks per component (`/* ---------- Section ---------- */`) in the same order as sections appear in the HTML; add new component styles as a new block in that position.
- Responsive overrides live at the bottom of `styles.css`, grouped by breakpoint (`820px`, `760px`, `640px`) rather than inline per-component — add new responsive rules to the matching breakpoint group there, not next to the base rule. There is no mobile nav toggle; nav links simply hide below `640px`.
- The architecture schematic's SVG nodes (`.node[data-k]`) and the `DETAILS` object in `main.js` must stay in sync by key — adding a node means adding a matching `DETAILS` entry (and any `.edge` ids it should highlight).
- Placeholder identity fields (`Your Name` / `YOUR-NAME`, the LinkedIn URL, the `mailto:` address) are intentionally generic — replace them with real details when personalizing the site.
