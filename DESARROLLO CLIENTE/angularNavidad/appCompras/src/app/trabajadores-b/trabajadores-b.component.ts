import { Component, OnInit } from '@angular/core';
import { WorkersService } from "../servicios/workers.service";

@Component({
  selector: 'app-trabajadores-b',
  templateUrl: './trabajadores-b.component.html',
  styleUrls: ['./trabajadores-b.component.css']
})
export class TrabajadoresBComponent implements OnInit {


  trabajadores: Array<any>;
  constructor(private servicioTrabajadores: WorkersService) { }

  ngOnInit(): void {

    this.trabajadores = this.servicioTrabajadores.getTrabajadores();

  }

  totalTrabajadores() {

    alert(this.servicioTrabajadores.getTrabajadores().length);


  }

  a() {

  }

  deleteTrabajador(trabajador: any) {


    this.servicioTrabajadores.borrarTrabajador(trabajador.nombre);


  }

  ver(trabajador:any){

    this.servicioTrabajadores.verTrabajador(trabajador.nombre);

  }

  modificar(trabajador:any){

    this.servicioTrabajadores.modificarTrabajador(trabajador.nombre);


  }

  nuevo(){



    let id = (this.trabajadores[this.trabajadores.length-1].id)+1;
    let nombre= prompt('Di nombre');
    let cargo = prompt('di cargo');
    let foto = prompt('nombreFoto') + ".jpg"
    let votos = 0;


    let worker={

      id:id,
      nombre:nombre,
      cargo:cargo,
      foto:foto,
      votos:votos


    }


    this.servicioTrabajadores.newTrabajador(worker);




  }

}
