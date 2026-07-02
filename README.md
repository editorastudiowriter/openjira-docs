# OpenJira Docs

Portal de documentação remota da AIA para o produto OpenJira.

## Recomendação de acesso remoto

A recomendação principal é publicar este projeto como site estático no Cloudflare Pages.

Motivos:

- Deploy simples a partir de repositório Git.
- Preview automático por branch.
- CDN global.
- Domínio customizado.
- Não exige backend, banco ou servidor próprio para leitura dos documentos.
- Bom encaixe para uma wiki operacional versionada.

Alternativa aceitável: GitHub Pages via GitHub Actions.

## Stack

- Vite
- JavaScript
- Tailwind CSS
- SCSS

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O resultado fica em `dist/`.

## Configuração sugerida no Cloudflare Pages

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: LTS atual

## Governança AIA

A AIA e a squad OpenJira operam de forma autônoma, seguindo obrigatoriamente o fluxo definido em `docs/operations/aia-delivery-workflow.md`.

Nenhum membro atua fora do próprio escopo. Gestão não corrige código; tester e QA não corrigem código; cada item deve ser encaminhado para o responsável apto.

## Backlog e sprints

Fonte principal:

- Workflow obrigatório: `docs/operations/aia-delivery-workflow.md`
- Backlog MVP: `docs/product/mvp-backlog.md`
- Template de card: `docs/product/card-template.md`
- Plano Sprint 000: `docs/sprints/sprint-000-plan.md`
- Roadmap Sprint 001: `docs/sprints/sprint-001-plan.md`
- Roadmap Sprint 002: `docs/sprints/sprint-002-plan.md`
- Roadmap Sprint 003: `docs/sprints/sprint-003-plan.md`
- Roadmap Sprint 004: `docs/sprints/sprint-004-plan.md`

Regra operacional: cards novos entram em `TL Review` e só podem ser planejados para execução depois de aprovação do TechLead. Cards bloqueados por acesso, hosting, repository access, deployment secrets ou SonarQube devem permanecer explicitamente bloqueados até a Infra resolver a dependência por solicitação da Mariana.

O solicitante deve receber um relatório consolidado ao final de cada sprint com:

- Objetivo da sprint.
- Itens entregues.
- Itens não concluídos.
- Decisões tomadas.
- Riscos e bloqueios.
- Métricas de qualidade.
- Recomendação para a próxima sprint.
