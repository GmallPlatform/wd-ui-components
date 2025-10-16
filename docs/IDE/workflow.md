# Workflow — Simple (default) и Strict (optional)

Цель: ясное документирование работ, чистая история и изоляция изменений.

## Ветки

- Защищенные: `main` (production), `development` (интеграция).
- Simple Mode (default): `feature/{JIRA?}-{short-topic}` от `development`.

Рекомендации по merge:

- Feature → `development`: Rebase and merge (линейная история без merge-коммитов).

## Политика push

- Работа по умолчанию ТОЛЬКО локально. Любые push — только по явной команде владельца репозитория.
- Команды PR/push в этом документе приведены как справочные и «отключены» по умолчанию.

## Политика выполнения команд

Перед запуском любых команд, влияющих на ветки/историю/удаленный репозиторий или массово меняющих файлы, требуется:

- краткое описание плана шагов (списком),
- явное подтверждение пользователя,
- выполнять действия локально по умолчанию.

Без явного подтверждения запрещено: merge/rebase/cherry‑pick, удаление веток, push/pull/создание/merge PR, массовые генераторы.

## Режимы: Simple (default)

- Simple Mode (default): без дневных веток; ведём `jobs/{WEEK}.md`.

Примечание: используйте conventional commits и фиксируйте работу в `jobs/{WEEK}.md`

## Ежедневный цикл

### Simple Mode (default)

1. Коммиты — только в формате conventional commits и с маркером задачи при наличии: `[TASK: KEY-N]` в сообщении.
2. Заполняем дневной блок `jobs/{WEEK}.md`: раздел Commits + разделы задач "Задачи — Выполнены/В работе/Блокированы" по стандарту в `docs/IDE/jobs.md`.
3. Завершение фичи — rebase на `development` и fast‑forward merge в `development`.

## Именование и PR

- Коммиты: `feat(editor): ...`, `fix(backend): ...`, `docs(jobs): ...` и т. п.
- Коммиты, связанные с задачей, должны содержать маркер: `[TASK: KEY-N]` (пример: `feat(login): [TASK: AUTH-42] добавлен OAuth`).
- PR: дневные — `[W{ISO}] {short-topic} EOD {YYYY-MM-DD}`; feature → `development` — `[W{ISO}] {short-topic} — feature complete`.
- В описании PR — ссылка на раздел дня в `jobs/{WEEK}.md` и чек‑лист тестов.

## Команды (bash)

Инициализация переменных:

```bash
FEATURE="feature/ED-123-editor-autosave"
TOPIC="editor-autosave"
WEEK="$(date +%V)"
DAY="$(date +%F)"
DAY_BRANCH="week${WEEK}/${DAY}-${TOPIC}"
WEEK_FILE="jobs/${WEEK}.md"
```

Утро — создать блок в `jobs`:

```bash
git checkout "$FEATURE"
git fetch origin | cat
git rebase origin/development
git checkout -b "$DAY_BRANCH"

if [ ! -f "$WEEK_FILE" ]; then
  START=$(date -v-mon +"%Y-%m-%d"); END=$(date -v-sun +"%Y-%m-%d")
  echo "# Week W${WEEK} (${START} — ${END})" > "$WEEK_FILE"
fi
if ! grep -q "^## ${DAY} " "$WEEK_FILE"; then
  printf "\n## %s (%s)\n\n- Branches: \`%s\`\n- Commits:\n- Key changes:\n- Daily Summary:\n  - Goal: \n  - Done: \n  - Risks/Blockers: \n  - Carry-over: \n" "$DAY" "$(date +%A)" "$DAY_BRANCH" >> "$WEEK_FILE"
fi
```

Коммит в течение дня + запись в файл выполненых работ:
