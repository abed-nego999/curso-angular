import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/task.model';

@Component({
  selector: 'dev-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  @Input() index: number;
  @Output() evDeleteTask: EventEmitter<number>;
  constructor() {
    this.evDeleteTask = new EventEmitter();
  }

  ngOnInit() {
  }

  sendDeleteTask() {
    this.evDeleteTask.next(this.index);
  }
}
