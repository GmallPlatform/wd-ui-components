# Start Task — Plan, Approvals, Single Commit

## Overview

Запускает любую задачу по унифицированному паттерну: План → Апрув → Реализация → Один локальный коммит. Встроены гейты согласования, интеграция с `jobs/{WEEK}.md`, и каталог вспомогательных команд. Работает локально; push/PR запрещены без явного разрешения владельца.

## Inputs

- `type`: feature | bug | refactor | research | docs
- `summary`: краткое описание задачи
- `constraints` (optional): ограничения по времени/области

## Steps

1. **Collect Context**
   - Сформируй контекст: где проявляется задача, какие файлы/модули потенциально затрагиваются
   - Проведи быстрый обзор кода с упором на смысловую навигацию
   - Выполни параллельные поиски: сначала семантический обзор, затем точечные точные запросы

2. **Define Task Brief**
   - Context: краткая выжимка
   - Goal: цель в одном-двух предложениях
   - Acceptance Criteria: чёткие пункты готовности
   - Impact/Risks/Out‑of‑scope: влияние, риски, что не делаем

3. **Produce Implementation Plan**
   - Files: список файлов для создания/изменения/удаления
   - Changes: суть изменений по каждому файлу
   - Dependencies: конфиги, типы, утилиты
   - Testing approach: стратегия проверки изменений

4. **Approval Gate 1 — Plan**
   - Остановись и дождись явного «ОК» на план
   - Любые git‑операции до апрува запрещены

5. **Implement Safely**
   - Следуй репо‑политикам: строгая типизация TypeScript, React‑паттерны, a11y, state, API, error handling, без TODO/заглушек
   - Делай ранние возвраты, именуй обработчики с префиксом `handle`, избегай дубликатов и глубокой вложенности
   - Документируй код с помощью JSDoc на английском языке для всех публичных API: функций, компонентов, хуков, классов, типов и интерфейсов
   - Добавляй краткие комментарии только для неочевидной логики, инвариантов, граничных случаев и проектных решений

6. **Jobs Prep (до коммита)**
   - Обнови `jobs/{WEEK}.md`: добавь/актуализируй дневной блок
   - В секции Commits ДО коммита добавь строку со временем БЕЗ хэша и со списком файлов (включая `jobs/{WEEK}.md`)
   - Заполни Key changes и Daily Summary

7. **Approval Gate 2 — Git Commands**
   - Подготовь список локальных команд для одного коммита, без amend и без push/PR
   - Дождись «ОК» на выполнение команд

8. **Single Local Commit**
   - Выполни только один локальный коммит, включающий изменённый код и `jobs/{WEEK}.md`
   - Не выполняй push/PR без явного разрешения
   - Подробности процесса см. `.cursor/commands/do-commit.md`

9. **Post‑commit Summary**
   - Кратко зафиксируй, что изменено и как проверить
   - Обозначь фоллоу‑апы, если есть

## Guardrails

- План → ОК → Реализация; перед git — Список команд → ОК
- Один коммит на задачу; `jobs/{WEEK}.md` обновляется ДО коммита и входит в него
- Работа только локально; push/PR — только по явной команде владельца
- Короткие статус‑обновления; ссылки на код только по правилам цитирования
 
## Documentation & Comments

- Пиши JSDoc на английском языке для всех экспортируемых/публичных сущностей (функции, компоненты, хуки, классы, типы, интерфейсы, модули)
- Используй комментарии кода для фиксации неочевидной логики, инвариантов, важных ограничений и причин принятия решений; избегай тривиальных комментариев
- Сложные и составные флоу оформляй в отдельных файлах документации в `docs/flows/{flow-name}.md` с разделами: Context, Actors, Steps/Sequence, Edge cases, Data contracts, Acceptance criteria, Links to code
- Поддерживай документацию в актуальном состоянии вместе с изменениями кода; указывай путь к обновлённым doc‑файлам в `Key changes` в `jobs/{WEEK}.md`

