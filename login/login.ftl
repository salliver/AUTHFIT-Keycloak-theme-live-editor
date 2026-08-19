<#import "template.ftl" as layout>
<#import "fields.ftl" as fields>
<#function loginText attrName propDefault msgKey>
    <#local v = realm.getAttribute(attrName)!''>
    <#if v?has_content><#return v></#if>
    <#if propDefault?has_content><#return propDefault></#if>
    <#return msg(msgKey)>
</#function>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('username','password') displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??; section>
    <#if section = "header">
        ${loginText('kc.loginTitle', properties.loginTitle!, 'loginAccountTitle')}
    <#elseif section = "form">
        <#if realm.password>
            <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
                <#if !usernameHidden??>
                    <#assign customUsername = realm.getAttribute('kc.usernameLabel')!''>
                    <div class="form-group">
                        <label for="username" class="form-label">
                            <#if customUsername?has_content>${customUsername}
                            <#elseif properties.usernameLabel?has_content>${properties.usernameLabel}
                            <#elseif !realm.loginWithEmailAllowed>${msg("username")}
                            <#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}
                            <#else>${msg("email")}</#if>
                        </label>
                        <input tabindex="2" id="username" class="form-input" name="username"
                               value="${(login.username!'')}" type="text" autofocus autocomplete="username"
                               aria-invalid="<#if messagesPerField.existsError('username','password')>true</#if>"
                               dir="ltr" />
                        <#if messagesPerField.existsError('username','password')>
                            <span id="input-error" class="input-error" aria-live="polite">
                                ${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}
                            </span>
                        </#if>
                    </div>
                </#if>

                <div class="form-group">
                    <label for="password" class="form-label">${loginText('kc.passwordLabel', properties.passwordLabel!, 'password')}</label>
                    <div class="input-group">
                        <input tabindex="3" id="password" class="form-input" name="password" type="password"
                               autocomplete="current-password"
                               aria-invalid="<#if messagesPerField.existsError('username','password')>true</#if>" />
                        <button type="button" class="password-toggle" aria-label="${msg('showPassword')}"
                                aria-controls="password" data-password-toggle
                                data-icon-show="icon-eye" data-icon-hide="icon-eye-slash"
                                data-label-show="${msg('showPassword')}" data-label-hide="${msg('hidePassword')}">
                            <i class="icon-eye" aria-hidden="true"></i>
                        </button>
                    </div>
                    <#if usernameHidden?? && messagesPerField.existsError('username','password')>
                        <span id="input-error" class="input-error" aria-live="polite">
                            ${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}
                        </span>
                    </#if>
                </div>

                <div class="form-options">
                    <#if realm.rememberMe && !usernameHidden??>
                        <label class="checkbox">
                            <#if login.rememberMe??>
                                <input tabindex="5" id="rememberMe" name="rememberMe" type="checkbox" checked> ${msg("rememberMe")}
                            <#else>
                                <input tabindex="5" id="rememberMe" name="rememberMe" type="checkbox"> ${msg("rememberMe")}
                            </#if>
                        </label>
                    </#if>
                    <#if realm.resetPasswordAllowed>
                        <a tabindex="6" href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a>
                    </#if>
                </div>

                <div class="form-actions">
                    <input type="hidden" id="id-hidden-input" name="credentialId" <#if auth.selectedCredential?has_content>value="${auth.selectedCredential}"</#if>/>
                    <button tabindex="7" id="kc-login" name="login" type="submit" class="btn btn-primary">${loginText('kc.loginButtonText', properties.loginButtonText!, 'doLogIn')}</button>
                </div>
            </form>
            <script type="module" src="${url.resourcesPath}/js/passwordVisibility.js"></script>
        </#if>
    <#elseif section = "info">
        <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
            <span>${msg("noAccount")} <a tabindex="8" href="${url.registrationUrl}">${msg("doRegister")}</a></span>
        </#if>
    <#elseif section = "socialProviders">
        <@fields.socialProviders/>
    </#if>
</@layout.registrationLayout>
