#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
cd "$PROJECT_DIR"
: "${CAPTURE_URL:?Set CAPTURE_URL to the exact preview URL}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR to the screenshot output directory}"
RUNTIME_DIR="${RUNTIME_DIR:-/home/runner/work/_temp/omgithub-runtime}"
export CAPTURE_URL CAPTURE_DIR RUNTIME_DIR
export CAPTURE_STRICT="${CAPTURE_STRICT:-1}"
export CAPTURE_READY_SELECTOR="${CAPTURE_READY_SELECTOR:-#game canvas}"
export CAPTURE_AUTO_START="${CAPTURE_AUTO_START:-false}"

timed() { /usr/bin/time -p "$@"; }
timed mkdir -p "$CAPTURE_DIR"
timed test -f "$RUNTIME_DIR/scripts/default-capture.mjs"
timed node --check "$RUNTIME_DIR/scripts/default-capture.mjs"
exec /usr/bin/time -p node "$RUNTIME_DIR/scripts/default-capture.mjs"
