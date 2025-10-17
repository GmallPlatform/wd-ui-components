#!/usr/bin/env bash
set -euo pipefail

MSG="${1:-}"
if [ -z "$MSG" ]; then
  echo "Usage: bash scripts/commit-once.sh \"type(scope): summary\"" >&2
  exit 2
fi

WEEK=$(date +%V)
DAY=$(date +%F)
WEEK_FILE="jobs/${WEEK}.md"
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Ensure weekly file and daily block
if [ ! -f "$WEEK_FILE" ]; then
  START=$(date -v-mon +"%Y-%m-%d" 2>/dev/null || date -d "last monday" +"%Y-%m-%d")
  END=$(date -v-sun +"%Y-%m-%d" 2>/dev/null || date -d "next sunday" +"%Y-%m-%d")
  echo "# Week W${WEEK} (${START} — ${END})" > "$WEEK_FILE"
fi

if ! grep -q "^## ${DAY} " "$WEEK_FILE"; then
  printf "\n## %s (%s)\n\n- Branches: \`%s\`\n- Commits:\n- Key changes:\n- Daily Summary:\n  - Goal: \n  - Done: \n  - Risks/Blockers: \n  - Carry-over: \n" \
    "$DAY" "$(date +%A)" "$BRANCH" >> "$WEEK_FILE"
fi

# Compose files list prior to commit
FILES=$(git diff --name-only | tr '\n' ', ' | sed 's/, $//')
TIME=$(date +"%H:%M")
echo "- ${TIME} ${MSG} [files: ${FILES}, ${WEEK_FILE}]" >> "$WEEK_FILE"

# Single commit with all changes
git add -A
git commit -m "$MSG"

# Clean tree check
if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree is not clean after commit. Aborting further actions." >&2
  exit 1
fi

echo "Commit created successfully. You can now push: git push origin ${BRANCH}"


