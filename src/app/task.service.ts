import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private datos: Task[] = [];
  private updatedTask: BehaviorSubject<Task | null> = new BehaviorSubject<Task | null>(null); 

  constructor() {
    this.cargarDatosIniciales();
    this.cargarDatosGuardados();
  }

  cargarDatosIniciales() {
    this.datos = [
      { id: 1, nombre: 'Task1' },
      { id: 2, nombre: 'Task2' },
      { id: 3, nombre: 'Task3' }
    ];
  }

  cargarDatosGuardados() {
    const datosGuardados = localStorage.getItem('datos');
    if (datosGuardados) {
      this.datos = JSON.parse(datosGuardados);
    }
  }

  guardarDatos() {
    localStorage.setItem('datos', JSON.stringify(this.datos));
  }

  getTasks(): Task[] { 
    return this.datos;
  }

  addTask(nuevaTask: Task) { 
    const nuevoId = this.generateId(); 
    nuevaTask.id = nuevoId; 
    this.datos.push(nuevaTask); 
    this.guardarDatos(); 
  }

  deleteTask(id: number) { 
    const index = this.datos.findIndex(task => task.id === id);
    if (index !== -1) { 
      this.datos.splice(index, 1); 
      this.guardarDatos(); 
    }
  }

  updateTask(taskUpdated: Task) { 
    const index = this.datos.findIndex(task => task.id === taskUpdated.id); 
    if (index !== -1) { 
      this.datos[index] = taskUpdated; 
      this.guardarDatos();
    }
  }

  /* getDatoParaEditar(): Observable<Task | null> {
    return this.updatedTask.asObservable();
  }

  setDatoParaEditar(task: Task | null) {
    this.updatedTask.next(task);
  }

  limpiarDatoParaEditar() {
    this.updatedTask.next(null); 
  } */

  private generateId(): number {
    const ids = this.datos.map(task => task.id); 
    const maxId = Math.max(...ids); 
    return maxId + 1; 
  }
}
