import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  @Input() aviso: string;


  constructor() { }

  ngOnInit(): void {
  }

}
