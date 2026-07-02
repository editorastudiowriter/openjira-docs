# Release Evidence

Evidence type: Release readiness  
Workflow step: Release readiness  
Result: `<approved | blocked | conditional>`  
Routing: `<release | harden | return>`

## Release

Release ID: `<release id>`  
Sprint: `<sprint number>`  
Date: `<YYYY-MM-DD>`  
Prepared by: `<name>`  
Release owner: `<name>`  
Approvers: `<names>`  
Target environment: `<staging | production | other>`

## Scope

Included cards:

| Card | Title | Status | Evidence |
| --- | --- | --- | --- |
| `<CARD-ID>` | `<title>` | `<status>` | `<link>` |

Excluded cards:

| Card | Reason | Next Action |
| --- | --- | --- |
| `<CARD-ID>` | `<reason>` | `<next action>` |

## Version

Repository: `<repository>`  
Branch: `<branch>`  
Commit: `<commit sha>`  
Pull request: `<pr link or not available>`  
Build artifact: `<artifact link or not available>`  
Release tag: `<tag or not available>`

## Environment

Environment: `<staging | production | preview>`  
Application URL: `<url>`  
Backend URL: `<url or not applicable>`  
Database version/migration: `<version or not applicable>`  
Feature flags/config: `<flags or not applicable>`

## Commands Executed

| Command | Expected Result | Actual Result | Status |
| --- | --- | --- | --- |
| `<command>` | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |

## Readiness Checklist

| Check | Expected Result | Actual Result | Status |
| --- | --- | --- | --- |
| Functional evidence complete | `<expected>` | `<actual>` | `<passed | failed>` |
| Tester evidence complete | `<expected>` | `<actual>` | `<passed | failed>` |
| QA gate complete | `<expected>` | `<actual>` | `<passed | failed>` |
| SonarQube gate passed | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |
| Required checks passed | `<expected>` | `<actual>` | `<passed | failed>` |
| Security review complete | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |
| Documentation updated | `<expected>` | `<actual>` | `<passed | failed>` |
| Rollback plan exists | `<expected>` | `<actual>` | `<passed | failed>` |

## Risks

| Risk | Severity | Mitigation | Owner |
| --- | --- | --- | --- |
| `<risk>` | `<critical | high | medium | low>` | `<mitigation>` | `<owner>` |

## Screenshots And Logs

Screenshots:

- `<path or link>`

Logs:

- `<path or link>`

Reports:

- `<path or link>`

## Release Decision

Decision: `<approve release | block release | approve with conditions>`  
Expected result:

`<expected release outcome>`

Actual result:

`<actual release readiness outcome>`

Next action:

`<next action>`

## Links

Sprint report: `<sprint report link>`  
Release notes: `<link or not available>`  
Deploy evidence: `<link or not available>`  
Related KB/ADR: `<link or not applicable>`

