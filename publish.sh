#!/usr/bin/env bash

# increment version and build
npm version patch
npm run build

# build storybook and push to repo
npm run storybook:build
git add --all
git commit -m "chore: ran storybook:build"
git push

# publish to npm
cd ./dist || exit
npm publish
