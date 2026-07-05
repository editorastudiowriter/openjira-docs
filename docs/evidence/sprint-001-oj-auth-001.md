# SPR-001 Evidence - OJ-AUTH-001

Sprint: SPR-001  
Card: OJ-AUTH-001 - Implement authentication API  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Evidence author: Sofia Mendes  
Date: 2026-07-05  
Result: Done

## Summary

OJ-AUTH-001 implemented the first backend authentication API for seeded users.

Published backend source:

- Repository: `editorastudiowriter/openjira-server`
- Visibility: private
- Base branch: `development`
- Activity branch: `feat/OJ-AUTH-001-authentication-api`
- Commit: `2031f87 Add authentication API`
- Pull request: `https://github.com/editorastudiowriter/openjira-server/pull/5`
- Merge commit: `c258e54`
- Author: `Gabriel Martins <gabriel.martins@aia.local>`

## Backend Artifacts

- `src/auth/auth.module.ts`
- `src/auth/auth.controller.ts`
- `src/auth/auth.service.ts`
- `src/auth/auth.guard.ts`
- `src/auth/password.service.ts`
- `src/auth/cookie.util.ts`
- `src/auth/dto/login-request.dto.ts`
- `src/app.module.ts`
- `src/common/filters/http-exception.filter.ts`

## Implemented Scope

- Added `POST /api/auth/login`.
- Added `GET /api/auth/me`.
- Added `POST /api/auth/logout`.
- Verified seeded-user passwords against stored scrypt hashes.
- Stored revocable server-side sessions in `auth_sessions` using hashed session tokens.
- Issued HttpOnly session cookie and session-bound CSRF cookie.
- Required authentication for private current-user access.
- Required CSRF header for authenticated mutable requests.
- Revoked sessions on logout.
- Kept invalid credential and protected route failures authorization-safe.

## Commands Executed

| Command | Result |
| --- | --- |
| `npm run lint` | Passed. |
| `npm run build` | Passed. |
| `npm audit --omit=dev --audit-level=high` | Passed high-severity gate. |
| `GET /api/auth/me` without session | Passed; returned 401. |
| `POST /api/auth/login` with `admin@openjira.local` | Passed; returned 200. |
| Login response token exposure check | Passed; JSON did not include `sessionId` or `csrfToken`. |
| `POST /api/auth/login` with invalid password | Passed; returned 401. |
| `GET /api/auth/me` with session | Passed; returned 200. |
| `POST /api/auth/logout` without CSRF header | Passed; returned 401. |
| `POST /api/auth/logout` with CSRF header | Passed; returned 200. |
| `GET /api/auth/me` after logout | Passed; returned 401. |
| GitHub Actions `Validate PostgreSQL migrations` | Passed in 1m13s. |

## Residual Risk

- This card implements authentication and session protection. Full RBAC enforcement remains in OJ-AUTH-002.
- `npm audit --omit=dev --audit-level=high` passes, but Prisma CLI still reports a moderate transitive advisory under `@hono/node-server`.

## Routing Decision

Status moves from `Planned` to `Done`.

OJ-AUTH-002 can now start because authenticated user identity and session guards are available.
