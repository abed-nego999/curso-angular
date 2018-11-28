import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dev-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
  // Con esto, aislas los estilos de este componente (prueba, prueba)
  // , encapsulation: ViewEncapsulation.ShadowDom
  // Con esto, tus estilos (css) se aplican everywhere
  // , encapsulation: ViewEncapsulation.None
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
