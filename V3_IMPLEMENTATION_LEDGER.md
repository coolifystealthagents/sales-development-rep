# V3 implementation ledger

Source brief: `Sites-Improvements-and-Optimization-prompt-v3.md`
Target: `salesdevelopmentrep.com`

| Clause | Implementation | Verification |
| --- | --- | --- |
| Full-site remediation | Shared shell, design tokens, route-specific heroes, six services, About, Blog, Research, Contact, legal, and conversion routes | `npm test`, static crawl, responsive captures |
| Reading and design variance | Kinetic sales signal desk: ink field, warm evidence paper, red owner controls, yellow signal path, angular ruled diagrams | Registry entry and cross-site comparison |
| Exact header navigation | Home, Services, Contact Us | Contract test and browser checks |
| Persistent subsidiary and parent identity | One subsidiary logo plus readable Powered by StealthAgents attribution in header and footer | Contract test and screenshot review |
| No timed lead popup | Removed timed modal from the root layout; no replacement overlay | Source search and contract test |
| Horizontal review rail | Ten unique first-party records, source link, automatic movement, hover/focus pause, static reduced-motion fallback, no visible controls | Review provenance JSON and contract test |
| Contact first fold | Intro, full lead form, client-review rail; responsive reflow on narrow screens | 1440, 768, and 390 pixel captures |
| Official team section | Approved parent logo and official Bacolod team photograph after the first fold | Asset provenance and browser inspection |
| Six long-form services | Audience, problem, inputs, tasks, workflow, deliverables, boundaries, controls, scenarios, FAQ, related services, CTA, and unique workflow visual | Service contract test and route crawl |
| Article utility | Topic image, complete heading-derived TOC, populated sticky companion, active section tracking, source context, mobile in-flow fallback | Contract test and browser checks |
| Conversion protection | Same field names, first-party `/api/submit-lead`, server acceptance ID, tracker lead event, `/thank-you` redirect | Contract test and code inspection |
| Funnel separation | Scheduler only on `/thank-you`; direct access does not claim acceptance or booking; both completion routes are noindex | Contract test and route crawl |
| ACR tracking | Site ID `sales-development-rep`, centrally hosted tracker, first-party `/ingest/track`, strict origin and batch validation | Contract test and endpoint checks |
| Canonical host | Apex canonical metadata and permanent `www` redirect in `proxy.ts` | Unit contract and runtime HTTP checks |
| Security | HSTS, CSP, MIME sniffing, referrer, permissions, origin checks, body bounds, rate control, honeypot | Build and endpoint checks |
| Accessibility | Skip link, keyboard mobile menu, Escape close, focus styles, semantic headings, reduced motion, visible labels | Static and browser review |
| Source integrity | Official parent assets and review records only; no invented performance metrics | `ASSET_PROVENANCE.md` and content review |
| Punctuation and label rules | No em dash, en dash, decorative zero-padded labels, or ornamental letter markers in visible source | Contract test and compiled-output scan |
| Deployment control | Build and test exact candidate, record SHA, request immediate deploy confirmation, deploy only that SHA, post-deploy certification | Release checklist |
