<#import "template.ftl" as layout>
<#import "fields.ftl" as fields>
<@layout.registrationLayout displayInfo=true displayMessage=!messagesPerField.existsError('username'); section>
    <#if section = "header">
        ${msg("emailForgotTitle")}
    <#elseif section = "form">
        <form id="kc-reset-password-form" action="${url.loginAction}" method="post">
            <@fields.usernameField value="${(auth.attemptedUsername!'')}" />

            <div class="form-options">
                <a href="${url.loginUrl}">${msg("backToLogin")}</a>
            </div>

            <div class="form-actions">
                <input type="submit" value="${msg("doSubmit")}" class="btn btn-primary btn-block"/>
            </div>
        </form>
    <#elseif section = "info">
        <#if realm.duplicateEmailsAllowed>
            ${msg("emailInstructionUsername")}
        <#else>
            ${msg("emailInstruction")}
        </#if>
    </#if>
</@layout.registrationLayout>
