# Sprint 001 Plan - Identity, Access And Project Foundation

Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Status: preparation started  
Preparation started: 2026-07-05  
Depends on: Sprint 000 completed and approved foundation cards

## Workflow Rule

SPR-001 is in preparation. No product implementation starts until the selected card is assigned, its dependencies are satisfied, and the workflow in `docs/operations/aia-delivery-workflow.md` allows execution.

## Sprint Goal

Deliver the first executable OpenJira foundation: database schema, migrations, seeds, backend configuration, API baseline, authentication, RBAC, organizations, projects, authenticated frontend shell, route map, login UI, and organization/project selection UI.

## Selected Cards

| Card | Title | Owner | Priority | Planning status |
| --- | --- | --- | --- | --- |
| OJ-DB-001 | Create PostgreSQL MVP schema | Eduardo Ribeiro | P0 | Done |
| OJ-DB-002 | Implement migrations and rollback | Eduardo Ribeiro / Gabriel Martins | P0 | Done |
| OJ-DB-003 | Implement local and test seeds | Eduardo Ribeiro / Gabriel Martins | P0 | Done |
| OJ-016 | Implement backend configuration module | Gabriel Martins | P0 | Done |
| OJ-BE-002 | Implement NestJS API baseline | Gabriel Martins | P0 | Done |
| OJ-AUTH-001 | Implement authentication API | Gabriel Martins | P0 | Done |
| OJ-AUTH-002 | Implement backend RBAC | Gabriel Martins | P0 | Done |
| OJ-BE-003 | Implement organizations, members, and projects API | Gabriel Martins | P0 | Done |
| OJ-017 | Define frontend app shell and navigation | Lucas Ferreira | P0 | Planned |
| OJ-FE-001 | Define Next.js route map | Lucas Ferreira | P0 | Planned |
| OJ-FE-002 | Implement login UI and auth states | Lucas Ferreira | P0 | Planned |
| OJ-FE-003 | Implement organization and project selection UI | Lucas Ferreira | P0 | Planned |

OJ-015 is already Done and remains evidence for the backend foundation.

## Entry Criteria

- Requirements cards `OJ-007`, `OJ-008`, and `OJ-009` are approved.
- Architecture cards `OJ-010`, `OJ-011`, and `OJ-012` are approved.
- Data planning cards `OJ-013` and `OJ-014` are approved.
- API contract card `OJ-BE-001` is approved.
- Quality and CI baseline cards `OJ-019`, `OJ-020`, and `OJ-023` are approved.
- Evidence templates from `OJ-026` are available.

## Execution Sequence

1. Database schema: `OJ-DB-001`.
2. Migrations and rollback: `OJ-DB-002`.
3. Local and test seeds: `OJ-DB-003`.
4. Backend configuration: `OJ-016`.
5. API baseline: `OJ-BE-002`.
6. Authentication: `OJ-AUTH-001`.
7. RBAC: `OJ-AUTH-002`.
8. Organizations, members, and projects API: `OJ-BE-003`.
9. Frontend shell and route map: `OJ-017`, `OJ-FE-001`.
10. Login UI: `OJ-FE-002`.
11. Organization/project selection UI: `OJ-FE-003`.

## Quality Gates

- Backend: `npm run lint`, `npm run build`, `npm audit --omit=dev --audit-level=high`.
- Frontend: `npm run lint`, `npm run build`.
- Database: Prisma validate/generate, clean migration, deploy migration, drift check, idempotent seed.
- Auth/RBAC: integration evidence for valid login, invalid login, protected route denial, role denial, and cross-org/cross-project denial without data leakage.
- Documentation: every completed card must link evidence in Markdown.

## Exit Criteria

- Backend can build and expose live/readiness endpoints.
- Local PostgreSQL schema, migrations, rollback/forward-fix policy, and seeds are available.
- Authentication and RBAC are enforced on protected endpoints.
- User can reach an authenticated frontend shell and select organization/project context.
- Required checks defined for the sprint pass.
- Sprint report is produced from `docs/sprints/report-template.md`.

## Preparation Evidence

- Preparation report: `docs/sprints/sprint-001-preparation.md`.
- Sprint 000 report: `docs/sprints/sprint-000-report.md`.
- Backlog source: `docs/product/mvp-backlog.md`.

## Execution Evidence

- OJ-DB-001 and OJ-016 evidence: `docs/evidence/sprint-001-oj-db-001-oj-016.md`.
- OJ-DB-002 evidence: `docs/evidence/sprint-001-oj-db-002.md`.
- OJ-DB-002 status: Done; rollback/forward-fix, drift evidence, and GitHub Actions migration validation complete.
- OJ-DB-003 evidence: `docs/evidence/sprint-001-oj-db-003.md`.
- OJ-DB-003 status: Done; local/test seeds, idempotency, and GitHub Actions validation complete.
- OJ-BE-002 evidence: `docs/evidence/sprint-001-oj-be-002.md`.
- OJ-BE-002 status: Done; validation, error envelope, request id, structured logs, Swagger, live health, and ready health complete.
- OJ-AUTH-001 evidence: `docs/evidence/sprint-001-oj-auth-001.md`.
- OJ-AUTH-001 status: Done; login, current user, logout, session cookie, CSRF guard, and protected route denial complete.
- OJ-AUTH-002 evidence: `docs/evidence/sprint-001-oj-auth-002.md`.
- OJ-AUTH-002 status: Done; backend RBAC guard, membership checks, role checks, protected proof endpoints, and standard `403` denial complete.
- OJ-BE-003 evidence: `docs/evidence/sprint-001-oj-be-003.md`.
- OJ-BE-003 status: Done; organizations, projects, and project-member APIs are implemented with backend RBAC and CSRF enforcement.
