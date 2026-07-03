# Sprint 000 Plan - Foundation And Operating Model

Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Start date: 2026-07-01  
Status: active

## Current Work Status

Sprint state: active  
Currently being reviewed: OJ-011, OJ-012, and OJ-019. Completed: OJ-015 backend scaffold  
Blocked cards: none requiring client action after GitHub Pages publication  
Next card to start: OJ-023 after TechLead accepts OJ-019 evidence; OJ-013 after TechLead accepts OJ-011 and OJ-012 evidence

## Execution Readiness Decision

Status: not ready for broad execution; ready for internal unblocking.

The sprint is ready for preparation, grooming, TechLead review, and documentation work that does not depend on the client. It is not ready for feature implementation or technical execution across frontend, backend, database, CI/CD, or final test policy.

Cards moved out of `TL Review` by internal AIA work:

- `OJ-007` - Map core user journeys. Evidence accepted by TechLead: `docs/requirements/core-user-journeys.md`.
- `OJ-008` - Define functional requirements by domain. Evidence accepted by TechLead: `docs/requirements/functional-requirements-matrix.md`.
- `OJ-009` - Define acceptance criteria for MVP flows. Evidence accepted by TechLead: `docs/quality/mvp-acceptance-criteria.md`.
- `OJ-010` - Define technical architecture. Evidence accepted by TechLead: `docs/architecture/technical-architecture.md`.
- `OJ-026` - Create evidence templates. Evidence: `docs/evidence/index.md`.

Cards in progress after dependency resolution:

- `OJ-011` has evidence ready for TechLead review: `docs/architecture/orm-migration-strategy.md`.
- `OJ-012` has evidence ready for TechLead review: `docs/architecture/auth-rbac-strategy.md`.
- `OJ-015` is done with a validated NestJS scaffold at `~/projects/javascript/nestjs/openjira-server`.
- `OJ-019` has evidence ready for TechLead review: `docs/quality/quality-gates.md`.
- `OJ-013` waits for `OJ-011` and `OJ-012`.
- `OJ-014` waits for `OJ-013`.
- `OJ-BE-001` waits for `OJ-007`, `OJ-008`, `OJ-010`, and `OJ-013`.
- `OJ-020` waits for `OJ-010`, `OJ-014`, `OJ-019`, and `OJ-023`.
- `OJ-023` waits for `OJ-009` and `OJ-019`.

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
| OJ-011 | Choose ORM and migration strategy | Rafael Almeida | P0 | TL Review |
| OJ-012 | Define auth and RBAC strategy | Gabriel Martins | P0 | TL Review |
| OJ-BE-001 | Define REST API contract for MVP | Gabriel Martins | P0 | TL Review |
| OJ-013 | Design initial PostgreSQL model | Eduardo Ribeiro | P0 | TL Review |
| OJ-014 | Define local database strategy | Eduardo Ribeiro | P0 | TL Review |
| OJ-015 | Scaffold openjira-server | Gabriel Martins | P0 | Done |
| OJ-019 | Define quality gates | Renata Barbosa | P0 | TL Review |
| OJ-020 | Define CI/CD baseline | Camila Rocha | P0 | TL Review |
| OJ-023 | Define test pyramid and coverage policy | Bruno Teixeira | P0 | TL Review |
| OJ-026 | Create evidence templates | Sofia Mendes | P0 | Ready for Sprint |

## Blocked Cards

| Card | Reason | Required action |
| --- | --- | --- |
| None | No client-action blocker remains after GitHub Pages publication | AIA continues internal dependency resolution |

## Definition Of Done

- Documentation is committed in `openjira-docs`.
- Build passes for `openjira-docs`.
- Sprint report template exists.
- MVP backlog is actionable by role and follows the mandatory card model.
- Cards selected for execution pass TechLead review before moving to `Ready for Sprint` or `Planned`.
- Architecture decisions required for Sprint 001 are identified.
- Backend scaffold path is ready or blockers are documented.
- Quality gate and CI/CD baseline are ready for Sprint 001 planning.

## Risks

- Remote docs are public through GitHub Pages; application repositories should remain private until the MVP is solid and tested.
- ORM decision is ready for TechLead review and can unblock database modeling after acceptance.
- Feature implementation must not start while requirements, architecture, RBAC, API contract, database model, and quality gates remain in `TL Review`.
- TechLead broke the dependency coupling between `OJ-019`, `OJ-020`, `OJ-021`, and `OJ-023`; the updated order is quality gates policy first, test policy next, CI/CD baseline after architecture/database/quality/test policy, then executable integration/E2E strategy.

## End-Of-Sprint Report Requirements

The final report must include:

- Sprint goal result.
- Completed cards.
- Incomplete cards.
- Decisions made.
- Quality checks executed.
- Risks and blockers.
- Recommended Sprint 001 scope.
