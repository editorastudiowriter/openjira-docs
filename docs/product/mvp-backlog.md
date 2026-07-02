# OpenJira MVP Backlog

Owner: Mariana Costa  
Agency: AIA - Artificial Intelligence Agency  
Status: active  
Last updated: 2026-07-01  
Workflow: `docs/operations/aia-delivery-workflow.md`

## Operating Rule

The AIA squad owns backlog creation, sprint planning, card breakdown, acceptance criteria, delivery sequencing, and quality gates autonomously.

No implementation card can enter a sprint unless it follows the required card model, has dependencies declared, and has TechLead review status.

## MVP Goal

Validate that a product and engineering team can manage one real project end to end using OpenJira: login, organization, project, board, issues, comments, movement across workflow, and basic filters.

## Status Legend

| Status | Meaning |
| --- | --- |
| Done | Work already completed and evidence exists |
| Draft | Mariana is writing or restructuring the card |
| TL Review | TechLead must review card completeness |
| Ready for Sprint | Card is approved and can be planned |
| Planned | Card is selected for an active sprint |
| Blocked | Work cannot continue without access or dependency |

## Management Review Result

The previous backlog was reviewed by Product Strategy, TechLead, Requirements, Backend, DBA, Frontend, UX/UI, QA, Tester, CI/CD, and Documentation.

Result:

- The old backlog had correct themes but insufficient card detail.
- Functional MVP cards were missing.
- Dependencies were implicit and are now explicit.
- Quality gates, evidence, SonarQube, CI/CD, deploy, accessibility, API contracts, RBAC, migrations, seeds, and observability required dedicated cards.
- All non-completed cards must pass TechLead review before entering a sprint.

## Epic OJ-E01: Governance And Product Foundation

### OJ-001 - Define product vision

Role: Product Strategy  
Owner: Mariana Costa  
Assignee: Mariana Costa  
Priority: P0  
Status: Done  
Tags: `PRODUCT`, `VISION`  
Dependencies: none  
Evidence: `docs/product/vision.md`

Description:

Define the product vision, MVP boundaries, personas, value proposition, non-goals, risks, and technical base decisions.

Business value:

Aligns the squad around the purpose of OpenJira before backlog and implementation work.

Acceptance criteria:

- Product vision exists.
- MVP scope is explicit.
- Non-goals are documented.
- Risks and next decisions are listed.

### OJ-002R - Restructure backlog using mandatory card model

Role: Product Strategy  
Owner: Mariana Costa  
Assignee: Mariana Costa  
Priority: P0  
Status: Done  
Tags: `BACKLOG`, `GROOMING`  
Dependencies: `OJ-003`  
Evidence: this document

Description:

Replace the initial short backlog with a complete MVP backlog that follows the AIA delivery workflow and includes ownership, dependencies, scope, acceptance, test, QA, documentation, and review expectations.

Business value:

Prevents execution from starting with ambiguous cards and reduces rework between management, engineering, quality, and documentation.

Acceptance criteria:

- Backlog contains epics and cards.
- Each card has owner, assignee, priority, status, tags, dependencies, description, acceptance criteria, test, QA, and documentation expectations.
- Missing MVP functional cards are added.
- Cards requiring TechLead review are marked correctly.

### OJ-003 - Define autonomous AIA operating model

Role: Product Strategy  
Owner: Mariana Costa  
Assignee: Mariana Costa  
Priority: P0  
Status: Done  
Tags: `GOVERNANCE`, `AIA`  
Dependencies: none  
Evidence: `docs/operations/aia-delivery-workflow.md`

Description:

Define mandatory operating rules, role scopes, good paths, bad paths, status model, tags, card fields, and delivery flow.

Business value:

Allows the squad to operate autonomously without violating scope or requiring requester interference during execution.

Acceptance criteria:

- Squad autonomy is documented.
- Scope boundaries are documented.
- Management, development, data, quality, design, infra, and documentation roles are separated.
- Good path and bad path are documented.
- Mermaid workflow exists.

## Epic OJ-E02: Remote Documentation

### OJ-004 - Create openjira-docs portal

Role: Documentation  
Owner: Sofia Mendes  
Assignee: Sofia Mendes  
Priority: P0  
Status: Done  
Tags: `DOCS`, `PORTAL`  
Dependencies: none  
Evidence: `openjira-docs` Vite project

Description:

Create the remote documentation portal using Vite, JavaScript, Tailwind CSS, and SCSS.

