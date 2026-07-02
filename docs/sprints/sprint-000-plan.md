# Sprint 000 Plan - Foundation And Operating Model

Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Start date: 2026-07-01  
Status: active

## Current Work Status

Sprint state: active  
Currently being worked: OJ-007 and OJ-026 are internally unblocked; remaining cards are in dependency review  
Blocked cards: OJ-005 - Publish docs remotely  
Next card to start: OJ-008 after TechLead accepts OJ-007 evidence

## Execution Readiness Decision

Status: not ready for broad execution; ready for internal unblocking.

The sprint is ready for preparation, grooming, TechLead review, and documentation work that does not depend on the client. It is not ready for feature implementation or technical execution across frontend, backend, database, CI/CD, or final test policy.

Cards moved out of `TL Review` by internal AIA work:

- `OJ-007` - Map core user journeys. Evidence: `docs/requirements/core-user-journeys.md`.
- `OJ-026` - Create evidence templates. Evidence: `docs/evidence/index.md`.

Cards that must remain in `TL Review` until dependencies are resolved:

- `OJ-008` can start after TechLead accepts `OJ-007` evidence.
- `OJ-009` waits for `OJ-007` and `OJ-008`.
- `OJ-010` waits for `OJ-008`.
- `OJ-011` waits for `OJ-010`.
- `OJ-012` waits for `OJ-010` and `OJ-008`.
- `OJ-013` waits for `OJ-011` and `OJ-012`.
- `OJ-014` waits for `OJ-013`.
- `OJ-015` waits for `OJ-010`.
- `OJ-BE-001` waits for `OJ-007`, `OJ-008`, `OJ-010`, and `OJ-013`.
- `OJ-019` waits for `OJ-009`.
- `OJ-020` waits for `OJ-010`, `OJ-014`, `OJ-019`, and `OJ-023`.
- `OJ-023` waits for `OJ-009` and `OJ-019`.

Workflow decision:

- Do not start feature implementation while requirements, architecture, RBAC, API contract, database model, quality gates, and CI/CD baseline remain in `TL Review`.
- Keep `OJ-005` blocked until Mariana requests and Infra provides hosting target, repository access, and deployment secrets.

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
| OJ-007 | Map core user journeys | Helena Duarte | P0 | Ready for Sprint |
| OJ-008 | Define functional requirements by domain | Helena Duarte | P0 | TL Review |
| OJ-009 | Define acceptance criteria for MVP flows | Renata Barbosa | P0 | TL Review |
| OJ-010 | Define technical architecture | Rafael Almeida | P0 | TL Review |
| OJ-011 | Choose ORM and migration strategy | Rafael Almeida | P0 | TL Review |
| OJ-012 | Define auth and RBAC strategy | Gabriel Martins | P0 | TL Review |
| OJ-BE-001 | Define REST API contract for MVP | Gabriel Martins | P0 | TL Review |
| OJ-013 | Design initial PostgreSQL model | Eduardo Ribeiro | P0 | TL Review |
| OJ-014 | Define local database strategy | Eduardo Ribeiro | P0 | TL Review |
| OJ-015 | Scaffold openjira-server | Gabriel Martins | P0 | TL Review |
| OJ-019 | Define quality gates | Renata Barbosa | P0 | TL Review |
| OJ-020 | Define CI/CD baseline | Camila Rocha | P0 | TL Review |
| OJ-023 | Define test pyramid and coverage policy | Bruno Teixeira | P0 | TL Review |
| OJ-026 | Create evidence templates | Sofia Mendes | P0 | Ready for Sprint |

## Blocked Cards

| Card | Reason | Required action |
| --- | --- | --- |
| OJ-005 | Depends on hosting target, repository access, and deployment secrets | Mariana requests access through Infra; TechLead reviews card before execution |

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

- Remote deploy cannot be completed until a Git remote, hosting target, repository access, and deployment secrets are selected.
- Backend scaffold may require confirming package manager and NestJS version.
- ORM decision can block database migration strategy if not resolved in Sprint 000.
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
