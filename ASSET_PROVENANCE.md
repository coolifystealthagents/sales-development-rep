# Asset provenance

This release uses the existing subsidiary identity and approved first-party StealthAgents parent assets.

| Asset | Purpose | Approved source | Verification |
| --- | --- | --- | --- |
| `public/logo.svg` | Subsidiary logo and metadata icon | Existing production repository baseline | Used unchanged in header, footer, and icon metadata. |
| `public/images/stealth-agents-logo-black.png` | Official parent logo | `https://stealthagents.com/stealth-agents-logo-black.png`, published on `https://stealthagents.com/our-team/` | Exact first-party byte match. SHA-256 `bc5b225c1bf37d71ab282bc6d59b519e717263a8ecddd2423225a56d47416e45`; 149 by 50 PNG. |
| `public/images/stealth-agents-team-bacolod.jpg` | Official Bacolod team photograph on `/contact-us` and `/services` | `https://stealthagents.com/team-bacolod.jpg`, published on `https://stealthagents.com/our-team/` | Exact first-party bytes. SHA-256 `e80f0e94a80f5ddceba7fbcf723774689e47089bce7981c9f2bdb4205ea52767`; 953 by 540 progressive JPEG. The first-party page exposes no higher-resolution original or `srcset` alternative. |
| `public/images/stealth-agents-team.webp` | Superseded identity-evidence image on `/contact-us` and `/services` | Historical portfolio asset from `inside-sales-assistant-v3` | SHA-256 `58d4a9d71f30927c0447a44ce91b818ba7a5f6ebcae495b64acaf5518161c721`; 1600 by 1067 WebP. Visual inspection confirms this is unrelated coworking imagery, not the official Bacolod team, so it must not support an official-team identity claim. |
| `app/review-provenance.json` | Ten first-party review records | Official StealthAgents first-party set sourced from `https://stealthagents.com/` | Rendered without strengthening claims and linked to the recorded source. |
