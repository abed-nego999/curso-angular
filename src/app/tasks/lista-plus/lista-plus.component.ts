import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITask } from 'src/app/models/task.model';

@Component({
  selector: 'dev-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit, OnDestroy {
  aTasks: Array<ITask>;
  constructor() { }

  ngOnInit() {
    const storedArray: Array<ITask> = JSON.parse(localStorage.getItem('tareas-plus'));
    this.aTasks = storedArray ? storedArray : new Array<ITask>();
  }

  ngOnDestroy() {
    localStorage.setItem('tareas-plus', JSON.stringify(this.aTasks));
  }

  addTask(inTask: ITask) {
    this.aTasks.push(inTask);
  }

  deleteTask(index: number) {
    this.aTasks.splice(index, 1);
  }
}
