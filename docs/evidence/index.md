# Evidence Templates

Owner: Sofia Mendes  
Workflow: `docs/operations/aia-delivery-workflow.md`  
Card model: `docs/product/card-template.md`

## Purpose

This directory contains the standard Markdown evidence templates used by OpenJira delivery roles.

Evidence documents make card approvals, returns, quality gates, releases, and deployments auditable. They must be linked from the related card, sprint report, pull request, or release record when available.

## Template Catalog

| Template | Use When | Primary Owner |
| --- | --- | --- |
| `tester-success.md` | Tester validates that a card satisfies acceptance criteria | Tester |
| `tester-failure.md` | Tester finds functional issues and returns the card to development | Tester |
| `qa-gate.md` | QA records quality gate validation and release readiness for a card | QA |
| `sonarqube-failure.md` | QA records failed SonarQube or quality gate validation | QA |
| `release-evidence.md` | Release readiness is assessed for a sprint, milestone, or release candidate | QA / TechLead |
| `deploy-evidence.md` | A deployment or preview deployment is executed and verified | Infrastructure / CI/CD |

## Required Evidence Fields

Each evidence document must capture:

- Card, epic, owner, assignee, and evidence author.
- Environment, branch, commit, and pull request.
- Commands executed and results.
- Expected result and actual result.
- Screenshots, logs, reports, or remote links.
- Decision, next action, and routing status.

## Workflow Routing

Tester success evidence routes the card to QA.

Tester failure evidence returns the card to the responsible developer with tags `URGENTE`, `BUG`, and `TESTER`.

QA gate approval routes the card to TechLead final review.

SonarQube failure evidence returns the card to the responsible developer with tags `URGENTE`, `QA`, and `SONARQUBE`.

Release and deploy evidence must be referenced by sprint reports and release records.

