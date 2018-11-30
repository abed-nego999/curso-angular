import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { GoogleBooksService } from 'src/app/services/google-books.service';

@Component({
  selector: 'dev-books-by-service',
  templateUrl: './books-by-service.component.html',
  styleUrls: ['./books-by-service.component.css']
})
export class BooksByServiceComponent implements OnInit {
  clave: string;
  aLibros: Array<Libro>;
  pensando = false;
  constructor(public gbSrv: GoogleBooksService) { }

  ngOnInit() {
    this.aLibros = new Array<Libro>();
  }

  buscar(ev: Event) {
    if (!this.clave) { return false; }
    this.pensando = true;
    this.gbSrv.getLibros(this.clave).then(
      (data: any) => {
        console.log(data);
        this.pensando = false;
      },
      (error) => {
        console.log(error);
        this.pensando = false;
      }
    );
  }
}
