import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { ForoModule } from './foro/foro.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material';
import { CustomMatPaginatorIntl } from './shared/paginator-es';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    ForoModule,
    HomeModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
  ],
  providers: [
    {  provide: MatPaginatorIntl, 
      useClass: CustomMatPaginatorIntl
    }, 
    HttpClient
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
