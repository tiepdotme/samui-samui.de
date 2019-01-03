#!/bin/bash

rm -rf public/
hugo --minify --templateMetrics --templateMetricsHints
git add public
git commit -m "chore: build static site"
