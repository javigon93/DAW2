<?php

// Ejercicio 1
// Crea una clase Empleado con 2 propiedades: nombre y sueldo. Implementa
// los getters y setters de las dos propiedades (ten en cuenta la visibilidad
// adecuada de las propiedades y métodos).
// Crea dos empleados rellenando su nombre y sueldo, y haz que salga por
// pantalla la frase “nombre_empleado tiene un sueldo de sueldo_empleado”. 

class Empleado
{


    private $nombre;
    private $sueldo;

    public function getNombre()
    {

        return $this->nombre;
    }

    public function getSueldo()
    {

        return $this->sueldo;
    }


    public function setNombre($nombre)
    {

        $this->nombre = $nombre;
    }

    public function setSueldo($valor){

        $this->sueldo=$valor;




    }
}

$empleado1= new Empleado();
$empleado1->setNombre("pepinho");
$empleado1->setSueldo(250);
$nombre_empleado=$empleado1->getNombre();
$sueldo_empleado=$empleado1->getSueldo();


echo "Nuestro empleado se llama ".$nombre_empleado." y su sueldo es de ".$sueldo_empleado."€"; 
