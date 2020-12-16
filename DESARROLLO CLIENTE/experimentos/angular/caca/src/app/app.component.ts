import { Component } from '@angular/core';
import {Profesor} from "./Modelos/profesor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'k ase';
  profe1!: Profesor;

  profesores:Array<Profesor>=[{

    nombre: 'Pepe',
    cif: 'jeefe',
     direccion: 'String',
     creado: new Date(Date.now()),


  }];

   verTitulo() {
    return this.title;

  }

  verMensaje(){
    let mitexto=prompt("Dime texto Nuevo","hola");

  }
}
