package com.authfit.keycloak;

import org.keycloak.Config;
import org.keycloak.forms.login.LoginFormsProvider;
import org.keycloak.forms.login.freemarker.FreeMarkerLoginFormsProviderFactory;
import org.keycloak.models.KeycloakSession;

public final class AuthfitLoginFormsProviderFactory extends FreeMarkerLoginFormsProviderFactory {

    @Override
    public LoginFormsProvider create(KeycloakSession session) {
        return new AuthfitLoginFormsProvider(session);
    }

    @Override
    public void init(Config.Scope config) {
        // No provider-specific configuration.
    }

    @Override
    public String getId() {
        return "authfit-freemarker";
    }
}
