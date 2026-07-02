# Deploy Evidence

Evidence type: Deploy evidence  
Workflow step: Deployment  
Result: `<succeeded | failed | rolled back>`  
Routing: `<verify | rollback | release report>`

## Deployment

Deployment ID: `<deployment id>`  
Date: `<YYYY-MM-DD>`  
Prepared by: `<name>`  
Deployment owner: `<name>`  
Environment: `<preview | dev | staging | production>`  
Application URL: `<url>`  
Hosting target: `<Cloudflare Pages | GitHub Pages | Vercel | other>`

## Scope

Card or release: `<CARD-ID | release id>`  
Sprint: `<sprint number>`  
Deployment purpose: `<preview | validation | release | hotfix>`  
Change summary:

`<summary>`

## Version

Repository: `<repository>`  
Branch: `<branch>`  
Commit: `<commit sha>`  
Pull request: `<pr link or not available>`  
Build artifact: `<artifact link or not available>`  
Release tag: `<tag or not available>`

## Environment Details

Frontend URL: `<url or not applicable>`  
Backend URL: `<url or not applicable>`  
Database version/migration: `<version or not applicable>`  
Feature flags/config: `<flags or not applicable>`  
Secrets source checked: `<yes | no | not applicable>`  
No secrets printed in logs: `<yes | no>`

## Commands Executed

| Command | Expected Result | Actual Result | Status |
| --- | --- | --- | --- |
| `<command>` | `<expected>` | `<actual>` | `<passed | failed | not applicable>` |

## Deployment Steps

| Step | Action | Expected Result | Actual Result | Status |
| --- | --- | --- | --- | --- |
| 1 | `<action>` | `<expected>` | `<actual>` | `<passed | failed>` |

## Smoke Checks

| Check | URL/Command | Expected Result | Actual Result | Status |
| --- | --- | --- | --- | --- |
| `<check>` | `<url or command>` | `<expected>` | `<actual>` | `<passed | failed>` |

## Rollback

Rollback required: `<yes | no>`  
Rollback command/procedure: `<command or link>`  
Rollback result: `<not executed | succeeded | failed>`  
Previous stable version: `<commit/tag/artifact>`

## Screenshots And Logs

Screenshots:

- `<path or link>`

Logs:

- `<path or link>`

Reports:

- `<path or link>`

## Deployment Decision

Decision: `<deployment accepted | deployment failed | rollback completed>`  
Expected result:

`<expected deployment outcome>`

Actual result:

`<actual deployment outcome>`

Next action:

`<next action>`

## Links

Card: `<card link or not applicable>`  
Release evidence: `<release evidence link or not applicable>`  
Sprint report: `<sprint report link>`  
Related KB/ADR: `<link or not applicable>`

