import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CorelibModule } from '@jsframework/corelib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CorelibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
