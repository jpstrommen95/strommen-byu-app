#!/usr/bin/env bash

# usage: `./bash-scripts/deploy.sh`
# ci usage: `sudo ./bash-scripts/deploy.sh`

# Exit script if you try to use an uninitialized variable.
set -o nounset

# Exit script if a statement returns a non-true return value.
set -o errexit

# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

STROMMEN_BYU_GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
STROMMEN_BYU_APP_VERSION=$(node ./node-scripts/print-p-json-version.js)

echo "Fake deploying from branch: $STROMMEN_BYU_GIT_BRANCH!"
echo "Fake deploying as version: $STROMMEN_BYU_APP_VERSION!"
