# Claude Code Working Instructions

Read `PROJECT_SPEC.md`, `DESIGN_SYSTEM.md`, and `TASKS.md` before starting a task.

## Working mode

- Work in small, reviewable steps. Explain the plan before broad changes.
- Treat the user as the decision-maker. Ask before resolving significant product or architecture questions not covered by approved docs.
- Keep UI-first and preserve clear separation of concerns.
- Do not invent Matrix of Destiny calculations, Tarot meanings, source claims, or knowledge-base facts.
- Do not delete, overwrite, or mass-transform existing data without first describing the proposed changes and receiving approval.
- Do not add secrets, credentials, API keys, or private customer data to the repository.
- Do not deploy or perform destructive operations without explicit approval.
- Avoid unnecessary dependencies. Explain why a new dependency is needed.

## Engineering expectations

- Use TypeScript; avoid `any` unless justified and documented.
- Prefer small components with clear responsibilities.
- Keep UI components separate from domain rules and data access.
- Plan localization from the beginning; do not hardcode user-facing copy throughout components.
- Handle loading, empty, and error states where relevant.
- Follow accessible semantic HTML, keyboard navigation, and responsive design basics.
- Keep naming consistent and code straightforward to maintain.

## Verification

After meaningful changes, run available lint, type-check, tests, and production build commands as appropriate. Report exactly what ran and whether it passed. Never claim verification that did not happen.

## Git workflow

- Inspect repository state before changing files.
- Make focused changes and review the diff.
- Use clear, conventional commit messages when asked to commit.
- Do not rewrite shared history.
- If requirements are ambiguous, stop and ask one concise question rather than guessing.

## First task

Inspect the repository and current documentation. Propose the initial app foundation and the first UI milestone. Do not implement calculations or modify knowledge-base data until the relevant rules and source data have been reviewed and approved.
