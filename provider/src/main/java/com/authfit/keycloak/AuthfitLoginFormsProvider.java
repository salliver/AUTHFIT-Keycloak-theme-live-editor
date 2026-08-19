package com.authfit.keycloak;

import java.util.Locale;
import java.util.Map;
import java.util.Properties;

import jakarta.ws.rs.core.UriBuilder;

import org.keycloak.forms.login.LoginFormsPages;
import org.keycloak.forms.login.freemarker.FreeMarkerLoginFormsProvider;
import org.keycloak.models.KeycloakSession;
import org.keycloak.theme.Theme;

/**
 * Adds the current realm attributes to the FreeMarker model.
 *
 * Keycloak 22's built-in RealmBean does not expose realm attributes, while
 * AUTHFIT needs its kc.* attributes for per-realm branding.
 */
public final class AuthfitLoginFormsProvider extends FreeMarkerLoginFormsProvider {

    public AuthfitLoginFormsProvider(KeycloakSession session) {
        super(session);
    }

    @Override
    protected void createCommonAttributes(
            Theme theme,
            Locale locale,
            Properties messagesBundle,
            UriBuilder baseUriBuilder,
            LoginFormsPages page) {
        super.createCommonAttributes(theme, locale, messagesBundle, baseUriBuilder, page);

        if (realm != null) {
            Map<String, String> realmAttributes = realm.getAttributes();
            attributes.put("realmAttributes", realmAttributes);
        }
    }
}
