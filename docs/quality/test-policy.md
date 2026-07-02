# Test Policy Draft

Cards: OJ-021, OJ-023  
Owner: Bruno Teixeira  
Status: draft for TechLead review  
Workflow: `docs/operations/aia-delivery-workflow.md`

## Purpose

Define the minimum testing policy needed to unblock quality planning without waiting for implementation details that belong to later sprints.

## Separation Of Responsibilities

| Card | Responsibility |
| --- | --- |
| OJ-023 | Defines the test pyramid, minimum coverage expectations, evidence policy, and exceptions process. |
| OJ-021 | Defines the executable integration and E2E strategy, tools, fixtures, cleanup, CI execution, and environment details. |

Recommendation:

- OJ-023 should not depend on OJ-021.
- OJ-021 should consume OJ-023 and define how the policy is executed.
- OJ-019 should depend on OJ-023 for policy and OJ-020 for CI execution, not on OJ-021 for the initial quality gate definition.

## Minimum Test Pyramid

| Layer | Goal | Required before MVP release |
| --- | --- | --- |
| Unit | Validate isolated domain and UI logic | Required for changed business logic and helpers |
| Integration | Validate API, database, and service boundaries | Required for auth, RBAC, projects, board, issues, comments, filters |
| E2E/P2P | Validate critical user journeys | Required for login, organization/project selection, board, issue create/edit, movement, comments, filters |
| Manual evidence | Capture exploratory or access-dependent checks | Required when automation is not available yet |

## Candidate Minimum Gates

- Lint passes.
- Typecheck passes.
- Build passes.
- Unit tests pass where code exists.
- Integration tests pass for backend modules touching persistence or authorization.
- E2E/P2P tests pass for critical MVP flows once UI and backend are available.
- Documentation is updated for changed behavior.
- Evidence is attached for Tester and QA decisions.

## Exceptions

Any missing automated test must include:

- Reason automation is not currently possible.
- Manual evidence link.
- Follow-up card.
- TechLead approval.

## Risks

- Without OJ-009, test cases may not map cleanly to acceptance criteria.
- Without OJ-020, CI execution details remain provisional.
- Without OJ-019, thresholds are candidates rather than final gates.

## Review History

| Date | Reviewer | Result | Notes |
| --- | --- | --- | --- |
| 2026-07-01 | Bruno Teixeira | Draft for TechLead review | Created to break dependency ambiguity between OJ-019, OJ-021, and OJ-023. |
