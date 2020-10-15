#!/bin/bash

nombre=$(cat package.json | grep "name" | cut -d'"' -f4)

rm -rf c:/xampp/htdocs/CLASE/$nombre
rm -rf c:/xampp/htdocs/php-server/$nombre
mkdir c:/xampp/htdocs/CLASE/$nombre
mkdir c:/xampp/php-server/$nombre

cp -r dist/* c:/xampp/htdocs/CLASE/$nombre
cp -r src/php/* c:/xampp/php-server/$nombre


# revisar si funciona