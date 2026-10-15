# Matrix Arcana — Project Specification

## 1. Product vision

A multilingual web application combining the Matrix of Destiny and Tarot, with a premium mystical visual identity.

The MVP starts with the user interface and a maintainable foundation. Calculation logic, Tarot workflows, and the knowledge base are added only after their rules and sources are reviewed.

## 2. Product principles

- UI-first development.
- Premium, restrained mystical design; elegant typography, intentional spacing, subtle ornament.
- Responsive and accessible layouts.
- Clear separation between presentation, domain logic, data access, and localization.
- No invented spiritual, numerological, or Tarot rules presented as established product logic.
- No silent changes to approved requirements or knowledge-base content.

## 3. Initial technical direction

- Next.js App Router
- TypeScript with strict type checking
- Tailwind CSS
- Reusable accessible components
- Git-based version control
- Localization architecture planned from the beginning

Exact dependency choices and folder structure must be proposed and approved before adding extra libraries.

## 4. MVP phases

1. Foundation: app setup, repository instructions, design tokens, responsive shell.
2. UI prototype: landing page and primary navigation, core user journey mockups.
3. Localization: locale routing and translation resource structure.
4. Domain design: specify Matrix of Destiny and Tarot rules and data contracts.
5. Knowledge-base audit: inspect existing JSON, identify duplicates and contradictions, document provenance, propose normalized schema.
6. Calculation and Tarot features: implement only against approved rules and test cases.
7. QA: responsive checks, accessibility basics, lint, type checks, production build, and domain tests.

## 5. Quality gates

- Run lint, type checking where configured, tests where present, and production build after meaningful changes.
- Report actual command results; never claim a check passed unless it ran successfully.
- Keep changes focused and review diffs before committing.
- Do not deploy, add secrets, or perform destructive operations without explicit approval.

## 6. Open decisions

- Supported languages and default locale.
- Final visual references, typography, and color palette.
- Exact Matrix of Destiny calculation method and authoritative sources.
- Tarot system/deck and interpretation rules.
- Whether accounts, persistence, and paid features belong in the MVP.
- Final data schema and storage provider.

Do not silently resolve these decisions. Present recommendations for approval.
