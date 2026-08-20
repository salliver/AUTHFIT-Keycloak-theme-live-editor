<#function themeAttr name fallback>
    <#local value = realm.getAttribute(name)!fallback>
    <#if value?has_content>
        <#return value>
    <#else>
        <#return fallback>
    </#if>
</#function>
<#function gradientBg mode start end angle fallback>
    <#if mode?has_content && mode == 'gradient'>
        <#local a = angle?has_content?then(angle, '135')>
        <#if a?matches('^[0-9]+([.][0-9]+)?$')><#local a = a + 'deg'></#if>
        <#local s = start?has_content?then(start, fallback)>
        <#local e = end?has_content?then(end, fallback)>
        <#return 'linear-gradient(' + a + ', ' + s + ', ' + e + ')'>
    </#if>
    <#return fallback>
</#function>
<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayRequiredFields=false>
<!DOCTYPE html>
<html class="${properties.kcHtmlClass!}" lang="${lang}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <#if properties.meta?has_content>
        <#list properties.meta?split(' ') as meta>
            <#if meta?split('==')?size == 2>
                <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}"/>
            </#if>
        </#list>
    </#if>
    <title>${title!}</title>
    <#if properties.stylesCommon?has_content>
        <#list properties.stylesCommon?split(' ') as style>
            <link href="${url.resourcesCommonPath}/${style}" rel="stylesheet" />
        </#list>
    </#if>
    <#if properties.styles?has_content>
        <#list properties.styles?split(' ') as style>
            <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
        </#list>
    </#if>
    <#assign linkColor = themeAttr('kc.linkColor', '')>
    <#assign titleColor = themeAttr('kc.titleColor', '')>
    <#assign fontUrl = themeAttr('kc.fontUrl', '')>
    <#assign bgFit = themeAttr('kc.backgroundFit', properties.backgroundFit!)>
    <#assign bgPageGradient = themeAttr('kc.bgPageGradient', properties.bgPageGradient!)>
    <#assign bgPageGradientStart = themeAttr('kc.bgPageGradientStart', properties.bgPageGradientStart!)>
    <#assign bgPageGradientEnd = themeAttr('kc.bgPageGradientEnd', properties.bgPageGradientEnd!)>
    <#assign bgPageGradientAngle = themeAttr('kc.bgPageGradientAngle', properties.bgPageGradientAngle!)>
    <#assign formBgGradient = themeAttr('kc.formBgGradient', properties.formBgGradient!)>
    <#assign formBgGradientStart = themeAttr('kc.formBgGradientStart', properties.formBgGradientStart!)>
    <#assign formBgGradientEnd = themeAttr('kc.formBgGradientEnd', properties.formBgGradientEnd!)>
    <#assign formBgGradientAngle = themeAttr('kc.formBgGradientAngle', properties.formBgGradientAngle!)>
    <#assign bgVisualGradient = themeAttr('kc.bgVisualGradient', properties.bgVisualGradient!)>
    <#assign bgVisualGradientStart = themeAttr('kc.bgVisualGradientStart', properties.bgVisualGradientStart!)>
    <#assign bgVisualGradientEnd = themeAttr('kc.bgVisualGradientEnd', properties.bgVisualGradientEnd!)>
    <#assign bgVisualGradientAngle = themeAttr('kc.bgVisualGradientAngle', properties.bgVisualGradientAngle!)>
    <#assign logoPositionMode = themeAttr('kc.logoPositionMode', properties.logoPositionMode!)>
    <#assign logoMarginTop = themeAttr('kc.logoMarginTop', properties.logoMarginTop!)>
    <#assign logoMarginRight = themeAttr('kc.logoMarginRight', properties.logoMarginRight!)>
    <#assign logoMarginBottom = themeAttr('kc.logoMarginBottom', properties.logoMarginBottom!)>
    <#assign logoMarginLeft = themeAttr('kc.logoMarginLeft', properties.logoMarginLeft!)>
    <#assign logoPosLeft = themeAttr('kc.logoPosLeft', properties.logoPosLeft!)>
    <#assign logoPosRight = themeAttr('kc.logoPosRight', properties.logoPosRight!)>
    <#assign logoPosTop = themeAttr('kc.logoPosTop', properties.logoPosTop!)>
    <#assign logoPosBottom = themeAttr('kc.logoPosBottom', properties.logoPosBottom!)>
    <#assign btnRadius = themeAttr('kc.btnRadius', properties.btnRadius!)>
    <#assign layoutSide = themeAttr('kc.layoutSide', properties.layoutSide!)>
    <#assign footerText = themeAttr('kc.footerText', properties.footerText!)>
    <#if fontUrl?has_content>
        <link rel="stylesheet" href="${fontUrl}">
    </#if>
    <style>
        :root {
            --primary-color: ${themeAttr('kc.primaryColor', properties.primaryColor!)};
            --primary-hover: ${themeAttr('kc.primaryHover', properties.primaryHover!)};
            --primary-focus: color-mix(in srgb, ${themeAttr('kc.primaryColor', properties.primaryColor!)} 15%, transparent);
            --link-color: <#if linkColor?has_content>${linkColor}<#else>var(--primary-color)</#if>;
            --font-family: ${themeAttr('kc.fontFamily', properties.fontFamily!)};
            --text-color: ${themeAttr('kc.textColor', properties.textColor!)};
            --text-muted: ${themeAttr('kc.textMuted', properties.textMuted!)};
            --title-color: <#if titleColor?has_content>${titleColor}<#else>var(--text-color)</#if>;
            --title-size: ${themeAttr('kc.titleSize', properties.titleSize!)};
            --label-size: ${themeAttr('kc.labelSize', properties.labelSize!)};
            --input-size: ${themeAttr('kc.inputSize', properties.inputSize!)};
            --input-padding-y: ${themeAttr('kc.inputPadding', properties.inputPadding!)};
            --bg-page: ${gradientBg(bgPageGradient, bgPageGradientStart, bgPageGradientEnd, bgPageGradientAngle, themeAttr('kc.bgPage', properties.bgPage!))};
            --bg-card: ${gradientBg(formBgGradient, formBgGradientStart, formBgGradientEnd, formBgGradientAngle, themeAttr('kc.formBgColor', properties.formBgColor!))};
            --bg-visual: ${gradientBg(bgVisualGradient, bgVisualGradientStart, bgVisualGradientEnd, bgVisualGradientAngle, themeAttr('kc.bgVisualColor', properties.bgVisualColor!))};
            --bg-size: <#if bgFit == 'fill'>100% 100%<#elseif bgFit == 'auto'>auto<#else>${bgFit}</#if>;
            --bg-object-fit: <#if bgFit == 'auto'>none<#elseif bgFit == 'cover' || bgFit == 'contain' || bgFit == 'fill'>${bgFit}<#else>cover</#if>;
            --bg-overlay: color-mix(in srgb, ${themeAttr('kc.bgOverlayColor', properties.bgOverlayColor!)} ${themeAttr('kc.bgOverlayOpacity', properties.bgOverlayOpacity!)}%, transparent);
            --border-color: ${themeAttr('kc.borderColor', properties.borderColor!)};
            --error-color: ${themeAttr('kc.errorColor', properties.errorColor!)};
            --logo-max-width: ${themeAttr('kc.logoMaxWidth', properties.logoMaxWidth!)};
            --logo-max-height: ${themeAttr('kc.logoMaxHeight', properties.logoMaxHeight!)};
            --logo-position: <#if logoPositionMode == 'absolute'>absolute<#else>static</#if>;
            --logo-margin: <#if logoPositionMode == 'margin'>${logoMarginTop?has_content?then(logoMarginTop,'auto')} ${logoMarginRight?has_content?then(logoMarginRight,'auto')} ${logoMarginBottom?has_content?then(logoMarginBottom,'auto')} ${logoMarginLeft?has_content?then(logoMarginLeft,'auto')}<#elseif logoPositionMode == 'absolute'>0<#else>0 auto 1.5rem</#if>;
            --logo-pos-left: <#if logoPosLeft?has_content>${logoPosLeft}<#else>auto</#if>;
            --logo-pos-right: <#if logoPosRight?has_content>${logoPosRight}<#else>auto</#if>;
            --logo-pos-top: <#if logoPosTop?has_content>${logoPosTop}<#else>auto</#if>;
            --logo-pos-bottom: <#if logoPosBottom?has_content>${logoPosBottom}<#else>auto</#if>;
            --card-max-width: ${themeAttr('kc.cardMaxWidth', properties.cardMaxWidth!)};
            --card-padding: ${themeAttr('kc.cardPadding', properties.cardPadding!)};
            --radius-lg: ${themeAttr('kc.cardRadius', properties.cardRadius!)};
            --radius-sm: ${themeAttr('kc.inputRadius', properties.inputRadius!)};
            --shadow-card: ${themeAttr('kc.shadowCard', properties.shadowCard!)};
            --form-column-width: ${themeAttr('kc.formColumnWidth', properties.formColumnWidth!)};
            --visual-column-width: ${themeAttr('kc.visualColumnWidth', properties.visualColumnWidth!)};
            --layout-direction: <#if themeAttr('kc.layoutSide', properties.layoutSide!) == 'right'>row-reverse<#else>row</#if>;
            --title-weight: ${themeAttr('kc.titleWeight', properties.titleWeight!)};
            --label-weight: ${themeAttr('kc.labelWeight', properties.labelWeight!)};
            --input-weight: ${themeAttr('kc.inputWeight', properties.inputWeight!)};
            --button-weight: ${themeAttr('kc.buttonWeight', properties.buttonWeight!)};
            --btn-width: ${themeAttr('kc.btnWidth', properties.btnWidth!)};
            --btn-min-height: ${themeAttr('kc.btnMinHeight', properties.btnMinHeight!)};
            --btn-radius: <#if btnRadius?has_content>${btnRadius}<#else>var(--radius-sm)</#if>;
            --btn-text-transform: ${themeAttr('kc.btnTextTransform', properties.btnTextTransform!)};
            --btn-letter-spacing: ${themeAttr('kc.btnLetterSpacing', properties.btnLetterSpacing!)};
        }
    </style>
