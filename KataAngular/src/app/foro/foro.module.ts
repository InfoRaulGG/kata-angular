import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoRoutingModule } from './foro-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostService } from '../services/post.service';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ForoRoutingModule,
    FormsModule
  ]
 
})
export class ForoModule { }
