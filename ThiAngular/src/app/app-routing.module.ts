import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewListComponent} from "./new/new-list/new-list.component";
import {NewCreateComponent} from "./new/new-create/new-create.component";


const routes: Routes = [
  {
    path: 'new/list',
    component:NewListComponent
  },
  {
    path: 'new/create',
    component:NewCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
