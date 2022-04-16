import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummationComponent } from './summation/summation.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';

@NgModule({
  declarations: [
    AppComponent,
    SummationComponent,
    FizzBuzzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
