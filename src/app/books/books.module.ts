import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksMockComponent } from './books-mock/books-mock.component';
import { FormsModule } from '@angular/forms';
import { GoogleBooksComponent } from './google-books/google-books.component';

@NgModule({
  declarations: [BooksComponent, BooksMockComponent, GoogleBooksComponent ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ]
})
export class BooksModule { }