Business value:

Provides a remotely publishable source of truth for OpenJira product, workflow, backlog, sprint, and reporting information.

Acceptance criteria:

- Vite project exists.
- Tailwind CSS and SCSS are configured.
- Portal documents remote access recommendation.
- Portal documents AIA governance.
- Production build passes.

### OJ-005 - Publish docs remotely

Role: CI/CD  
Owner: Camila Rocha  
Assignee: Camila Rocha  
Priority: P1  
Status: Blocked  
Tags: `DOCS`, `DEPLOY`, `INFRA`, `BLOCKED_ACCESS`  
Dependencies: `OJ-004`, hosting target, repository access, deployment secrets  
KB links: `README.md`

Description:

Publish `openjira-docs` as a static site using Cloudflare Pages as the preferred target or GitHub Pages as fallback.

Business value:

Makes AIA documentation accessible remotely and independently from the OpenJira application.

Acceptance criteria:

- Hosting target is selected.
- Build command is `npm run build`.
- Output directory is `dist`.
- Remote URL is recorded in docs.
- Deployment is automated.
- Preview deployment exists for branches when supported.

Test expectations:

- `npm run build` passes.
- Published URL loads the portal.
- Main navigation anchors work.

QA expectations:

- Docs deployment evidence includes build log and remote URL.
- No secrets are committed.

Documentation expectations:

- README includes final deployment target and URL.
- Sprint report records deployment status.

### OJ-006 - Create sprint report template

Role: Documentation  
Owner: Sofia Mendes  
Assignee: Sofia Mendes  
Priority: P0  
Status: Done  
Tags: `DOCS`, `SPRINT_REPORT`  
Dependencies: `OJ-003`  
Evidence: `docs/sprints/report-template.md`

Description:

Create the standard end-of-sprint report template required by the autonomous AIA operating model.

Acceptance criteria:

- Report template includes sprint goal.
- Report template includes delivered and unfinished cards.
- Report template includes decisions, risks, blockers, quality metrics, and next recommendation.

### OJ-026 - Create evidence templates

Role: Documentation  
Owner: Sofia Mendes  
Assignee: Sofia Mendes  
Priority: P0  
Status: Ready for Sprint  
Tags: `DOCS`, `QA`, `TESTER`, `EVIDENCE`  
Dependencies: `OJ-003`
Evidence: `docs/evidence/index.md`

Description:

Create standardized Markdown templates for tester success, tester failure, QA gate, SonarQube failure, release evidence, and deploy evidence.

Business value:

Makes sprint reports auditable and prevents undocumented approvals or returns.

Acceptance criteria:

- Templates exist for tester success, tester failure, QA gate, SonarQube failure, release evidence, and deploy evidence.
- Templates include environment, commit, branch, PR, commands, expected result, actual result, screenshots/logs, and links.
- Templates are referenced by the workflow.

Test expectations:

- Markdown files render correctly.

QA expectations:

- Templates contain all fields required for audit.

Documentation expectations:

- Add index page under `docs/evidence/`.

## Epic OJ-E03: Requirements

### OJ-007 - Map core user journeys

Role: Requirements  
Owner: Helena Duarte  
Assignee: Helena Duarte  
Priority: P0  
Status: Ready for Sprint  
Tags: `REQUIREMENTS`, `DISCOVERY`  
Dependencies: `OJ-002R`
Evidence: `docs/requirements/core-user-journeys.md`

Description:

Map the core MVP journeys: login, organization, project, board, issue creation, issue movement, comments, filters, and permission-sensitive paths.

Business value:

Creates the source for frontend, backend, QA, and E2E alignment.

Acceptance criteria:

- Login journey is documented.
- Organization/project journey is documented.
- Board and issue journey is documented.
- Permission-sensitive journeys are identified.
- Mermaid flow exists for the main MVP journey.

Test expectations:

- Journeys are later mapped to E2E tests.

QA expectations:

- Each journey has success and failure paths.

Documentation expectations:

- Publish as Markdown under `docs/requirements/`.

### OJ-008 - Define functional requirements by domain

Role: Requirements  
Owner: Helena Duarte  
Assignee: Helena Duarte  
Priority: P0  
Status: TL Review  
Tags: `REQUIREMENTS`, `MVP`  
Dependencies: `OJ-007`

Description:

