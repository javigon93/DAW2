<?php
require __DIR__ . '/vendor/autoload.php';
$actores = include "actores.php";

$expression = '[?contains(`["3", "4", "6"]`, id)].{Nombre: nombre, Anyo:
    anyo}';
    $result =JmesPath\search($expression, $actores);
    var_dump($result);
