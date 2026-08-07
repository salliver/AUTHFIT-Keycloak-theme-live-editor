<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('totp'); section>
    <#if section = "header">
        ${msg("doLogIn")}
    <#elseif section = "form">
        <form id="kc-otp-login-form" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
            <#if otpLogin.userOtpCredentials?size gt 1>
                <div class="form-group">
                    <#list otpLogin.userOtpCredentials as otpCredential>
                        <label for="kc-otp-credential-${otpCredential?index}" class="otp-credential">
                            <input id="kc-otp-credential-${otpCredential?index}" type="radio" name="selectedCredentialId" value="${otpCredential.id}"
                                   <#if otpCredential.id == otpLogin.selectedCredentialId>checked="checked"</#if> />
                            <span>${otpCredential.userLabel}</span>
                        </label>
                    </#list>
                </div>
            </#if>

            <div class="form-group">
                <label for="otp" class="form-label">${msg("loginOtpOneTime")}</label>
                <input id="otp" name="otp" autocomplete="one-time-code" type="text" class="form-input"
                       autofocus aria-invalid="<#if messagesPerField.existsError('totp')>true</#if>"
                       dir="ltr" />
                <#if messagesPerField.existsError('totp')>
                    <span id="input-error-otp-code" class="input-error" aria-live="polite">
                        ${kcSanitize(messagesPerField.get('totp'))?no_esc}
                    </span>
                </#if>
            </div>

            <div class="form-actions">
                <input id="kc-login" name="login" type="submit" value="${msg("doLogIn")}" class="btn btn-primary btn-block"/>
            </div>
        </form>
    </#if>
</@layout.registrationLayout>
