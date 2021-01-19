import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-directiva-ngif',
  templateUrl: './ej-directiva-ngif.component.html',
  styleUrls: ['./ej-directiva-ngif.component.css']
})
export class EjDirectivaNgifComponent implements OnInit {
  capital: string = "";

  constructor() {
  }
  ngOnInit() {
  }
  setResultado() {
    return this.capital === "Madrid" ? true : false;
  }

}
