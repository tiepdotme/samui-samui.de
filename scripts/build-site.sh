#!/bin/bash

rm -rf public/
rm -rf resources/
hugo
git add public resources
git commit -m "chore: build static site"
