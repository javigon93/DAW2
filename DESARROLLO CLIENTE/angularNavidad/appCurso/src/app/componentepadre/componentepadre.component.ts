import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentepadre',
  templateUrl: './componentepadre.component.html',
  styleUrls: ['./componentepadre.component.css']
})
export class ComponentepadreComponent implements OnInit {
  texto: string | undefined;
  avisos: string[] = ['Aviso 1' , 'Aviso 2' , 'Aviso 3'];
  mostrarMensaje(event: any) {
    this.texto = event + ' marcado como leido';
    }
  constructor() { }

  ngOnInit(): void {
  }

}
