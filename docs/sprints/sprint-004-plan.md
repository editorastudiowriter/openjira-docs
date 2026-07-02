# Sprint 004 Plan - Release Hardening And Delivery

Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Status: planned  
Depends on: Sprint 003 MVP workflow completion

## Workflow Rule

Release readiness requires documented evidence. QA owns the quality gate and does not fix implementation code.

## Sprint Goal

Harden the MVP with observability, SonarQube, required checks, docs automation, deploy/rollback runbooks, and release readiness evidence.

## Candidate Cards

| Card | Title | Owner | Priority | Required status before execution |
| --- | --- | --- | --- | --- |
| OJ-005 | Publish docs remotely | Camila Rocha | P1 | Ready for Sprint |
| OJ-022 | Configure SonarQube quality gate | Renata Barbosa | P0 | Ready for Sprint |
| OJ-024 | Create CI required checks | Camila Rocha | P0 | Ready for Sprint |
| OJ-027 | Define deployment and rollback runbook | Camila Rocha | P1 | Ready for Sprint |
| OJ-028 | Add docs quality automation | Camila Rocha | P1 | Ready for Sprint |
| OJ-029 | Define release readiness checklist | Renata Barbosa | P1 | Ready for Sprint |
| OJ-OBS-001 | Implement backend observability | Gabriel Martins | P1 | Ready for Sprint |
| OJ-DOC-001 | Create ADR structure | Sofia Mendes | P1 | Ready for Sprint |
| OJ-DOC-002 | Create KB index and linking rules | Sofia Mendes | P1 | Ready for Sprint |

## Entry Criteria

- MVP flows are implemented and validated.
- Repository, hosting, SonarQube, and deployment access are available.
- Evidence templates are available and referenced by the workflow.

## Exit Criteria

- Required CI checks block merge.
- SonarQube quality gate is configured.
- Docs publish remotely with build evidence.
- Deployment and rollback runbooks are documented.
- Release readiness checklist is complete.
- Sprint report includes delivered work, unfinished work, metrics, risks, blockers, and recommendation for the next cycle.

