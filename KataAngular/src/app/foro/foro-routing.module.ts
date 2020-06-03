import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeForoComponent } from './home-foro/home-foro.component';
import { SharedModule } from '../shared/shared.module';
import { PostService } from '../services/post.service';
import { MaterialModule } from '../material/material.module';
import { PaginatePipe } from '../pipes/paginate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  declarations: [HomeForoComponent, PaginatePipe],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(foroRoutes)
  ],
  exports: [RouterModule],
  providers: [PostService, PaginatePipe]
})
export class ForoRoutingModule { }
