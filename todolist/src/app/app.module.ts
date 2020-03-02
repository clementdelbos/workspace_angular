import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule}  from '@angular/forms';
import { HeaderComponent } from './header/header.component';//import JS

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [//import pour que Ang sache quon utlise,limport JS
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
