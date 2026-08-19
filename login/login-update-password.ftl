<#import "template.ftl" as layout>
<#import "fields.ftl" as fields>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('password','password-confirm'); section>
    <#if section = "header">
        ${msg("updatePasswordTitle")}
    <#elseif section = "form">
        <form id="kc-passwd-update-form" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
            <@fields.passwordField
                id="password-new"
                name="password-new"
                label="${msg('passwordNew')}"
                errorField="password"
                autocomplete="new-password"
                autofocus=true
                invalid=messagesPerField.existsError('password') />

            <@fields.passwordField
                id="password-confirm"
                name="password-confirm"
                label="${msg('passwordConfirm')}"
                errorField="password-confirm"
                autocomplete="new-password"
                invalid=messagesPerField.existsError('password-confirm') />

            <@fields.logoutOtherSessions/>

            <div class="form-actions">
                <#if isAppInitiatedAction??>
                    <div class="btn-row">
                        <input name="login" type="submit" value="${msg("doSubmit")}" class="btn btn-primary"/>
                        <button type="submit" name="cancel-aia" value="true" class="btn btn-default">${msg("doCancel")}</button>
                    </div>
                <#else>
                    <input name="login" type="submit" value="${msg("doSubmit")}" class="btn btn-primary btn-block"/>
                </#if>
            </div>
        </form>
        <script type="module" src="${url.resourcesPath}/js/passwordVisibility.js"></script>
    </#if>
</@layout.registrationLayout>
