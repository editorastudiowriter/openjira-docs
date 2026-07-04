# Sprint 000 Plan - Foundation And Operating Model

Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Start date: 2026-07-01  
Status: complete

## Current Work Status

Sprint state: complete  
Completed: all selected Sprint-000 cards  
Blocked cards: none requiring client action after GitHub Pages publication  
Next card to start: Sprint 001 planning and OJ-021 when scheduled

## Execution Readiness Decision

Status: Sprint-000 complete; Sprint 001 can be planned using the approved foundation.

The sprint delivered the operating foundation, remote documentation, architecture decisions, backend scaffold, database strategy, API contract, quality gates, test policy, and CI/CD baseline required for Sprint 001 planning.

Cards moved out of `TL Review` by internal AIA work:

- `OJ-007` - Map core user journeys. Evidence accepted by TechLead: `docs/requirements/core-user-journeys.md`.
- `OJ-008` - Define functional requirements by domain. Evidence accepted by TechLead: `docs/requirements/functional-requirements-matrix.md`.
- `OJ-009` - Define acceptance criteria for MVP flows. Evidence accepted by TechLead: `docs/quality/mvp-acceptance-criteria.md`.
- `OJ-010` - Define technical architecture. Evidence accepted by TechLead: `docs/architecture/technical-architecture.md`.
- `OJ-026` - Create evidence templates. Evidence: `docs/evidence/index.md`.

Current dependency resolution:

- `OJ-011` is done; TechLead approved `docs/architecture/orm-migration-strategy.md`.
- `OJ-012` is done; TechLead approved `docs/architecture/auth-rbac-strategy.md` with session hardening gate before auth implementation.
- `OJ-015` is done with a validated NestJS scaffold at `~/projects/javascript/nestjs/openjira-server`.
- `OJ-019` is done; TechLead approved `docs/quality/quality-gates.md`.
- `OJ-013` is done; TechLead approved `docs/architecture/postgresql-mvp-data-model.md`.
- `OJ-014` is done; TechLead approved `docs/architecture/local-database-strategy.md`.
- `OJ-BE-001` is done; TechLead approved `docs/architecture/rest-api-contract-mvp.md`.
- `OJ-020` is done; TechLead approved `docs/architecture/cicd-baseline.md`.
- `OJ-023` is done; TechLead approved `docs/quality/test-pyramid-coverage-policy.md`.

Workflow decision:

- Do not start feature implementation while requirements, architecture, RBAC, API contract, database model, quality gates, and CI/CD baseline remain in `TL Review`.
- `OJ-005` is complete; GitHub Pages is published at `https://editorastudiowriter.github.io/openjira-docs/`.

## Sprint Goal

Establish the autonomous operating foundation for OpenJira: remote documentation, product backlog, MVP scope, initial architecture decisions, data planning, quality gates, CI/CD baseline, and the first approved executable technical setup tasks.

## Scope

- Product vision.
- MVP backlog.
- Remote docs portal.
- AIA autonomous governance.
- Sprint report template.
- Requirements and acceptance criteria.
- Architecture decision backlog.
- Auth and RBAC strategy.
- API contract planning.
- Backend scaffold planning.
- Database planning.
- Quality gates and test policy baseline.
- CI/CD baseline.
- Evidence templates.

## Sprint Cards

| Card | Title | Owner | Priority | Status |
| --- | --- | --- | --- | --- |
| OJ-001 | Define product vision | Mariana Costa | P0 | Done |
| OJ-002R | Restructure backlog using mandatory card model | Mariana Costa | P0 | Done |
| OJ-003 | Define autonomous AIA operating model | Mariana Costa | P0 | Done |
| OJ-004 | Create openjira-docs portal | Sofia Mendes | P0 | Done |
| OJ-006 | Create sprint report template | Sofia Mendes | P0 | Done |
| OJ-007 | Map core user journeys | Helena Duarte | P0 | Done |
| OJ-008 | Define functional requirements by domain | Helena Duarte | P0 | Done |
| OJ-009 | Define acceptance criteria for MVP flows | Renata Barbosa | P0 | Done |
| OJ-010 | Define technical architecture | Rafael Almeida | P0 | Done |
| OJ-011 | Choose ORM and migration strategy | Rafael Almeida | P0 | Done |
| OJ-012 | Define auth and RBAC strategy | Gabriel Martins | P0 | Done |
| OJ-BE-001 | Define REST API contract for MVP | Gabriel Martins | P0 | Done |
| OJ-013 | Design initial PostgreSQL model | Eduardo Ribeiro | P0 | Done |
| OJ-014 | Define local database strategy | Eduardo Ribeiro | P0 | Done |
| OJ-015 | Scaffold openjira-server | Gabriel Martins | P0 | Done |
| OJ-019 | Define quality gates | Renata Barbosa | P0 | Done |
| OJ-020 | Define CI/CD baseline | Camila Rocha | P0 | Done |
| OJ-023 | Define test pyramid and coverage policy | Bruno Teixeira | P0 | Done |
| OJ-026 | Create evidence templates | Sofia Mendes | P0 | Done |

## Blocked Cards

| Card | Reason | Required action |
| --- | --- | --- |
| None | No Sprint-000 blocker remains | Sprint 001 can be planned from approved foundation |

## Definition Of Done

- Documentation is committed in `openjira-docs`.
- Build passes for `openjira-docs`.
- Sprint report template exists.
- MVP backlog is actionable by role and follows the mandatory card model.
- Cards selected for execution passed TechLead review or produced accepted Sprint-000 evidence.
- Architecture decisions required for Sprint 001 are identified.
- Backend scaffold path is ready or blockers are documented.
- Quality gate and CI/CD baseline are ready for Sprint 001 planning.
- Final report exists at `docs/sprints/sprint-000-report.md`.

## Risks

- Remote docs are public through GitHub Pages; application repositories should remain private until the MVP is solid and tested.
- ORM decision is ready for TechLead review and can unblock database modeling after acceptance.
- TechLead broke the dependency coupling between `OJ-019`, `OJ-020`, `OJ-021`, and `OJ-023`; the updated order is quality gates policy first, test policy next, CI/CD baseline after architecture/database/quality/test policy, then executable integration/E2E strategy.

## End-Of-Sprint Report

Final report: `docs/sprints/sprint-000-report.md`.
