import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule
  ],
  exports: [MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatPaginatorModule]
})
export class MaterialModule { }
