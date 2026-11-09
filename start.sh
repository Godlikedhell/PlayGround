#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"

export PORT="${PORT:-3000}"
export OPENCODE_WEB_DIR="/home/runner/work/_temp/omgithub-web"

timed() { /usr/bin/time -p "$@"; }

timed mkdir -p "$OPENCODE_WEB_DIR"
timed npm ci --no-audit --no-fund
timed npm run build -- --base ./
timed node -e 'const { mkdirSync, writeFileSync } = require("node:fs"); const { resolve, join } = require("node:path"); const output = process.env.OPENCODE_WEB_DIR; const project = process.cwd(); const directory = resolve(project, "dist"); mkdirSync(output, { recursive: true }); writeFileSync(join(output, "deployment-output.json"), JSON.stringify({ project, directory }));'

exec /usr/bin/time -p npm run preview -- --port "$PORT" --strictPort
