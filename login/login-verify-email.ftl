<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true; section>
    <#if section = "header">
        ${msg("emailVerifyTitle")}
    <#elseif section = "form">
        <p class="instruction">
            <#if verifyEmail??>
                ${msg("emailVerifyInstruction1", verifyEmail)}
            <#else>
                ${msg("emailVerifyInstruction4", user.email)}
            </#if>
        </p>
        <#if isAppInitiatedAction??>
            <form id="kc-verify-email-form" action="${url.loginAction}" method="post">
                <div class="form-actions">
                    <#if verifyEmail??>
                        <input type="submit" value="${msg("emailVerifyResend")}" class="btn btn-default btn-block"/>
                    <#else>
                        <input type="submit" value="${msg("emailVerifySend")}" class="btn btn-primary btn-block"/>
                    </#if>
                    <button type="submit" name="cancel-aia" value="true" formnovalidate class="btn btn-default btn-block">${msg("doCancel")}</button>
                </div>
            </form>
        </#if>
    <#elseif section = "info">
        <#if !isAppInitiatedAction??>
            <p class="instruction">
                ${msg("emailVerifyInstruction2")}
                <br/>
                <a href="${url.loginAction}">${msg("doClickHere")}</a> ${msg("emailVerifyInstruction3")}
            </p>
        </#if>
    </#if>
</@layout.registrationLayout>
