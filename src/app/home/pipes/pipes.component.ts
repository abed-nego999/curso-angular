import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  altura: number;
  descripcion: string;
  precio: number;
  producto: string;
  fecha: Date;
  oDatos: {};

  constructor() { }

  ngOnInit() {
    this.producto = 'Mi productito';
    this.descripcion = 'Chanante ipsum dolor sit amet, ' +
    'eiusmod mamellas adipisicing droja. Piticli nostrud ' +
    'saepe chotera sed exercitation con las rodillas in the ' +
    'guanter. Eveniet regomello ex ojete calor bizcoché incididunt ' +
    'exercitation enim ea.';
    this.altura = 176.8451;
    this.precio = 400;
    this.fecha = new Date();
    this.oDatos = {
      altura: 176.8451,
      precio: 400,
      producto: 'Mi productito',
      fecha: new Date()
    };
  }

}
