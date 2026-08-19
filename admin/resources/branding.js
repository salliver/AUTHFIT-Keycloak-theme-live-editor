const FONT_PRESETS = [
  { value: "", label: "Theme default" },
  {
    value: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    label: "System default (Segoe UI)",
  },
  { value: "Arial, Helvetica, sans-serif", label: "Arial" },
  { value: "Verdana, Geneva, sans-serif", label: "Verdana" },
  { value: "Georgia, 'Times New Roman', serif", label: "Georgia" },
  { value: "'Courier New', Courier, monospace", label: "Courier New" },
  {
    value: "'Inter', system-ui, sans-serif",
    label: "Inter (Google Fonts)",
    url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
  },
  {
    value: "Roboto, 'Helvetica Neue', Arial, sans-serif",
    label: "Roboto (Google Fonts)",
    url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  },
  {
    value: "'Open Sans', Helvetica, Arial, sans-serif",
    label: "Open Sans (Google Fonts)",
    url: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap",
  },
  {
    value: "Lato, 'Helvetica Neue', Arial, sans-serif",
    label: "Lato (Google Fonts)",
    url: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
  },
  {
    value: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
    label: "Montserrat (Google Fonts)",
    url: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap",
  },
  {
    value: "Poppins, system-ui, sans-serif",
    label: "Poppins (Google Fonts)",
    url: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
  },
  {
    value: "'Playfair Display', Georgia, serif",
    label: "Playfair Display (Google Fonts)",
    url: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap",
  },
];

const POPULAR_GOOGLE_FONTS = [
  "Bricolage Grotesque",
  "Inter",
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Poppins",
  "Playfair Display",
  "Oswald",
  "Raleway",
  "Nunito",
  "Nunito Sans",
  "PT Sans",
  "PT Serif",
  "Merriweather",
  "Noto Sans",
  "Noto Serif",
  "Work Sans",
  "Archivo",
  "Archivo Black",
  "Archivo Narrow",
  "Jost",
  "Figtree",
  "Sora",
  "Space Grotesk",
  "Manrope",
  "Plus Jakarta Sans",
  "Be Vietnam Pro",
  "DM Sans",
  "DM Serif Display",
  "Source Sans 3",
  "Source Serif 4",
  "Libre Franklin",
  "Cormorant Garamond",
  "Bebas Neue",
  "Anton",
  "Fira Sans",
  "IBM Plex Sans",
  "IBM Plex Mono",
  "JetBrains Mono",
  "Fira Code",
  "Roboto Mono",
  "Caveat",
  "Pacifico",
  "Sacramento",
];

