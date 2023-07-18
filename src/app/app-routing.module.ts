import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';

const routes: Routes = [
   { path:'', component : TaskListComponent },
   { path:'taskform', component : TaskFormComponent },
   { path:'taskdetail', component : TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
