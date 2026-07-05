# SPR-001 Evidence - OJ-DB-003

Sprint: SPR-001  
Card: OJ-DB-003 - Implement local and test seeds  
Owner: Eduardo Ribeiro  
Assignee: Gabriel Martins  
Evidence author: Sofia Mendes  
Date: 2026-07-05  
Result: Done

## Summary

OJ-DB-003 added deterministic seed data for local development and test databases in the private backend repository.

Published backend source:

- Repository: `editorastudiowriter/openjira-server`
- Visibility: private
- Base branch: `development`
- Activity branch: `feat/OJ-DB-003-local-test-seeds`
- Commit: `1acb62a Add deterministic database seeds`
- Pull request: `https://github.com/editorastudiowriter/openjira-server/pull/2`
- Merge commit: `6d0f2f8`
- Author: `Gabriel Martins <gabriel.martins@aia.local>`

## Backend Artifacts

- `prisma/seed.mjs`
- `docs/database/seed-runbook.md`
- `package.json`
- `package-lock.json`
- `.github/workflows/backend-migrations.yml`

## Implemented Scope

- Added deterministic fixture users with local-only credentials.
- Added organization, project, board, columns, issues, comments, and history seed data.
- Added `db:seed` and `db:seed:test` scripts.
- Documented fixture users, test commands, seeded data, idempotency policy, and safety notes.
- Extended GitHub Actions migration validation to run seeds twice for local and test database targets.
- Added Prisma 7 PostgreSQL runtime adapter dependencies: `@prisma/adapter-pg`, `pg`, and `@types/pg`.

## Commands Executed

| Command | Result |
| --- | --- |
| `npm run lint` | Passed. |
| `npm run build` | Passed. |
| `DATABASE_URL=... npm run db:seed` | Passed. |
| `DATABASE_URL=... npm run db:seed` repeated | Passed; counts stayed stable. |
| `TEST_DATABASE_URL=... npm run db:migrate:deploy:test` | Passed. |
| `TEST_DATABASE_URL=... npm run db:seed:test` | Passed. |
| `TEST_DATABASE_URL=... npm run db:seed:test` repeated | Passed; counts stayed stable. |
| `DATABASE_URL=... SHADOW_DATABASE_URL=... npm run db:drift:check` | Passed; no difference detected. |
| `npm audit --omit=dev --audit-level=high` | Passed high-severity gate. |
| GitHub Actions `Validate PostgreSQL migrations` | Passed in 1m13s. |

## Seeded Data

Fixture users:

- `admin@openjira.local`
- `member@openjira.local`
- `viewer@openjira.local`
- `outsider@openjira.local`

Fixture password for seeded users: `OpenJira@123`.

Seeded MVP data:

- Organization: `OpenJira Demo`
- Project: `OJ - OpenJira MVP`
- Board: `OpenJira MVP Board`
- Columns: `Backlog`, `To Do`, `In Progress`, `Review`, `Done`
- Issues: `OJ-1`, `OJ-2`, `OJ-3`
- Comments and history records for representative flows

## Residual Risk

- Seed credentials are development-only and must never be enabled in production.
- `npm audit --omit=dev --audit-level=high` passes, but Prisma CLI still reports a moderate transitive advisory under `@hono/node-server`.

## Routing Decision

Status moves from `Planned` to `Done`.

The technical work and evidence were completed by the AIA team without client action.
