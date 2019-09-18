#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

echo 'cattle.w3fun.com' > CNAME

echo '访问地址：https://cattle.w3fun.com' > README.md

git init
git config user.name swpuLeo
git config user.email swpu.leo@gmail.com
git add -A
git commit -m 'deploy'

git push -f git@github.com:swpuLeo/cattle.git master:gh-pages

cd -
