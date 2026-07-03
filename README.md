# OpenJira Docs

Portal de documentação remota da AIA para o produto OpenJira.

## Recomendação de acesso remoto

A decisão atual é publicar este projeto como site estático no GitHub Pages via GitHub Actions.

Motivos:

- Usa o repositório GitHub já disponível.
- Remove o bloqueio de conta externa, domínio customizado e secrets de terceiros.
- Requer que o repositório permita GitHub Pages; no plano atual, Pages para este repositório privado foi recusado pela API do GitHub.
- Publica automaticamente a branch `main` como produção quando Pages estiver habilitado.
- Mantém `development` como branch de evolução.
- Não exige backend, banco ou servidor próprio para leitura dos documentos.

Cloudflare Pages continua como alternativa futura para domínio customizado e previews avançados.

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

## Publicação no GitHub Pages

- Workflow: `.github/workflows/pages.yml`
- Branch de produção: `main`
- Branch de evolução: `development`
- Build command: `npm run build`
- Build output directory: `dist`
- URL esperada após desbloqueio do Pages: `https://editorastudiowriter.github.io/openjira-docs/`
- Bloqueio atual: GitHub retornou `Your current plan does not support GitHub Pages for this repository` para o repositório privado.

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

Regra operacional: cards novos entram em `TL Review` e só podem ser planejados para execução depois de aprovação do TechLead. Cards bloqueados por acesso externo ou SonarQube devem permanecer explicitamente bloqueados até Infra ou gestão resolverem a dependência. O bloqueio de documentação remota está tecnicamente preparado com GitHub Pages, mas depende de liberar Pages para este repositório privado ou tornar o repositório público.

O solicitante deve receber um relatório consolidado ao final de cada sprint com:

- Objetivo da sprint.
- Itens entregues.
- Itens não concluídos.
- Decisões tomadas.
- Riscos e bloqueios.
- Métricas de qualidade.
- Recomendação para a próxima sprint.
