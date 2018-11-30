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
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aLibros = new Array<Libro>();
    this.baseUrl = environment.apiLibros;
  }

  buscar(ev: Event) {
    this.pensando = true;
    const url = this.baseUrl + this.clave;
    this.http.get(url).toPromise().then(
      (data: any) => {
        let aData = [];
        aData = data.items.map((value) => {
          return {id: value.volumeInfo.industryIdentifiers[0].type + ': ' + value.volumeInfo.industryIdentifiers[0].identifier,
            autor: value.volumeInfo.authors[0],
            titulo: value.volumeInfo.title};
        });
        console.log(data);
        this.aLibros = Object.assign([], aData);
        this.pensando = false;
      },
      (error) => {
        console.log(error);
        this.pensando = false;
      }
    );
  }
}
