import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
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
      if (this.nuevoDato.id === 0) {
        this.taskService.addTask(this.nuevoDato);
      } else {
        this.taskService.updateTask(this.nuevoDato);
      }
      this.limpiarFormulario(dataForm);
      
    }
  }

  limpiarFormulario(dataForm: NgForm) {
    this.nuevoDato = {
      id: 0,
      nombre: ''
    };
    dataForm.resetForm();
    this.taskService.limpiarDatoParaEditar();
  }
}
