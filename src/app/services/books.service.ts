import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { LIBROS } from '../models/libros.data';

// Esto es muy nuevo: En vez de asignar el provider "BooksService" al
// módulo app (o root), es el servicio el que se asigna a si mismo al root
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  aLibros: Array<Libro>;
  constructor() {
    this.aLibros = LIBROS;
  }

  getLibros(q: string) {
    const librosOk = new Array<Libro>();
    this.aLibros.forEach(element => {
      if (element.titulo.indexOf(q) !== -1) {
        librosOk.push(element);
      }
    });
    return Object.assign([], librosOk);
  }

  getLibrosAsync(q: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.getLibros(q));
      }, 1000);
    });
  }
}
