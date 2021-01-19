import { Injectable } from '@angular/core';


//los servicios son datos + métodos que trabajan con los datos, a través de la inyección de dependencias.

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  dato:number=10;
  proveedores: any = [
    {
      nombre: 'Telefónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com',
      contacto: 'Juan Pérez'
    },
    {
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
    }
  ]
  getProveedores() {
    return this.proveedores;
  }

  getDato(){

    return this.dato;


  }

  sumaUno(){
    this.dato++;

  }

  setDato(n:number){

    this.dato=n;

  }
}


