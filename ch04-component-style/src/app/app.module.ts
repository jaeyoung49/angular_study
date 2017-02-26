import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StyleComponent } from './style1/style1.component';
import { Style2Component } from './style2/style.component';
import { FirstDepthComponent } from './style2/first-child.component';
import { SecondDepthComponent } from  './style2/second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    Style2Component, FirstDepthComponent, SecondDepthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
