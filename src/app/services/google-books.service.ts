import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  baseUrl: string;
  aLibros: Array<Libro>;
  constructor(public http: HttpClient) {
    this.baseUrl = environment.apiLibros;
  }

  getLibros(q: String) {
    const url = this.baseUrl + q;
    return this.http.get(url).toPromise().then(
      (data: any) => {
        this.aLibros = data.items.map(this._procesaLibro);
        return new Promise(
          (resolve, reject) => {
            resolve(this.aLibros);
          }
        );
      },
      (error) => {}
    );
  }

  private _procesaLibro(item: any) {
    const libro = {
      id: item.volumeInfo.industryIdentifiers[0].type + ': ' + item.volumeInfo.industryIdentifiers[0].identifier,
      autor: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : '',
      titulo: item.volumeInfo.title,
      enlace: item.accessInfo.webReaderLink,
      thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : ''
    };

    return libro;
  }
}
