import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-view-modelo',
  templateUrl: './view-modelo.component.html',
  styleUrls: ['./view-modelo.component.css']
})

export class ViewModeloComponent implements OnInit {

  alumno1 = new Alumno (1, 'Juan', 'Gutiérrez', 'Madrid');

  constructor() { }

  ngOnInit(): void {
  }

}
