import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task, ITask } from 'src/app/models/task.model';

@Component({
  selector: 'dev-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Output() evNewTask: EventEmitter<ITask>;
  oNewTask: ITask;
  constructor() {
    this.evNewTask = new EventEmitter();
  }

  ngOnInit() {
    this.oNewTask = new Task();
  }

  sendTask() {
    // this.evNewTask.emit();
    this.evNewTask.next(Object.assign({}, this.oNewTask)); // Envío un "clone()" del objeto de tarea
    this.oNewTask.nombre = '';
  }
}
