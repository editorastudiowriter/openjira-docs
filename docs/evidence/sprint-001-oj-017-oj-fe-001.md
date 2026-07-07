# SPR-001 Evidence - OJ-017 / OJ-FE-001

Sprint: SPR-001  
Cards: OJ-017 - Define frontend app shell and navigation; OJ-FE-001 - Define Next.js route map  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Evidence author: Sofia Mendes  
Date: 2026-07-07  
Result: Done

## Summary

OJ-017 and OJ-FE-001 delivered the initial Next.js frontend shell and MVP route map in one integrated frontend baseline.

Published frontend source:

- Repository: `editorastudiowriter/openjira-web`
- Visibility: private
- Base branch: `development`
- Activity branch: `feat/OJ-017-frontend-shell-route-map`
- Commit: `3e30098 Define frontend shell and route map`
- Pull request: `https://github.com/editorastudiowriter/openjira-web/pull/1`
- Merge commit: `9d0a742`
- Author: `Lucas Ferreira <lucas.ferreira@aia.local>`

## Frontend Artifacts

- `app/_components/app-shell.tsx`
- `app/_components/state-panel.tsx`
- `app/page.tsx`
- `app/(auth)/login/page.tsx`
- `app/(app)/select/page.tsx`
- `app/(app)/account/page.tsx`
- `app/(app)/orgs/[organizationId]/projects/[projectId]/board/page.tsx`
- `app/(app)/orgs/[organizationId]/projects/[projectId]/issues/[issueId]/page.tsx`
- `app/(app)/orgs/[organizationId]/projects/[projectId]/loading.tsx`
- `app/403/page.tsx`
- `app/not-found.tsx`
- `app/error.tsx`
- `docs/frontend/app-shell-route-map.md`

## Implemented Scope

- Added authenticated shell structure with sidebar, topbar, current context, context switch action, and board entry action.
- Added responsive layout behavior for desktop and smaller screens.
- Added route placeholders for login, organization/project selection, board, issue detail, account/session, permission denied, not found, generic error, and project loading state.
- Added route map documentation with auth expectations and future data sources.
- Kept live authentication/API integration out of scope for OJ-FE-002 and OJ-FE-003.
- Changed `openjira-web` visibility to private before publishing frontend work, matching project governance.

## Route Map Validated

| Route | Purpose | Result |
| --- | --- | --- |
| `/` | Redirect entrypoint to `/login` | Implemented |
| `/login` | Login UI placeholder | Implemented |
| `/select` | Organization/project selection placeholder | Implemented |
| `/orgs/:organizationId/projects/:projectId/board` | Project board route | Implemented |
| `/orgs/:organizationId/projects/:projectId/issues/:issueId` | Issue detail route | Implemented |
| `/account` | Account/session route | Implemented |
| `/403` | Permission denied state | Implemented |
| `not-found.tsx` | Not found state | Implemented |
| `error.tsx` | Generic error state | Implemented |
| `loading.tsx` | Dynamic project loading state | Implemented |

## Commands Executed

| Command | Result |
| --- | --- |
| Read Next.js local docs for layouts/pages | Completed. |
| Read Next.js local docs for linking/navigation | Completed. |
| Read Next.js local docs for Server/Client Components | Completed. |
| Read Next.js local docs for authentication | Completed. |
| `npm install` | Passed. |
| `npm run lint` | Passed. |
| `npm run build` | Passed; generated `/`, `/login`, `/select`, `/account`, `/403`, board, issue detail, and not-found routes. |
| `npm audit --omit=dev --audit-level=high` | Passed high-severity gate. |

## Residual Risk

- Login form submission is not connected to `/api/auth/login`; this remains OJ-FE-002.
- Organization/project data is static placeholder data; live API integration remains OJ-FE-003.
- `npm audit --omit=dev --audit-level=high` passes, but Next.js currently carries a moderate PostCSS advisory.

## Routing Decision

OJ-017 and OJ-FE-001 move from `Planned` to `Done`.

OJ-FE-002 can start because the login route, shell destination, account/session area, route map, and fallback states exist.
