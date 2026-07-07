# SPR-001 Evidence - OJ-BE-003

Sprint: SPR-001  
Card: OJ-BE-003 - Implement organizations, members, and projects API  
Owner: Gabriel Martins  
Assignee: Gabriel Martins  
Evidence author: Sofia Mendes  
Date: 2026-07-07  
Result: Done

## Summary

OJ-BE-003 implemented the authenticated organization, project, and project-member API layer required by the Sprint 001 frontend organization/project selection flow.

Published backend source:

- Repository: `editorastudiowriter/openjira-server`
- Visibility: private
- Base branch: `development`
- Activity branch: `feat/OJ-BE-003-organizations-members-projects-api`
- Commit: `8210931 Add organization and project APIs`
- Pull request: `https://github.com/editorastudiowriter/openjira-server/pull/7`
- Merge commit: `0c56dcc`
- Author: `Gabriel Martins <gabriel.martins@aia.local>`

## Backend Artifacts

- `src/organizations/organizations.module.ts`
- `src/organizations/organizations.controller.ts`
- `src/organizations/projects.controller.ts`
- `src/organizations/organizations.service.ts`
- `src/organizations/organization.types.ts`
- `src/organizations/dto/create-organization-request.dto.ts`
- `src/organizations/dto/create-project-request.dto.ts`
- `src/organizations/dto/project-member-request.dto.ts`
- `src/app.module.ts`

## Implemented Scope

- Added `GET /api/organizations` for authenticated accessible organizations.
- Added `POST /api/organizations` to create an organization with the creator as `org_admin`.
- Added `GET /api/organizations/:organizationId/projects` for accessible projects scoped by organization membership.
- Added `POST /api/organizations/:organizationId/projects` restricted to organization admins.
- Added `GET /api/projects/:projectId` for authorized project summary.
- Added `GET /api/projects/:projectId/members` restricted to project/member managers.
- Added `POST /api/projects/:projectId/members` to add project members.
- Added `PATCH /api/projects/:projectId/members/:userId` to change project roles.
- Added `DELETE /api/projects/:projectId/members/:userId` to remove project members.
- Preserved backend RBAC and CSRF enforcement on protected mutations.
- Prevented removal or demotion of the last `project_admin`.

## Authorization Matrix Validated

| Actor | Scenario | Expected | Result |
| --- | --- | --- | --- |
| Anonymous | List organizations | `401` | Passed |
| Admin | List organizations | `200` | Passed |
| Member | List accessible projects in organization | `200` | Passed |
| Viewer | List project members | `403` | Passed |
| Admin | List project members | `200` | Passed |
| Member | Create project | `403` | Passed |
| Admin | Create organization | `201` | Passed |
| Admin | Create project | `201` | Passed |
| Admin | Add outsider as project viewer | `201` | Passed |
| Added outsider | Read newly accessible project | `200` | Passed |
| Last project admin | Delete own admin membership | `409` | Passed |

## Commands Executed

| Command | Result |
| --- | --- |
| `npm run lint` | Passed. |
| `npm run build` | Passed. |
| `DATABASE_URL=... npm run db:seed` | Passed; seeded organization, project, users, and roles available. |
| HTTP organization/project/member matrix against local server | Passed. |
| `npm audit --omit=dev --audit-level=high` | Passed high-severity gate. |
| GitHub Actions `Validate PostgreSQL migrations` | Passed in 1m10s. |

## Residual Risk

- Pagination query parameters are documented in the REST contract but remain a follow-up for broader list scaling. Current Sprint 001 UI can consume the returned `data` arrays.
- `npm audit --omit=dev --audit-level=high` passes, but Prisma CLI still reports a moderate transitive advisory under `@hono/node-server`.

## Routing Decision

Status moves from `Planned` to `Done`.

Frontend shell, route map, login UI, and organization/project selection can now proceed using authenticated backend APIs.
