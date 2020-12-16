<?php
namespace clases;

abstract class Pelicula {
    protected $imagen;
    protected $titulo;

    abstract public function mostrarDatos();
}