# AUTHFIT compatibility

This document describes the compatibility of the modified AUTHFIT theme and
the accompanying `authfit-freemarker` provider.

# To utilize this version you'll need to follow the instructions inside the "provider" folder 

## Summary

| Keycloak version | Status with the current implementation |
|---|---|
| **22.0.3** | **Confirmed working** with the provider and the custom admin `index.ftl`. |
| **22.x** | Likely compatible, but only 22.0.3 has been tested. |
| **23.x–24.x** | Expected to require the provider and the custom admin `index.ftl` workaround. Version-specific testing is still recommended. |
| **25.x** | Not verified. Realm attributes are available directly, but admin v2 custom-script loading and the version-specific provider/template details require testing. |
| **26.x** | Use the stock AUTHFIT theme without this provider or the compatibility changes. |

## Why the provider is needed before Keycloak 25

The stock AUTHFIT login templates read realm attributes through
`realm.getAttribute(...)`. Keycloak 22.0.3, 23.0.0, and 24.0.0 do not expose
`getAttribute()` or `getAttributes()` on the login `RealmBean`. Those methods
are present starting in Keycloak 25.0.0.

For Keycloak 22–24, this implementation therefore injects the realm attribute
map into the FreeMarker model as `realmAttributes`. The modified templates
read values using expressions such as:

```ftl
${(realmAttributes[name])!fallback}
```

The provider is built against Keycloak 22.0.3 internal login-provider APIs.
Although it works on 22.0.3, binary compatibility across later Keycloak major
versions is not guaranteed. Rebuild and test it against the target Keycloak
version before deployment.

## Why the admin template workaround is needed

AUTHFIT declares its admin script in `admin/theme.properties`:

```properties
scripts=branding.js
```

The affected Keycloak admin v2 templates did not render the `properties.scripts`
list, so `branding.js` was not loaded. The custom `admin/index.ftl` adds that
script loop.

The admin v2 custom-script problem was reported for Keycloak 24.0.1 and tracked
for releases 25.0.1 and 26.0.0. Keycloak 26.0.0 includes the script-loading
support, which is why the stock theme works there.

The current custom `admin/index.ftl` was copied from Keycloak 22. It contains
Keycloak-22-specific bundled asset names and must not automatically be reused
unchanged on another major version. If supporting Keycloak 23–25, copy the
matching `index.ftl` from that Keycloak version and retain the custom
`properties.scripts` loop if that version still needs it.

## Stock AUTHFIT versus this modified implementation

The upstream AUTHFIT theme currently uses `realm.getAttribute(...)` and the
newer Keycloak login-template variables. Consequently, the upstream theme is
intended for newer Keycloak releases and is not directly compatible with
Keycloak 22–24.

The modified implementation provides the compatibility layer for Keycloak
22–24. As currently installed, only Keycloak 22.0.3 has been end-to-end
verified.

## References

- Upstream AUTHFIT theme: <https://github.com/salliver/AUTHFIT-Keycloak-theme-live-editor>
- AUTHFIT login template: <https://github.com/salliver/AUTHFIT-Keycloak-theme-live-editor/blob/main/login/template.ftl>
- Keycloak issue #30115, admin v2 custom scripts not loading: <https://github.com/keycloak/keycloak/issues/30115>
- Keycloak 22.0.3 `RealmBean`: <https://github.com/keycloak/keycloak/blob/22.0.3/services/src/main/java/org/keycloak/forms/login/freemarker/model/RealmBean.java>
- Keycloak 24.0.0 `RealmBean`: <https://github.com/keycloak/keycloak/blob/24.0.0/services/src/main/java/org/keycloak/forms/login/freemarker/model/RealmBean.java>
- Keycloak 25.0.0 `RealmBean`: <https://github.com/keycloak/keycloak/blob/25.0.0/services/src/main/java/org/keycloak/forms/login/freemarker/model/RealmBean.java>
