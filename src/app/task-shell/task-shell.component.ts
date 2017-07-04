import { Component, OnInit } from '@angular/core';
import { Task, tasksArr } from '../models-classes/task';

@Component({
  selector: 'app-task-shell',
  templateUrl: './task-shell.component.html',
  styleUrls: ['./task-shell.component.css']
})

export class TaskShellComponent implements OnInit {
  
  tasks: Task[];
  selectedTask: Task;
  ngOnInit() {
    this.tasks = tasksArr;
    this.selectedTask = this.tasks[0];
  }
  selectTask(task): void {
    this.selectedTask = task;
  }

}
