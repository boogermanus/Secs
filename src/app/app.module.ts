import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NormalTimeComponent } from './normal-time/normal-time.component';
import { ExpandedTimeComponent } from './expanded-time/expanded-time.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalTimeComponent,
    ExpandedTimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
