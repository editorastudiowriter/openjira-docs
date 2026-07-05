# SPR-001 Evidence - OJ-AUTH-002

Sprint: SPR-001  
Card: OJ-AUTH-002 - Implement backend RBAC  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Evidence author: Sofia Mendes  
Date: 2026-07-05  
Result: Done

## Summary

OJ-AUTH-002 implemented backend role-based access control for authenticated organization and project access.

Published backend source:

- Repository: `editorastudiowriter/openjira-server`
- Visibility: private
- Base branch: `development`
- Activity branch: `feat/OJ-AUTH-002-backend-rbac`
- Commit: `3c2c84c Add backend RBAC guards`
- Pull request: `https://github.com/editorastudiowriter/openjira-server/pull/6`
- Merge commit: `c7bb481`
- Author: `Gabriel Martins <gabriel.martins@aia.local>`

## Backend Artifacts

- `src/rbac/rbac.module.ts`
- `src/rbac/rbac.service.ts`
- `src/rbac/rbac.guard.ts`
- `src/rbac/rbac-require.decorator.ts`
- `src/rbac/rbac.controller.ts`
- `src/rbac/rbac.types.ts`
- `src/app.module.ts`

## Implemented Scope

- Added `RequireRbac` metadata for declaring protected organization and project actions.
- Added `RbacGuard` to enforce authenticated membership and role checks server-side.
- Added `RbacService` with PostgreSQL-backed checks against active organization and project memberships.
- Added proof endpoints under `/api/rbac` for authorization validation before domain APIs consume the guard.
- Enforced `403` responses using the standard error envelope for denied permissions.
- Allowed organization admins to access project-level actions inside their organization.
- Kept authorization decisions on the backend, so client-side UI state cannot bypass access checks.

## Authorization Matrix Validated

| Actor | Scenario | Expected | Result |
| --- | --- | --- | --- |
| Anonymous | Read seeded project | `401` | Passed |
| Admin | Manage seeded organization | `200` | Passed |
| Admin | Create issue in seeded project | `200` | Passed |
| Member | Create issue in seeded project | `200` | Passed |
| Member | Manage seeded organization | `403` | Passed |
| Viewer | Read seeded project | `200` | Passed |
| Viewer | Create issue in seeded project | `403` | Passed |
| Outsider | Read seeded organization | `403` | Passed |
| Outsider | Read seeded project | `403` | Passed |

## Commands Executed

| Command | Result |
| --- | --- |
| `npm run lint` | Passed. |
| `npm run build` | Passed. |
| `DATABASE_URL=... npm run db:migrate:deploy` | Passed; no pending migrations. |
| `DATABASE_URL=... npm run db:seed` | Passed; four users and seeded project data available. |
| HTTP RBAC matrix against local server | Passed. |
| `npm audit --omit=dev --audit-level=high` | Passed high-severity gate. |
| GitHub Actions `Validate PostgreSQL migrations` | Passed in 1m09s. |

## Standard Error Evidence

Denied authorization returned the standard backend envelope with:

- `statusCode: 403`
- `code: ForbiddenException`
- `message: Permission denied`
- `requestId`
- `path`
- `method`
- `timestamp`

## Residual Risk

- The RBAC guard is ready for reuse by domain APIs. OJ-BE-003 must apply it to real organization, member, and project endpoints.
- `npm audit --omit=dev --audit-level=high` passes, but Prisma CLI still reports a moderate transitive advisory under `@hono/node-server`.

## Routing Decision

Status moves from `Planned` to `Done`.

OJ-BE-003 can now start because authenticated identity, sessions, and backend RBAC enforcement are available.