Define MVP functional requirements grouped by auth, organizations, members, projects, boards, issues, comments, filters, permissions, audit, and notifications out of scope.

Acceptance criteria:

- Requirements are grouped by domain.
- Each requirement has priority.
- MVP and post-MVP items are separated.
- Requirements reference impacted roles and screens.

Test expectations:

- Requirements can be converted into acceptance tests.

QA expectations:

- No requirement is ambiguous or unverifiable.

Documentation expectations:

- Publish requirements matrix in Markdown.

### OJ-009 - Define acceptance criteria for MVP flows

Role: Quality Analyst  
Owner: Renata Barbosa  
Assignee: Renata Barbosa  
Priority: P0  
Status: TL Review  
Tags: `QA`, `ACCEPTANCE`, `MVP`  
Dependencies: `OJ-007`, `OJ-008`

Description:

Define acceptance criteria for critical MVP flows and link them to quality gates and E2E expectations.

Acceptance criteria:

- Critical flows have explicit good path and bad path.
- Acceptance criteria are testable.
- Definition of Done is linked.
- Quality gates are mapped to each flow type.

Test expectations:

- Criteria can be converted into test cases.

QA expectations:

- QA can approve/reject without subjective interpretation.

Documentation expectations:

- Publish acceptance criteria matrix.

## Epic OJ-E04: Architecture And Technical Decisions

### OJ-010 - Define technical architecture

Role: Tech Lead  
Owner: Rafael Almeida  
Assignee: Rafael Almeida  
Priority: P0  
Status: TL Review  
Tags: `ARCHITECTURE`, `ADR`  
Dependencies: `OJ-008`

Description:

Define the full technical architecture for frontend, backend, API, database, CI/CD, deployment, observability, and documentation.

Acceptance criteria:

- Frontend architecture is documented.
- Backend architecture is documented.
- API strategy is documented.
- Deployment topology is documented.
- Architecture includes dependency direction and module boundaries.
- ADRs are created for major decisions.

Test expectations:

- Architecture enables automated validation in CI.

QA expectations:

- Quality gates are represented in the architecture.

Documentation expectations:

- Include Mermaid context/container diagrams.

### OJ-011 - Choose ORM and migration strategy

Role: Tech Lead  
Owner: Rafael Almeida  
Assignee: Rafael Almeida  
Priority: P0  
Status: TL Review  
Tags: `ARCHITECTURE`, `DATABASE`, `ADR`  
Dependencies: `OJ-010`

Description:

Compare Prisma and TypeORM, choose ORM, define migration, rollback, drift validation, seed, and CI strategy.

Acceptance criteria:

- Prisma and TypeORM are compared.
- Recommendation is documented.
- Migration strategy is documented.
- Rollback and drift handling are documented.
- Impact on NestJS modules and testing is documented.

### OJ-012 - Define auth and RBAC strategy

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `AUTH`, `RBAC`, `SECURITY`  
Dependencies: `OJ-010`, `OJ-008`

Description:

Define authentication and backend-enforced authorization for organizations, projects, boards, issues, comments, and admin actions.

Acceptance criteria:

- Authentication approach is selected.
- Roles and scopes are defined.
- Backend enforcement rules are documented.
- Minimum roles include `org_admin`, `project_admin`, `member`, and `viewer`, unless ADR justifies otherwise.
- Permission matrix exists.

QA expectations:

- Permission failure paths are testable.

Documentation expectations:

- Publish RBAC matrix.

### OJ-BE-001 - Define REST API contract for MVP

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `API`, `OPENAPI`, `BACKEND`  
Dependencies: `OJ-007`, `OJ-008`, `OJ-010`, `OJ-013`

Description:

Define REST endpoints, DTOs, responses, error format, pagination, sorting, filtering, and authorization requirements for auth, organizations, members, projects, boards, columns, issues, comments, issue history, and filters.

Acceptance criteria:

- OpenAPI/Swagger draft exists.
- Standard error response includes `statusCode`, `code`, `message`, `requestId`, and safe details.
- Pagination, sorting, and filtering rules are documented.
- Auth and RBAC requirement is declared per endpoint.

Test expectations:

- API contract can drive backend integration tests and frontend mocks.

Documentation expectations:

- Publish endpoint matrix.

## Epic OJ-E05: Data Model And Local Infrastructure

### OJ-013 - Design initial PostgreSQL model