const SECTIONS = [
  {
    title: "Layout",
    fields: [
      {
        key: "layoutSide",
        label: "Login card side",
        type: "select",
        attr: "kc.layoutSide",
        def: "left",
        options: ["left", "right"],
        hint: "Which side the login card sits on. The background fills the other side.",
      },
      {
        key: "formColumnWidth",
        label: "Form column width",
        type: "text",
        attr: "kc.formColumnWidth",
        def: "45%",
        hint: "Width of the side holding the card, e.g. 45%. Enter a plain number for percent.",
      },
      {
        key: "visualColumnWidth",
        label: "Background column width",
        type: "text",
        attr: "kc.visualColumnWidth",
        def: "55%",
        hint: "Width of the side holding the image/video, e.g. 55%. Keep both near 100% combined.",
      },
    ],
  },
  {
    title: "Background",
    fields: [
      {
        key: "backgroundType",
        label: "Background type",
        type: "select",
        attr: "kc.backgroundType",
        def: "image",
        options: ["image", "video"],
      },
      {
        key: "backgroundPath",
        label: "Background image / video",
        type: "text",
        attr: "kc.backgroundPath",
        def: "",
        hint: "File inside login/resources/img/, e.g. img/my-background.jpg",
      },
      {
        key: "backgroundImage",
        label: "Uploaded background image",
        type: "file",
        attr: "kc.backgroundImage",
        def: "",
        hint: "Upload a PNG, JPG or WebP. It takes precedence over the file above; Remove to fall back to it.",
      },
      {
        key: "backgroundFit",
        label: "Background fit",
        type: "select",
        attr: "kc.backgroundFit",
        def: "cover",
        options: ["cover", "contain", "fill", "auto"],
        hint: "How the image/video fills the panel: cover crops to fill, contain shows it whole, fill stretches it, auto shows natural size.",
      },
      {
        key: "bgVisualColor",
        label: "Panel background color",
        type: "color",
        attr: "kc.bgVisualColor",
        def: "#0a192f",
        hint: "Fallback color of the visual panel.",
      },
      {
        key: "bgOverlayColor",
        label: "Overlay color",
        type: "color",
        attr: "kc.bgOverlayColor",
        def: "#0a192f",
        hint: "Tint layered over the image/video for readability.",
      },
      {
        key: "bgOverlayOpacity",
        label: "Overlay opacity",
        type: "text",
        attr: "kc.bgOverlayOpacity",
        def: "40",
        hint: "Percent (0-100), e.g. 40",
      },
    ],
  },
  {
    title: "Brand colors",
    fields: [
      {
        key: "primaryColor",
        label: "Primary color",
        type: "color",
        attr: "kc.primaryColor",
        def: "#2563eb",
        hint: "Buttons, links and focus ring.",
      },
      {
        key: "primaryHover",
        label: "Primary hover color",
        type: "color",
        attr: "kc.primaryHover",
        def: "#1d4ed8",
      },
      {
        key: "linkColor",
        label: "Link color",
        type: "color",
        attr: "kc.linkColor",
        def: "",
        swatch: "#2563eb",
        hint: "Blank = follow primary color. Clear the hex field to reset.",
      },
      {
        key: "textColor",
        label: "Text color",
        type: "color",
        attr: "kc.textColor",
        def: "#0f172a",
      },
      {
        key: "textMuted",
        label: "Muted text color",
        type: "color",
        attr: "kc.textMuted",
        def: "#64748b",
        hint: "Secondary text, hints and labels.",
      },
      {
        key: "titleColor",
        label: "Title color",
        type: "color",
        attr: "kc.titleColor",
        def: "",
        swatch: "#0f172a",
        hint: "Blank = follow text color. Clear the hex field to reset.",
      },
      {
        key: "bgPage",
        label: "Page background color",
        type: "color",
        attr: "kc.bgPage",
        def: "#f8fafc",
      },
      {
        key: "formBgColor",
        label: "Form background color",
        type: "color",
        attr: "kc.formBgColor",
        def: "#ffffff",
      },
      {
        key: "borderColor",
        label: "Border color",
        type: "color",
        attr: "kc.borderColor",
        def: "#e2e8f0",
        hint: "Inputs, dividers and provider buttons.",
      },
      {
        key: "errorColor",
        label: "Error color",
        type: "color",
        attr: "kc.errorColor",
        def: "#dc2626",
      },
      {
        key: "bgPageGradient",
        label: "Page background: type",
        type: "select",
        attr: "kc.bgPageGradient",
        def: "solid",
        options: ["solid", "gradient"],
        hint: "Gradient uses the start/end colors below. Blank colors fall back to the solid color.",
      },
      {
        key: "bgPageGradientStart",
        label: "Page gradient start color",
        type: "color",
        attr: "kc.bgPageGradientStart",
        def: "",
        swatch: "#f8fafc",
      },
      {
        key: "bgPageGradientEnd",
        label: "Page gradient end color",
        type: "color",
        attr: "kc.bgPageGradientEnd",
        def: "",
        swatch: "#e2e8f0",
      },
      {
        key: "bgPageGradientAngle",
        label: "Page gradient angle",
        type: "text",
        attr: "kc.bgPageGradientAngle",
        def: "",
        hint: "e.g. 135deg, 180, or to bottom right",
      },
      {
        key: "formBgGradient",
        label: "Form background: type",
        type: "select",
        attr: "kc.formBgGradient",
        def: "solid",
        options: ["solid", "gradient"],
      },
      {
        key: "formBgGradientStart",
        label: "Form gradient start color",
        type: "color",
        attr: "kc.formBgGradientStart",
        def: "",
        swatch: "#ffffff",
      },
      {
        key: "formBgGradientEnd",
        label: "Form gradient end color",
        type: "color",
        attr: "kc.formBgGradientEnd",
        def: "",
        swatch: "#f1f5f9",
      },
      {
        key: "formBgGradientAngle",
        label: "Form gradient angle",
        type: "text",
        attr: "kc.formBgGradientAngle",
        def: "",
        hint: "e.g. 135deg, 180, or to bottom right",
      },
      {
        key: "bgVisualGradient",
        label: "Panel background: type",
        type: "select",
        attr: "kc.bgVisualGradient",
        def: "solid",
        options: ["solid", "gradient"],
        hint: "Visible where no image/video covers the panel.",
      },
      {
        key: "bgVisualGradientStart",
        label: "Panel gradient start color",
        type: "color",
        attr: "kc.bgVisualGradientStart",
        def: "",
        swatch: "#0a192f",
      },
      {
        key: "bgVisualGradientEnd",
        label: "Panel gradient end color",
        type: "color",
        attr: "kc.bgVisualGradientEnd",
        def: "",
        swatch: "#1e3a5f",
      },
      {
        key: "bgVisualGradientAngle",
        label: "Panel gradient angle",
        type: "text",
        attr: "kc.bgVisualGradientAngle",
        def: "",
        hint: "e.g. 135deg, 180, or to bottom right",
      },
    ],
  },
  {
    title: "Typography",
    fields: [
      {
        key: "fontFamily",
        label: "Font family",
        type: "select",
        attr: "kc.fontFamily",
        def: "",
        options: FONT_PRESETS,
        syncUrl: "fontUrl",
        hint: "Pick a preset; web fonts are loaded automatically.",
      },
      {
        key: "googleFont",
        label: "Add a Google Font",
        type: "googleFont",
        hint: "Type a family name (e.g. Bricolage Grotesque) and press Add. Validated live against fonts.googleapis.com; the resulting stack and stylesheet URL are stored with the realm.",
      },
      {
        key: "fontUrl",
        label: "Web font stylesheet URL",
        type: "text",
        attr: "kc.fontUrl",
        def: "",
        hint: "Auto-filled by the font preset. Paste a custom Google Fonts / CDN URL for an unlisted web font.",
      },
      {
        key: "titleSize",
        label: "Title size",
        type: "text",
        attr: "kc.titleSize",
        def: "1.5rem",
        hint: "e.g. 1.5rem",
      },
      {
        key: "labelSize",
        label: "Label size",
        type: "text",
        attr: "kc.labelSize",
        def: "0.9rem",
        hint: "e.g. 0.9rem",
      },
      {
        key: "inputSize",
        label: "Input size",
        type: "text",
        attr: "kc.inputSize",
        def: "1rem",
        hint: "e.g. 1rem",
      },
      {
        key: "inputPadding",
        label: "Input field height",
        type: "text",
        attr: "kc.inputPadding",
        def: "0.75rem",
        hint: "Vertical padding of the fields, e.g. 0.75rem",
      },
      {
        key: "titleWeight",
        label: "Title font weight",
        type: "select",
        attr: "kc.titleWeight",
        def: "700",
        options: ["400", "500", "600", "700", "800", "900"],
      },
      {
        key: "labelWeight",
        label: "Label font weight",
        type: "select",
        attr: "kc.labelWeight",
        def: "600",
        options: ["400", "500", "600", "700", "800", "900"],
      },
      {
        key: "inputWeight",
        label: "Input font weight",
        type: "select",
        attr: "kc.inputWeight",
        def: "400",
        options: ["400", "500", "600", "700", "800", "900"],
        hint: "Weight of the text typed inside the fields.",
      },
      {
        key: "buttonWeight",
        label: "Button font weight",
        type: "select",
        attr: "kc.buttonWeight",
        def: "600",
        options: ["400", "500", "600", "700", "800", "900"],
      },
    ],
  },
  {
    title: "Texts",
    fields: [
      {
        key: "loginTitle",
        label: "Login title",
        type: "text",
        attr: "kc.loginTitle",
        def: "",
        hint: "Heading above the form. Blank = default message.",
      },
      {
        key: "loginButtonText",
        label: "Login button label",
        type: "text",
        attr: "kc.loginButtonText",
        def: "",
        hint: "Text of the submit button. Blank = default message.",
      },
      {
        key: "usernameLabel",
        label: "Username / email label",
        type: "text",
        attr: "kc.usernameLabel",
        def: "",
        hint: "Blank = default based on realm settings.",
      },
      {
        key: "passwordLabel",
        label: "Password label",
        type: "text",
        attr: "kc.passwordLabel",
        def: "",
        hint: "Blank = default message.",
      },
      {
        key: "footerText",
        label: "Footer / copyright text",
        type: "text",
        attr: "kc.footerText",
        def: "",
        hint: "Shown under the login card, e.g. © 2026 - Marfi srl",
      },
    ],
  },
  {
    title: "Logo",
    fields: [
      {
        key: "logoImage",
        label: "Uploaded logo image",
        type: "file",
        attr: "kc.logoImage",
        def: "",
        hint: "Upload a PNG, JPG or WebP. It takes precedence over the theme logo; Remove to fall back to it.",
      },
      {
        key: "logoMaxWidth",
        label: "Logo max width",
        type: "text",
        attr: "kc.logoMaxWidth",
        def: "180px",
        hint: "e.g. 180px",
      },
      {
        key: "logoMaxHeight",
        label: "Logo max height",
        type: "text",
        attr: "kc.logoMaxHeight",
        def: "80px",
        hint: "e.g. 80px",
      },
      {
        key: "logoPositionMode",
        label: "Logo position",
        type: "select",
        attr: "kc.logoPositionMode",
        def: "default",
        options: [
          { value: "default", label: "Centered (default)" },
          { value: "margin", label: "Custom margins" },
          { value: "absolute", label: "Absolute (over the card)" },
        ],
      },
      {
        key: "logoMarginTop",
        label: "Logo margin top",
        type: "text",
        attr: "kc.logoMarginTop",
        def: "",
        hint: "Custom margins mode. e.g. 24px. Blank = auto.",
      },
      {
        key: "logoMarginBottom",
        label: "Logo margin bottom",
        type: "text",
        attr: "kc.logoMarginBottom",
        def: "",
        hint: "e.g. 24px. Blank = auto.",
      },
      {
        key: "logoMarginLeft",
        label: "Logo margin left",
        type: "text",
        attr: "kc.logoMarginLeft",
        def: "",
        hint: "e.g. 24px. Blank = auto (centered).",
      },
      {
        key: "logoMarginRight",
        label: "Logo margin right",
        type: "text",
        attr: "kc.logoMarginRight",
        def: "",
        hint: "e.g. 24px. Blank = auto (centered).",
      },
      {
        key: "logoPosLeft",
        label: "Logo position left",
        type: "text",
        attr: "kc.logoPosLeft",
        def: "",
        hint: "Absolute mode, relative to the login card. Percent, e.g. 8. Blank = auto.",
      },
      {
        key: "logoPosRight",
        label: "Logo position right",
        type: "text",
        attr: "kc.logoPosRight",
        def: "",
        hint: "Percent, e.g. 8. Blank = auto.",
      },
      {
        key: "logoPosTop",
        label: "Logo position top",
        type: "text",
        attr: "kc.logoPosTop",
        def: "",
        hint: "Percent, e.g. 5. Blank = auto.",
      },
      {
        key: "logoPosBottom",
        label: "Logo position bottom",
        type: "text",
        attr: "kc.logoPosBottom",
        def: "",
        hint: "Percent, e.g. 5. Blank = auto.",
      },
    ],
  },
  {
    title: "Shape",
    fields: [
      {
        key: "cardMaxWidth",
        label: "Form card max width",
        type: "text",
        attr: "kc.cardMaxWidth",
        def: "420px",
        hint: "e.g. 420px",
      },
      {
        key: "cardPadding",
        label: "Form card padding",
        type: "text",
        attr: "kc.cardPadding",
        def: "2.5rem",
        hint: "e.g. 2.5rem",
      },
      {
        key: "cardRadius",
        label: "Form card radius",
        type: "text",
        attr: "kc.cardRadius",
        def: "16px",
        hint: "e.g. 16px",
      },
      {
        key: "inputRadius",
        label: "Input / button radius",
        type: "text",
        attr: "kc.inputRadius",
        def: "8px",
        hint: "e.g. 8px",
      },
      {
        key: "shadowCard",
        label: "Form card shadow",
        type: "text",
        attr: "kc.shadowCard",
        def: "0 10px 40px rgba(15, 23, 42, 0.08)",
        hint: "CSS box-shadow, e.g. 0 10px 40px rgba(15,23,42,0.08). A single number sets the blur; invalid values are ignored.",
      },
      {
        key: "btnWidth",
        label: "Login button width",
        type: "text",
        attr: "kc.btnWidth",
        def: "100%",
        hint: "e.g. 100%, auto, or 320px",
      },
      {
        key: "btnMinHeight",
        label: "Login button height",
        type: "text",
        attr: "kc.btnMinHeight",
        def: "",
        hint: "Minimum height, e.g. 48px",
      },
      {
        key: "btnRadius",
        label: "Login button radius",
        type: "text",
        attr: "kc.btnRadius",
        def: "",
        hint: "Blank = same as input radius.",
      },
      {
        key: "btnTextTransform",
        label: "Login button text transform",
        type: "select",
        attr: "kc.btnTextTransform",
        def: "none",
        options: ["none", "uppercase", "capitalize", "lowercase"],
      },
      {
        key: "btnLetterSpacing",
        label: "Login button letter spacing",
        type: "text",
        attr: "kc.btnLetterSpacing",
        def: "",
        hint: "e.g. 0.05em",
      },
    ],
  },
  {
    title: "Presets",
    fields: [
      {
        key: "presetName",
        label: "Preset name",
        type: "text",
        def: "",
        hint: "Used for the exported file name.",
      },
      {
        key: "presets",
        label: "Presets",
        type: "presets",
        hint: "Export the current values as a .afit file (or copy as JSON) and import .afit / .json files, or paste their content below. Importing fills the fields — press Save to apply them to the realm.",
      },
    ],
  },
];

