import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITask, Task } from 'src/app/models/task.model';

@Component({
  selector: 'dev-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit, OnDestroy {
  oNewTask: ITask;
  aTasks: Array<ITask>;
  constructor() { }

  ngOnInit() {
    this.oNewTask = new Task();
    const storedArray: Array<ITask> = JSON.parse(localStorage.getItem('tareas'));
    this.aTasks = storedArray ? storedArray : new Array<ITask>();
  }

  addTask() {
    this.aTasks.push(Object.assign({}, this.oNewTask));
  }

  deleteTask(i: number) {
    this.aTasks.splice(i, 1);
  }

  ngOnDestroy() {
    localStorage.setItem('tareas', JSON.stringify(this.aTasks));
  }
}
