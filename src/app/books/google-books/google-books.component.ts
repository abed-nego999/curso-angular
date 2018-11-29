import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dev-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css']
})
export class GoogleBooksComponent implements OnInit {
  clave: string;
  aLibros: Array<Libro>;
  pensando = false;
  baseUrl: string;
  constructor(public x: HttpClient) { }

  ngOnInit() {
    this.aLibros = new Array<Libro>();
    this.baseUrl = environment.apiLibros;
  }

  buscar(ev: Event) {
  }
}
