import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor() { }

  trabajadores:Array<any>=[
    {
      id:1,
      nombre: 'Ana',
      cargo: 'Programadora' ,
      foto:'1.jpg',
      votos:0
    },
    {
      id:2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto:'2.jpg',
      votos:0
    },
    {
      id:3,
      nombre: 'Juan',
      cargo: 'Analista' ,
      foto:'3.jpg',
      votos:0
    },
    {
      id:4,
      nombre: 'Luis',
      cargo: 'Programador' ,
      foto:'4.jpg',
      votos:0
    },
    {
      id:5,
      nombre: 'Maria',
      cargo: 'Diseñadora' ,
      foto:'5.jpg',
      votos:0
    },
    {
      id:6,
      nombre: 'Pedro',
      cargo: 'Marketing' ,
      foto:'6.jpg',
      votos:0
    }
 ];

 getTrabajadores(){

  return this.trabajadores;


 }

 borrarTrabajador(nombre:string){

  let pos=this.trabajadores.findIndex(t=>t.nombre==nombre);
  this.trabajadores.splice(pos,1);


}


modificarCargo(){}


verTrabajador(nombre:string){

  let pos=this.trabajadores.findIndex(t=>t.nombre==nombre);
  let respuesta:string="";



  for (const property in this.trabajadores[pos]) {
    respuesta= respuesta + (`${property}: ${this.trabajadores[pos][property]}`) + "\n";
  }

  alert(respuesta);

}


modificarTrabajador(nombre:string){



 let nuevoCargo= prompt("Nuevo Cargo");
 let pos=this.trabajadores.findIndex(t=>t.nombre==nombre);

 console.log(pos)

 this.trabajadores[pos].cargo= nuevoCargo;


}


newTrabajador(trabajador:any){

  this.trabajadores.push(trabajador);


}


}
