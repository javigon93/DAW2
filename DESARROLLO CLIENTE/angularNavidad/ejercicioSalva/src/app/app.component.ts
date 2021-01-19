import { Component } from '@angular/core';
import { Trabajador } from './modelos/trabajador.modelo';

//importar el interface trabajador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo: string = "Listado de Trabajadores ";
  //declarar la variable titulo


  trabajadores: Trabajador[] = [
    {
      id: 1,
      nombre: 'Ana',
      cargo: 'Programadora',
      foto: '1.jpg',
      votos: 0
    },
    {
      id: 2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto: '2.jpg',
      votos: 0
    },
    {
      id: 3,
      nombre: 'Juan',
      cargo: 'Analista',
      foto: '3.jpg',
      votos: 0
    },
    {
      id: 4,
      nombre: 'Luis',
      cargo: 'Programador',
      foto: '4.jpg',
      votos: 0
    },
    {
      id: 5,
      nombre: 'Maria',
      cargo: 'Diseñadora',
      foto: '5.jpg',
      votos: 0
    },
    {
      id: 6,
      nombre: 'Pedro',
      cargo: 'Marketing',
      foto: '6.jpg',
      votos: 0
    }
  ];
  //declarar la variable trabajadores array del tipo Trabajador


  // metodo para borrar el trabajador pasado por id del array de trabajadores
  borrar(id: number) {

    let indice_trabajador = this.trabajadores.findIndex(item => item.id == id);


    this.trabajadores.splice(indice_trabajador, 1);


  }

  // metodo para sumar un voto al trabajador pasado por id
  sumaVoto(id: number) {

    let indice_trabajador = this.trabajadores.findIndex(item => item.id == id);

    this.trabajadores[indice_trabajador].votos++;



  }

  // metodo para restar un voto al trabajador pasado por id
  restaVoto(id: number) {

    let indice_trabajador = this.trabajadores.findIndex(item => item.id == id);

    let votos_trabajador = this.trabajadores[indice_trabajador].votos;

    votos_trabajador--;

    if (votos_trabajador < 0) {
      votos_trabajador = 0;
      alert('No se pueden eliminar más votos');
    }

    this.trabajadores[indice_trabajador].votos = votos_trabajador;



  }



}
