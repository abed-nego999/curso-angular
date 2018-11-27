import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string;
  apellido: string;

  constructor() { }

  ngOnInit() {
    this.nombre = '';
  }

  onBorrar(ev) {
    this.nombre = '';
    console.log(ev);
  }
}
