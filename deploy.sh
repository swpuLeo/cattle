#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

echo 'cattle.w3fun.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:swpuLeo/cattle.git master:gh-pages

cd -