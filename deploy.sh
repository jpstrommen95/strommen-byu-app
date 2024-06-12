STROMMEN_BYU_APP_VERSION=$(node ./scripts/print-p-json-version.js)
STROMMEN_BYU_GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ -z "$CIRCLE_BRANCH" ]; then
  echo "CircleCI branch is null, using git instead."
  BRANCH=${STROMMEN_BYU_GIT_BRANCH}
else
  echo "Branch detected from CircleCI."
  BRANCH=${CIRCLE_BRANCH}
fi

echo "Fake deploying from branch: $BRANCH!"
echo "Fake deploying as version: $STROMMEN_BYU_APP_VERSION!"
