import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './component/table/table.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { InputComponent } from './component/input/input.component';
import { HttpClientModule } from '@angular/common/http';
// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api'; 

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TableComponent,
    DropdownComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
