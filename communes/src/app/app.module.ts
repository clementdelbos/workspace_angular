import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule}from'@angular/forms';
import { CodePostalComponent } from './code-postal/code-postal.component';
import { CommunesService } from './communes.service';
import { HttpClientModule } from '@angular/common/http';
import { ResultViewComponent } from './result-view/result-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CodePostalComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CommunesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