Role: DBA  
Owner: Eduardo Ribeiro  
Assignee: Eduardo Ribeiro  
Priority: P0  
Status: TL Review  
Tags: `DATABASE`, `POSTGRESQL`, `MODEL`  
Dependencies: `OJ-011`, `OJ-012`

Description:

Design the MVP PostgreSQL data model for users, organizations, memberships, projects, boards, board columns, issues, comments, and issue history.

Acceptance criteria:

- Core entities are documented.
- Relationships and cardinalities are documented.
- Index candidates are documented.
- Audit requirements are documented.
- Constraints, FKs, enums/domains, cascade behavior, and soft-delete policy are documented.
- Multi-tenant isolation strategy is documented.

Documentation expectations:

- Include Mermaid ERD.

### OJ-014 - Define local database strategy

Role: DBA  
Owner: Eduardo Ribeiro  
Assignee: Eduardo Ribeiro  
Priority: P0  
Status: TL Review  
Tags: `DATABASE`, `DOCKER`, `LOCAL_ENV`  
Dependencies: `OJ-013`

Description:

Define Docker Compose, environment variables, local credentials, database lifecycle, and seed expectations for development and test environments.

Acceptance criteria:

- Docker Compose strategy is documented.
- Local database name and credentials are defined for development.
- Test database strategy is documented.
- Seed requirements are documented.

### OJ-DB-001 - Create PostgreSQL MVP schema

Role: DBA  
Owner: Eduardo Ribeiro  
Assignee: Eduardo Ribeiro  
Priority: P0  
Status: TL Review  
Tags: `DATABASE`, `SCHEMA`, `POSTGRESQL`  
Dependencies: `OJ-011`, `OJ-013`

Description:

Implement the first schema for users, organizations, organization members, projects, project role bindings, boards, board columns, issues, issue comments, and issue history.

Acceptance criteria:

- Schema includes FKs, unique constraints, timestamps, required indexes, and integrity constraints.
- Main filters are backed by indexes.
- Tenant isolation fields are present where required.

Test expectations:

- Schema can be created from scratch in PostgreSQL.

QA expectations:

- No MVP entity is missing from schema.

### OJ-DB-002 - Implement migrations and rollback

Role: Backend + DBA  
Owner: Eduardo Ribeiro  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `DATABASE`, `MIGRATIONS`, `CI`  
Dependencies: `OJ-011`, `OJ-DB-001`

Description:

Create the first migration workflow with local, test, deploy, rollback, and CI validation commands.

Acceptance criteria:

- First migration exists.
- Migration commands are documented.
- Rollback strategy is documented.
- CI validates migrations against PostgreSQL.

### OJ-DB-003 - Implement local and test seeds

Role: Backend + DBA  
Owner: Eduardo Ribeiro  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `DATABASE`, `SEEDS`, `TEST_DATA`  
Dependencies: `OJ-DB-002`

Description:

Create idempotent local and test seeds for demo organization, users, roles, project, board, columns, issues, comments, and history.

Acceptance criteria:

- Seeds are idempotent.
- Demo data supports MVP manual testing.
- Test data supports integration and E2E tests.

## Epic OJ-E06: Backend MVP

### OJ-015 - Scaffold openjira-server

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `BACKEND`, `NESTJS`, `SETUP`  
Dependencies: `OJ-010`

Description:

Create the NestJS backend project at `~/projects/javascript/nestjs/openjira-server` and validate the minimal buildable application.

Acceptance criteria:

- NestJS project exists at `~/projects/javascript/nestjs/openjira-server`.
- TypeScript build passes.
- Lint passes.
- Health endpoint exists.

### OJ-016 - Implement backend configuration module

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `BACKEND`, `CONFIG`, `ENV`  
Dependencies: `OJ-015`

Description:

Implement environment configuration and validation for backend runtime, database, auth, CORS, logging, and test settings.

Acceptance criteria:

- Environment validation exists.
- Database URL is configured.
- Local and test env patterns are documented.
- Invalid env fails fast.

### OJ-BE-002 - Implement NestJS API baseline

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `BACKEND`, `NESTJS`, `API_BASELINE`  
Dependencies: `OJ-015`, `OJ-016`

Description:

Implement the baseline API capabilities required before feature modules: validation, exception filter, structured logger, Swagger, CORS, health, readiness, and graceful shutdown.

Acceptance criteria:

- Global validation pipe is enabled.
- Exception filter returns standard error format.
- Structured logs include method, route, status, duration, and request id.
- Swagger/OpenAPI is available.
- `/health/live` works without database.
- `/health/ready` validates PostgreSQL connection.

