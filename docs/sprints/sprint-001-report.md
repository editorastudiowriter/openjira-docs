# Sprint 001 Report

Sprint: SPR-001  
Period: 2026-07-05 to 2026-07-07  
Prepared by: AIA - Artificial Intelligence Agency  
Product owner: Mariana Costa

## Executive Summary

Sprint 001 delivered the executable identity, access, backend foundation, and first authenticated frontend path for OpenJira. The backend now exposes configuration, health, authentication, RBAC, organization, project, and project-member APIs. The frontend now has an app shell, route map, login flow, session states, and organization/project selection wired to backend APIs.

## Sprint Goal

Deliver the first executable OpenJira foundation: database schema, migrations, seeds, backend configuration, API baseline, authentication, RBAC, organizations, projects, authenticated frontend shell, route map, login UI, and organization/project selection UI.

## Result

- Status: completed
- Goal achieved: yes
- Release recommendation: continue

## Delivered Cards

| Card | Title | Owner | Evidence |
| --- | --- | --- | --- |
| OJ-DB-001 | Create PostgreSQL MVP schema | Eduardo Ribeiro | `docs/evidence/sprint-001-oj-db-001-oj-016.md` |
| OJ-DB-002 | Implement migrations and rollback | Eduardo Ribeiro / Gabriel Martins | `docs/evidence/sprint-001-oj-db-002.md` |
| OJ-DB-003 | Implement local and test seeds | Eduardo Ribeiro / Gabriel Martins | `docs/evidence/sprint-001-oj-db-003.md` |
| OJ-016 | Implement backend configuration module | Gabriel Martins | `docs/evidence/sprint-001-oj-db-001-oj-016.md` |
| OJ-BE-002 | Implement NestJS API baseline | Gabriel Martins | `docs/evidence/sprint-001-oj-be-002.md` |
| OJ-AUTH-001 | Implement authentication API | Gabriel Martins | `docs/evidence/sprint-001-oj-auth-001.md` |
| OJ-AUTH-002 | Implement backend RBAC | Gabriel Martins | `docs/evidence/sprint-001-oj-auth-002.md` |
| OJ-BE-003 | Implement organizations, members, and projects API | Gabriel Martins | `docs/evidence/sprint-001-oj-be-003.md` |
| OJ-017 | Define frontend app shell and navigation | Lucas Ferreira | `docs/evidence/sprint-001-oj-017-oj-fe-001.md` |
| OJ-FE-001 | Define Next.js route map | Lucas Ferreira | `docs/evidence/sprint-001-oj-017-oj-fe-001.md` |
| OJ-FE-002 | Implement login UI and auth states | Lucas Ferreira | `docs/evidence/sprint-001-oj-fe-002.md` |
| OJ-FE-003 | Implement organization and project selection UI | Lucas Ferreira | `docs/evidence/sprint-001-oj-fe-003.md` |

## Unfinished Cards

| Card | Title | Reason | Next action |
| --- | --- | --- | --- |
| None | None | All selected cards completed. | Start Sprint 002 planning after product/TechLead review. |

## Decisions

| Decision | Owner | Impact |
| --- | --- | --- |
| Use backend-enforced HttpOnly cookie authentication with CSRF for mutable authenticated requests. | Gabriel Martins / Rafael Almeida | Keeps auth state server-side and avoids exposing session tokens to frontend JavaScript. |
| Use backend RBAC as authority for organization/project access. | Gabriel Martins / Rafael Almeida | Frontend can guide UX but cannot bypass authorization. |
| Keep `openjira-web` private until MVP is solid. | Camila Rocha / AIA | Aligns repository visibility with project governance. |
| Implement initial frontend auth/API calls client-side. | Lucas Ferreira | Delivers browser cookie flow quickly; server-side auth hardening can evolve later. |

## Quality Metrics

- Backend lint/build: passed for implemented backend cards.
- Backend migration CI: passed on PRs #1 through #7 in `openjira-server`.
- Backend high-severity audit: passed; moderate Prisma transitive advisory remains documented.
- Frontend lint/build: passed for PRs #1 through #3 in `openjira-web` by local validation.
- Frontend high-severity audit: passed; moderate Next/PostCSS advisory remains documented.
- Documentation build: passed before each publication.
- Documentation updated: yes; evidence published through GitHub Pages.

## Risks And Blockers

| Risk | Severity | Mitigation |
| --- | --- | --- |
| Frontend browser E2E is not yet automated. | Medium | Schedule E2E coverage in later testing cards before MVP release. |
| Moderate dependency advisories remain in Prisma/Next transitive dependencies. | Medium | Track upstream fixes; do not force breaking downgrades while high-severity gate passes. |
| Board/issues APIs and UI remain future work. | Medium | Continue with Sprint 002 board scope after review. |
| `openjira-web` has local-validation-only PRs until CI is configured. | Medium | Add frontend CI required checks in hardening/CI cards. |

## Recommendation For Next Sprint

Proceed to Sprint 002 with board and issue movement foundation: board/columns API, board UI, movement constraints, accessible move fallback, and integration evidence. Keep backend RBAC as the authority and add frontend CI as soon as the pipeline card is scheduled.
