import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dev-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {
  @ViewChild('nombreLocal') nombre: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onSalvar() {
    console.log(this.nombre);
  }

  onBorrar(ev) {
    console.log(ev);
  }
}
