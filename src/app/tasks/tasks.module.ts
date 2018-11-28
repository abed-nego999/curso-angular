import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { ListaSimpleComponent } from './lista-simple/lista-simple.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, ListaSimpleComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule
  ]
})
export class TasksModule { }
