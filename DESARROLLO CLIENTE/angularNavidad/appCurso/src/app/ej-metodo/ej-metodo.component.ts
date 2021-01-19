import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-metodo',
  templateUrl: './ej-metodo.component.html',
  styleUrls: ['./ej-metodo.component.css']
})
export class EjMetodoComponent implements OnInit {

  puntuacion = 9;
  getPuntuacion() {
    return this.puntuacion;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
