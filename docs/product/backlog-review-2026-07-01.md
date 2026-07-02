# Backlog Review - 2026-07-01

Owner: Mariana Costa  
Reviewers: Mariana Costa, Rafael Almeida, Helena Duarte, Gabriel Martins, Eduardo Ribeiro, Lucas Ferreira, Beatriz Nogueira, Renata Barbosa, Bruno Teixeira, Camila Rocha, Sofia Mendes  
Status: completed

## Result

The original backlog was not ready for autonomous execution. It had the right themes but did not satisfy the mandatory AIA card model.

The backlog has been restructured in `docs/product/mvp-backlog.md`.

## Main Findings

- Cards were too generic and lacked required fields.
- Statuses did not follow the official workflow status model.
- Functional MVP cards were missing for auth, organizations, projects, boards, issues, comments, filters, frontend screens, API, data model, tests, CI/CD, SonarQube, evidence, and release.
- Dependencies were implicit.
- TechLead review was not represented.
- Done cards did not consistently point to evidence.

## Management Decision

- Do not start feature implementation from the old backlog.
- Use the new mandatory card template.
- All non-completed cards enter `TL Review`.
- Mariana continues backlog grooming autonomously with TechLead and Requirements Analyst validation.
- The requester does not need to approve each card. They receive the sprint report.

## Backend And DBA Findings

- Auth/RBAC needs a permission matrix and backend enforcement.
- PostgreSQL needs ERD, constraints, indexes, migrations, rollback, seeds, and multi-tenant strategy.
- API requires OpenAPI, DTOs, standard error response, pagination, sorting, filtering, and endpoint authorization.
- Backend needs baseline concerns: validation, exception filter, logger, Swagger, CORS, health/readiness, and observability.

## Frontend And UX Findings

- Missing route map, app shell definition, design system, screen inventory, board rules, issue flow, states, and accessibility criteria.
- Kanban drag/drop requires keyboard-accessible fallback and rollback behavior.
- Frontend work depends on requirements, architecture, RBAC, API contract, and data model.

## QA, Tester, CI/CD, Docs Findings

- Quality gates need objective thresholds.
- SonarQube needs a dedicated card.
- Evidence templates are mandatory.
- CI required checks must block merge.
- Docs need Markdown lint, Mermaid validation, broken link check, and deploy preview.
- Release readiness and rollback require runbooks.

## Immediate Next Actions

1. Finish requirements cards `OJ-007`, `OJ-008`, `OJ-009`.
2. Finish architecture cards `OJ-010`, `OJ-011`, `OJ-012`.
3. Finish data model cards `OJ-013`, `OJ-014`.
4. Finish quality and CI cards `OJ-019`, `OJ-020`, `OJ-023`.
5. Mariana requests required access through Infra for repository, hosting, SonarQube, and CI/CD.
