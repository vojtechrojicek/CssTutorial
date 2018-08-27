import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Assignment1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2HandySyntaxHighlighterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
