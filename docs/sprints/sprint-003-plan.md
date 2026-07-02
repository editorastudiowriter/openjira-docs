# Sprint 003 Plan - Issues, Comments, Filters And Tests

Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Status: planned  
Depends on: Sprint 002 board foundation

## Workflow Rule

Tester and QA do not fix code. Returned cards go back to the responsible developer with evidence and the required workflow tags.

## Sprint Goal

Complete the user-facing issue workflow: create, detail, edit, comments, history, filters, and MVP E2E test strategy.

## Candidate Cards

| Card | Title | Owner | Priority | Required status before execution |
| --- | --- | --- | --- | --- |
| OJ-BE-005 | Implement issues, comments, filters, and history API | Gabriel Martins | P0 | Ready for Sprint |
| OJ-FE-005 | Implement issue create, detail, and edit UI | Lucas Ferreira | P0 | Ready for Sprint |
| OJ-FE-006 | Implement comments UI | Lucas Ferreira | P1 | Ready for Sprint |
| OJ-FE-007 | Implement basic board filters UI | Lucas Ferreira | P1 | Ready for Sprint |
| OJ-021 | Define integration and E2E test strategy | Bruno Teixeira | P1 | Ready for Sprint |
| OJ-025 | Define E2E MVP suite | Bruno Teixeira | P0 | Ready for Sprint |

## Entry Criteria

- Board API and frontend board UI are functional.
- Issue API contract covers CRUD, comments, filters, history, errors, and authorization.
- Test data supports issue, comment, movement, and filter flows.

## Exit Criteria

- Issues can be created, opened, edited, and moved through the board.
- Comments can be listed and added.
- Filters support status, assignee, priority, type, and text search.
- Relevant changes create history records.
- MVP E2E suite is defined and ready for CI implementation.

