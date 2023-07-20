import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  @Input() task!: Task;

  constructor() {}
}
