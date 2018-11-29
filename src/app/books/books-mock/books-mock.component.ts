import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { Event } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'dev-books-mock',
  templateUrl: './books-mock.component.html',
  styleUrls: ['./books-mock.component.css']
})
export class BooksMockComponent implements OnInit {
  pensando = false;
  clave: string;
  aLibros: Array<Libro>;
  constructor(public booksSrv: BooksService) { }

  ngOnInit() {
    this.clave = 'Angular';
    this.aLibros = [];
  }

  buscar(ev: Event) {
    this.aLibros = this.booksSrv.getLibros(this.clave);
  }

  buscarAsync(ev: Event) {
    this.pensando = true;
    this.booksSrv.getLibrosAsync(this.clave).then(
      (data: Array<Libro>) => {
        this.aLibros = data;
        this.pensando = false;
      }, // Si todo va bien
      error => { this.pensando = false; }); // Si algo va mal
  }
}
