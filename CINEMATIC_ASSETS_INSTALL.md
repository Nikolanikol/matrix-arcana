# Cinematic asset pack — installation and acceptance

The landing-page code on this branch references these files:

- `public/images/hero/hero-orrery-scene.avif`
- `public/images/objects/orrery-object.webp`
- `public/images/objects/purpose-compass.webp`
- `public/images/objects/talents-amethyst.webp`
- `public/images/objects/relationships-crescent.webp`
- `public/images/objects/finance-solar.webp`
- `public/images/objects/cta-planetary.webp`

They are delivered separately in `matrix_arcana_cinematic_v8_assets.zip`, preserving the exact `public/` folder structure.

## Install locally

From the root of the repository, with the ZIP downloaded to the current directory:

```bash
unzip -o matrix_arcana_cinematic_v8_assets.zip -d .
git status --short
```

Before pushing, verify that all seven paths above exist. Then run:

```bash
npm run lint
npm run typecheck
npm run build
```

Inspect the live local page at 1440×900 and 375×812, including all lower sections and reduced-motion mode. The images are not embedded into JSX and must be present under `public/` before visual acceptance.

Do not merge this branch into `main` until the asset paths resolve, the checks pass, and the visual result has been reviewed.
