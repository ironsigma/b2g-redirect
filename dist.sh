#!/bin/bash
rm -rf dist
mkdir -p dist
cd src
zip ../dist/b2g-redirect.zip \
    manifest.json \
    background.js \
    icons/icon-*.png