const FIELDS = SECTIONS.flatMap((s) => s.fields);

const MAX_BG_IMAGE_BYTES = 1024 * 1024;

let bearerToken = null;
let refreshEndpoint = null;
let refreshToken = null;
const originalFetch = window.fetch;
window.fetch = function (input, init) {
  try {
    const auth = extractAuth(init);
    if (auth) bearerToken = auth;
    const url = typeof input === "string" ? input : input && input.url;
    if (url && /\/protocol\/openid-connect\/token/.test(url)) {
      refreshEndpoint = url;
      const p = originalFetch.apply(this, arguments);
      p.then((res) => {
        if (!res.ok) return;
        res
          .clone()
          .text()
          .then((body) => {
            try {
              const data = JSON.parse(body);
              if (data.access_token) bearerToken = data.access_token;
              if (data.refresh_token) refreshToken = data.refresh_token;
            } catch (e) {}
          });
      }).catch(() => {});
      return p;
    }
  } catch (e) {}
  return originalFetch.apply(this, arguments);
};

async function refreshAccessToken() {
  if (!refreshEndpoint || !refreshToken) return null;
  try {
    const body = new URLSearchParams();
    body.set("grant_type", "refresh_token");
    body.set("refresh_token", refreshToken);
    body.set("client_id", env.clientId || "security-admin-console");
    const res = await fetch(refreshEndpoint, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.access_token) return null;
    if (data.refresh_token) refreshToken = data.refresh_token;
    bearerToken = data.access_token;
    return data.access_token;
  } catch (e) {
    return null;
  }
}

function extractAuth(init) {
  const h = init && init.headers;
  if (!h) return null;
  let auth = null;
  if (typeof h.get === "function") {
    auth = h.get("authorization") || h.get("Authorization");
  } else if (Array.isArray(h)) {
    for (const [k, v] of h)
      if (String(k).toLowerCase() === "authorization") auth = v;
  } else if (typeof h === "object") {
    auth = h["authorization"] || h["Authorization"];
  }
  if (typeof auth === "string" && auth.startsWith("Bearer "))
    return auth.slice(7);
  return null;
}

function getEnv() {
  const el = document.getElementById("environment");
  if (!el) return {};
  try {
    return JSON.parse(el.textContent);
  } catch (e) {
    return {};
  }
}

const env = getEnv();
const baseUrl = env.serverBaseUrl || env.adminBaseUrl || "";