### OJ-AUTH-001 - Implement authentication API

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `BACKEND`, `AUTH`, `SECURITY`  
Dependencies: `OJ-012`, `OJ-BE-002`, `OJ-DB-002`

Description:

Implement login, password hashing, user identity, authenticated current-user endpoint, and auth guards according to the selected strategy.

Acceptance criteria:

- Login works for seeded users.
- Passwords are hashed.
- Private routes require authentication.
- Current user endpoint exists.
- Auth failures return standard errors.

Test expectations:

- Unit and integration tests cover login success, invalid credentials, and private route protection.

### OJ-AUTH-002 - Implement backend RBAC

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `BACKEND`, `RBAC`, `SECURITY`  
Dependencies: `OJ-012`, `OJ-DB-001`, `OJ-AUTH-001`

Description:

Implement backend guards/policies for organization, project, board, issue, and comment access.

Acceptance criteria:

- Membership is checked on protected resource access.
- Role checks are enforced in backend.
- Frontend cannot bypass authorization.
- Permission denied returns standard `403` error.

### OJ-BE-003 - Implement organizations, members, and projects API

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `BACKEND`, `ORGANIZATIONS`, `PROJECTS`  
Dependencies: `OJ-AUTH-002`, `OJ-DB-002`

Description:

Implement CRUD and listing endpoints for organizations, organization members, and projects scoped to the authenticated user.

Acceptance criteria:

- User can list accessible organizations.
- User can create organization when allowed.
- User can list and create projects in an organization when allowed.
- Unauthorized access is denied.

### OJ-BE-004 - Implement boards, columns, and issue movement API

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `BACKEND`, `BOARD`, `WORKFLOW`  
Dependencies: `OJ-BE-003`

Description:

Implement board loading, columns, issue ordering, and transactional issue movement between columns.

Acceptance criteria:

- Project board loads with columns and issues.
- Column belongs to the requested project.
- Issue movement is transactional.
- Invalid movement returns standard error.
- Ordering is preserved.

### OJ-BE-005 - Implement issues, comments, filters, and history API

Role: Backend  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P0  
Status: TL Review  
Tags: `BACKEND`, `ISSUES`, `COMMENTS`, `AUDIT`  
Dependencies: `OJ-BE-004`

Description:

Implement issue CRUD, comments, filters, and issue history for relevant changes.

Acceptance criteria:

- Issues can be created, edited, listed, and opened.
- Comments can be added and listed.
- Filters support status, assignee, priority, type, and text.
- Relevant issue changes create history records.

### OJ-OBS-001 - Implement backend observability

Role: Backend + Infra  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Priority: P1  
Status: TL Review  
Tags: `BACKEND`, `OBSERVABILITY`, `INFRA`  
Dependencies: `OJ-BE-002`

Description:

Implement logs, request id, HTTP metrics, database availability metrics, and readiness signals.

Acceptance criteria:

- Logs are structured.
- Request id is propagated.
- HTTP latency and error rate are measurable.
- Database readiness is observable.

## Epic OJ-E07: Frontend And UX MVP

### OJ-017 - Define frontend app shell and navigation

Role: Frontend  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Priority: P0  
Status: TL Review  
Tags: `FRONTEND`, `NEXTJS`, `APP_SHELL`  
Dependencies: `OJ-010`, `OJ-012`

Description:

Define authenticated app shell, sidebar/topbar, organization/project context, breadcrumbs, global actions, session states, responsive navigation, and route protection.

Acceptance criteria:

- App shell layout is defined.
- Navigation model is defined.
- Empty/loading/error/session-expired states are planned.
- Mobile behavior is defined.
- Permission states are identified.

### OJ-018 - Define UX/UI MVP screens and board rules

Role: UX/UI  
Owner: Beatriz Nogueira  
Assignee: Beatriz Nogueira  
Priority: P0  
Status: TL Review  
Tags: `UX`, `UI`, `DESIGN_SYSTEM`  
Dependencies: `OJ-007`, `OJ-008`

Description:

Define UI direction, MVP screens, design system tokens, component inventory, board behavior, issue drawer/modal behavior, states, and accessibility expectations.

Acceptance criteria:

- Core screens are listed.
- Layout principles are documented.
- Board interaction rules are documented.
- Component inventory exists.
- Accessibility baseline exists.

