# SPR-001 Evidence - OJ-DB-002

Sprint: SPR-001  
Card: OJ-DB-002 - Implement migrations and rollback  
Owner: Eduardo Ribeiro  
Assignee: Gabriel Martins  
Evidence author: Sofia Mendes  
Date: 2026-07-05  
Result: ready for TechLead review; CI validation still required before Done

## Summary

OJ-DB-002 added the migration rollback and drift workflow to the private backend repository.

Published backend source:

- Repository: `editorastudiowriter/openjira-server`
- Visibility: private
- Base branch: `development`
- Activity branch: `feat/OJ-DB-002-migrations-rollback`
- Commit: `021dbe3 Add migration rollback and drift workflow`
- Pull request: `https://github.com/editorastudiowriter/openjira-server/pull/1`
- Author: `Gabriel Martins <gabriel.martins@aia.local>`

## Backend Artifacts

- `docs/database/migration-runbook.md`
- `scripts/print-migration-rollback-policy.mjs`
- `prisma/migrations/migration_lock.toml`
- `prisma.config.ts`
- `.env.example`
- `package.json`

## Implemented Scope

- Added `SHADOW_DATABASE_URL` to local environment documentation.
- Configured Prisma shadow database support for drift validation.
- Added migration drift, diff, and rollback policy commands.
- Documented the forward-fix rollback policy for shared environments.
- Recorded evidence requirements for future migration cards.

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

## Rollback Policy

OpenJira uses forward-fix rollback for shared environments:

- Applied migrations are not edited or deleted.
- Migrations not yet shared can be fixed on the activity branch before merge.
- Shared migration issues require a new corrective migration.
- Backup and restore remain disaster recovery, not normal application rollback.
- TechLead and DBA must review corrective migrations.

## Residual Risk

- GitHub Actions migration validation against PostgreSQL is not implemented yet; this blocks marking OJ-DB-002 as Done.
- `npm audit --omit=dev --audit-level=high` passes, but Prisma CLI still reports a moderate transitive advisory under `@hono/node-server`.

## Routing Decision

Status moves from `In Development` to `TL Review`.

TechLead must review the backend PR and confirm whether CI validation should be added inside this card or split into a dedicated CI/CD card.
