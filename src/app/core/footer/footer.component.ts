import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  lugar: string;
  empresa: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = 'Esteban';
    this.lugar = 'Cronos';
    this.empresa = 'Drago Solutions';
    this.fecha = new Date();
  }

}
