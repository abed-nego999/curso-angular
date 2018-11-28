import { Component, OnInit } from '@angular/core';
import { ITask, Task } from 'src/app/models/task.model';

@Component({
  selector: 'dev-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  oNewTask: ITask;
  aTasks: Array<ITask>;
  constructor() { }

  ngOnInit() {
    this.oNewTask = new Task();
    this.aTasks = new Array<ITask>();
  }

  addTask() {
    this.aTasks.push(Object.assign({}, this.oNewTask));
    console.log(this.aTasks);
  }
}
