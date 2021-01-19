import { Component, OnInit, Input, Output, EventEmitter } from
  '@angular/core';

@Component({
  selector: 'app-componentehijo',
  templateUrl: './componentehijo.component.html',
  styleUrls: ['./componentehijo.component.css']
})
export class ComponentehijoComponent implements OnInit {
  @Input() aviso: string | undefined;
  mensaje :string|undefined;
  leido: boolean = false;
  @Output() mensajeMarcado = new EventEmitter();
  marcar() {
    this.leido = !this.leido;
  }

  detectar(event:any) {
    this.mensaje = this.aviso;
    this.mensajeMarcado.emit(this.mensaje);
    }

  constructor() { }
  ngOnInit() {
  }
}
