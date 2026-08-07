<#import "template.ftl" as layout>
<#import "fields.ftl" as fields>
<#import "user-profile-commons.ftl" as userProfileCommons>
<#import "register-commons.ftl" as registerCommons>
<@layout.registrationLayout displayMessage=messagesPerField.exists('global') displayRequiredFields=true; section>
    <#if section = "header">
        <#if messageHeader??>
            ${kcSanitize(msg("${messageHeader}"))?no_esc}
        <#else>
            ${msg("registerTitle")}
        </#if>
    <#elseif section = "form">
        <form id="kc-register-form" action="${url.registrationAction}" method="post">

            <@userProfileCommons.userProfileFormFields; callback, attribute>
                <#if callback = "afterField">
                    <#if passwordRequired?? && (attribute.name == 'username' || (attribute.name == 'email' && realm.registrationEmailAsUsername))>
                        <@fields.passwordField
                            id="password"
                            name="password"
                            label="${msg('password')}"
                            errorField="password"
                            autocomplete="new-password"
                            invalid=messagesPerField.existsError('password') />

                        <@fields.passwordField
                            id="password-confirm"
                            name="password-confirm"
                            label="${msg('passwordConfirm')}"
                            errorField="password-confirm"
                            autocomplete="new-password"
                            invalid=messagesPerField.existsError('password-confirm') />
                    </#if>
                </#if>
            </@userProfileCommons.userProfileFormFields>

            <@registerCommons.termsAcceptance/>

            <#if recaptchaRequired?? && (recaptchaVisible!false)>
                <div class="form-group">
                    <div class="g-recaptcha" data-size="compact" data-sitekey="${recaptchaSiteKey}" data-action="${recaptchaAction}"></div>
                </div>
            </#if>

            <div class="form-options">
                <a href="${url.loginUrl}">${msg("backToLogin")}</a>
            </div>

            <#if recaptchaRequired?? && !(recaptchaVisible!false)>
                <script>
                    function onSubmitRecaptcha(token) {
                        document.getElementById("kc-register-form").requestSubmit();
                    }
                </script>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary btn-block g-recaptcha"
                            data-sitekey="${recaptchaSiteKey}" data-callback='onSubmitRecaptcha' data-action='${recaptchaAction}'>
                        ${msg("doRegister")}
                    </button>
                </div>
            <#else>
                <div class="form-actions">
                    <input type="submit" value="${msg("doRegister")}" class="btn btn-primary btn-block"/>
                </div>
            </#if>
        </form>
        <script type="module" src="${url.resourcesPath}/js/passwordVisibility.js"></script>
    </#if>
</@layout.registrationLayout>
