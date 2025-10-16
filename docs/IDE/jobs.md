# Jobs — Weekly logs и daily commits

### Example (W42)

```markdown
# Week W42 (2025-10-13 — 2025-10-19)

## 2025-10-13 (Monday)

- Branches: `feature/docs-and-channel-namespacing`
- Commits:
  - 10:00 xxxx feat(events): add channel namespacing to sendMessage/setError/setSuccess [files: src/utils/sendMessage.ts]
  - 10:20 xxxx feat(ui): ParangaForViewport supports optional channel with BC [files: src/components/parangaForViewport/ParangaForViewport.tsx]
  - 10:35 xxxx feat(ui): Resultoutput supports optional channel with BC [files: src/components/resultoutput/Resultuotput.tsx]
  - 11:00 xxxx feat(utils): CRUD helpers accept optional channel and propagate [files: src/utils/createUpdateDeleteAnyEntity.ts]
  - 11:20 xxxx feat(service): createRequestService supports channel; unauthorized event namespaced [files: src/services/createRequestService.ts]
  - 11:50 xxxx docs(readme): add quickstart, channel usage, CRUD and service docs [files: README.md]
- Key changes:
  - events: optional channel parameter introduced; backward compatible behavior retained
  - overlay/toasts: ParangaForViewport and Resultoutput filter by channel when provided
  - helpers: CRUD helpers now accept and pass channel to events
  - service: request service can namespace unauthorized event via channel
  - docs: README expanded with quickstart, microfrontend channels, CRUD, request service, API summary
- Daily Summary:
  - Goal: Implement channel-based isolation for microfrontends and document usage
  - Done: Events namespacing, UI filters, CRUD + request service channel plumbing, README overhaul
  - Risks/Blockers: None
  - Carry-over: Author architecture/forms/theming/services/components/events docs in docs/app

### Jira — Candidates

| Title                           | Type  | Description                                  | Acceptance Criteria                                                                                                    | Priority | Est. |
| ------------------------------- | ----- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------- | ---- |
| Channel-based event namespacing | Story | Add optional channel to events and consumers | - [ ] Paranga/Resultoutput filter by channel<br>- [ ] CRUD + request service pass channel<br>- [ ] Backward compatible | High     | S    |
| README overhaul for npm usage   | Chore | Expand README with quickstart, channels, API | - [ ] Install/peers<br>- [ ] Quickstart form<br>- [ ] Channel docs                                                     | Med      | S    |
```

Цель: ежедневные записи и сводка недели в `jobs/{ISO_WEEK}.md` (например, `jobs/33.md`).

## Conventions

- WEEK_NUMBER: ISO‑неделя (`date +%V`)
- WEEK_FILE: `jobs/{WEEK_NUMBER}.md`
- Дата: `YYYY-MM-DD`, Время: `HH:MM`
- Conventional commits: `feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Опционально: дневная ветка `week{WEEK_NUMBER}/{YYYY-MM-DD}-{topic}`

## Required Actions

- Start of day: создать WEEK_FILE при необходимости, добавить дневной блок
- Each commit: дописать строку в "Commits" текущего дня
- Each day: фиксировать задачи в секциях "Задачи — Выполнены/В работе/Блокированы" по формату ниже
- End of day: заполнить "Daily Summary" (Goal/Done/Risks/Carry‑over)
- End of week: убедиться, что у каждого дня есть сводка; оформить Jira candidates и сводку "PM — Completed Tasks"

## Структура файла

```markdown
# Week W{WEEK_NUMBER} ({DATE_START} — {DATE_END})

## {YYYY-MM-DD} ({weekday})

- Branches: `week{WEEK_NUMBER}/{YYYY-MM-DD}-{topic}` (Strict Mode only), ...
- Commits:
  - {HH:MM} {hash} {type}(scope): {summary} [files: path1, path2]
- Key changes:
  - {file/module}: {what changed, why}
- Daily Summary:
  - Goal: ...
  - Done: ...
  - Risks/Blockers: ...
  - Carry-over: ...
  - Notes: Daily Summary may aggregate work from multiple feature branches on the same day

### Задачи — Выполнены

- [x] id=KEY-123 | title=Короткое имя задачи | outcome=Короткий проверяемый результат | pr=#NN | commits=hash1,hash2 | files=path1,path2 | scope=module

### Задачи — В работе

- [ ] id=KEY-456 | title=Что делаем | progress=%, next=следующий шаг | scope=module

### Задачи — Блокированы

- [!] id=KEY-789 | title=Что блокирует | reason=почему блок | owner=кто разблокирует
```

## Пример строки коммита

```markdown
- 10:42 a1b2c3d feat(editor): add autosave indicator [files: src/components/AutosaveIndicator/AutosaveIndicator.tsx]
```

## Регулярки для парсинга

- Коммит с задачей (в сообщении коммита ожидается наличие маркера `[TASK: KEY-N]`): `\[(?:TASK:\\s*)([A-Z]+-\d+)\]`
- Строка задачи (выполнено): `^- \\[(x| |\!)\\]\s+id=([A-Z]+-\d+)\s+\\|\\s+title=(.+?)\\s+\\|\\s+outcome=(.+?)(?:\\s+\\|\\s+.*)?$`

## Итог недели — раздел для PM

В конце файла недели добавьте агрегированный раздел, который можно собрать автоматически из "Задачи — Выполнены" за неделю:

```markdown
### PM — Completed Tasks (W{WEEK_NUMBER})

- KEY-123: Короткое имя задачи — Короткий проверяемый результат (PR #NN)
- ...
```

## Подсказки

- ISO‑неделя на macOS: `date +%V`
- Рекомендуемый путь: `jobs/{WEEK_NUMBER}.md`
