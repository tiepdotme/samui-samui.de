#!/bin/bash

rm -rf public/
rm -rf resources/
hugo
html-minifier --input-dir public --output-dir public --file-ext html --collapse-whitespace
html-minifier --input-dir public --output-dir public --file-ext xml --collapse-whitespace
git add public resources
git commit -m "chore: build static site"
