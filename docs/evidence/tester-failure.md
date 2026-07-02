# Tester Failure Evidence

Evidence type: Tester failure  
Workflow step: Tester Validation  
Result: `failed`  
Routing: `Returned by Tester`

## Card

Card ID: `<CARD-ID>`  
Epic: `<epic id>`  
Title: `<card title>`  
Owner role: `<role>`  
Assignee: `<assignee>`  
Tester: `<tester name>`  
Date: `<YYYY-MM-DD>`  
Evidence author: `<name>`

## Scope Tested

Description:

`<short summary of what was tested>`

Acceptance criteria tested:

- `<criterion 1>`
- `<criterion 2>`

## Environment

Environment: `<local | dev | staging | production | preview>`  
Application URL: `<url>`  
Browser/device: `<browser and device>`  
Backend URL: `<url or not applicable>`  
Database/seed: `<seed, fixture, or dataset>`  
Feature flags/config: `<flags or not applicable>`

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

## Failure Summary

Expected result:

`<expected behavior>`

Actual result:

`<actual behavior>`

Impact:

`<business or user impact>`

Severity: `<critical | high | medium | low>`  
Reproducible: `<yes | no | intermittent>`

## Reproduction Steps

| Step | Action | Expected Result | Actual Result |
| --- | --- | --- | --- |
| 1 | `<action>` | `<expected>` | `<actual>` |

## Evidence

Screenshots:

- `<path or link>`

Logs:

- `<path or link>`

Related reports:

- `<path or link>`

## Tester Decision

Decision: `return to responsible developer`  
Required card status: `Returned by Tester`  
Required tags: `URGENTE`, `BUG`, `TESTER`  
Next action:

`<clear correction request for the responsible developer>`

## Links

Card: `<card link>`  
Sprint report: `<sprint report link>`  
Related KB/ADR: `<link or not applicable>`

