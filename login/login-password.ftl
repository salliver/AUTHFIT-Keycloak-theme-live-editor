<#import "template.ftl" as layout>
<#import "fields.ftl" as fields>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('password'); section>
    <#if section = "header">
        ${msg("doLogIn")}
    <#elseif section = "form">
        <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
            <@fields.passwordField
                id="password"
                name="password"
                label="${msg('password')}"
                errorField="password"
                autocomplete="on"
                autofocus=true
                invalid=messagesPerField.existsError('password') />

            <div class="form-options">
                <#if realm.resetPasswordAllowed>
                    <a href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a>
                </#if>
            </div>

            <div class="form-actions">
                <input id="kc-login" name="login" type="submit" value="${msg("doLogIn")}" class="btn btn-primary btn-block"/>
            </div>
        </form>
        <script type="module" src="${url.resourcesPath}/js/passwordVisibility.js"></script>
    </#if>
</@layout.registrationLayout>
