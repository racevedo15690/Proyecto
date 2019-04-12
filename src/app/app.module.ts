import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent, DialogDataExampleDialog } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DialogDataExampleDialog
  ],
  entryComponents: [DialogDataExampleDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
