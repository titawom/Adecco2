import { Component } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  datos: Task[] = [];
  task : Task;
  
  constructor(private dataService: TaskService) {
    this.task = {id: 0, nombre: '0', edad: 0, prioridad:'0'}
  }

  ngOnInit() {
    this.actualizarDatos();
  }

  actualizarDatos() {
    this.datos = this.dataService.getTasks();
  }

  TaskDetail(task : Task) {
      this.task = task;
  }

  TaskForm() {
    window.location.pathname = '/taskform';
  }

}
