# SPR-001 Evidence - OJ-DB-002

Sprint: SPR-001  
Card: OJ-DB-002 - Implement migrations and rollback  
Owner: Eduardo Ribeiro  
Assignee: Gabriel Martins  
Evidence author: Sofia Mendes  
Date: 2026-07-05  
Result: implementation evidence complete; ready for merge decision

## Summary

OJ-DB-002 added the migration rollback and drift workflow to the private backend repository.

Published backend source:

- Repository: `editorastudiowriter/openjira-server`
- Visibility: private
- Base branch: `development`
- Activity branch: `feat/OJ-DB-002-migrations-rollback`
- Commits:
  - `021dbe3 Add migration rollback and drift workflow`
  - `c9bee97 Add migration validation workflow`
- Pull request: `https://github.com/editorastudiowriter/openjira-server/pull/1`
- Merge commit: `94d69f6`
- Authors:
  - `Gabriel Martins <gabriel.martins@aia.local>`
  - `Camila Rocha <camila.rocha@aia.local>`

## Backend Artifacts

- `docs/database/migration-runbook.md`
- `scripts/print-migration-rollback-policy.mjs`
- `prisma/migrations/migration_lock.toml`
- `prisma.config.ts`
- `.env.example`
- `package.json`
- `.github/workflows/backend-migrations.yml`

## Implemented Scope

- Added `SHADOW_DATABASE_URL` to local environment documentation.
- Configured Prisma shadow database support for drift validation.
- Added migration drift, diff, and rollback policy commands.
- Documented the forward-fix rollback policy for shared environments.
- Recorded evidence requirements for future migration cards.
- Added GitHub Actions validation against PostgreSQL for migration pull requests.

## Commands Executed

| Command | Result |
| --- | --- |
| `npm run lint` | Passed. |
| `npm run build` | Passed. |
| `DATABASE_URL=... npm run db:validate` | Passed. |
| `DATABASE_URL=... npm run db:generate` | Passed. |
| `DATABASE_URL=... npm run db:migrate:deploy` | Passed; no pending migrations. |
| `DATABASE_URL=... npm run db:migrate:status` | Passed; database schema is up to date. |
| `DATABASE_URL=... SHADOW_DATABASE_URL=... npm run db:drift:check` | Passed; no difference detected. |
| `npm audit --omit=dev --audit-level=high` | Passed high-severity gate. |
| GitHub Actions `Validate PostgreSQL migrations` | Passed in 1m04s. |

## Rollback Policy

OpenJira uses forward-fix rollback for shared environments:

- Applied migrations are not edited or deleted.
- Migrations not yet shared can be fixed on the activity branch before merge.
- Shared migration issues require a new corrective migration.
- Backup and restore remain disaster recovery, not normal application rollback.
- TechLead and DBA must review corrective migrations.

## Residual Risk

- `npm audit --omit=dev --audit-level=high` passes, but Prisma CLI still reports a moderate transitive advisory under `@hono/node-server`.
- Branch cleanup follows normal repository maintenance; the activity branch was deleted after merge.

## Routing Decision

Status moves from `TL Review` to `Done`.

The technical blocker was resolved by the AIA team because it did not require client action.