### OJ-FE-001 - Define Next.js route map

Role: Frontend  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Priority: P0  
Status: TL Review  
Tags: `FRONTEND`, `ROUTES`, `NEXTJS`  
Dependencies: `OJ-017`, `OJ-BE-001`

Description:

Define all MVP routes, layouts, permissions, data requirements, loading states, error states, and fallback pages.

Acceptance criteria:

- Routes exist for login, org/project selection, board, issue detail, and account/session states.
- Each route declares auth requirement and data source.
- `403`, `404`, and generic error states are planned.

### OJ-FE-002 - Implement login UI and auth states

Role: Frontend  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Priority: P0  
Status: TL Review  
Tags: `FRONTEND`, `AUTH`, `UI`  
Dependencies: `OJ-AUTH-001`, `OJ-FE-001`

Description:

Implement login screen, validation, loading, error, session handling, and redirect after successful authentication.

Acceptance criteria:

- Login form validates required fields.
- API errors are shown clearly.
- Loading state prevents duplicate submit.
- Successful login routes to the correct app context.

### OJ-FE-003 - Implement organization and project selection UI

Role: Frontend  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Priority: P0  
Status: TL Review  
Tags: `FRONTEND`, `ORGANIZATIONS`, `PROJECTS`  
Dependencies: `OJ-BE-003`, `OJ-FE-001`

Description:

Implement UI to list and select accessible organizations and projects.

Acceptance criteria:

- Accessible organizations are listed.
- Projects are listed under selected organization.
- Empty and permission states exist.

### OJ-FE-004 - Implement Kanban board UI

Role: Frontend  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Priority: P0  
Status: TL Review  
Tags: `FRONTEND`, `BOARD`, `KANBAN`, `A11Y`  
Dependencies: `OJ-BE-004`, `OJ-018`

Description:

Implement board with columns, issue cards, drag and drop, keyboard-accessible movement fallback, loading/error states, optimistic updates, and rollback on failure.

Acceptance criteria:

- Board displays issues by status.
- Issue can move between columns.
- Movement failure rolls back visually.
- Keyboard alternative exists.
- Desktop and mobile layouts are usable.

### OJ-FE-005 - Implement issue create, detail, and edit UI

Role: Frontend  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Priority: P0  
Status: TL Review  
Tags: `FRONTEND`, `ISSUES`, `UI`  
Dependencies: `OJ-BE-005`, `OJ-FE-004`

Description:

Implement issue creation, detail, and editing experience with required fields, validation, metadata, assignee, priority, type, status, and error handling.

Acceptance criteria:

- Issue can be created.
- Issue can be opened from board.
- MVP fields can be edited.
- Required validation is visible and accessible.

### OJ-FE-006 - Implement comments UI

Role: Frontend  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Priority: P1  
Status: TL Review  
Tags: `FRONTEND`, `COMMENTS`  
Dependencies: `OJ-BE-005`, `OJ-FE-005`

Description:

Implement comment list and comment creation in the issue detail experience.

Acceptance criteria:

- Existing comments are listed.
- New comment can be added.
- Empty, loading, and error states exist.

### OJ-FE-007 - Implement basic board filters UI

Role: Frontend  
Owner: Lucas Ferreira  
Assignee: Lucas Ferreira  
Priority: P1  
Status: TL Review  
Tags: `FRONTEND`, `FILTERS`  
Dependencies: `OJ-BE-005`, `OJ-FE-004`

Description:

Implement filters for status, assignee, priority, type, and text search.

Acceptance criteria:

- Filters update board result.
- Active filters are visible.
- Clear filters action exists.

### OJ-UX-001 - Validate MVP accessibility baseline

Role: UX/UI  
Owner: Beatriz Nogueira  
Assignee: Beatriz Nogueira  
Priority: P0  
Status: TL Review  
Tags: `UX`, `A11Y`, `QA`  
Dependencies: `OJ-018`, `OJ-FE-004`, `OJ-FE-005`

Description:

Validate keyboard navigation, focus, contrast, labels, landmarks, error messages, reduced motion expectations, and drag/drop alternatives.

Acceptance criteria:

- Keyboard navigation works for critical flows.
- Focus is visible.
- Contrast target is WCAG AA.
- Inputs have labels.
- Drag/drop has accessible fallback.

## Epic OJ-E08: Quality, Testing, And Delivery

### OJ-019 - Define quality gates

