# SonarQube Failure Evidence

Evidence type: SonarQube failure  
Workflow step: QA Validation  
Result: `failed`  
Routing: `Returned by QA`

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
SonarQube project: `<project key>`  
SonarQube URL: `<url>`  
CI provider/run: `<link or not available>`

## Version

Repository: `<repository>`  
Branch: `<branch>`  
Commit: `<commit sha>`  
Pull request: `<pr link or not available>`  
Build artifact: `<artifact link or not available>`

## Commands Executed

| Command | Result | Notes |
| --- | --- | --- |
| `<command>` | `failed` | `<notes>` |

## Quality Gate Result

Expected result:

`Quality gate passes with no blocking bugs, vulnerabilities, or configured threshold violations.`

Actual result:

`<actual SonarQube result>`

Quality gate: `failed`  
Bugs: `<count>`  
Vulnerabilities: `<count>`  
Security hotspots: `<count>`  
Code smells: `<count>`  
Coverage: `<percentage or not available>`  
Duplications: `<percentage or not available>`  
New code conditions failed: `<conditions>`

## Failed Conditions

| Condition | Threshold | Actual Result | Status |
| --- | --- | --- | --- |
| `<condition>` | `<threshold>` | `<actual>` | `failed` |

## Evidence

SonarQube report: `<link>`  
CI logs:

- `<path or link>`

Screenshots:

- `<path or link>`

## QA Decision

Decision: `return to responsible developer`  
Required card status: `Returned by QA`  
Required tags: `URGENTE`, `QA`, `SONARQUBE`  
Next action:

`<clear quality correction request for the responsible developer>`

## Links

Card: `<card link>`  
Sprint report: `<sprint report link>`  
Related KB/ADR: `<link or not applicable>`

