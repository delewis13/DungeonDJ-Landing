# DungeonDJ Landing

The static site at [dungeon-dj.com](https://dungeon-dj.com): the home page, `/privacy`,
`/support`, and `/oauth` (the "login successful" page older app versions redirect to).
Next.js 10 static export, served by GitHub Pages from the `gh-pages` branch.

## Setup

Needs **Node 14** (`.nvmrc`). node-sass 4 doesn't build on newer Node.

```sh
nvm use
yarn install
yarn dev     # http://localhost:3000
yarn test    # production export into .site-check/, then scripts/check-site.js
```

## Changing content

Links, contact details, the demo video and screenshots all live in `site.config.js`.
Empty values hide whatever uses them:

| Setting | Effect when empty | When set |
|---|---|---|
| `supportEmail` | No email on Support/Privacy | `mailto:` contact option |
| `discordUrl` | No Discord links | Nav button, footer link, contact option |
| `demoVideoId` | Tutorial playlist plays in "See it in action" | That YouTube video plays instead |
| `screenshots` | No screenshots section | A grid of the listed images |

Screenshots go in `static/images/screenshots/` and are listed as
`{ src: "static/images/screenshots/<file>.png", alt: "..." }`. 16:10 at 2× (e.g.
2880×1800) looks sharp.

Update `privacyUpdated` whenever `pages/privacy.js` changes. The policy describes what the
app actually collects (Google/Patreon profile, usage days, Sentry, FullStory, bug-report
logs). Keep it in step with the app: if telemetry is added or removed there, change it here.

The share preview is `static/images/og-image.png` (1200×630), rendered from
`scripts/og-image.html`; the regenerate command is at the top of that file.

## Deploying

```sh
yarn deploy
```

This builds and exports to `out/`, commits `out/` on the current branch, and publishes it to
`gh-pages` (with `CNAME` and `.nojekyll`). Run it from `master` after merging.

## Analytics

The site has no analytics, and the privacy policy says so. The questions that matter for
launch are already answerable without it:

- **Downloads:** GitHub counts release-asset downloads.
  `gh api repos/delewis13/DungeonDJ-Release/releases --jq '.[] | {tag: .tag_name, assets: [.assets[] | {name, download_count}]}'`
- **Sign-ups, trials and paid conversions:** `api/scripts/weekly_funnel.py` in the main repo.

If you later want page views and referrers, use a cookieless tool so no consent banner is
needed: [GoatCounter](https://www.goatcounter.com) (free, open source) or
[Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) (free, works without
moving DNS to Cloudflare). Either is one `<script>` tag in `components/Layout.js`. Update
the "This website" section of the privacy policy when you add it.