Role: Quality Analyst  
Owner: Renata Barbosa  
Assignee: Renata Barbosa  
Priority: P0  
Status: TL Review  
Tags: `QA`, `QUALITY_GATE`  
Dependencies: `OJ-009`

Description:

Define required checks, blocking thresholds, severity rules, and release blocking criteria.

Acceptance criteria:

- Required checks are listed.
- Minimum test expectations are listed.
- Release blocking criteria are documented.
- Thresholds exist for lint, typecheck, build, tests, coverage, dependency audit, and SonarQube.

### OJ-020 - Define CI/CD baseline

Role: CI/CD  
Owner: Camila Rocha  
Assignee: Camila Rocha  
Priority: P0  
Status: TL Review  
Tags: `CICD`, `INFRA`, `QUALITY_GATE`  
Dependencies: `OJ-010`, `OJ-014`, `OJ-019`, `OJ-023`

Description:

Define baseline pipelines for frontend, backend, docs, PostgreSQL integration tests, required checks, artifacts, caches, secrets, and branch strategy.

Acceptance criteria:

- Frontend checks are listed.
- Backend checks are listed.
- Docs deployment check is listed.
- PostgreSQL test strategy is documented.
- Required checks for `development` are documented.

### OJ-021 - Define integration and E2E test strategy

Role: Test Engineering  
Owner: Bruno Teixeira  
Assignee: Bruno Teixeira  
Priority: P1  
Status: TL Review  
Tags: `TEST`, `E2E`, `INTEGRATION`  
Dependencies: `OJ-007`, `OJ-008`, `OJ-014`, `OJ-020`, `OJ-023`

Description:

Define test pyramid, integration strategy with PostgreSQL, E2E flows, fixtures, test data, cleanup strategy, and CI evidence.

Acceptance criteria:

- Critical flows are mapped to tests.
- Tooling recommendation is documented.
- Test data strategy is documented.
- E2E MVP suite includes login, organization/project, board, issue, comment, movement, and filters.

### OJ-022 - Configure SonarQube quality gate

Role: Quality Analyst + CI/CD  
Owner: Renata Barbosa  
Assignee: Camila Rocha  
Priority: P0  
Status: TL Review  
Tags: `QA`, `SONARQUBE`, `CICD`, `BLOCKED_ACCESS`  
Dependencies: `OJ-019`, SonarQube access, repository access

Description:

Configure SonarQube project, scanner, quality gate, branch/PR decoration, exclusions, token, and CI integration.

Acceptance criteria:

- SonarQube project exists.
- Scanner runs in CI.
- Quality gate blocks PR when failed.
- Thresholds are documented.
- First scan evidence exists.

### OJ-023 - Define test pyramid and coverage policy

Role: Test Engineering  
Owner: Bruno Teixeira  
Assignee: Bruno Teixeira  
Priority: P0  
Status: TL Review  
Tags: `TEST`, `COVERAGE`, `QA`  
Dependencies: `OJ-009`, `OJ-019`

Description:

Define unit, integration, E2E, coverage, exceptions, ownership, and evidence policy for frontend, backend, docs, and database work.

Acceptance criteria:

- Test pyramid is documented.
- Coverage minimums are documented.
- Exceptions require justification.
- Commands for local and CI execution are documented.

### OJ-024 - Create CI required checks

Role: CI/CD  
Owner: Camila Rocha  
Assignee: Camila Rocha  
Priority: P0  
Status: TL Review  
Tags: `CICD`, `QUALITY_GATE`, `REPOSITORY`  
Dependencies: `OJ-020`, repository access

Description:

Create required checks for install, lint, typecheck, unit tests, integration tests, build, SonarQube, docs build, and dependency audit.

Acceptance criteria:

- Required checks block merge to `development`.
- CI publishes test and build artifacts.
- Failed checks are visible in PR.

### OJ-025 - Define E2E MVP suite

Role: Test Engineering  
Owner: Bruno Teixeira  
Assignee: Bruno Teixeira  
Priority: P0  
Status: TL Review  
Tags: `E2E`, `PLAYWRIGHT`, `MVP`  
Dependencies: `OJ-007`, `OJ-008`, `OJ-021`

Description:

Define and later implement the critical E2E suite for MVP flows.

Acceptance criteria:

- Login flow is covered.
- Organization/project flow is covered.
- Board loading is covered.
- Issue create/detail/edit is covered.
- Comment flow is covered.
- Issue movement is covered.
- Filters are covered.

