import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskFormComponent,
    TaskDetailComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    TaskDetailComponent,
    UpdateComponent
  ]
})
export class TaskModule { }
