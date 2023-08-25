import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'product/list',
    component:
  },
  {
    path: 'product/create',
    component:
  },
  {
    path: 'product/update/:id',
    component:
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
