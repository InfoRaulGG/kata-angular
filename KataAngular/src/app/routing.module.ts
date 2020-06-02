import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    // Register routes here.
    {
      path: 'home',
      loadChildren: './home/routing-home.module#RoutingHomeModule'
     },
     {
       path: '' ,  redirectTo: 'home', pathMatch: 'full'
     },
     {
      path: 'foro',
      loadChildren: './foro/foro-routing.module#ForoRoutingModule'
     },
     {
       path: '' ,  redirectTo: 'home', pathMatch: 'full'
     }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
