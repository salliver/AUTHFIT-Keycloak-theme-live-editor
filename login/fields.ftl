<#function loginText attrName propDefault msgKey>
    <#local v = realm.getAttribute(attrName)!''>
    <#if v?has_content><#return v></#if>
    <#if propDefault?has_content><#return propDefault></#if>
    <#return msg(msgKey)>
</#function>

<#macro usernameField id='username' value='' autocomplete='username' errorFields='username' tabindex='' autofocus=true>
    <div class="form-group">
        <label for="${id}" class="form-label">
            <#if !realm.loginWithEmailAllowed>${msg("username")}
            <#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}
            <#else>${msg("email")}</#if>
        </label>
        <input type="text" id="${id}" name="${id}" class="form-input"
               value="${(value!'')}"
               autocomplete="${autocomplete}"
               <#if autofocus>autofocus</#if>
               <#if tabindex?has_content>tabindex="${tabindex}"</#if>
               aria-invalid="<#if messagesPerField.existsError('${errorFields}')>true</#if>"
               dir="ltr" />
        <#if messagesPerField.existsError('${errorFields}')>
            <span id="input-error-${id}" class="input-error" aria-live="polite">
                ${kcSanitize(messagesPerField.getFirstError('${errorFields}'))?no_esc}
            </span>
        </#if>
    </div>
</#macro>

<#macro passwordField id name label errorField autocomplete invalid autofocus=false value=''>
    <div class="form-group">
        <label for="${id}" class="form-label">${label}</label>
        <div class="input-group">
            <input type="password" id="${id}" name="${name}" class="form-input"
                   value="${(value!'')}"
                   autocomplete="${autocomplete}"
                   <#if autofocus>autofocus</#if>
                   aria-invalid="<#if invalid>true</#if>" />
            <button type="button" class="password-toggle" aria-label="${msg('showPassword')}"
                    aria-controls="${id}" data-password-toggle
                    data-icon-show="icon-eye" data-icon-hide="icon-eye-slash"
                    data-label-show="${msg('showPassword')}" data-label-hide="${msg('hidePassword')}">
                <i class="icon-eye" aria-hidden="true"></i>
            </button>
        </div>
        <#if invalid>
            <span id="input-error-${errorField}" class="input-error" aria-live="polite">
                ${kcSanitize(messagesPerField.get('${errorField}'))?no_esc}
            </span>
        </#if>
    </div>
</#macro>

<#macro socialProviders>
    <#if realm.password && social?? && social.providers?has_content>
        <div class="social-providers">
            <hr/>
            <h2>${msg("identity-provider-login-label")}</h2>
            <ul>
                <#list social.providers as p>
                    <li>
                        <a id="social-${p.alias}" href="${p.loginUrl}">
                            <#if p.iconClasses?has_content>
                                <i class="${p.iconClasses!}" aria-hidden="true"></i>
                                <span>${p.displayName!}</span>
                            <#else>
                                <span>${p.displayName!}</span>
                            </#if>
                        </a>
                    </li>
                </#list>
            </ul>
        </div>
    </#if>
</#macro>

<#macro logoutOtherSessions>
    <div class="form-options">
        <label class="checkbox">
            <input type="checkbox" id="logout-sessions" name="logout-sessions" value="on">
            ${msg("logoutOtherSessions")}
        </label>
    </div>
</#macro>
