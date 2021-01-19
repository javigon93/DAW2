import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import {Trabajador} from '../modelos/trabajador.modelo';

// importar Input, Output y Event Emitter from '@angular/core'
// importar Trabajador


@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit {

  @Input() trabajador:Trabajador;
  // decorador input para el trabajador que se le pasa desde el padre
  id:number;
  @Output() likeTrabajador = new EventEmitter();
  @Output() dislikeTrabajador = new EventEmitter();
  @Output() borrarTrabajador = new EventEmitter();
  // decxorador output para el evento likeTrabajador
  // decxorador output para el evento unlikeTrabajador
  // decxrador output para el evento borraTrabajador

  constructor() { }

  ngOnInit(): void {
  }

  //metodo que recibe un trabajador y emite el evento likeTrabajador con el id del trabajador
  like(trabajador:Trabajador){

    this.id=trabajador.id;

    this.likeTrabajador.emit(this.id);

  }

  //metodo que recibe un trabajador y emite el evento unlikeTrabajador con el id del trabajador
  dislike(trabajador:Trabajador){

    this.id=trabajador.id;
    this.dislikeTrabajador.emit(this.id);
  }

  //metodo que recibe un trabajador y emite el evento borraTrabajador con el id del trabajador
  eliminar(trabajador:Trabajador){


    this.id=trabajador.id;
    this.borrarTrabajador.emit(this.id);
  }
}
