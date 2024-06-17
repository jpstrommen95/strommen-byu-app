#!/usr/bin/env bash

# usage: `./bash-scripts/deploy.sh`
# ci usage: `sh ./bash-scripts/deploy.sh`

# Exit script if you try to use an uninitialized variable.
set -o nounset # ignore safeguard to support local usage, as CIRCLE_BRANCH is unset

# Exit script if a statement returns a non-true return value.
set -o errexit

# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

STROMMEN_BYU_APP_VERSION=$(node ./node-scripts/print-p-json-version.js)
STROMMEN_BYU_GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
BRANCH="no branch"

if [ -z "$CIRCLE_BRANCH" ]; then
  echo "CircleCI branch is null, using git instead."
  BRANCH=${STROMMEN_BYU_GIT_BRANCH}
else
  echo "Branch detected from CircleCI."
  BRANCH=${CIRCLE_BRANCH}
fi

echo "Fake deploying from branch: $BRANCH!"
echo "Fake deploying as version: $STROMMEN_BYU_APP_VERSION!"
