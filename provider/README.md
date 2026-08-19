# AUTHFIT Login Forms Provider

Keycloak 22.0.3 provider for exposing realm attributes to AUTHFIT FreeMarker templates. It adds the current realm's `attributes` map to the FreeMarker model as `realmAttributes`.

## Source layout

- `src/main/java/com/authfit/keycloak/AuthfitLoginFormsProvider.java`
- `src/main/java/com/authfit/keycloak/AuthfitLoginFormsProviderFactory.java`
- `src/main/resources/META-INF/services/org.keycloak.forms.login.LoginFormsProviderFactory`

## Build with PowerShell

Run from the Keycloak installation directory:

```powershell
$providerSrc = '.\provider-src'
$classes = '.\provider-src\target\classes'
$jar = '.\provider-src\target\authfit-login-provider.jar'
New-Item -ItemType Directory -Force -Path $classes | Out-Null
$sources = Get-ChildItem -LiteralPath '.\provider-src\src\main\java' -Recurse -Filter *.java | Select-Object -ExpandProperty FullName
& 'C:\Program Files\Java\jdk-19\bin\javac.exe' `
  -cp '.\lib\lib\main\*' `
  -d $classes `
  $sources
Copy-Item -LiteralPath '.\provider-src\src\main\resources\META-INF' -Destination $classes -Recurse -Force
Push-Location $classes
& 'C:\Program Files\Java\jdk-19\bin\jar.exe' cf $jar *
Pop-Location
```

## Install

move the provider folder outside of the one named Authfit as that is your theme and needs to be copyed in the Themes folder inside keycloak

Copy the JAR into the Keycloak `providers` directory:

```powershell
Copy-Item '.\provider-src\target\authfit-login-provider.jar' '.\providers\authfit-login-provider.jar' -Force
```

Start Keycloak with this provider selected:

```powershell
.\bin\kc.ps1
```

Persistent configuration (preferred): add this to `conf\keycloak.conf` so every startup selects the provider:

```properties
spi-login-provider=authfit-freemarker
```

When this setting is present, the startup flag in `kc.ps1` is not required. If you do not use `keycloak.conf`, keep the command-line flag below.

`bin\kc.ps1` must include:

```text
--spi-login-provider=authfit-freemarker
```

After installation, Keycloak performs its provider augmentation on startup. The startup log should contain `authfit-freemarker` and a warning that the login SPI is internal; that warning is expected for Keycloak 22.0.3.


## FTL usage

Read realm attributes with:

```ftl
${(realmAttributes[name])!fallback}
```

The provider is built against Keycloak 22.0.3 APIs.

