# AUTHFIT — Keycloak login theme with live branding editor

[![License: GPL v3](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)
[![Keycloak](https://img.shields.io/badge/Keycloak-22–26.x-4d4d4d)](#Compatibility)
[![No build step](https://img.shields.io/badge/build-none-brightgreen)](#Installation)
![Status](https://img.shields.io/badge/status-active-success)
[![Level 5](https://badgen.net/badge/AI%20Assistance/Level%205?color=orange)](#AI-Contribution-Disclosure)

A custom login theme for **Keycloak 26.x** (FreeMarker + CSS + plain JS, no build step) that turns every branded surface of the login page into per-realm settings. It ships with a floating **Branding** editor injected into the admin console, so non-technical users can restyle the login page live and save per realm — no rebuild, no redeploy.

Built for Keycloak `26.5.5`, but the FTL/theme API surface it uses is stable across 22–26.


<video src= "https://github.com/user-attachments/assets/4ed81199-afb1-420b-95e7-99052f5467fc" controls width="700"></video>


## Why AUTHFIT

Keycloak's login theme is normally edited by hand: FTL templates, CSS, a rebuild or a container restart to see anything. AUTHFIT turns the whole visual surface — layout, colors, gradients, typography, logo, button styling, footer — into realm attributes you set from a **live editor inside the admin console**, with an instant preview pane. Changes are saved via the standard Admin REST API, so nothing about the underlying Keycloak setup changes; you're just filling in `kc.*` attributes through a UI instead of `curl`.

## Features

- **Split-layout login page** — configurable form column vs. visual panel (image or video) with `cover` / `contain` / `fill` / `auto` background fit and an overlay tint.
- **Surface gradients** — page, form card, and visual panel backgrounds can each be a solid color or a `linear-gradient` (two colors + angle).
- **Full palette control** — primary/hover, links, text, muted text, title, page/card backgrounds, borders, error color.
- **Typography** — font family (incl. live Google Fonts lookup), per-text font weights for title, labels, inputs, and buttons.
- **Logo** — position via CSS margin or absolute % anchoring to the login card; max size capped to the card.
- **Login button styling** — width, min-height, radius, text-transform, letter-spacing.
- **Copyright footer** — optional custom text under the form card.
- **Preset export / import** — save the editor state as a standalone `.afit` file (JSON with metadata) and reload it later; plain `.json` also accepted on import.
- **No build tooling** — edit and refresh. Theme caching is disabled in the dev setup.

## Structure

```
AUTHFIT/
├── login/                # login page theme (parent = keycloak)
│   ├── template.ftl      # shared layout; reads kc.* realm attributes
│   ├── login.ftl, login-username.ftl, login-password.ftl, …  # overridden flow pages
│   ├── fields.ftl        # shared field macros (username/password/social/…)
│   ├── user-profile-commons.ftl, register-commons.ftl
│   ├── theme.properties  # defaults for every kc.* setting
│   └── resources/
│       ├── css/login.css
│       └── img/          # default background images + logo
└── admin/                # admin console theme (parent = keycloak.v2)
    ├── theme.properties
    └── resources/
        ├── branding.js   # the Branding editor (dependency-free, no modules)
        └── branding.css
```

## Installation

1. Copy this folder to the Keycloak themes directory (e.g. `/opt/keycloak/themes/AUTHFIT`), or mount it read-only, e.g.:

   ```yaml
   services:
     keycloak:
       image: quay.io/keycloak/keycloak:26.5.5
       volumes:
         - ./themes/AUTHFIT:/opt/keycloak/themes/AUTHFIT:ro
   ```

2. In the admin console set the realm's **Login Theme** to `AUTHFIT` (the _Admin Console Theme_ only needs `AUTHFIT` if you want the Branding editor).
3. Open the login page of that realm — the defaults from `login/theme.properties` apply.

## Using the Branding editor

Open the admin console and click the floating **Branding** button. Changes preview live in a side pane; press **Save** to persist them as `kc.*` realm attributes (via the admin REST API). The login page picks them up on the next refresh.

- Clearing a field removes the realm attribute on save, so the page falls back to the `theme.properties` default.
- The **Presets** tab exports the current editor state as an `.afit` file (`{ format: "AUTHFIT-afit", version: 1, theme, name, exportedAt, values }`) containing only the non-default `kc.*` values, or copies it as JSON. Importing fills the editor (it never saves — press **Save**).
- Values can also be managed directly through the Admin REST API, e.g.:

  ```bash
  curl -X PUT "$KEYCLOAK/admin/realms/<realm>" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    --data '{"attributes": {"kc.primaryColor": "#4f46e5"}}'
  ```

The full list of `kc.*` settings is documented in `login/theme.properties`.

## Development

No build, test, or lint tooling — this is static FreeMarker + CSS + JS deployed by mounting the directory into the Keycloak container. The dev setup mounts this folder into a local Keycloak with theme caching disabled, so changes apply on browser refresh.

## Compatibility

| Keycloak version | Status                             |
| ---------------- | ---------------------------------- |
| 26.5.5           | ✅ Primary target / tested         |
| 22.x – 26.x      | ✅ FTL/theme API surface is stable |

## AI Contribution Disclosure
![Level 5](https://badgen.net/badge/AI%20Assistance/Level%205?color=orange)
> [!IMPORTANT]
> This project uses [Level 5 AI assistance](https://www.visidata.org/blog/2026/ai/) — AI generated the majority of the code, but the human was involved at every step, reviewing results and validating behavior. This was the author's first Keycloak project; >AI (opencode) was used heavily to bridge the gap in FreeMarker/Keycloak-specific knowledge. The core architecture — how edited values are persisted as realm attributes and injected into the login page's <style> block, how templates and images are saved >and imported — was designed by the author, who tested extensively across a local Docker environment, a systemd-managed Keycloak instance, and production.
>
>Real-world validation: in production use since deployment, with only a handful of feature additions requested afterward (e.g. gradient background support) rather than bug fixes — no significant issues reported. As a login theme, AUTHFIT does not modify >any core Keycloak configuration — it only affects the rendered login/admin UI, so it carries low operational risk and can be reverted instantly by switching the realm's theme back.
>
>**AI Model**: opencode


## Contributing

Issues and PRs are welcome. If you hit a rendering quirk on a Keycloak version other than 26.5.5, please open an issue with the version and a screenshot.

## License

[GPL-3.0](LICENSE)
