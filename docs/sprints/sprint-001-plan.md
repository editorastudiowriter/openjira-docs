# Sprint 001 Plan - Identity, Access And Project Foundation

Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Status: planned  
Depends on: Sprint 000 cards approved by TechLead

## Workflow Rule

This sprint cannot start execution until its selected cards are moved from `TL Review` to `Ready for Sprint` or `Planned` according to `docs/operations/aia-delivery-workflow.md`.

## Sprint Goal

Deliver the first executable OpenJira foundation: database schema, migrations, seeds, backend baseline, authentication, RBAC, organizations, projects, and authenticated frontend shell.

## Candidate Cards

| Card | Title | Owner | Priority | Required status before execution |
| --- | --- | --- | --- | --- |
| OJ-DB-001 | Create PostgreSQL MVP schema | Eduardo Ribeiro | P0 | Ready for Sprint |
| OJ-DB-002 | Implement migrations and rollback | Eduardo Ribeiro | P0 | Ready for Sprint |
| OJ-DB-003 | Implement local and test seeds | Eduardo Ribeiro | P0 | Ready for Sprint |
| OJ-015 | Scaffold openjira-server | Gabriel Martins | P0 | Ready for Sprint |
| OJ-016 | Implement backend configuration module | Gabriel Martins | P0 | Ready for Sprint |
| OJ-BE-002 | Implement NestJS API baseline | Gabriel Martins | P0 | Ready for Sprint |
| OJ-AUTH-001 | Implement authentication API | Gabriel Martins | P0 | Ready for Sprint |
| OJ-AUTH-002 | Implement backend RBAC | Gabriel Martins | P0 | Ready for Sprint |
| OJ-BE-003 | Implement organizations, members, and projects API | Gabriel Martins | P0 | Ready for Sprint |
| OJ-017 | Define frontend app shell and navigation | Lucas Ferreira | P0 | Ready for Sprint |
| OJ-FE-001 | Define Next.js route map | Lucas Ferreira | P0 | Ready for Sprint |
| OJ-FE-002 | Implement login UI and auth states | Lucas Ferreira | P0 | Ready for Sprint |
| OJ-FE-003 | Implement organization and project selection UI | Lucas Ferreira | P0 | Ready for Sprint |

## Entry Criteria

- Requirements cards `OJ-007`, `OJ-008`, and `OJ-009` are approved.
- Architecture cards `OJ-010`, `OJ-011`, and `OJ-012` are approved.
- Data planning cards `OJ-013` and `OJ-014` are approved.
- API contract card `OJ-BE-001` is approved.
- Quality and CI baseline cards `OJ-019`, `OJ-020`, and `OJ-023` are approved.

## Exit Criteria

- Backend can build and expose health/readiness endpoints.
- Local PostgreSQL schema, migrations, rollback, and seeds are available.
- Authentication and RBAC are enforced on protected endpoints.
- User can reach an authenticated frontend shell and select organization/project context.
- Required checks defined for the sprint pass.

