# Sprint 002 Plan - Kanban Board And Issue Movement

Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Status: planned  
Depends on: Sprint 001 foundation

## Workflow Rule

Cards remain candidates until TechLead review confirms scope, dependencies, acceptance criteria, test expectations, QA expectations, and documentation expectations.

## Sprint Goal

Deliver the Kanban board foundation with board API, columns, issue movement, frontend board UI, and accessible interaction rules.

## Candidate Cards

| Card | Title | Owner | Priority | Required status before execution |
| --- | --- | --- | --- | --- |
| OJ-BE-004 | Implement boards, columns, and issue movement API | Gabriel Martins | P0 | Ready for Sprint |
| OJ-018 | Define UX/UI MVP screens and board rules | Beatriz Nogueira | P0 | Ready for Sprint |
| OJ-FE-004 | Implement Kanban board UI | Lucas Ferreira | P0 | Ready for Sprint |
| OJ-UX-001 | Validate MVP accessibility baseline | Beatriz Nogueira | P0 | Ready for Sprint |

## Entry Criteria

- Authentication, RBAC, organizations, projects, database schema, and seeds are working.
- Board and issue movement API contract is approved.
- UX board rules include desktop, tablet, mobile, keyboard fallback, failure rollback, and empty/loading/error states.

## Exit Criteria

- Project board loads with columns and issue cards.
- Issue movement is transactional in the API.
- Frontend supports board movement with rollback on failure.
- Keyboard-accessible movement fallback exists.
- Accessibility baseline is validated for board interactions.

