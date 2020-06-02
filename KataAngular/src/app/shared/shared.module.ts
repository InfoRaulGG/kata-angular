import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';




@NgModule({
  declarations: [NavbarComponent, PageHeaderComponent],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [NavbarComponent, PageHeaderComponent]
})
export class SharedModule { }
