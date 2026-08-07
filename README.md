# MARFI — Keycloak login theme with live branding editor

A custom login theme for **Keycloak 26.x** (FreeMarker + CSS + plain JS, no build step) that turns every branded surface of the login page into per-realm settings. It ships with a floating **Branding** editor injected into the admin console, so non-technical users can restyle the login page live and save per realm.

Built for Keycloak `26.5.5`, but the FTL/theme API surface it uses is stable across 22–26.

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
MARFI/
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

1. Copy this folder to the Keycloak themes directory (e.g. `/opt/keycloak/themes/MARFI`), or mount it read-only, e.g.:

   ```yaml
   services:
     keycloak:
       image: quay.io/keycloak/keycloak:26.5.5
       volumes:
         - ./themes/MARFI:/opt/keycloak/themes/MARFI:ro
   ```

2. In the admin console set the realm's **Login Theme** to `MARFI` (the *Admin Console Theme* only needs `MARFI` if you want the Branding editor).

3. Open the login page of that realm — the defaults from `login/theme.properties` apply.

## Using the Branding editor

Open the admin console and click the floating **Branding** button. Changes preview live in a side pane; press **Save** to persist them as `kc.*` realm attributes (via the admin REST API). The login page picks them up on the next refresh.

- Clearing a field removes the realm attribute on save, so the page falls back to the `theme.properties` default.
- The **Presets** tab exports the current editor state as an `.afit` file (`{ format: "marfi-afit", version: 1, theme, name, exportedAt, values }`) containing only the non-default `kc.*` values, or copies it as JSON. Importing fills the editor (it never saves — press Save).
- Values can also be managed directly through the Admin REST API, e.g.:

  ```sh
  curl -X PUT "$KEYCLOAK/admin/realms/<realm>" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    --data '{"attributes": {"kc.primaryColor": "#4f46e5"}}'
  ```

The full list of `kc.*` settings is documented in `login/theme.properties`.

## Development

No build, test, or lint tooling — this is static FreeMarker + CSS + JS deployed by mounting the directory into the Keycloak container. The dev setup mounts this folder into a local Keycloak with theme caching disabled, so changes apply on browser refresh.

## License

[GPL-3.0](./LICENSE)
