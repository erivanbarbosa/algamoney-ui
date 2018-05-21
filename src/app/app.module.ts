import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import {DataTableModule, DataTable} from 'primeng/datatable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
