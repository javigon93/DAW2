<?php



// Ejercicio 33
// Haz una aplicación php que muestre el contenido de fichero1.txt por el
// navegador mediante la función fgets().

$fichero=fopen("/ficheros/fichero1.txt", 'r');

$contenido=fread($fichero, filesize("ficheros/fichero1.txt"));





