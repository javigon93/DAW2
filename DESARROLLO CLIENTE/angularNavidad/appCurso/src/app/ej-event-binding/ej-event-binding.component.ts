import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-event-binding',
  templateUrl: './ej-event-binding.component.html',
  styleUrls: ['./ej-event-binding.component.css']
})
export class EjEventBindingComponent implements OnInit {

  texto = 'Originalmente el texto se carga así';
  activado: boolean=false;
  modTexto() {
    if (this.activado==false) {
      this.texto = 'Al pulsar el botón el texto se muestra así';
      this.activado=true;
  }
    else if(this.activado==true){
      this.texto='Hemos vuelto al original (Originalmente el texto se carga así)'
      this.activado=false;


    }

    }

  ngOnInit() {
  }

}