## Diagnostics Hooks

Если в проекте есть тесты, используй паттерн «Run All Tests and Fix Failures»:

### Run All Tests and Fix Failures
#### Overview
Execute the full test suite and systematically fix any failures, ensuring code quality and functionality.
#### Steps
1. **Run test suite**
   - Execute all tests in the project
   - Capture output and identify failures
   - Check both unit and integration tests
2. **Analyze failures**
   - Categorize by type: flaky, broken, new failures
   - Prioritize fixes based on impact
   - Check if failures are related to recent changes
3. **Fix issues systematically**
   - Start with the most critical failures
   - Fix one issue at a time
   - Re-run tests after each fix

Дополнительно:
- **/lint**: запусти линтер и исправь ошибки
- **/typecheck**: проверь типы
- **/build**: убедись, что сборка проходит

## Command Aliases (для эффективности)

- Планирование и апрув
  - `/starttask {type} {summary}` — создать детальный план (feature|bug|refactor|research|docs)
  - `/plan refine {правки}` — внести правки в план
  - `/approve plan` — подтвердить план
  - `/impl now` — начать реализацию по утверждённому плану

- Поиск и исследование кода
  - `/find flow {тема}` — найти реализацию потока/логики
  - `/find usage {символ} [путь]` — найти точные использования символа
  - `/explore {модуль/директория}` — обзор ключевых частей
  - `/trace {событие→обработчики}` — выстроить цепочку от источника к эффектам

- Проверки
  - `/lint [path]`, `/typecheck`, `/build`, `/tests run-all`
  - `/a11y audit`, `/perf quick`

- Журналы и документация
  - `/jobs today-init` — добавить дневной блок в `jobs/{WEEK}.md`
  - `/jobs add-commit "type(scope): summary" [files]` — строка коммита БЕЗ хэша до коммита
  - `/doc add {куда} {что}` — обновить/создать документацию

- Git‑операции (локально, безопасно)
  - `/commit propose "type(scope): summary"` — показать список команд для единственного коммита (без выполнения)
  - `/push propose`, `/pr draft propose` — предложить команды (НЕ выполнять без разрешения)

- Коммуникация и контроль
  - `/ask {вопрос}` — задать блокирующий вопрос
  - `/todo add/list/done` — управление подзадачами

## Templates (/starttask variants)

### Feature
```
/starttask feature
Контекст: ...
Цель: ...
Acceptance Criteria:
- [ ] ...
Затронутые области: ...
Риски/Неопределённости: ...
План шагов:
1) ...
2) ...
Список файлов (создать/изменить/удалить): ...
Тест‑чеклист:
- [ ] UX/flows
- [ ] Типы/линтер/сборка
- [ ] Ошибочные сценарии
```

### Bug Investigation
```
/starttask bug
Симптом: ...
Ожидаемое поведение: ...
Среда/Шаги воспроизведения: ...
Гипотезы/Причина: ...
План исследования:
1) ...
План фикса:
1) ...
Тест‑чеклист:
- [ ] Репро до/после
- [ ] Логи/ошибки чистые
- [ ] Регресс критичных сценариев
```

### Refactor
```
/starttask refactor
Область: ...
Цель (без изменения поведения): ...
Риски: ...
План шагов: ...
Тест‑чеклист:
- [ ] Сценарии работают как раньше
- [ ] Бандл/производительность не деградировали
```

### Research/Spike
```
/starttask research
Вопрос: ...
Гипотезы/Подходы: ...
Критерий завершения: ...
Deliverables: выводы, PoC (если нужен), рекомендации
Time‑box: ...
```

### Docs/Jobs
```
/starttask docs
Что документируем: ...
Артефакты: README/starttask/jobs/другое
Критерий завершения: ...
```

## Related

- См. `.cursor/commands/do-commit.md` — единичный локальный коммит и интеграция с `jobs/{WEEK}.md`


