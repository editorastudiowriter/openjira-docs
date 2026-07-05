# SPR-001 Evidence - OJ-DB-001 And OJ-016

Sprint: SPR-001  
Cards: OJ-DB-001, OJ-016  
Date: 2026-07-05  
Result: approved for completed scope

## Summary

OJ-DB-001 and OJ-016 were implemented in the backend workspace at `/home/douglasdreer/projects/javascript/nestjs/openjira-server`.

Published backend source:

- Repository: `editorastudiowriter/openjira-server`
- Visibility: private
- Branch: `development`
- Commit: `785e47c Add Sprint 001 database schema and config`

OJ-DB-002 was started because the initial migration was required to prove schema creation, but rollback/CI evidence is not complete yet.

## Backend Artifacts

- `prisma/schema.prisma`
- `prisma/migrations/20260705030000_initial_mvp_schema/migration.sql`
- `prisma.config.ts`
- `docker-compose.yml`
- `.env.example`
- `src/config/app-env.ts`
- `src/config/config.module.ts`
- `src/config/config.service.ts`
- `src/app.module.ts`
- `src/main.ts`
- `README.md`
- `package.json`
- `package-lock.json`

## OJ-DB-001 Evidence

Implemented MVP PostgreSQL schema with Prisma models for:

- users
- user_credentials
- auth_sessions
- organizations
- organization_memberships
- projects
- project_memberships
- boards
- board_columns
- issues
- issue_comments
- issue_history

Manual PostgreSQL migration additions:

- `citext` extension
- `pg_trgm` extension
- soft-delete aware partial unique indexes
- active-query partial indexes
- `idx_issues_title_trgm`
- composite foreign keys for tenant/project isolation

Validated against real PostgreSQL from Docker Compose.

## OJ-016 Evidence

Implemented runtime configuration validation with fail-fast behavior for:

- required `DATABASE_URL`
- `PORT` range
- `NODE_ENV` enum
- `CORS_ORIGINS`
- `CORS_CREDENTIALS`
- cookie same-site/secure compatibility
- auth and CSRF cookie/header names
- session TTL

Safety behavior proven:

- Missing `DATABASE_URL` exits during bootstrap.
- `CORS_ORIGINS=*` with `CORS_CREDENTIALS=true` exits during bootstrap.
- `.env.example` contains development placeholders only.

## Commands Executed

| Command | Result |
| --- | --- |
| `npm install prisma @prisma/client` | Passed; Prisma 7.8.0 installed. |
| `DATABASE_URL=... npm run db:validate` | Passed. |
| `DATABASE_URL=... npm run db:generate` | Passed. |
| `docker compose up -d postgres` | Passed; PostgreSQL healthy. |
| `DATABASE_URL=... npm run db:migrate:deploy` | Passed; initial migration applied. |
| `DATABASE_URL=... npm run db:migrate:status` | Passed; database schema up to date. |
| `npm run build` | Passed. |
| `npm run lint` | Passed. |
| `npm audit --omit=dev --audit-level=high` | Passed high-severity gate; moderate Prisma CLI transitive advisory remains. |
| `node dist/main.js` without `DATABASE_URL` | Failed as expected. |
| `CORS_ORIGINS=* CORS_CREDENTIALS=true node dist/main.js` | Failed as expected. |

## Database Verification

PostgreSQL verification returned:

- extensions: `citext`, `pg_trgm`
- core tables present: `users`, `organizations`, `projects`, `issues`, `issue_comments`, `issue_history`
- manual indexes present: `uq_users_email_active`, `uq_organizations_slug_active`, `uq_org_memberships_org_user_active`, `uq_projects_org_key_active`, `uq_project_memberships_project_user_active`, `uq_boards_project_active`, `uq_board_columns_board_position_active`, `uq_board_columns_board_key_active`, `idx_issues_title_trgm`

## Residual Risk

- Backend source is published in the private `openjira-server` repository on branch `development`.
- Prisma CLI currently reports moderate transitive advisory under `@hono/node-server`; high-severity audit gate passes.
- OJ-DB-002 remains open for rollback/forward-fix detail, CI migration validation, and drift policy evidence.
- OJ-DB-003 remains open for deterministic seeds.
