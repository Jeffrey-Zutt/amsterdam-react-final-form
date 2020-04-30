#!/usr/bin/env bash

npm run storybook:build
git add --all
git commit -m "chore: ran storybook:build"
npm version patch
git push
npm publish
