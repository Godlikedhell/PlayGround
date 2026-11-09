#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"
: "${RUNTIME_DIR:?RUNTIME_DIR must point to the omgithub runtime}"
: "${CAPTURE_URL:?Set CAPTURE_URL to the public preview URL}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR to the screenshot output directory}"
export CAPTURE_STRICT="${CAPTURE_STRICT:-1}"
export CAPTURE_READY_SELECTOR="${CAPTURE_READY_SELECTOR:-#startScreen}"
export CAPTURE_AUTO_START="${CAPTURE_AUTO_START:-false}"

exec /usr/bin/time -p node "$RUNTIME_DIR/scripts/default-capture.mjs"
