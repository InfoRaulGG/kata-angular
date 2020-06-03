import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [NavbarComponent, PageHeaderComponent, SearchComponent],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [NavbarComponent, PageHeaderComponent, SearchComponent]
})
export class SharedModule { }
