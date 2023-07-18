import { Component } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  datos: Task[] = [];

  constructor(private dataService: TaskService) {}

  ngOnInit() {
    this.actualizarDatos();
    console.log(this.datos);
  }

  actualizarDatos() {
    this.datos = this.dataService.getTasks();
  }

  TaskDetail(id : number) {

  }

  TaskForm() {
    
  }
//ELIMINAMOS DATOS
/*   eliminarDato(id: number) {
    this.dataService.deleteTask(id);
    this.actualizarDatos();
  } */
//EDITAMOS DATOS
 /*  editarDato(dato: Data) {
    this.dataService.setDatoParaEditar(dato);
  } */
}