async function api(path, options) {
  const headers = Object.assign(
    { "Content-Type": "application/json", Accept: "application/json" },
    (options && options.headers) || {},
  );
  if (bearerToken) headers["Authorization"] = "Bearer " + bearerToken;
  let res = await fetch(
    baseUrl + path,
    Object.assign({}, options, { headers }),
  );
  if (res.status === 401) {
    const fresh = await refreshAccessToken();
    if (fresh) {
      headers["Authorization"] = "Bearer " + fresh;
      res = await fetch(
        baseUrl + path,
        Object.assign({}, options, { headers }),
      );
    }
  }
  if (res.status === 401) {
    const err = new Error("AUTH_EXPIRED");
    err.status = 401;
    throw err;
  }
  if (!res.ok) throw new Error("HTTP " + res.status);
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

const colorInputs = {};
const hexInputs = {};
const fileValues = {};
const filePreviews = {};
const fileRemoveButtons = {};
let overlayEl;
let customFonts = [];
let googleFontWidget = null;

function build() {
  const fabEl = document.createElement("button");
  fabEl.id = "mio-branding-fab";
  fabEl.type = "button";
  fabEl.textContent = "Branding";
  fabEl.addEventListener("click", openOverlay);
  document.body.appendChild(fabEl);

  overlayEl = document.createElement("div");
  overlayEl.id = "mio-branding-overlay";
  overlayEl.innerHTML = `
    <div class="mio-branding-card">
      <div class="mio-branding-head">
        <h2>Login theme branding</h2>
        <button type="button" class="mio-branding-close" aria-label="Close">&times;</button>
      </div>
      <div class="mio-branding-body">
        <p class="mio-branding-msg" data-msg></p>
        <div class="mio-branding-row">
          <label for="mio-branding-realm">Realm</label>
          <select id="mio-branding-realm"></select>
          <span class="mio-hint">Changes are stored per realm and shown by the login theme.</span>
        </div>
        <hr class="mio-branding-sep">
        <div class="mio-branding-layout">
          <nav class="mio-branding-nav" data-nav></nav>
          <div class="mio-branding-panels" data-fields></div>
          <aside class="mio-branding-preview-pane" data-preview-pane>
            <div class="mio-branding-preview-head">
              <span>Live preview</span>
              <button type="button" class="mio-branding-preview-toggle" data-preview-toggle aria-label="Toggle preview" aria-expanded="true">&minus;</button>
            </div>
            <div class="mio-branding-preview" data-preview>
              <div class="preview-split">
                <div class="preview-form-col">
                  <div class="preview-card">
                    <div class="preview-logo" data-preview-logo>
                      <span class="preview-logo-fallback">LOGO</span>
                      <img class="preview-logo-img" data-preview-logo-img alt="" />
                    </div>
                    <h3 class="preview-title">Sign in to your account</h3>
                    <div class="preview-group">
                      <label class="preview-label">Username</label>
                      <div class="preview-input">john.doe</div>
                    </div>
                    <div class="preview-group">
                      <label class="preview-label">Password</label>
                      <div class="preview-input">&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</div>
                    </div>
                    <div class="preview-options">
                      <span class="preview-check"><span class="preview-checkbox"></span>Remember me</span>
                      <a class="preview-link">Forgot password?</a>
                    </div>
                    <div class="preview-btn">Sign In</div>
                    <div class="preview-social">
                      <div class="preview-divider"><span>or</span></div>
                      <div class="preview-provider">Sign in with Google</div>
                    </div>
                    <div class="preview-info">No account? <a class="preview-link">Register</a></div>
                  </div>
                  <div class="preview-footer" style="display:none"></div>
                </div>
                <div class="preview-visual">
                  <div class="preview-bg" data-preview-bg></div>
                  <div class="preview-overlay"></div>
                  <span class="preview-video-note" data-preview-video>Video background</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div class="mio-branding-foot">
          <span class="mio-branding-version" data-version></span>
          <button type="button" class="mio-branding-btn mio-branding-btn-cancel" data-action="cancel">Cancel</button>
          <button type="button" class="mio-branding-btn mio-branding-btn-save" data-action="save">Save</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlayEl);

  overlayEl
    .querySelector(".mio-branding-close")
    .addEventListener("click", closeOverlay);
  overlayEl
    .querySelector('[data-action="cancel"]')
    .addEventListener("click", closeOverlay);
  overlayEl
    .querySelector('[data-action="save"]')
    .addEventListener("click", saveBranding);
  overlayEl
    .querySelector("#mio-branding-realm")
    .addEventListener("change", loadValues);
  overlayEl
    .querySelector("[data-preview-toggle]")
    .addEventListener("click", togglePreview);

  const navEl = overlayEl.querySelector("[data-nav]");
  const fieldsWrap = overlayEl.querySelector("[data-fields]");
  fieldsWrap.addEventListener("input", updatePreview);
  fieldsWrap.addEventListener("change", updatePreview);
  navEl.setAttribute("role", "tablist");
  SECTIONS.forEach((section, idx) => {
    const navBtn = document.createElement("button");
    navBtn.type = "button";
    navBtn.className = "mio-branding-tab";
    navBtn.dataset.tab = idx;
    navBtn.setAttribute("role", "tab");
    navBtn.setAttribute("aria-selected", "false");
    navBtn.textContent = section.title;
    navBtn.addEventListener("click", () => activateSection(idx));
    navEl.appendChild(navBtn);

    const panel = document.createElement("div");
    panel.className = "mio-branding-section";
    panel.dataset.panel = idx;
    panel.setAttribute("role", "tabpanel");
    fieldsWrap.appendChild(panel);

    const heading = document.createElement("h3");
    heading.className = "mio-branding-section-title";
    heading.textContent = section.title;
    panel.appendChild(heading);

    section.fields.forEach((f) => {
      const row = document.createElement("div");
      const full =
        f.type === "select" ||
        f.type === "file" ||
        f.type === "color" ||
        f.type === "googleFont";
      row.className =
        "mio-branding-row" +
        (full ? " mio-branding-row--full" : " mio-branding-row--half");
      panel.appendChild(row);

      const label = document.createElement("label");
      label.htmlFor = "mio-field-" + f.key;
      label.textContent = f.label;
      row.appendChild(label);

      if (f.type === "select") {
        const select = document.createElement("select");
        select.id = "mio-field-" + f.key;
        select.dataset.field = f.key;
        (f.options || []).forEach((o) => {
          const opt = document.createElement("option");
          if (o && typeof o === "object") {
            opt.value = o.value;
            opt.textContent = o.label;
          } else {
            opt.value = o;
            opt.textContent = o;
          }
          select.appendChild(opt);
        });
        if (f.syncUrl) {
          select.addEventListener("change", () => onFontSelectChange(select));
        }
        row.appendChild(select);
      } else if (f.type === "color") {
        const pair = document.createElement("div");
        pair.className = "mio-color-pair";
        const color = document.createElement("input");
        color.type = "color";
        color.id = "mio-field-" + f.key;
        color.dataset.field = f.key;
        const hex = document.createElement("input");
        hex.type = "text";
        hex.dataset.field = f.key;
        hex.spellcheck = false;
        color.addEventListener("input", () => {
          hex.value = color.value;
        });
        hex.addEventListener("input", () => {
          const v = hex.value.trim();
          if (/^#[0-9a-fA-F]{6}$/.test(v)) color.value = v;
        });
        colorInputs[f.key] = color;
        hexInputs[f.key] = hex;
        pair.appendChild(color);
        pair.appendChild(hex);
        row.appendChild(pair);
      } else if (f.type === "file") {
        const wrap = document.createElement("div");
        wrap.className = "mio-file-field";

        const preview = document.createElement("div");
        preview.className = "mio-file-preview";
        const img = document.createElement("img");
        img.alt = f.label + " preview";
        preview.appendChild(img);

        const actions = document.createElement("div");
        actions.className = "mio-file-actions";

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/png,image/jpeg,image/webp,image/gif";
        fileInput.style.display = "none";

        const uploadBtn = document.createElement("button");
        uploadBtn.type = "button";
        uploadBtn.className = "mio-branding-btn mio-branding-btn-upload";
        uploadBtn.textContent = "Upload image";

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "mio-branding-btn mio-branding-btn-remove";
        removeBtn.textContent = "Remove";
        removeBtn.style.display = "none";

        const applyFile = (file) => {
          if (!file) return;
          if (file.size > MAX_BG_IMAGE_BYTES) {
            setMsg(
              "error",
              "Image too large. Maximum size is " +
                Math.round(MAX_BG_IMAGE_BYTES / 1024) +
                " KB.",
            );
            return;
          }
          const reader = new FileReader();
          reader.onload = () => {
            fileValues[f.key] = reader.result;
            img.src = reader.result;
            preview.style.display = "block";
            removeBtn.style.display = "inline-block";
            updatePreview();
          };
          reader.readAsDataURL(file);
        };

        uploadBtn.addEventListener("click", () => fileInput.click());
        fileInput.addEventListener("change", () => {
          applyFile(fileInput.files && fileInput.files[0]);
          fileInput.value = "";
        });
        wrap.addEventListener("dragover", (e) => {
          e.preventDefault();
          wrap.classList.add("mio-drop");
        });
        wrap.addEventListener("dragleave", () =>
          wrap.classList.remove("mio-drop"),
        );
        wrap.addEventListener("drop", (e) => {
          e.preventDefault();
          wrap.classList.remove("mio-drop");
          applyFile(
            e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0],
          );
        });
        removeBtn.addEventListener("click", () => {
          delete fileValues[f.key];
          img.removeAttribute("src");
          preview.style.display = "none";
          removeBtn.style.display = "none";
          updatePreview();
        });

        actions.appendChild(uploadBtn);
        actions.appendChild(removeBtn);
        actions.appendChild(fileInput);
        wrap.appendChild(preview);
        wrap.appendChild(actions);
        row.appendChild(wrap);

        filePreviews[f.key] = img;
        fileRemoveButtons[f.key] = removeBtn;
      } else if (f.type === "googleFont") {
        const list = document.createElement("datalist");
        list.id = "mio-google-font-list";
        POPULAR_GOOGLE_FONTS.forEach((name) => {
          const opt = document.createElement("option");
          opt.value = name;
          list.appendChild(opt);
        });
        document.body.appendChild(list);

        const addWrap = document.createElement("div");
        addWrap.className = "mio-google-add";

        const input = document.createElement("input");
        input.type = "text";
        input.id = "mio-field-" + f.key;
        input.dataset.field = f.key;
        input.setAttribute("list", list.id);
        input.placeholder = "e.g. Bricolage Grotesque";

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "mio-branding-btn mio-branding-btn-upload";
        addBtn.textContent = "Add";

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "mio-branding-btn mio-branding-btn-remove";
        removeBtn.textContent = "Remove";
        removeBtn.style.display = "none";

        const status = document.createElement("span");
        status.className = "mio-google-status";

        addBtn.addEventListener("click", () =>
          addGoogleFont(input.value, status, addBtn),
        );
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addGoogleFont(input.value, status, addBtn);
          }
        });
        removeBtn.addEventListener("click", () => removeCustomFont());

        addWrap.appendChild(input);
        addWrap.appendChild(addBtn);
        addWrap.appendChild(removeBtn);
        row.appendChild(addWrap);
        row.appendChild(status);

        googleFontWidget = { input, addBtn, removeBtn, status };
      } else if (f.type === "presets") {
        const wrap = document.createElement("div");
        wrap.className = "mio-presets";

        const btns = document.createElement("div");
        btns.className = "mio-presets-btns";

        const exportBtn = document.createElement("button");
        exportBtn.type = "button";
        exportBtn.className = "mio-branding-btn mio-branding-btn-upload";
        exportBtn.textContent = "Export .afit";
        exportBtn.addEventListener("click", exportPreset);

        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "mio-branding-btn mio-branding-btn-upload";
        copyBtn.textContent = "Copy JSON";
        copyBtn.addEventListener("click", copyPresetJson);

        const importLabel = document.createElement("label");
        importLabel.className = "mio-branding-btn mio-branding-btn-upload";
        importLabel.textContent = "Import .afit / .json";

        const presetFileInput = document.createElement("input");
        presetFileInput.type = "file";
        presetFileInput.accept = ".afit,.json,application/json";
        presetFileInput.className = "mio-file-input-sr";
        presetFileInput.setAttribute("aria-label", "Import .afit / .json file");

        presetFileInput.addEventListener("change", () => {
          const file = presetFileInput.files && presetFileInput.files[0];
          if (!file) {
            setMsg("error", "No file selected.");
            return;
          }
          importPresetFile(file);
          presetFileInput.value = "";
        });

        const pasteArea = document.createElement("textarea");
        pasteArea.className = "mio-preset-paste";
        pasteArea.placeholder =
          "…or paste the .afit / JSON content here and press Apply";

        const applyPasteBtn = document.createElement("button");
        applyPasteBtn.type = "button";
        applyPasteBtn.className = "mio-branding-btn mio-branding-btn-upload";
        applyPasteBtn.textContent = "Apply paste";
        applyPasteBtn.addEventListener("click", () => {
          try {
            applyPreset(pasteArea.value);
          } catch (e) {
            setMsg("error", "Import failed: " + e.message);
          }
        });

        btns.appendChild(exportBtn);
        btns.appendChild(copyBtn);
        btns.appendChild(importLabel);
        importLabel.appendChild(presetFileInput);
        wrap.appendChild(btns);
        wrap.appendChild(pasteArea);
        wrap.appendChild(applyPasteBtn);
        row.appendChild(wrap);
      } else {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "mio-field-" + f.key;
        input.dataset.field = f.key;
        row.appendChild(input);
      }

      if (f.hint) {
        const hint = document.createElement("span");
        hint.className = "mio-hint";
        hint.textContent = f.hint;
        row.appendChild(hint);
      }
    });
  });
  activateSection(0);
}

function activateSection(idx) {
  overlayEl.querySelectorAll(".mio-branding-tab").forEach((btn) => {
    const active = Number(btn.dataset.tab) === idx;
    btn.classList.toggle("mio-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
  overlayEl.querySelectorAll(".mio-branding-section").forEach((panel) => {
    panel.classList.toggle("mio-active", Number(panel.dataset.panel) === idx);
  });
}

function setMsg(type, text) {
  const msg = overlayEl.querySelector("[data-msg]");
  msg.className = "mio-branding-msg " + (type ? "mio-" + type : "");
  msg.textContent = text || "";
}

function setFieldValue(f, value) {
  if (f.type === "color") {
    if (value) {
      colorInputs[f.key].value = value;
      hexInputs[f.key].value = value;
    } else {
      colorInputs[f.key].value = f.swatch || f.def || "#000000";
      hexInputs[f.key].value = "";
    }
  } else if (f.type === "file") {
    const img = filePreviews[f.key];
    const rm = fileRemoveButtons[f.key];
    if (value) {
      fileValues[f.key] = value;
      if (img) {
        img.src = value;
        img.parentElement.style.display = "block";
      }
      if (rm) rm.style.display = "inline-block";
    } else {
      delete fileValues[f.key];
      if (img) {
        img.removeAttribute("src");
        img.parentElement.style.display = "none";
      }
      if (rm) rm.style.display = "none";
    }
  } else if (f.type === "select") {
    const input = overlayEl.querySelector('[data-field="' + f.key + '"]');
    if (!input) return;
    const val = value || f.def || "";
    for (let i = input.options.length - 1; i >= 0; i--) {
      if (input.options[i].dataset.custom) input.remove(i);
    }
    const hasOption = Array.prototype.some.call(
      input.options,
      (o) => o.value === val,
    );
    if (!hasOption && val) {
      const opt = document.createElement("option");
      opt.value = val;
      opt.dataset.custom = "1";
      opt.textContent = "Custom: " + val;
      input.appendChild(opt);
    }
    input.value = val;
  } else {
    const input = overlayEl.querySelector('[data-field="' + f.key + '"]');
    if (input) input.value = value || f.def || "";
  }
}

function getFieldValue(f) {
  if (f.type === "color")
    return hexInputs[f.key] ? hexInputs[f.key].value.trim() : "";
  if (f.type === "file") return fileValues[f.key] || "";
  const input = overlayEl.querySelector('[data-field="' + f.key + '"]');
  return input ? input.value : "";
}

function realmSelect() {
  return overlayEl.querySelector("#mio-branding-realm");
}

function fieldDef(key) {
  return FIELDS.find((f) => f.key === key);
}

function rawValue(key) {
  return getFieldValue(fieldDef(key)).trim();
}

function themeResourcesBase(themeKey) {
  try {
    const link = document.querySelector('link[href*="branding.css"]');
    if (!link) return "";
    const url = new URL(link.href, window.location.href);
    const parts = url.pathname.split("/").filter(Boolean);
    const idx = parts.indexOf("resources");
    if (idx === -1) return "";
    const origin = url.origin;
    const theme = themeKey || (parts[idx + 1] || "");
    if (!theme) return "";
    return origin + "/resources/" + theme + "/login/";
  } catch (e) {}
  return "";
}

const imageCache = new Map();
let previewImgGen = 0;
let currentLoginTheme = "";

function findFirstImage(candidates) {
  return new Promise((resolve) => {
    let idx = 0;
    function next() {
      while (idx < candidates.length) {
        const url = candidates[idx++];
        if (!url) continue;
        if (imageCache.has(url)) {
          if (imageCache.get(url)) return resolve(url);
          continue;
        }
        const img = new Image();
        img.onload = () => {
          imageCache.set(url, true);
          resolve(url);
        };
        img.onerror = () => {
          imageCache.set(url, false);
          next();
        };
        img.src = url;
        return;
      }
      resolve("");
    }
    next();
  });
}

const PREVIEW_VARS = [
  ["primaryColor", "--primary-color", "#2563eb"],
  ["primaryHover", "--primary-hover", "#1d4ed8"],
  ["textColor", "--text-color", "#0f172a"],
  ["textMuted", "--text-muted", "#64748b"],
  ["bgPage", "--bg-page", "#f8fafc"],
  ["formBgColor", "--bg-card", "#ffffff"],
  ["bgVisualColor", "--bg-visual", "#0a192f"],
  ["borderColor", "--border-color", "#e2e8f0"],
  ["errorColor", "--error-color", "#dc2626"],
  [
    "fontFamily",
    "--font-family",
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  ],
  ["titleSize", "--title-size", "1.5rem"],
  ["labelSize", "--label-size", "0.9rem"],
  ["inputSize", "--input-size", "1rem"],
  ["inputPadding", "--input-padding-y", "0.75rem"],
  ["logoMaxWidth", "--logo-max-width", "180px"],
  ["logoMaxHeight", "--logo-max-height", "80px"],
  ["cardMaxWidth", "--card-max-width", "420px"],
  ["cardPadding", "--card-padding", "2.5rem"],
  ["cardRadius", "--radius-lg", "16px"],
  ["inputRadius", "--radius-sm", "8px"],
  ["shadowCard", "--shadow-card", "0 10px 40px rgba(15, 23, 42, 0.08)"],
  ["formColumnWidth", "--form-column-width", "45%"],
  ["visualColumnWidth", "--visual-column-width", "55%"],
  ["titleWeight", "--title-weight", "700"],
  ["labelWeight", "--label-weight", "600"],
  ["inputWeight", "--input-weight", "400"],
  ["buttonWeight", "--button-weight", "600"],
  ["btnWidth", "--btn-width", "100%"],
  ["btnMinHeight", "--btn-min-height", "auto"],
  ["btnRadius", "--btn-radius", "var(--radius-sm)"],
  ["btnTextTransform", "--btn-text-transform", "none"],
  ["btnLetterSpacing", "--btn-letter-spacing", "normal"],
];

const VERSION_DEFAULTS = { buildNumber: "1.2.3", releaseName: "Slate Raven" };

const SIZE_FIELDS = new Set([
  "titleSize",
  "labelSize",
  "inputSize",
  "inputPadding",
  "cardMaxWidth",
  "cardPadding",
  "cardRadius",
  "inputRadius",
  "logoMaxWidth",
  "logoMaxHeight",
  "logoMarginTop",
  "logoMarginBottom",
  "logoMarginLeft",
  "logoMarginRight",
  "btnWidth",
  "btnMinHeight",
  "btnRadius",
]);

const PERCENT_FIELDS = new Set([
  "formColumnWidth",
  "visualColumnWidth",
  "logoPosLeft",
  "logoPosRight",
  "logoPosTop",
  "logoPosBottom",
]);

const ANGLE_FIELDS = new Set([
  "bgPageGradientAngle",
  "formBgGradientAngle",
  "bgVisualGradientAngle",
]);

const COLOR_FIELDS = new Set([
  "primaryColor",
  "primaryHover",
  "linkColor",
  "textColor",
  "textMuted",
  "titleColor",
  "bgPage",
  "formBgColor",
  "bgVisualColor",
  "bgOverlayColor",
  "borderColor",
  "errorColor",
  "bgPageGradientStart",
  "bgPageGradientEnd",
  "formBgGradientStart",
  "formBgGradientEnd",
  "bgVisualGradientStart",
  "bgVisualGradientEnd",
]);

function normalizeFieldValue(f, value) {
  const v = (value || "").trim();
  if (!v) return "";
  const key = f && f.key;
  if (key === "bgOverlayOpacity") return v.replace(/%$/, "");
  if (key === "shadowCard") {
    let s = v
      .replace(/^\s*box-shadow\s*:\s*/i, "")
      .replace(/\s*!important\s*[,;]?\s*$/i, "")
      .replace(/[;,]\s*$/, "")
      .replace(/\s+/g, " ");
    s = s
      .split(/(\([^()]*\))/)
      .map((seg, i) =>
        i % 2 === 1
          ? seg
          : seg.replace(/(^|[\s,])(-?\d+(?:\.\d+)?)(?![\w.%])/g, "$1$2px"),
      )
      .join("");
    const singleNum = s.match(/^(-?\d+(?:\.\d+)?)px$/);
    if (singleNum)
      s = "0 " + Math.abs(Number(singleNum[1])) + "px 40px rgba(15, 23, 42, 0.15)";
    if (
      s &&
      typeof CSS !== "undefined" &&
      CSS.supports &&
      !CSS.supports("box-shadow", s)
    )
      return "";
    return s;
  }
  if (SIZE_FIELDS.has(key) && /^\d+(\.\d+)?$/.test(v)) return v + "px";
  if (PERCENT_FIELDS.has(key) && /^\d+(\.\d+)?$/.test(v)) return v + "%";
  if (ANGLE_FIELDS.has(key) && /^\d+(\.\d+)?$/.test(v)) return v + "deg";
  if (COLOR_FIELDS.has(key)) {
    const hex3or6 = /^#?[0-9a-fA-F]{3}$|^#?[0-9a-fA-F]{6}$/;
    if (hex3or6.test(v)) {
      return v.startsWith("#") ? v : "#" + v;
    }
    return ""; // valore non valido: scartato, ricade sul default del tema
  }
  return v:
}

function capFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function syncFontUrl(select) {
  const preset = FONT_PRESETS.find(
    (o) => o && typeof o === "object" && o.value === select.value,
  );
  const urlInput = overlayEl.querySelector('[data-field="fontUrl"]');
  if (!urlInput) return;
  urlInput.value = preset && preset.url ? preset.url : "";
  updatePreview();
}

function onFontSelectChange(select) {
  syncFontUrl(select);
  updateCustomFontControls();
}

function updateCustomFontControls() {
  if (!googleFontWidget) return;
  const select = overlayEl.querySelector('[data-field="fontFamily"]');
  const stack = select ? select.value : "";
  const isCustom = customFonts.some((c) => c.stack === stack);
  googleFontWidget.removeBtn.style.display = isCustom ? "inline-block" : "none";
}

function setGoogleStatus(el, type, text) {
  if (!el) return;
  el.textContent = text || "";
  el.className = "mio-google-status" + (type ? " mio-" + type : "");
}

function css2Url(family, weightParam) {
  const encoded = family.trim().split(/\s+/).map(encodeURIComponent).join("+");
  return (
    "https://fonts.googleapis.com/css2?family=" +
    encoded +
    weightParam +
    "&display=swap"
  );
}

function googleReachable() {
  return fetch(css2Url("Inter", ""))
    .then(() => true)
    .catch(() => false);
}

const FONT_WEIGHT_CANDIDATES = [
  ":wght@400;600;700",
  ":wght@400",
  ":wght@700",
  "",
];

async function addGoogleFont(name, statusEl, btn) {
  const family = (name || "").trim();
  if (!family) return;
  if (btn) btn.disabled = true;
  try {
    if (!(await googleReachable())) {
      setGoogleStatus(
        statusEl,
        "error",
        "Cannot reach fonts.googleapis.com. Check the network.",
      );
      return;
    }
    let chosen = null;
    for (const w of FONT_WEIGHT_CANDIDATES) {
      try {
        const res = await fetch(css2Url(family, w));
        if (res.ok) {
          chosen = w;
          break;
        }
      } catch (e) {}
    }
    if (chosen === null) {
      setGoogleStatus(
        statusEl,
        "error",
        'Font "' + family + '" not found on Google Fonts.',
      );
      return;
    }
    const stack = "'" + family + "', system-ui, sans-serif";
    const url = css2Url(family, chosen);
    ensureCustomFont(family, stack, url);
    if (googleFontWidget) googleFontWidget.input.value = "";
    setGoogleStatus(
      statusEl,
      "success",
      'Added "' + family + '". It is now selected and applied to the preview.',
    );
    updateCustomFontControls();
  } catch (e) {
    setGoogleStatus(statusEl, "error", "Could not add the font: " + e.message);
  } finally {
    if (btn) btn.disabled = false;
  }
}

function presetForStack(stack) {
  return (
    FONT_PRESETS.find((o) => o && typeof o === "object" && o.value === stack) ||
    null
  );
}

function ensureCustomFont(family, stack, url) {
  const select = overlayEl.querySelector('[data-field="fontFamily"]');
  const preset = presetForStack(stack);
  if (!preset && !customFonts.some((c) => c.stack === stack)) {
    customFonts.push({ family, stack, url });
  }
  if (select) {
    const present = Array.prototype.some.call(
      select.options,
      (o) => o.value === stack,
    );
    if (!present) {
      const opt = document.createElement("option");
      opt.value = stack;
      opt.textContent = family + " (Google Fonts)";
      opt.dataset.customFont = "1";
      select.appendChild(opt);
    }
    select.value = stack;
    const urlInput = overlayEl.querySelector('[data-field="fontUrl"]');
    if (urlInput) urlInput.value = preset && preset.url ? preset.url : url;
  }
  updatePreview();
}

function removeCustomFont() {
  const select = overlayEl.querySelector('[data-field="fontFamily"]');
  if (!select) return;
  const stack = select.value;
  const idx = customFonts.findIndex((c) => c.stack === stack);
  if (idx === -1) return;
  customFonts.splice(idx, 1);
  for (let i = select.options.length - 1; i >= 0; i--) {
    if (select.options[i].dataset.customFont) select.remove(i);
  }
  select.value = "";
  syncFontUrl(select);
  updateCustomFontControls();
  if (googleFontWidget) {
    setGoogleStatus(googleFontWidget.status, "", "");
  }
}

function renderCustomFontOptions() {
  const select = overlayEl.querySelector('[data-field="fontFamily"]');
  if (!select) return;
  for (let i = select.options.length - 1; i >= 0; i--) {
    if (select.options[i].dataset.customFont) select.remove(i);
  }
  customFonts.forEach((c) => {
    if (!c || !c.stack || !c.family) return;
    const present = Array.prototype.some.call(
      select.options,
      (o) => o.value === c.stack,
    );
    if (present) return;
    const opt = document.createElement("option");
    opt.value = c.stack;
    opt.textContent = c.family + " (Google Fonts)";
    opt.dataset.customFont = "1";
    select.appendChild(opt);
  });
}

function resolveFontUrl() {
  const explicit = rawValue("fontUrl");
  if (explicit) return explicit;
  const family = rawValue("fontFamily");
  const preset = FONT_PRESETS.find(
    (o) => o && typeof o === "object" && o.value === family,
  );
  if (preset && preset.url) return preset.url;
  const custom = customFonts.find((c) => c.stack === family);
  return custom ? custom.url : "";
}

let previewFontLink = null;

function applyPreviewFont() {
  const url = resolveFontUrl();
  if (url) {
    if (!previewFontLink) {
      previewFontLink = document.createElement("link");
      previewFontLink.rel = "stylesheet";
      document.head.appendChild(previewFontLink);
    }
    if (previewFontLink.href !== url) previewFontLink.href = url;
  } else if (previewFontLink) {
    if (previewFontLink.parentNode)
      previewFontLink.parentNode.removeChild(previewFontLink);
    previewFontLink = null;
  }
}

function updatePreview() {
  const el = overlayEl.querySelector("[data-preview]");
  if (!el) return;
  PREVIEW_VARS.forEach(([key, cssVar, fallback]) => {
    const f = fieldDef(key);
    const v = normalizeFieldValue(f, getFieldValue(f));
    el.style.setProperty(cssVar, v || (f && f.def) || fallback);
  });
  const link = rawValue("linkColor") || "var(--primary-color)";
  el.style.setProperty("--link-color", link);
  const title = rawValue("titleColor") || "var(--text-color)";
  el.style.setProperty("--title-color", title);
  const overlayColor =
    normalizeFieldValue(
      fieldDef("bgOverlayColor"),
      rawValue("bgOverlayColor"),
    ) || "#0a192f";
  const overlayOpacity =
    normalizeFieldValue(
      fieldDef("bgOverlayOpacity"),
      rawValue("bgOverlayOpacity"),
    ) || "40";
  el.style.setProperty(
    "--bg-overlay",
    "color-mix(in srgb, " +
      overlayColor +
      " " +
      overlayOpacity +
      "%, transparent)",
  );
  const layoutSide = (rawValue("layoutSide") || "left").trim().toLowerCase();
  el.style.setProperty(
    "--layout-direction",
    layoutSide === "right" ? "row-reverse" : "row",
  );
  const bgFit = (rawValue("backgroundFit") || "cover").trim().toLowerCase();
  el.style.setProperty(
    "--bg-size",
    bgFit === "fill" ? "100% 100%" : bgFit === "auto" ? "auto" : bgFit,
  );
  el.style.setProperty(
    "--bg-object-fit",
    bgFit === "auto"
      ? "none"
      : bgFit === "cover" || bgFit === "contain" || bgFit === "fill"
        ? bgFit
        : "cover",
  );
  [
    ["bgPage", "--bg-page", "#f8fafc", "bgPageGradient", "bgPageGradientStart", "bgPageGradientEnd", "bgPageGradientAngle"],
    ["formBgColor", "--bg-card", "#ffffff", "formBgGradient", "formBgGradientStart", "formBgGradientEnd", "formBgGradientAngle"],
    ["bgVisualColor", "--bg-visual", "#0a192f", "bgVisualGradient", "bgVisualGradientStart", "bgVisualGradientEnd", "bgVisualGradientAngle"],
  ].forEach(([solidKey, cssVar, fallback, modeKey, startKey, endKey, angleKey]) => {
    const mode = (rawValue(modeKey) || "solid").trim().toLowerCase();
    let val =
      normalizeFieldValue(fieldDef(solidKey), rawValue(solidKey)) || fallback;
    if (mode === "gradient") {
      const angle = normalizeFieldValue(
        fieldDef(angleKey),
        rawValue(angleKey) || "135",
      );
      const start =
        normalizeFieldValue(fieldDef(startKey), rawValue(startKey)) || val;
      const end =
        normalizeFieldValue(fieldDef(endKey), rawValue(endKey)) || val;
      val = "linear-gradient(" + angle + ", " + start + ", " + end + ")";
    }
    el.style.setProperty(cssVar, val);
  });
  const logoMode = (rawValue("logoPositionMode") || "default")
    .trim()
    .toLowerCase();
  if (logoMode === "margin") {
    el.style.setProperty("--logo-position", "static");
    el.style.setProperty(
      "--logo-margin",
      ["top", "right", "bottom", "left"]
        .map((side) => {
          const v = normalizeFieldValue(
            fieldDef("logoMargin" + capFirst(side)),
            rawValue("logoMargin" + capFirst(side)),
          );
          return v || "auto";
        })
        .join(" "),
    );
  } else if (logoMode === "absolute") {
    el.style.setProperty("--logo-position", "absolute");
    el.style.setProperty("--logo-margin", "0");
  } else {
    el.style.setProperty("--logo-position", "static");
    el.style.setProperty("--logo-margin", "0 auto 1.5rem");
  }
  ["left", "right", "top", "bottom"].forEach((side) => {
    const v = normalizeFieldValue(
      fieldDef("logoPos" + capFirst(side)),
      rawValue("logoPos" + capFirst(side)),
    );
    el.style.setProperty("--logo-pos-" + side, v || "auto");
  });
  const previewTitle = overlayEl.querySelector(".preview-title");
  if (previewTitle)
    previewTitle.textContent =
      rawValue("loginTitle") || "Sign in to your account";
  const previewLabels = overlayEl.querySelectorAll(".preview-label");
  if (previewLabels[0])
    previewLabels[0].textContent = rawValue("usernameLabel") || "Username";
  if (previewLabels[1])
    previewLabels[1].textContent = rawValue("passwordLabel") || "Password";
  const previewBtn = overlayEl.querySelector(".preview-btn");
  if (previewBtn)
    previewBtn.textContent = rawValue("loginButtonText") || "Sign In";
  const previewFooter = overlayEl.querySelector(".preview-footer");
  if (previewFooter) {
    const t = rawValue("footerText");
    previewFooter.textContent = t || "";
    previewFooter.style.display = t ? "" : "none";
  }
  applyPreviewFont();
  applyPreviewImages();
}

async function applyPreviewImages() {
  const gen = ++previewImgGen;
  const base = themeResourcesBase(currentLoginTheme);
  const bgEl = overlayEl.querySelector("[data-preview-bg]");
  const videoNote = overlayEl.querySelector("[data-preview-video]");
  const logoImg = overlayEl.querySelector("[data-preview-logo-img]");
  const logoFallback = overlayEl.querySelector(".preview-logo-fallback");
  if (!bgEl || !videoNote || !logoImg) return;

  const uploaded = rawValue("backgroundImage");
  const path = rawValue("backgroundPath");
  const bgType = rawValue("backgroundType") || "image";

  let bgUrl = "";
  if (uploaded) {
    bgUrl = uploaded;
  } else if (bgType !== "video") {
    const candidates = [];
    if (path)
      candidates.push(/^[a-z]+:/i.test(path) ? path : base + "/" + path);
    bgUrl = await findFirstImage(candidates);
  }
  if (gen !== previewImgGen) return;
  bgEl.style.backgroundImage = bgUrl
    ? 'url("' + bgUrl.replace(/"/g, '\\"') + '")'
    : "none";
  bgEl.style.display = bgUrl || bgType === "video" ? "" : "none";
  videoNote.style.display = bgType === "video" && !uploaded ? "" : "none";

  let logoUrl = rawValue("logoImage");
  if (!logoUrl) {
    logoUrl = await findFirstImage([
      base + "/img/logo.png",
      base + "/img/logo.svg",
      base + "/logo.png",
    ]);
  }
  if (gen !== previewImgGen) return;
  if (logoUrl) {
    logoImg.src = logoUrl;
    logoImg.style.display = "block";
    if (logoFallback) logoFallback.style.display = "none";
  } else {
    logoImg.removeAttribute("src");
    logoImg.style.display = "none";
    if (logoFallback) logoFallback.style.display = "";
  }
}

function togglePreview() {
  const pane = overlayEl.querySelector("[data-preview-pane]");
  const btn = overlayEl.querySelector("[data-preview-toggle]");
  const collapsed = pane.classList.toggle("mio-collapsed");
  btn.textContent = collapsed ? "+" : "\u2212";
  btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
}

async function openOverlay() {
  overlayEl.classList.add("mio-open");
  setMsg("", "");
  const select = realmSelect();
  select.innerHTML = "";
  try {
    const realms = await api("/admin/realms");
    realms.forEach((r) => {
      const opt = document.createElement("option");
      opt.value = r.realm;
      opt.textContent = r.realm;
      select.appendChild(opt);
    });
    select.value =
      env.realm || (select.options[0] && select.options[0].value) || "";
  } catch (e) {
    setMsg("error", "Could not load realms: " + e.message);
    return;
  }
  await loadValues();
}

async function loadValues() {
  const realm = realmSelect().value;
  if (!realm) return;
  try {
    const rep = await api("/admin/realms/" + encodeURIComponent(realm));
    currentLoginTheme = rep.loginTheme || "";
    const attrs = rep.attributes || {};
    let storedFonts = [];
    try {
      storedFonts = JSON.parse(attrs["kc.customFonts"] || "[]");
    } catch (e) {
      storedFonts = [];
    }
    customFonts = Array.isArray(storedFonts)
      ? storedFonts.filter((c) => c && c.stack && c.family)
      : [];
    renderCustomFontOptions();
    FIELDS.forEach((f) => {
      if (f.type === "googleFont") return;
      let value = attrs[f.attr] || "";
      if (!value && f.def) value = f.def;
      setFieldValue(f, value);
    });
    updateCustomFontControls();
    updatePreview();
    const versionEl = overlayEl.querySelector("[data-version]");
    if (versionEl) {
      const build = attrs["kc.buildNumber"] || VERSION_DEFAULTS.buildNumber;
      const release = attrs["kc.releaseName"] || VERSION_DEFAULTS.releaseName;
      const parts = [];
      if (build) parts.push("v" + build);
      if (release) parts.push(release);
      versionEl.textContent = parts.join(" · ");
      versionEl.style.display = parts.length ? "" : "none";
    }
  } catch (e) {
    setMsg("error", "Could not load realm: " + e.message);
  }
}

async function saveBranding() {
  const realm = realmSelect().value;
  if (!realm) return;
  const btn = overlayEl.querySelector('[data-action="save"]');
  btn.disabled = true;
  try {
    const rep = await api("/admin/realms/" + encodeURIComponent(realm));
    const attrs = rep.attributes ? Object.assign({}, rep.attributes) : {};
    FIELDS.forEach((f) => {
      if (f.type === "googleFont" || !f.attr) return;
      const value = normalizeFieldValue(f, getFieldValue(f));
      if (value) attrs[f.attr] = value;
      else delete attrs[f.attr];
    });
    ["bgPage", "formBg", "bgVisual"].forEach((p) => {
      const modeF = fieldDef(p + "Gradient");
      const mode = modeF ? normalizeFieldValue(modeF, getFieldValue(modeF)) : "";
      if (mode !== "gradient") {
        delete attrs["kc." + p + "GradientStart"];
        delete attrs["kc." + p + "GradientEnd"];
        delete attrs["kc." + p + "GradientAngle"];
      }
    });
    if (customFonts.length)
      attrs["kc.customFonts"] = JSON.stringify(customFonts);
    else delete attrs["kc.customFonts"];
    rep.attributes = attrs;
    await api("/admin/realms/" + encodeURIComponent(realm), {
      method: "PUT",
      body: JSON.stringify(rep),
    });
    setMsg(
      "success",
      'Saved. Open the login page for realm "' +
        realm +
        '" to see the changes.',
    );
  } catch (e) {
    setMsg(
      "error",
      e.status === 401
        ? "Your admin session expired. Refresh the console page, then retry."
        : "Save failed: " + e.message,
    );
  } finally {
    btn.disabled = false;
  }
}

function sanitizeFileName(s) {
  return (
    (s || "AUTHFIT-preset")
      .replace(/[^a-z0-9-_ ]/gi, "_")
      .replace(/\s+/g, "_")
      .slice(0, 60) || "AUTHFIT-preset"
  );
}

function buildPresetValues() {
  const out = {};
  FIELDS.forEach((f) => {
    if (!f.attr) return;
    const value = normalizeFieldValue(f, getFieldValue(f));
    const def = normalizeFieldValue(f, f.def || "");
    if (value !== def) out[f.attr] = value;
  });
  if (customFonts.length) out["kc.customFonts"] = JSON.stringify(customFonts);
  return out;
}

function presetPayload() {
  const name =
    rawValue("presetName") || realmSelect().value || "AUTHFIT-preset";
  return {
    format: "AUTHFIT-afit",
    version: 1,
    theme: "AUTHFIT",
    name: name,
    exportedAt: new Date().toISOString(),
    values: buildPresetValues(),
  };
}

function exportPreset() {
  const payload = presetPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = sanitizeFileName(payload.name) + ".afit";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setMsg('success', 'Preset exported as "' + a.download + '".');
}

function copyPresetJson() {
  const payload = presetPayload();
  const text = JSON.stringify(payload, null, 2);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => setMsg("success", "Preset JSON copied to clipboard."))
      .catch(() => setMsg("error", "Could not copy to clipboard."));
  } else {
    setMsg("error", "Clipboard is not available in this browser.");
  }
}

function importPresetFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      applyPreset(String(reader.result || ""));
    } catch (e) {
      setMsg("error", "Import failed: " + e.message);
    }
  };
  reader.onerror = () => setMsg("error", "Could not read the file.");
  reader.readAsText(file);
}

function applyPreset(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error("Not a valid JSON / .afit file.");
  }
  const values =
    data && typeof data === "object" && data.values && typeof data.values === "object"
      ? data.values
      : data;
  if (!values || typeof values !== "object" || Array.isArray(values))
    throw new Error("No preset values found in the file.");
  let applied = 0;
  Object.keys(values).forEach((attr) => {
    if (attr === "kc.customFonts") {
      let fonts = [];
      const raw = values[attr];
      if (Array.isArray(raw)) fonts = raw;
      else {
        try {
          fonts = JSON.parse(raw || "[]");
        } catch (e) {}
      }
      customFonts = Array.isArray(fonts)
        ? fonts.filter((c) => c && c.stack && c.family)
        : [];
      renderCustomFontOptions();
      updateCustomFontControls();
      applied++;
      return;
    }
    const f = FIELDS.find((x) => x.attr === attr);
    if (!f) return;
    setFieldValue(f, values[attr] == null ? "" : String(values[attr]));
    applied++;
  });
  updatePreview();
  setMsg(
    "success",
    "Preset applied (" + applied + " values). Press Save to store it for this realm.",
  );
}

function closeOverlay() {
  overlayEl.classList.remove("mio-open");
}

function waitForBody(callback) {
  if (document.body) {
    callback();
    return;
  }
  const observer = new MutationObserver(() => {
    if (document.body) {
      observer.disconnect();
      callback();
    }
  });
  observer.observe(document.documentElement, { childList: true });
}

waitForBody(build);
