import { Component, OnInit } from '@angular/core';
import {ProveedoresService} from '../servicios/proveedores.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  numero:number;

  constructor(private miServicio: ProveedoresService) { }

  ngOnInit(): void {

    this.numero=this.miServicio.getDato();



  }

  ver(){


    this.numero=this.miServicio.getDato();


  }

  sumaUno(){

   this.miServicio.sumaUno();
   this.numero=this.miServicio.getDato();
  }

  asigna(){

    let n=prompt('dime un valor');
    this.miServicio.setDato(parseInt(n));
    this.numero=this.miServicio.getDato();

  }

}
