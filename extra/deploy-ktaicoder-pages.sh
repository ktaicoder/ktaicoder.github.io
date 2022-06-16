#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
cd "${SCRIPT_DIR}"

## 이 스크립트를 임시 폴더에 복사해서 사용하세요.
## ACCESS_TOKEN=xxx ./deploy-ktaicoder-pages.sh
FOLDER=ktaicoder.github.io
REPO=https://github.com/ktaicoder/ktaicoder.github.io.git

if [ -z "$ACCESS_TOKEN" ]
then
    echo "input access token:"
    read TOKEN
    export ACCESS_TOKEN=$TOKEN
fi

echo "rm -rf ktaicoder.github.io"
rm -rf $FOLDER

echo "git clone $REPO"
git clone $REPO
cd $FOLDER

yarn install
pushd root
yarn install
yarn build:fast
popd

export ACCESS_TOKEN
time node deploy.mjs

echo "deploy success!"
