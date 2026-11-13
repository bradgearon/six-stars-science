# ChristEye Research Workspace v2 — deployable static website

## Deploy
Upload **the contents of this folder** to a static web host. `index.html` is the root entry point. No server, build step, external JavaScript library, external font or API is required.

Pages: overview, architecture, theory, complete equations, training, implementation, Six Stars, references, research notebook.

New public assets: six schematic SVGs from the supplied launch package. The full private launch ZIP, unreleased patents, DOCX originals and other internal source archives are deliberately **not** included in the public site. Preserve them separately.

## Use the workspace
Open `notebook.html` from the same hosted origin. Checklists, trial states, runs, notes and external file references save to browser `localStorage`; uploaded files <=15 MiB each save to `IndexedDB`. Data **do not** sync between users, computers or browsers. Use **Export workspace JSON** frequently. JSON backups contain attachment bytes as base64 and may contain sensitive research data; handle carefully.

For local testing, serve the folder: `python -m http.server 8765`, then open `http://localhost:8765`. Opening with `file://` may restrict browser storage and file backup capabilities. HTTPS is recommended for deployed sites.

## API integration later
`assets/service-adapter.js` is a disabled, explicit stub. `API_INTEGRATION.md` specifies server contracts and restrictions. A future backend must handle authentication, authorization, revision conflicts, file validation/scan, consistent time, durable storage and an auditable source of truth. Do not embed secrets into the static website.

## Scientific status
This remains a nonclinical research design. No reported success by the ChristEye biological device is implied. Engineering drawings require peer review, supplier confirmation and bench testing. Live tissue work requires qualified laboratory review, approved procedures and validated physical limits. This static website cannot enforce live device safety.

## Data sources and provenance
- ChristEye Physical Learning Device Design v0.4 (uploaded DOCX)
- ChristEye Network Training and Growth Equation Supplement v1.1 (uploaded DOCX; exact 30 numbered families)
- ChristEye Living Computer Theory Set (uploaded Markdown; 68 LaTeX blocks)
- ChristEye Project Launch Package v1.0 (uploaded ZIP; 18 structured trial definitions, schematic sheets and budget assumptions)
- Six Stars v9 Full Scorecard (uploaded PNG, reproduced as local optimized WebP)
- ChristEye Equations with Explanations and Science v1.5

## Test data hygiene
All checkboxes and status fields initialize empty/unrun. Sample IDs in form hints are examples only. No dummy measurements are prepopulated. Everything you record should identify measured vs estimated data and preserve uncertainty and failed attempts.