</head>

<body class="${properties.kcBodyClass!} custom-body">
    <div class="split-layout <#if layoutSide == 'center'>center-layout</#if>">
        <!-- Left column: Form -->
        <div class="form-column">
            <div class="form-card">
                <#if displayRequiredFields>
                    <div class="required-fields-note"><span class="required">*</span> ${msg("requiredFields")}</div>
                </#if>

                <#assign logoImage = themeAttr('kc.logoImage', '')>
                <#if logoImage?has_content>
                    <img class="brand-logo" src="${logoImage}" alt="${properties.logoAlt!}" />
                <#elseif properties.logoPath?? && properties.logoPath?has_content>
                    <img class="brand-logo" src="${url.resourcesPath}/${properties.logoPath}" alt="${properties.logoAlt!}" />
                <#elseif realm.displayNameHtml?has_content>
                    <div class="brand-title">${kcSanitize(realm.displayNameHtml)?no_esc}</div>
                </#if>

                <h1 id="kc-page-title"><#nested "header"></h1>

                <#if auth?has_content && auth.showUsername() && !auth.showResetCredentials()>
                    <#nested "show-username">
                    <div class="attempted-username">
                        <label>${auth.attemptedUsername}</label>
                        <a href="${url.loginRestartFlowUrl}">${msg("restartLoginTooltip")}</a>
                    </div>
                </#if>

                <#if displayMessage && message?has_content && (message.type != 'warning' || !isAppInitiatedAction??)>
                    <div class="alert alert-${message.type}">
                        <span>${kcSanitize(message.summary)?no_esc}</span>
                    </div>
                </#if>

                <#nested "form">

                <#if displayInfo>
                    <div class="info-section">
                        <#nested "info">
                    </div>
                </#if>

                <#nested "socialProviders">
            </div>
            <#if footerText?has_content>
                <div class="copyright-footer">${footerText}</div>
            </#if>
        </div>

        <!-- Right column: Imagery / Video -->
        <#assign bgType = themeAttr('kc.backgroundType', properties.backgroundType!)>
        <#assign bgPath = themeAttr('kc.backgroundPath', properties.backgroundPath!)>
        <#assign bgImageData = themeAttr('kc.backgroundImage', '')>
        <div class="visual-column">
            <#if bgImageData?has_content>
                <div class="background-image" style="background-image: url('${bgImageData}');"></div>
            <#elseif bgType == "video" && bgPath?has_content>
                <video class="background-media" autoplay muted loop playsinline>
                    <source src="${url.resourcesPath}/${bgPath}" type="video/mp4">
                </video>
            <#elseif bgPath?has_content>
                <div class="background-image" style="background-image: url('${url.resourcesPath}/${bgPath}');"></div>
            </#if>
            <div class="background-overlay"></div>
        </div>
    </div>
    <#nested "scripts">
</body>
</html>
</#macro>
