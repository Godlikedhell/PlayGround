#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
cd "$PROJECT_DIR"
export PROJECT_DIR
export PORT="${PORT:-3000}"
export OPENCODE_WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"

# Keep each setup/build step timed, while leaving the preview server in the foreground.
timed() { /usr/bin/time -p "$@"; }
timed mkdir -p "$OPENCODE_WEB_DIR"
timed npm ci --no-audit --no-fund

needs_build=false
if [[ ! -s "$PROJECT_DIR/dist/index.html" ]]; then
  needs_build=true
elif timed find src index.html vite.config.js package.json package-lock.json -type f -newer dist/index.html -print -quit | grep -q .; then
  needs_build=true
fi
if [[ "$needs_build" == true ]]; then
  timed npm run build -- --base ./
fi

timed node -e 'const fs = require("node:fs"); const path = require("node:path"); const project = process.env.PROJECT_DIR; const directory = path.resolve(project, "dist"); const relative = path.relative(project, directory); if (relative.startsWith("..") || path.isAbsolute(relative)) throw new Error("Built directory must be inside PROJECT_DIR"); fs.mkdirSync(process.env.OPENCODE_WEB_DIR, { recursive: true }); fs.writeFileSync(path.join(process.env.OPENCODE_WEB_DIR, "deployment-output.json"), JSON.stringify({ project, directory }));'

exec /usr/bin/time -p npm run preview -- --host 0.0.0.0 --port "$PORT" --strictPort
