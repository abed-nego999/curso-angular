import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { TasksModule } from './tasks/tasks.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    TasksModule,
    AboutModule
  ],
  providers: [],
  exports: [], // Esto lo añade el profe
  bootstrap: [AppComponent] // Equivale a export, pero es especial y hace referencia al módulo raíz
})
export class AppModule { }
