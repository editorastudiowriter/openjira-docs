# Local Database Strategy

Card: OJ-014 - Define local database strategy  
Owner: Eduardo Ribeiro  
Role: DBA PostgreSQL  
Status: evidence for TechLead review  
Source data model: `docs/architecture/postgresql-mvp-data-model.md`  
Source ORM strategy: `docs/architecture/orm-migration-strategy.md`  
Last updated: 2026-07-03

## Decision

Use Docker Compose with PostgreSQL for local development and a separate PostgreSQL database for automated integration tests.

Local credentials are development-only and non-secret. Real secrets must never be committed.

## Docker Compose Baseline

```yaml
services:
  postgres:
    image: postgres:17-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: openjira
      POSTGRES_PASSWORD: openjira_dev
      POSTGRES_DB: openjira_dev
    volumes:
      - openjira_postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U openjira -d openjira_dev"]
      interval: 5s
      timeout: 3s
      retries: 10
volumes:
  openjira_postgres_data:
```

## Environment Variables

```env
DATABASE_URL=postgresql://openjira:openjira_dev@localhost:5432/openjira_dev?schema=public
TEST_DATABASE_URL=postgresql://openjira:openjira_dev@localhost:5432/openjira_test?schema=public
```

Rules:

- `.env` is local-only and ignored by git.
- `.env.example` may contain non-secret placeholders.
- CI injects database URLs through protected environment configuration.

## Databases

| Environment | Database |
| --- | --- |
| Development | `openjira_dev` |
| Test/integration | `openjira_test` |
| CI integration | ephemeral PostgreSQL service database |

## Lifecycle

Local development:

```bash
docker compose up -d postgres
npm run db:migrate:dev
npm run db:seed
```

Reset local database:

```bash
npm run db:reset:dev
npm run db:seed
```

Test database:

```bash
npm run db:test:create
npm run db:test:reset
npm run db:migrate:deploy:test
npm run test:integration
```

## Prisma Scripts

```json
{
  "db:generate": "prisma generate",
  "db:migrate:dev": "prisma migrate dev",
  "db:migrate:deploy": "prisma migrate deploy",
  "db:migrate:deploy:test": "DATABASE_URL=$TEST_DATABASE_URL prisma migrate deploy",
  "db:test:create": "PGHOST=localhost PGPORT=5432 PGUSER=openjira PGPASSWORD=openjira_dev createdb openjira_test || true",
  "db:migrate:status": "prisma migrate status",
  "db:seed": "prisma db seed",
  "db:reset:dev": "prisma migrate reset",
  "db:test:reset": "DATABASE_URL=$TEST_DATABASE_URL prisma migrate reset --force --skip-seed"
}
```

## Seed Strategy

Seeds are deterministic and minimal:

- One organization.
- One `org_admin`, one `project_admin`, one `member`, one `viewer`.
- One project.
- One board with MVP columns.
- Issues covering type, priority, assignee, comments, and movement history.

Seeds must not include production data or real credentials.

## Test Data Strategy

- Integration tests use `openjira_test` or an ephemeral CI database.
- Mutating suites reset state before execution.
- Fixtures map to `OJ-AC-*` acceptance criteria IDs.
- Authorization tests include users across roles and projects.

## Migration And Drift

- Local development creates migrations with `prisma migrate dev`.
- CI/shared environments apply migrations with `prisma migrate deploy`.
- Drift blocks QA until resolved.
- OJ-DB-001 must implement composite FKs, partial unique indexes, and `pg_trgm` from the approved data model.

## Acceptance Result

OJ-014 is ready for TechLead review.
