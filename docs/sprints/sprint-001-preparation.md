# Sprint 001 Preparation - Identity, Access And Project Foundation

Sprint: SPR-001  
Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Status: preparation started  
Preparation date: 2026-07-05

## Preparation Decision

SPR-001 can enter planning preparation without client action. The remaining blockers are internal AIA workflow items: sequencing, validation gates, evidence expectations, and card movement from review into sprint planning.

No product implementation starts from this document. Implementation starts only after the selected card is assigned and its dependencies are satisfied in order.

## Sprint Goal

Deliver the first executable authenticated OpenJira foundation: PostgreSQL schema, Prisma migrations, seeds, backend configuration, NestJS API baseline, authentication, RBAC, organizations/projects APIs, authenticated frontend shell, route map, login UI, and organization/project selection UI.

## Selected Scope

| Card | Owner | Execution lane | Current planning status |
| --- | --- | --- | --- |
| OJ-DB-001 | Eduardo Ribeiro | Database | Planned |
| OJ-DB-002 | Eduardo Ribeiro / Gabriel Martins | Database | Planned |
| OJ-DB-003 | Eduardo Ribeiro / Gabriel Martins | Database | Planned |
| OJ-016 | Gabriel Martins | Backend foundation | Planned |
| OJ-BE-002 | Gabriel Martins | Backend foundation | Planned |
| OJ-AUTH-001 | Gabriel Martins | Auth | Planned |
| OJ-AUTH-002 | Gabriel Martins | Auth/RBAC | Planned |
| OJ-BE-003 | Gabriel Martins | Organizations/projects API | Planned |
| OJ-017 | Lucas Ferreira | Frontend shell | Planned |
| OJ-FE-001 | Lucas Ferreira | Frontend routing | Planned |
| OJ-FE-002 | Lucas Ferreira | Login UI | Planned |
| OJ-FE-003 | Lucas Ferreira | Organization/project selection UI | Planned |

OJ-015 remains Done and is treated as foundation evidence, not as SPR-001 execution scope.

## Execution Sequence

1. OJ-DB-001 creates the PostgreSQL schema.
2. OJ-DB-002 adds migrations, drift validation, deploy commands, and rollback/forward-fix evidence.
3. OJ-DB-003 adds local and test seeds.
4. OJ-016 defines backend runtime configuration and validated environment loading.
5. OJ-BE-002 establishes validation, errors, logging, Swagger, CORS, live health, and ready health.
6. OJ-AUTH-001 implements login, session cookies, CSRF/session hardening, current user, and route guards.
7. OJ-AUTH-002 implements backend-enforced RBAC.
8. OJ-BE-003 implements organizations, members, and projects APIs.
9. OJ-017 and OJ-FE-001 define shell and route map using the approved API and RBAC decisions.
10. OJ-FE-002 implements login UI after OJ-AUTH-001 is available.
11. OJ-FE-003 implements organization/project selection after OJ-BE-003 is available.

## Internal AIA Review

| Area | AIA members | Result |
| --- | --- | --- |
| Product and requirements | Mariana Costa, Helena Duarte | No client blocker; scope must exclude board, issues, comments, filters, and drag/drop. |
| Technical backend and DBA | Rafael Almeida, Gabriel Martins, Eduardo Ribeiro | Backend is preparable; auth cannot start before CSRF/session hardening and DB/migration foundation. |
| UX and frontend | Beatriz Nogueira, Lucas Ferreira | App shell, route map, login, and org/project selection are valid SPR-001 scope; board remains future scope. |
| QA, tests, documentation | Renata Barbosa, Bruno Teixeira, Sofia Mendes | Evidence and quality gates are mandatory per card; OJ-021 remains a later executable test-strategy gap, not a client blocker for preparation. |

## Gates Before Execution

- Selected card must be Planned and assigned.
- Dependencies must be satisfied in the execution sequence.
- No secrets may appear in logs, docs, screenshots, commits, or evidence.
- Backend checks: npm run lint, npm run build, npm audit --omit=dev --audit-level=high.
- Database checks: Prisma validate/generate, migration from clean PostgreSQL, migration deploy in test, drift absent, seed idempotent.
- Frontend checks: npm run lint and npm run build.
- Tests become mandatory as scripts and domains are introduced.
- Evidence must use the templates under docs/evidence/.

## Impediments

| Type | Impediment | Owner | Resolution |
| --- | --- | --- | --- |
| Team | Cards were still shown as TL Review in backlog/portal. | Rafael Almeida / Coordinator | Move selected SPR-001 cards to Planned for preparation; execution remains sequenced. |
| Team | OJ-AUTH-001 requires CSRF/session hardening before implementation. | Gabriel Martins / Thiago Silva | Treat as mandatory acceptance gate for auth implementation. |
| Team | Integration/E2E strategy OJ-021 is not finalized. | Bruno Teixeira / Renata Barbosa | Not blocker for preparation; record manual evidence until executable strategy is approved. |
| Client | None for preparation. | N/A | No client action required now. |
