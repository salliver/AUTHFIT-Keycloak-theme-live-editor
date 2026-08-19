<#import "template.ftl" as layout>
<#import "fields.ftl" as fields>
<#import "passkeys.ftl" as passkeys>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('username') displayInfo=(realm.password && realm.registrationAllowed && !registrationDisabled??); section>
    <#if section = "header">
        ${msg("loginAccountTitle")}
    <#elseif section = "form">
        <#if realm.password>
            <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
                <#if !usernameHidden??>
                    <@fields.usernameField value="${(login.username!'')}" autocomplete=(enableWebAuthnConditionalUI?has_content)?then('username webauthn', 'username') />
                </#if>

                <div class="form-options">
                    <#if realm.rememberMe && !usernameHidden??>
                        <label class="checkbox">
                            <#if login.rememberMe??>
                                <input id="rememberMe" name="rememberMe" type="checkbox" checked> ${msg("rememberMe")}
                            <#else>
                                <input id="rememberMe" name="rememberMe" type="checkbox"> ${msg("rememberMe")}
                            </#if>
                        </label>
                    </#if>
                </div>

                <div class="form-actions">
                    <input id="kc-login" name="login" type="submit" value="${msg("doLogIn")}" class="btn btn-primary btn-block"/>
                </div>
            </form>
        </#if>
        <@passkeys.conditionalUIData />
    <#elseif section = "info">
        <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
            <span>${msg("noAccount")} <a href="${url.registrationUrl}">${msg("doRegister")}</a></span>
        </#if>
    <#elseif section = "socialProviders">
        <@fields.socialProviders/>
    </#if>
</@layout.registrationLayout>
