import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeForoComponent } from './home-foro/home-foro.component';
import { SharedModule } from '../shared/shared.module';
import { PostService } from '../services/post.service';
import { MaterialModule } from '../material/material.module';

const foroRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeForoComponent
      },
    ]
  }
];

@NgModule({
  declarations: [HomeForoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(foroRoutes)
  ],
  exports: [RouterModule],
  providers: [PostService]
})
export class ForoRoutingModule { }
