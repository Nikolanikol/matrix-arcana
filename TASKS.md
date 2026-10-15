# Project Roadmap

## Phase 0 — Project alignment

- [ ] Confirm supported languages and default locale.
- [ ] Locate and review `matrix_arcana_knowledge_base.json` or confirm that it will be provided later.
- [ ] Confirm visual references and approve the initial design direction.
- [ ] Confirm MVP boundaries and the first user journey.

## Phase 1 — Foundation

- [ ] Initialize Next.js App Router + TypeScript + Tailwind.
- [ ] Configure linting and type checking.
- [ ] Establish a clear folder structure for app routes, shared UI, domain modules, data access, and localization.
- [ ] Add centralized design tokens and global styles.
- [ ] Build a responsive application shell.
- [ ] Verify lint, type checks, and production build.

## Phase 2 — UI prototype

- [ ] Implement the agreed landing page.
- [ ] Implement the first core Matrix of Destiny user flow using mock data only.
- [ ] Add loading, empty, and error states.
- [ ] Review mobile, tablet, and desktop layouts.
- [ ] Collect approval before expanding scope.

## Phase 3 — Localization

- [ ] Choose locale strategy and supported languages.
- [ ] Create translation resource structure.
- [ ] Ensure user-facing strings are not scattered through components.
- [ ] Verify navigation and layout for longer translations.

## Phase 4 — Knowledge-base audit

- [ ] Preserve the original JSON as an unchanged source snapshot.
- [ ] Inventory the structure and record counts.
- [ ] Identify duplicate entries, conflicting statements, missing fields, and unclear provenance.
- [ ] Produce an audit report with examples and proposed resolutions.
- [ ] Design and approve a normalized schema.
- [ ] Transform data only after explicit approval; retain traceability to source entries.

## Phase 5 — Domain implementation

- [ ] Document and approve Matrix of Destiny calculation rules.
- [ ] Document and approve Tarot system, deck, and interpretation rules.
- [ ] Define typed domain models and validation.
- [ ] Add deterministic tests based on approved examples.
- [ ] Connect domain modules to UI through clear interfaces.

## Phase 6 — MVP hardening

- [ ] Accessibility and responsive review.
- [ ] Error and edge-case handling.
- [ ] Run lint, type checking, tests, and production build.
- [ ] Document known limitations and release checklist.

## Current status

Repository created; initial project documents are being established. No application code or domain logic should be assumed to exist yet.
