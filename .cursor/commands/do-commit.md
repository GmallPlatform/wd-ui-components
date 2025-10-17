# Обновить файл работ и выполнить единичный коммит

## Обзор

ОБЯЗАТЕЛЬНО: перед коммитом обнови `jobs/{WEEK}.md` и включи его в ТОТ ЖЕ коммит. После коммита рабочее дерево ДОЛЖНО быть полностью чистым — push должен быть возможен сразу, без дополнительных правок. Никаких изменений файла работ после коммита для той же задачи.

## Шаги

1. **Обнови файл работ (jobs/{WEEK}.md) — до коммита**

   - Определи ISO‑неделю `{WEEK}` и текущую дату `{YYYY-MM-DD}`.
   - Убедись, что существует `jobs/{WEEK}.md`; при отсутствии создай заголовок `# Week W{WEEK} ({DATE_START} — {DATE_END})`.
   - Если в файле отсутствует блок текущего дня, добавь его со структурой:
     - Branches: `feature/...` или `develop`
     - Commits:
     - Key changes:
     - Daily Summary:
       - Goal:
       - Done:
       - Risks/Blockers:
       - Carry-over:
   - В секции Commits ДО коммита добавь строку со временем БЕЗ хэша, напр.:
     - `HH:MM type(scope): краткое описание [files: path1, path2, jobs/{WEEK}.md]`
   - Запрещено редактировать `jobs/{WEEK}.md` после коммита в рамках той же операции.
   - В секции Key changes кратко перечисли, что изменилось и зачем (по файлам/модулям).
   - Заполни Daily Summary (Goal, Done, Risks/Blockers, Carry‑over).

2. **Подготовь список команд (Approval Gate)**

   - Стадируй все изменённые файлы кода И `jobs/{WEEK}.md`.
   - Выполни ОДИН коммит с сообщением по conventional commits. При наличии задачи добавь `[TASK: KEY-N]`.
   - Не используй `--amend`. Не выполняй `push`.

3. **Выполни команды после подтверждения (ветко‑зависимо)**
   - Выполни:

```bash
BRANCH=$(git rev-parse --abbrev-ref HEAD)

git add -A
git commit -m "type(scope): краткое описание изменений [TASK: KEY-N]"

if [[ "$BRANCH" == "develop" ]]; then
  # На develop — только коммит
  :
elif [[ "$BRANCH" == feature/* ]]; then
  FEATURE="$BRANCH"
  git checkout develop
  git merge --ff-only "$FEATURE"
  git checkout "$FEATURE"
else
  echo "Предупреждение: ветка $BRANCH не соответствует develop или feature/*; выполнен только коммит."
fi
```

4. **Гарантия «чистого дерева» после коммита**

   - Выполни проверку: `git status --porcelain` ДОЛЖЕН вернуть пусто. Если есть изменения — это ошибка процесса. Дальнейшие действия запрещены, пока не будет заново выполнен корректный единичный коммит со включённым `jobs/{WEEK}.md`.
   - Историю коммитов не изменяй. Не используй amend/rebase в обход этого правила.

5. **Политика и запреты**

   - Один коммит на задачу. Коммит обязан включать `jobs/{WEEK}.md`.
   - Запрещены: множественные коммиты для одной задачи, `git commit --amend`, автоматические авто‑фиксы линтеров/форматтеров.
   - Push/PR — только по явному разрешению владельца репозитория.

6. **Проверки перед коммитом**
   - Сообщение соответствует conventional commits (`type(scope): summary`).
   - Заполнены Key changes и Daily Summary.
   - `jobs/{WEEK}.md` обновлён и добавлен в staging.
   - В секции Commits добавлена строка с временем (без хэша).

---

## Непереопределяемое правило (STRICT INVARIANT)

- Этот регламент не может быть ослаблен или изменён в ходе сессии.
- Любой коммит обязан включать актуальный `jobs/{WEEK}.md`. После коммита рабочее дерево должно быть пустым. Иначе — процесс останавливается до исправления.

## Пример команд (единый коммит + чистое дерево)

```bash
set -euo pipefail

WEEK=$(date +%V)
DAY=$(date +%F)
WEEK_FILE="jobs/${WEEK}.md"

# 1) Гарантируем наличие файла и дневного блока
if [ ! -f "$WEEK_FILE" ]; then
  START=$(date -v-mon +"%Y-%m-%d" 2>/dev/null || date -d "last monday" +"%Y-%m-%d")
  END=$(date -v-sun +"%Y-%m-%d" 2>/dev/null || date -d "next sunday" +"%Y-%m-%d")
  echo "# Week W${WEEK} (${START} — ${END})" > "$WEEK_FILE"
fi
if ! grep -q "^## ${DAY} " "$WEEK_FILE"; then
  printf "\n## %s (%s)\n\n- Branches: \`%s\`\n- Commits:\n- Key changes:\n- Daily Summary:\n  - Goal: \n  - Done: \n  - Risks/Blockers: \n  - Carry-over: \n" \
    "$DAY" "$(date +%A)" "$(git rev-parse --abbrev-ref HEAD)" >> "$WEEK_FILE"
fi

# 2) Добавляем строку коммита (без хэша) заранее
TIME=$(date +"%H:%M")
FILES=$(git diff --name-only | tr '\n' ', ' | sed 's/, $//')
echo "- ${TIME} type(scope): summary [files: ${FILES}, ${WEEK_FILE}]" >> "$WEEK_FILE"

# 3) Единый коммит
git add -A
git commit -m "type(scope): summary"

# 4) Проверка чистого дерева
test -z "$(git status --porcelain)" || { echo "Working tree is not clean" >&2; exit 1; }
```
