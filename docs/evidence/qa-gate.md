# QA Gate Evidence

Evidence type: QA gate  
Workflow step: QA Validation  
Result: `<passed | failed>`  
Routing: `<Waiting TL Review | Returned by QA>`

## Card

Card ID: `<CARD-ID>`  
Epic: `<epic id>`  
Title: `<card title>`  
Owner role: `<role>`  
Assignee: `<assignee>`  
QA owner: `<qa name>`  
Date: `<YYYY-MM-DD>`  
Evidence author: `<name>`

## Environment

Environment: `<local | dev | staging | production | preview>`  
Application URL: `<url>`  
Backend URL: `<url or not applicable>`  
Database/seed: `<seed, fixture, or dataset>`  
Feature flags/config: `<flags or not applicable>`

## Version

Repository: `<repository>`  
Branch: `<branch>`  
Commit: `<commit sha>`  
Pull request: `<pr link or not available>`  
Build artifact: `<artifact link or not available>`

## Inputs Reviewed

Tester evidence: `<link>`  
Card acceptance criteria: `<link or summary>`  
Pull request: `<link or not available>`  
SonarQube project: `<link or not available>`  
CI run: `<link or not available>`

## Commands Executed

| Command | Result | Notes |
| --- | --- | --- |
| `<command>` | `<passed | failed | not applicable>` | `<notes>` |

## Quality Checks

| Check | Expected Result | Actual Result | Status |
| --- | --- | --- | --- |
| Lint | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |
| Typecheck | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |
| Unit tests | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |
| Integration tests | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |
| E2E tests | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |
| Build | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |
| Security checks | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |
| Documentation updated | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |

## SonarQube

Quality gate: `<passed | failed | not configured>`  
Bugs: `<count>`  
Vulnerabilities: `<count>`  
Code smells: `<count>`  
Coverage: `<percentage or not available>`  
Duplications: `<percentage or not available>`  
Report link: `<link or not available>`

## Screenshots And Logs

Screenshots:

- `<path or link>`

Logs:

- `<path or link>`

Reports:

- `<path or link>`

## QA Decision

Decision: `<send to TechLead | return to developer>`  
Required card status: `<Waiting TL Review | Returned by QA>`  
Required tags if returned: `URGENTE`, `QA`, `SONARQUBE`  
Notes:

`<qa notes>`

## Links

Card: `<card link>`  
Sprint report: `<sprint report link>`  
Related KB/ADR: `<link or not applicable>`

