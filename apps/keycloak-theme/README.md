# Berget Keycloak Theme

Custom Keycloak login theme built with [Keycloakify](https://keycloakify.dev) v11, React, Tailwind CSS v4, and the Berget design system.

## Overview

This package produces a Keycloak theme JAR (`berget`) that replaces the default Keycloak login UI with Berget-branded pages. It implements login/authentication pages covering all standard Keycloak flows including MFA, WebAuthn/passkeys, social login, identity provider federation, and account management.

## Getting Started

### Prerequisites

- **pnpm** — package manager (workspace dependency)
- **Maven** (`mvn`) — required for JAR packaging
- **Docker** — required for local Keycloak testing

### Development

```bash
# Install dependencies (from repo root)
pnpm install

# Start Vite dev server with mock Keycloak context
pnpm --filter keycloak-theme dev

# Start a local Keycloak instance with the theme (requires Docker)
pnpm start-keycloak
```

The dev server uses mock Keycloak contexts so you can preview and iterate on pages without a running Keycloak instance.

### Building

```bash
# Build the theme JAR
pnpm build-keycloak-theme
```

Output: `dist_keycloak/keycloak-theme-for-kc-all-other-versions.jar`

Deploy the JAR to your Keycloak instance's `providers/` directory and select the `berget` theme in the Keycloak admin console under Realm Settings → Themes → Login theme.

## Project Structure

```
src/
├── components/           # Shared UI components (theme toggle, language selector)
│   └── ui/               # Local shadcn/ui components (card, alert, input-otp, etc.)
├── login/
│   ├── pages/            # 43 login page implementations
│   ├── components/       # Template wrapper and form field components
│   ├── shared/           # Utilities (color scheme, redirects)
│   ├── mocks/            # Mock Keycloak contexts for development
│   ├── index.css         # Design tokens and global styles
│   ├── KcContext.ts      # Extended Keycloak context types
│   ├── KcPage.tsx        # Page router
│   └── i18n.ts           # Internationalization (English, Swedish)
├── main.tsx              # Entry point (runtime detection)
├── main-kc.tsx           # Production Keycloak entry
└── main-kc.dev.tsx       # Development entry with mocks
```

## Pages

The theme covers all standard Keycloak authentication flows:

| Category               | Pages                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| **Core Auth**          | Login, login-username, login-password, register, reset password, update password |
| **MFA / OTP**          | TOTP entry, TOTP setup, OTP reset, magic link OTP                                |
| **WebAuthn**           | Authenticate, register, error, passkeys conditional UI                           |
| **Identity Providers** | Link IDP, confirm linking, email verification, profile review                    |
| **OAuth / SAML**       | OAuth grant, device flow, SAML POST                                              |
| **Account**            | Update profile, change email, verify email, delete credential, delete account    |
| **Recovery**           | Recovery code setup, recovery code input                                         |
| **Other**              | Organization selector, authenticator selector, terms, logout, error, info        |

## Styling

The theme uses Tailwind CSS v4 with Berget design tokens defined as CSS custom properties in HSL format. Dark theme is the default; light theme activates via the `.light` class.

## Integration with @berget-ai/ui

Shared components (`Button`, `Input`, `Checkbox`) are imported directly from the `@berget-ai/ui` workspace package to maintain consistency with the broader design system.

## Internationalization

Supported languages: **English** and **Swedish**. Custom translations are defined in `src/login/i18n.ts` using the Keycloakify i18n builder.

## Storybook

Every page has a corresponding `.stories.tsx` file. Run Storybook from the repo root:

```bash
pnpm storybook
```
