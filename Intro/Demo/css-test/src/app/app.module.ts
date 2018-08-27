import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreenComponent } from './green/green.component';
import { RedComponent } from './red/red.component';

@NgModule({
  declarations: [
    AppComponent,
    GreenComponent,
    RedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
