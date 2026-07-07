# SPR-001 Evidence - OJ-FE-002

Sprint: SPR-001  
Card: OJ-FE-002 - Implement login UI and auth states  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Evidence author: Sofia Mendes  
Date: 2026-07-07  
Result: Done

## Summary

OJ-FE-002 connected the login UI to the backend authentication API and added frontend session states.

Published frontend source:

- Repository: `editorastudiowriter/openjira-web`
- Visibility: private
- Base branch: `development`
- Activity branch: `feat/OJ-FE-002-login-ui-auth-states`
- Commit: `f8f1967 Add login UI and auth states`
- Pull request: `https://github.com/editorastudiowriter/openjira-web/pull/2`
- Merge commit: `518aba4`
- Author: `Lucas Ferreira <lucas.ferreira@aia.local>`

## Frontend Artifacts

- `lib/openjira-api.ts`
- `app/(auth)/login/login-form.tsx`
- `app/(auth)/login/page.tsx`
- `app/_components/auth-session-boundary.tsx`
- `app/_components/app-shell.tsx`
- `app/(app)/account/account-session-panel.tsx`
- `app/(app)/account/page.tsx`

## Implemented Scope

- Login form validates required email and password fields.
- Login submits to `/api/auth/login` with `credentials: include` for backend HttpOnly cookies.
- Loading and success states prevent duplicate submit.
- API and network errors are displayed safely.
- Session-expired notice is supported through `/login?reason=session-expired`.
- Authenticated shell routes validate `/api/auth/me` before rendering protected content.
- Account route loads current user context and supports logout through `/api/auth/logout` with CSRF header from `oj_csrf`.

## Commands Executed

| Command | Result |
| --- | --- |
| `npm run lint` | Passed. |
| `npm run build` | Passed. |
| `npm audit --omit=dev --audit-level=high` | Passed high-severity gate. |

## Residual Risk

- Browser E2E coverage is not introduced yet; this remains part of later frontend/testing cards.
- Organization/project selection still uses placeholder data until OJ-FE-003 connects `/api/organizations` and project listing.
- Next.js currently carries a moderate PostCSS advisory while the high-severity audit gate passes.

## Routing Decision

OJ-FE-002 moves from `Planned` to `Done`.

OJ-FE-003 can start because login, session validation, session-expired state, and logout handling are available.
