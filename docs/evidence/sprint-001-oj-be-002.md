# SPR-001 Evidence - OJ-BE-002

Sprint: SPR-001  
Card: OJ-BE-002 - Implement NestJS API baseline  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Evidence author: Sofia Mendes  
Date: 2026-07-05  
Result: Done

## Summary

OJ-BE-002 implemented the backend API baseline required before authentication and domain feature modules.

Published backend source:

- Repository: `editorastudiowriter/openjira-server`
- Visibility: private
- Base branch: `development`
- Activity branches:
  - `feat/OJ-BE-002-api-baseline`
  - `feat/OJ-BE-002-structured-logging`
- Commits:
  - `d6ece22 Add API baseline and readiness checks`
  - `2c9f17d Add structured HTTP request logging`
- Pull requests:
  - `https://github.com/editorastudiowriter/openjira-server/pull/3`
  - `https://github.com/editorastudiowriter/openjira-server/pull/4`
- Merge commits:
  - `bce94db`
  - `e6c29e2`
- Author: `Gabriel Martins <gabriel.martins@aia.local>`

## Backend Artifacts

- `src/main.ts`
- `src/common/filters/http-exception.filter.ts`
- `src/health/health.controller.ts`
- `src/health/health.module.ts`
- `src/health/database-health.service.ts`
- `package.json`
- `package-lock.json`

## Implemented Scope

- Enabled global `ValidationPipe` with whitelist, transform, and non-whitelisted payload rejection.
- Added a standard exception filter with status, code, message, request id, path, method, and timestamp.
- Added `x-request-id` propagation with generated fallback ids.
- Added structured JSON HTTP request logs with method, route, status, duration, and request id.
- Added Swagger/OpenAPI UI at `/api/docs`.
- Added `/api/health/live` for process liveness.
- Added `/api/health/ready` with PostgreSQL connectivity validation.
- Kept CORS driven by validated runtime configuration.

## Commands Executed

| Command | Result |
| --- | --- |
| `npm run lint` | Passed. |
| `npm run build` | Passed. |
| `npm audit --omit=dev --audit-level=high` | Passed high-severity gate. |
| `GET /api/health/live` | Passed; returned 200. |
| `GET /api/health/ready` | Passed; returned 200 with database status. |
| `GET /api/docs` | Passed; returned 200. |
| `GET /api/not-found` with `x-request-id` | Passed; returned standard error envelope with the request id. |
| Runtime structured log inspection | Passed; emitted `http_request` with method, route, status, durationMs, and requestId. |
| GitHub Actions `Validate PostgreSQL migrations` for PR #3 | Passed in 1m11s. |
| GitHub Actions `Validate PostgreSQL migrations` for PR #4 | Passed in 1m09s. |

## Residual Risk

- `npm audit --omit=dev --audit-level=high` passes, but Prisma CLI still reports a moderate transitive advisory under `@hono/node-server`.
- Feature-specific DTOs and route-level validation remain owned by downstream feature cards.

## Routing Decision

Status moves from `Planned` to `Done`.

OJ-AUTH-001 can now start because the API baseline, database schema, migrations, seeds, and backend configuration are available.
