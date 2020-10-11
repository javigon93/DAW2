#!/bin/bash

rm -rf dist
mkdir dist
cp -r src/* dist

node-sass -o ./dist/css ./dist/scss
rm -rf dist/scss