### OJ-027 - Define deployment and rollback runbook

Role: CI/CD  
Owner: Camila Rocha  
Assignee: Camila Rocha  
Priority: P1  
Status: TL Review  
Tags: `DEPLOY`, `RUNBOOK`, `ROLLBACK`  
Dependencies: `OJ-020`

Description:

Define environments, secrets, build artifacts, deploy preview, staging, production, smoke tests, rollback, and responsible roles.

Acceptance criteria:

- Deployment environments are documented.
- Rollback process is documented.
- Smoke test process is documented.
- Responsible roles are named.

### OJ-028 - Add docs quality automation

Role: CI/CD + Documentation  
Owner: Camila Rocha  
Assignee: Sofia Mendes  
Priority: P1  
Status: TL Review  
Tags: `DOCS`, `CICD`, `QUALITY_GATE`  
Dependencies: `OJ-004`, `OJ-020`

Description:

Add Markdown lint, Mermaid validation, broken link check, docs build, and docs preview to quality automation.

Acceptance criteria:

- Markdown lint runs.
- Mermaid validation or render check runs.
- Broken links are checked.
- Docs build runs in CI.

### OJ-029 - Define release readiness checklist

Role: Quality Analyst  
Owner: Renata Barbosa  
Assignee: Renata Barbosa  
Priority: P1  
Status: TL Review  
Tags: `QA`, `RELEASE`, `CHECKLIST`  
Dependencies: `OJ-019`, `OJ-027`

Description:

Define one release readiness checklist for function, tests, SonarQube, vulnerabilities, docs, migrations, evidence, and final approval.

Acceptance criteria:

- Checklist exists.
- Blocking and non-blocking items are separated.
- Final approval owner is explicit.

## Epic OJ-E09: Documentation And Knowledge Base

### OJ-DOC-001 - Create ADR structure

Role: Documentation  
Owner: Sofia Mendes  
Assignee: Sofia Mendes  
Priority: P1  
Status: TL Review  
Tags: `DOCS`, `ADR`  
Dependencies: `OJ-010`

Description:

Create ADR folder, template, naming convention, and index for technical decisions.

Acceptance criteria:

- ADR template exists.
- ADR index exists.
- Architecture cards reference ADR outputs.

### OJ-DOC-002 - Create KB index and linking rules

Role: Documentation  
Owner: Sofia Mendes  
Assignee: Sofia Mendes  
Priority: P1  
Status: TL Review  
Tags: `DOCS`, `KB`  
Dependencies: `OJ-003`

Description:

Create a knowledge base index and rules for linking cards, ADRs, evidence, runbooks, and sprint reports.

Acceptance criteria:

- KB index exists.
- Link naming conventions are documented.
- Cards reference KB links when available.

## Sprint Planning Recommendation

Do not start feature implementation until the remaining grooming cards are approved by TechLead and moved to `Ready for Sprint` or `Planned`.

Already internally unblocked:

- `OJ-007` - evidence in `docs/requirements/core-user-journeys.md`.
- `OJ-026` - evidence in `docs/evidence/index.md`.

Remaining internal dependency chain:

- `OJ-008`
- `OJ-009`
- `OJ-010`
- `OJ-011`
- `OJ-012`
- `OJ-013`
- `OJ-014`
- `OJ-019`
- `OJ-020`
- `OJ-023`

Recommended Sprint 000 continuation:

- Execute `OJ-008` after TechLead accepts `OJ-007` evidence.
- Finish requirements and acceptance criteria.
- Finish architecture and ORM decision.
- Finish data model and local database plan.
- Finish quality gates and CI/CD baseline.
- Request required access through Mariana and Infra.

Roadmap files:

- `docs/sprints/sprint-000-plan.md` - foundation, workflow, backlog, requirements, architecture, data, quality, CI/CD, and evidence templates.
- `docs/sprints/sprint-001-plan.md` - identity, access, database foundation, backend baseline, organizations, projects, and app shell.
- `docs/sprints/sprint-002-plan.md` - Kanban board, issue movement, board API, frontend board UI, and accessibility baseline.
- `docs/sprints/sprint-003-plan.md` - issues, comments, history, filters, and E2E strategy.
- `docs/sprints/sprint-004-plan.md` - release hardening, SonarQube, CI required checks, deploy, rollback, docs automation, and release readiness.
