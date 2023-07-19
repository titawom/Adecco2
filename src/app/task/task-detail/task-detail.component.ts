import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  @Input() childInput!: Task;
  nuevoDato: Task = {
    id: 0,
    nombre: ''
  };

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getDatoParaEditar().subscribe((dato: Task | null) => {
      if (dato) {
        this.nuevoDato = dato;
      }
    });
  }

  agregarOActualizarDato(dataForm: NgForm) {
    if (dataForm.valid) {
      if (this.childInput.id === 0) {
        this.taskService.addTask(this.childInput);
      } else {
        this.nuevoDato.id = this.childInput.id;
        this.taskService.updateTask(this.nuevoDato);
      }     
    }
  }
}
