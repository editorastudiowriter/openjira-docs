import './tailwind.css'
import './styles.scss'
import {
  agents,
  docs,
  sprintCards,
  sprintRoadmap,
  sprintStatus,
  workflowColumns,
} from './content.js'

const documentModules = import.meta.glob('../docs/**/*.md', { eager: true, query: '?raw', import: 'default' })
const sourceModules = import.meta.glob(['./**/*.{js,scss,css}', '../.github/**/*.{yml,yaml}'], {
  eager: true,
  query: '?raw',
  import: 'default',
})
const documentIndex = Object.fromEntries([
  ...Object.entries(documentModules).map(([modulePath, content]) => [
    modulePath.replace(/^\.\.\//, ''),
    String(content),
  ]),
  ...Object.entries(sourceModules).map(([modulePath, content]) => [
    modulePath.replace(/^\.\//, 'src/').replace(/^\.\.\//, ''),
    String(content),
  ]),
])

const statusLabel = {
  active: 'Ativa',
  done: 'Concluído',
  planned: 'Planejado',
  'ready-for-sprint': 'Ready for Sprint',
  'tl-review': 'TL Review',
  'in-development': 'Em desenvolvimento',
  blocked: 'Bloqueado',
}

const statusGuidance = {
  done: 'Concluído com evidência registrada.',
  planned: 'Selecionado para planejamento, ainda sem execução ativa.',
  'ready-for-sprint': 'Pode ser planejado quando a sprint aceitar novos itens.',
  'tl-review': 'Não executar antes da aceitação do TechLead.',
  'in-development': 'Trabalho ativo com validação esperada.',
  blocked: 'Não executável até a dependência ser resolvida.',
}

const nonExecutableStatuses = ['tl-review', 'blocked']
const dashboardStatuses = [
  'ready-for-sprint',
  'tl-review',
  'blocked',
  'done',
  'planned',
  'in-development',
]

const initialCard =
  sprintCards.find((card) => card.id === 'OJ-008') ||
  sprintCards.find((card) => card.status === 'tl-review') ||
  sprintCards[0]

const state = {
  selectedId: initialCard?.id,
  drawerOpen: false,
  filters: {
    status: 'all',
    owner: 'all',
    priority: 'all',
    text: '',
  },
  returnFocusId: '',
  documentModal: null,
}

const app = document.querySelector('#app')

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

const normalizeDocPath = (value = '') =>
  String(value)
    .trim()
    .replace(/^\.\//, '')
    .replace(/^\.\.\//, '')

const isExternalReference = (value = '') => /^https?:\/\//i.test(String(value).trim())

const documentTitle = (docPath) => {
  const content = documentIndex[docPath]
  const heading = content?.match(/^#\s+(.+)$/m)?.[1]
  if (heading) return heading.trim()
  return docPath.split('/').pop()?.replace(/\.md$/, '').replaceAll('-', ' ') || docPath
}

const inlineMarkdown = (value = '') =>
  escapeHtml(value)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\x60([^\x60]+)\x60/g, '<code>$1</code>')

const renderMarkdownTable = (rows) => {
  const parsed = rows.map((row) =>
    row
      .trim()
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((cell) => inlineMarkdown(cell.trim())),
  )
  const [head, , ...body] = parsed
  return '<table><thead><tr>' +
    head.map((cell) => '<th>' + cell + '</th>').join('') +
    '</tr></thead><tbody>' +
    body.map((row) => '<tr>' + row.map((cell) => '<td>' + cell + '</td>').join('') + '</tr>').join('') +
    '</tbody></table>'
}

const renderMarkdown = (markdown = '') => {
  const blocks = []
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i += 1; continue }
    if (/^#{1,4}\s/.test(line)) {
      const level = Math.min(line.match(/^#+/)?.[0].length || 2, 4)
      blocks.push('<h' + level + '>' + inlineMarkdown(line.replace(/^#{1,4}\s+/, '')) + '</h' + level + '>')
      i += 1
      continue
    }
    if (/^\|.+\|$/.test(line) && /^\|?\s*:?-{3,}:?/.test(lines[i + 1] || '')) {
      const tableRows = []
      while (i < lines.length && /^\|.+\|$/.test(lines[i])) {
        tableRows.push(lines[i])
        i += 1
      }
      blocks.push(renderMarkdownTable(tableRows))
      continue
    }
    if (/^[-*]\s+/.test(line)) {
      const items = []
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push('<li>' + inlineMarkdown(lines[i].replace(/^[-*]\s+/, '')) + '</li>')
        i += 1
      }
      blocks.push('<ul>' + items.join('') + '</ul>')
      continue
    }
    if (/^\d+\.\s+/.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push('<li>' + inlineMarkdown(lines[i].replace(/^\d+\.\s+/, '')) + '</li>')
        i += 1
      }
      blocks.push('<ol>' + items.join('') + '</ol>')
      continue
    }
    const paragraph = [line.trim()]
    i += 1
    while (i < lines.length && lines[i].trim() && !/^#{1,4}\s/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^\|.+\|$/.test(lines[i])) {
      paragraph.push(lines[i].trim())
      i += 1
    }
    blocks.push('<p>' + inlineMarkdown(paragraph.join(' ')) + '</p>')
  }
  return blocks.join('')
}

const renderDocumentButton = (value) => {
  const reference = String(value || '').trim()
  if (!reference) return ''
  if (isExternalReference(reference)) {
    return '<a class="doc-ref doc-ref-external" href="' + escapeHtml(reference) + '" target="_blank" rel="noreferrer">' + escapeHtml(reference) + '</a>'
  }
  const docPath = normalizeDocPath(reference)
  const hasDocument = Boolean(documentIndex[docPath])
  const label = hasDocument ? documentTitle(docPath) : reference
  return '<button class="doc-ref" type="button" data-doc-path="' + escapeHtml(docPath) + '"><span>' + escapeHtml(label) + '</span><small>' + escapeHtml(docPath) + '</small></button>'
}

const renderReferenceList = (items) => {
  const values = asList(items).filter(Boolean)
  if (!values.length) return '<p class="missing-value">Ainda não documentado</p>'
  return '<div class="reference-list">' + values.map(renderDocumentButton).join('') + '</div>'
}

const asList = (value) => {
  if (Array.isArray(value)) return value
  if (!value) return []
  return [value]
}

const fieldValue = (value) => {
  const values = asList(value).filter(Boolean)
  if (!values.length) return '<span class="missing-value">Ainda não documentado</span>'
  return values.map((item) => escapeHtml(item)).join(', ')
}

const renderList = (items) => {
  const values = asList(items).filter(Boolean)
  if (!values.length) return '<p class="missing-value">Ainda não documentado</p>'
  return `<ul>${values.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
}

const getCard = (id) => sprintCards.find((card) => card.id === id) || sprintCards[0]
const countByStatus = (status) => sprintCards.filter((card) => card.status === status).length
const owners = [...new Set(sprintCards.map((card) => card.owner))].sort()
const priorities = [...new Set(sprintCards.map((card) => card.priority))].sort()

const summarizeBy = (field) =>
  [...sprintCards.reduce((summary, card) => {
    const key = card[field] || 'Ainda não documentado'
    summary.set(key, (summary.get(key) || 0) + 1)
    return summary
  }, new Map())]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

const evidenceSummary = () => {
  const registered = sprintCards.filter((card) => asList(card.evidence).length > 0).length
  return {
    registered,
    pending: sprintCards.length - registered,
  }
}

const criticalBlockers = () =>
  sprintCards
    .filter((card) => card.status === 'blocked' || card.status === 'tl-review')
    .sort((a, b) => {
      if (a.status === 'blocked' && b.status !== 'blocked') return -1
      if (a.status !== 'blocked' && b.status === 'blocked') return 1
      return a.id.localeCompare(b.id)
    })

const filteredCards = () =>
  sprintCards.filter((card) => {
    const text = state.filters.text.trim().toLowerCase()
    const textTarget = [
      card.id,
      card.title,
      card.owner,
      card.assignee,
      card.role,
      card.priority,
      card.status,
      statusLabel[card.status],
      ...asList(card.tags),
      ...asList(card.dependencies),
      ...asList(card.evidence),
      card.nextAction,
      card.sourcePath,
    ]
      .join(' ')
      .toLowerCase()

    return (
      (state.filters.status === 'all' || card.status === state.filters.status) &&
      (state.filters.owner === 'all' || card.owner === state.filters.owner) &&
      (state.filters.priority === 'all' || card.priority === state.filters.priority) &&
      (!text || textTarget.includes(text))
    )
  })

const renderBadge = (status) =>
  `<span class="badge badge-${status}">${statusLabel[status] || escapeHtml(status)}</span>`

const renderMetric = (status) => {
  const active = state.filters.status === status

  return `
    <button class="metric-tile metric-${status}" type="button" data-filter-status="${status}" aria-pressed="${active}">
      <strong>${countByStatus(status)}</strong>
      <span>${statusLabel[status]}</span>
      <small>${statusGuidance[status]}</small>
    </button>
  `
}

const renderTaskCard = (card) => {
  const selected = card.id === state.selectedId
  const dependencyCount = asList(card.dependencies).length
  const evidenceCount = asList(card.evidence).length
  const executableText = nonExecutableStatuses.includes(card.status)
    ? 'Não executável'
    : 'Abrir detalhe'

  return `
    <button
      class="task-card task-card-${card.status}"
      type="button"
      data-card-id="${card.id}"
      aria-pressed="${selected}"
    >
      <span class="task-card-topline">
        <span class="card-key">${escapeHtml(card.id)}</span>
        ${renderBadge(card.status)}
      </span>
      <span class="task-title">${escapeHtml(card.title)}</span>
      <span class="task-meta">
        <span>${escapeHtml(card.owner)}</span>
        <span>${escapeHtml(card.priority)}</span>
        <span>${escapeHtml(card.role)}</span>
      </span>
      <span class="task-foot">
        <span>${dependencyCount ? `${dependencyCount} dependência${dependencyCount > 1 ? 's' : ''}` : 'Sem dependência'}</span>
        <span>${evidenceCount ? `${evidenceCount} evidência${evidenceCount > 1 ? 's' : ''}` : 'Evidência pendente'}</span>
      </span>
      <span class="task-action">${executableText}</span>
      ${
        nonExecutableStatuses.includes(card.status)
          ? `<span class="execution-warning">${statusGuidance[card.status]}</span>`
          : ''
      }
    </button>
  `
}

const renderColumn = (column, cards) => {
  const columnCards = cards.filter((card) => card.status === column.id)

  return `
    <section class="workflow-column" aria-labelledby="column-${column.id}">
      <header>
        <div>
          <h3 id="column-${column.id}">${escapeHtml(column.title)}</h3>
          <p>${statusGuidance[column.id] || 'Status do workflow AIA.'}</p>
        </div>
        <span aria-label="${columnCards.length} cards">${columnCards.length}</span>
      </header>
      <div class="workflow-stack">
        ${
          columnCards.length
            ? columnCards.map(renderTaskCard).join('')
            : `<p class="empty-column">${escapeHtml(column.empty)}</p>`
        }
      </div>
    </section>
  `
}

const activeFilterChips = () => {
  const chips = []

  if (state.filters.status !== 'all') {
    chips.push({ key: 'status', label: `Status: ${statusLabel[state.filters.status]}` })
  }
  if (state.filters.owner !== 'all') chips.push({ key: 'owner', label: `Owner: ${state.filters.owner}` })
  if (state.filters.priority !== 'all') chips.push({ key: 'priority', label: `Prioridade: ${state.filters.priority}` })
  if (state.filters.text.trim()) chips.push({ key: 'text', label: `Busca: ${state.filters.text.trim()}` })

  return chips
}

const renderFilters = () => {
  const chips = activeFilterChips()

  return `
    <section class="filter-panel" aria-label="Filtros do board">
      <div class="filter-grid">
        <label>
          <span>Status</span>
          <select data-filter="status">
            <option value="all">Todos</option>
            ${workflowColumns
              .map(
                (column) =>
                  `<option value="${column.id}" ${state.filters.status === column.id ? 'selected' : ''}>${column.title}</option>`,
              )
              .join('')}
          </select>
        </label>
        <label>
          <span>Owner</span>
          <select data-filter="owner">
            <option value="all">Todos</option>
            ${owners
              .map(
                (owner) =>
                  `<option value="${escapeHtml(owner)}" ${state.filters.owner === owner ? 'selected' : ''}>${escapeHtml(owner)}</option>`,
              )
              .join('')}
          </select>
        </label>
        <label>
          <span>Prioridade</span>
          <select data-filter="priority">
            <option value="all">Todas</option>
            ${priorities
              .map(
                (priority) =>
                  `<option value="${escapeHtml(priority)}" ${state.filters.priority === priority ? 'selected' : ''}>${escapeHtml(priority)}</option>`,
              )
              .join('')}
          </select>
        </label>
        <label class="search-field">
          <span>Busca</span>
          <input data-filter="text" type="search" value="${escapeHtml(state.filters.text)}" placeholder="ID, título, owner ou fonte" />
        </label>
      </div>
      <div class="filter-chips" aria-live="polite">
        ${
          chips.length
            ? chips
                .map(
                  (chip) =>
                    `<button class="filter-chip" type="button" data-clear-filter="${chip.key}">${escapeHtml(chip.label)} <span aria-hidden="true">x</span></button>`,
                )
                .join('')
            : '<span class="filter-empty">Sem filtros ativos</span>'
        }
        ${chips.length ? '<button class="clear-filters" type="button" data-clear-all>Limpar filtros</button>' : ''}
      </div>
    </section>
  `
}

const renderStatusTabs = () => `
  <div class="status-tabs" aria-label="Navegação por status">
    <button type="button" data-filter-status="all" aria-pressed="${state.filters.status === 'all'}">Todos</button>
    ${workflowColumns
      .map(
        (column) =>
          `<button type="button" data-filter-status="${column.id}" aria-pressed="${state.filters.status === column.id}">${column.title}</button>`,
      )
      .join('')}
  </div>
`

const renderDistribution = (title, items) => `
  <article class="dashboard-card distribution-card">
    <h2>${escapeHtml(title)}</h2>
    <ul>
      ${items
        .slice(0, 6)
        .map(
          ([label, count]) =>
            `<li><span>${escapeHtml(label)}</span><strong>${count}</strong></li>`,
        )
        .join('')}
    </ul>
  </article>
`

const renderRoadmapSummary = () => `
  <article class="dashboard-card roadmap-summary-card">
    <h2>Roadmap</h2>
    <ul>
      ${sprintRoadmap
        .map(
          (sprint) =>
            `<li><span>${escapeHtml(sprint.id)} · ${statusLabel[sprint.state] || sprint.state}</span><strong>${sprint.cards.length} cards</strong></li>`,
        )
        .join('')}
    </ul>
  </article>
`

const renderBlockers = () => {
  const blockers = criticalBlockers()
  return `
    <article class="dashboard-card blocker-card">
      <h2>Bloqueios críticos</h2>
      <ul>
        ${
          blockers.length
            ? blockers
                .slice(0, 5)
                .map(
                  (card) =>
                    `<li><span>${escapeHtml(card.id)} · ${escapeHtml(card.title)}</span><strong>${statusLabel[card.status]}</strong></li>`,
                )
                .join('')
            : '<li><span>Nenhum bloqueio crítico registrado</span><strong>0</strong></li>'
        }
      </ul>
    </article>
  `
}

const renderEvidence = () => {
  const evidence = evidenceSummary()
  return `
    <article class="dashboard-card evidence-card">
      <h2>Evidências</h2>
      <div class="evidence-grid">
        <div><strong>${evidence.registered}</strong><span>Registradas</span></div>
        <div><strong>${evidence.pending}</strong><span>Pendentes</span></div>
      </div>
      <p>Baseado em cards com campo de evidência preenchido em <code>src/content.js</code>.</p>
    </article>
  `
}

const renderDetail = (card, mode = 'panel') => `
  <article class="detail-card" aria-labelledby="${mode}-detail-title">
    <div class="detail-head">
      <div>
        <p class="eyebrow">${escapeHtml(card.id)}</p>
        <h2 id="${mode}-detail-title">${escapeHtml(card.title)}</h2>
      </div>
      <div class="detail-badges">
        ${renderBadge(card.status)}
        <span class="priority-pill">${escapeHtml(card.priority)}</span>
      </div>
    </div>

    <p class="status-note ${nonExecutableStatuses.includes(card.status) ? 'status-note-blocked' : ''}">
      ${escapeHtml(statusGuidance[card.status] || 'Inspecione dependências, evidências e próxima ação.')}
    </p>

    <dl class="detail-meta">
      <div><dt>Owner</dt><dd>${fieldValue(card.owner)}</dd></div>
      <div><dt>Assignee</dt><dd>${fieldValue(card.assignee)}</dd></div>
      <div><dt>Role</dt><dd>${fieldValue(card.role)}</dd></div>
      <div><dt>Priority</dt><dd>${fieldValue(card.priority)}</dd></div>
      <div><dt>Status</dt><dd>${fieldValue(statusLabel[card.status])}</dd></div>
      <div><dt>Tags</dt><dd>${fieldValue(card.tags)}</dd></div>
      <div><dt>Source path</dt><dd>${renderDocumentButton(card.sourcePath)}</dd></div>
    </dl>

    <div class="detail-section">
      <h3>Description</h3>
      <p>${fieldValue(card.description)}</p>
    </div>
    <div class="detail-section">
      <h3>Dependencies</h3>
      ${renderList(card.dependencies)}
    </div>
    <div class="detail-section">
      <h3>Evidence</h3>
      ${renderReferenceList(card.evidence)}
    </div>
    <div class="detail-section">
      <h3>Acceptance criteria</h3>
      ${renderList(card.acceptanceCriteria)}
    </div>
    <div class="detail-section">
      <h3>Test expectations</h3>
      ${renderList(card.testExpectations)}
    </div>
    <div class="detail-section">
      <h3>QA expectations</h3>
      ${renderList(card.qaExpectations)}
    </div>
    <div class="detail-section">
      <h3>Documentation expectations</h3>
      ${renderList(card.documentationExpectations)}
    </div>
    <div class="detail-section">
      <h3>Next action</h3>
      <p>${fieldValue(card.nextAction)}</p>
    </div>
    <div class="source-actions">
      ${renderDocumentButton(card.sourcePath)}
    </div>
  </article>
`

const renderRoadmap = (sprint) => `
  <article class="sprint-card sprint-card-${sprint.state}">
    <div class="work-card-topline">
      <span class="card-key">${escapeHtml(sprint.id)}</span>
      ${renderBadge(sprint.state)}
    </div>
    <h3>${escapeHtml(sprint.title)}</h3>
    <p>${escapeHtml(sprint.goal)}</p>
    <p><strong>Cards:</strong> ${sprint.cards.map(escapeHtml).join(', ')}</p>
  </article>
`

const renderDocs = (doc) => `
  <section id="${doc.id}" class="doc-section">
    <header>
      <p class="eyebrow">${escapeHtml(doc.eyebrow)}</p>
      <h2>${escapeHtml(doc.title)}</h2>
      <p>${escapeHtml(doc.summary)}</p>
    </header>
    <ul class="doc-list">
      ${doc.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
    </ul>
  </section>
`

const renderDocumentModal = () => {
  if (!state.documentModal) return ''
  const docPath = state.documentModal
  const content = documentIndex[docPath]
  const title = content ? documentTitle(docPath) : 'Referência não encontrada'
  const body = content
    ? docPath.endsWith('.md')
      ? renderMarkdown(content)
      : '<pre><code>' + escapeHtml(content) + '</code></pre>'
    : '<p>Esta referência ainda não possui arquivo local empacotado no portal.</p><p><code>' + escapeHtml(docPath) + '</code></p>'

  return `
    <div class="document-backdrop" data-document-backdrop></div>
    <section class="document-modal" role="dialog" aria-modal="true" aria-labelledby="document-modal-title">
      <div class="document-modal-bar">
        <div>
          <p class="eyebrow">Documento</p>
          <h2 id="document-modal-title">${escapeHtml(title)}</h2>
          <span>${escapeHtml(docPath)}</span>
        </div>
        <button type="button" class="icon-button" data-close-document aria-label="Fechar documento">x</button>
      </div>
      <div class="document-body">${body}</div>
    </section>
  `
}

const renderApp = () => {
  const selectedCard = getCard(state.selectedId)
  const cards = filteredCards()
  const nextCard = initialCard
  const ownerDistribution = summarizeBy('owner')
  const roleDistribution = summarizeBy('role')
  const blockedCount = countByStatus('blocked')
  const reviewCount = countByStatus('tl-review')
  const plannedCount = countByStatus('planned')
  const readyCount = countByStatus('ready-for-sprint')
  const readinessTitle = blockedCount || reviewCount
    ? 'Readiness: não pronto para execução ampla'
    : 'Readiness: pronto para execução sequenciada'
  const readinessDetail = blockedCount || reviewCount
    ? `${reviewCount} em TL Review · ${blockedCount} bloqueado · ${readyCount} prontos para sprint`
    : `${plannedCount} planejado · ${readyCount} pronto para sprint · execução depende da ordem dos cards`

  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="topbar-inner">
          <a class="brand" href="#top" aria-label="OpenJira Docs">
            <span class="brand-mark">OJ</span>
            <span class="brand-copy">
              <span class="brand-name">OpenJira Docs</span>
              <span class="brand-meta">${sprintStatus.id} ${statusLabel[sprintStatus.state]}</span>
            </span>
          </a>
          <nav class="nav" aria-label="Navegação operacional">
            <a href="#status">Dashboard</a>
            <a href="#board">Board</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#docs">Docs</a>
          </nav>
        </div>
      </header>

      <main id="top" class="manager-layout">
        <section id="status" class="manager-dashboard" aria-labelledby="summary-title">
          <div class="dashboard-head">
            <div class="summary-copy">
              <p class="eyebrow">Dashboard da sprint</p>
              <h1 id="summary-title">${sprintStatus.id}: ${escapeHtml(sprintStatus.name)}</h1>
              <p>
                Readiness, métricas, bloqueios, evidências, distribuição de trabalho e roadmap em uma visão inicial.
                TL Review e Blocked permanecem fora de execução.
              </p>
            </div>
            <article class="next-card">
              <p class="eyebrow">Próximo card recomendado</p>
              <h2>${escapeHtml(nextCard.id)} - ${escapeHtml(nextCard.title)}</h2>
              <p>${escapeHtml(nextCard.nextAction || 'Ainda não documentado')}</p>
              <button type="button" class="button button-primary" data-card-id="${nextCard.id}">Abrir detalhe</button>
            </article>
          </div>

          <div class="readiness-strip" role="status">
            <strong>${readinessTitle}</strong>
            <span>${readinessDetail}</span>
          </div>

          <div class="status-metrics" aria-label="Métricas por status">
            ${dashboardStatuses.map(renderMetric).join('')}
          </div>

          <div class="dashboard-grid">
            ${renderBlockers()}
            ${renderEvidence()}
            ${renderDistribution('Distribuição por owner', ownerDistribution)}
            ${renderDistribution('Distribuição por área', roleDistribution)}
            ${renderRoadmapSummary()}
          </div>
        </section>

        ${renderFilters()}

        <section id="board" class="board-section" aria-labelledby="board-title">
          <header class="section-heading board-heading">
            <div>
              <p class="eyebrow">Workflow board</p>
              <h2 id="board-title">Cards por status</h2>
              <p>${cards.length} de ${sprintCards.length} cards visíveis pelos filtros atuais.</p>
            </div>
            ${renderStatusTabs()}
          </header>
          ${
            cards.length
              ? `<div class="workflow-board">${workflowColumns.map((column) => renderColumn(column, cards)).join('')}</div>`
              : `<div class="empty-results"><h3>Nenhum card encontrado</h3><p>Nenhum card corresponde aos filtros ativos.</p><button type="button" class="button" data-clear-all>Limpar filtros</button></div>`
          }
        </section>

        <section id="roadmap" class="work-status">
          <header class="section-heading">
            <p class="eyebrow">Roadmap de sprints</p>
            <h2>Sprints organizadas pelo workflow AIA</h2>
            <p>Cards em TL Review ou Blocked permanecem fora de execução até aprovação ou desbloqueio.</p>
          </header>
          <div class="sprint-roadmap">
            ${sprintRoadmap.map(renderRoadmap).join('')}
          </div>
        </section>

        <section class="squad-band" aria-labelledby="squad-title">
          <div>
            <p class="eyebrow">Squad AIA</p>
            <h2 id="squad-title">Owners e papéis operacionais</h2>
          </div>
          <ul class="agent-list">
            ${agents.map((agent) => `<li>${escapeHtml(agent)}</li>`).join('')}
          </ul>
        </section>

        <div id="docs" class="doc-grid">
          ${docs.map(renderDocs).join('')}
        </div>

        <section class="report-note">
          <strong>Regra operacional:</strong> a AIA cria backlog, sprints, cards,
          critérios e decisões de forma autônoma. O solicitante recebe um relatório
          consolidado ao final de cada sprint.
        </section>
      </main>

      ${renderDocumentModal()}

      <div class="drawer-backdrop" data-drawer-backdrop ${state.drawerOpen ? '' : 'hidden'}></div>
      <section class="detail-drawer" role="dialog" aria-modal="true" aria-labelledby="card-detail-title" ${state.drawerOpen ? '' : 'hidden'}>
        <div class="drawer-bar">
          <strong>Detalhe do card</strong>
          <button type="button" class="icon-button" data-close-drawer aria-label="Fechar detalhe">x</button>
        </div>
        ${renderDetail(selectedCard, 'card')}
      </section>
    </div>
  `

  bindEvents()
  if (state.documentModal) focusDocumentModal()
  else if (state.drawerOpen) focusDrawer()
}

const setFilter = (key, value) => {
  state.filters[key] = value
  renderApp()
}

const clearFilter = (key) => {
  state.filters[key] = key === 'text' ? '' : 'all'
  renderApp()
}

const clearAllFilters = () => {
  state.filters = { status: 'all', owner: 'all', priority: 'all', text: '' }
  renderApp()
}

const selectCard = (id) => {
  state.selectedId = id
  state.returnFocusId = id
  state.drawerOpen = true
  renderApp()
}

const closeDrawer = () => {
  state.drawerOpen = false
  const returnFocusId = state.returnFocusId
  renderApp()
  if (returnFocusId) {
    document.querySelector(`[data-card-id="${CSS.escape(returnFocusId)}"]`)?.focus()
  }
}

const focusDrawer = () => {
  const drawer = document.querySelector('.detail-drawer')
  const focusable = drawer?.querySelector('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])')
  focusable?.focus()
}

const openDocument = (docPath) => {
  state.documentModal = normalizeDocPath(docPath)
  renderApp()
}

const closeDocument = () => {
  state.documentModal = null
  renderApp()
}

const focusDocumentModal = () => {
  document.querySelector('[data-close-document]')?.focus()
}

const trapDrawerFocus = (event) => {
  if (!state.drawerOpen || event.key !== 'Tab') return

  const drawer = document.querySelector('.detail-drawer')
  const focusable = [
    ...drawer.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'),
  ].filter((node) => !node.disabled && node.offsetParent !== null)
  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

const bindEvents = () => {
  document.querySelectorAll('[data-card-id]').forEach((button) => {
    button.addEventListener('click', () => selectCard(button.dataset.cardId))
  })

  document.querySelectorAll('[data-filter]').forEach((field) => {
    field.addEventListener('input', () => setFilter(field.dataset.filter, field.value))
    field.addEventListener('change', () => setFilter(field.dataset.filter, field.value))
  })

  document.querySelectorAll('[data-filter-status]').forEach((button) => {
    button.addEventListener('click', () => setFilter('status', button.dataset.filterStatus))
  })

  document.querySelectorAll('[data-clear-filter]').forEach((button) => {
    button.addEventListener('click', () => clearFilter(button.dataset.clearFilter))
  })

  document.querySelectorAll('[data-clear-all]').forEach((button) => {
    button.addEventListener('click', clearAllFilters)
  })

  document.querySelectorAll('[data-doc-path]').forEach((button) => {
    button.addEventListener('click', () => openDocument(button.dataset.docPath))
  })

  document.querySelector('[data-close-document]')?.addEventListener('click', closeDocument)
  document.querySelector('[data-document-backdrop]')?.addEventListener('click', closeDocument)
  document.querySelector('[data-close-drawer]')?.addEventListener('click', closeDrawer)
  document.querySelector('[data-drawer-backdrop]')?.addEventListener('click', closeDrawer)
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.documentModal) closeDocument()
  else if (event.key === 'Escape' && state.drawerOpen) closeDrawer()
  trapDrawerFocus(event)
})

renderApp()
