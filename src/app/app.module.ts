import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { TasksModule } from './tasks/tasks.module';
import { AboutModule } from './about/about.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { BlogModule } from './blog/blog.module';
import { CursosModule } from './cursos/cursos.module';
import { BooksModule } from './books/books.module';
import { HttpClientModule } from '@angular/common/http';

// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    TasksModule,
    AboutModule,
    BlogModule,
    CursosModule,
    NgbModule,
    FontAwesomeModule,
    BooksModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [], // Esto lo añade el profe
  bootstrap: [AppComponent] // Equivale a export, pero es especial y hace referencia al módulo raíz
})
export class AppModule { }
