import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatTabsModule,
  MatDialogModule,
} from '@angular/material';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ContentComponent } from './content/content.component';
import { FileLoadDialogComponent } from './fileload-dialog/fileload-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LeftMenuComponent,
    ContentComponent,
    FileLoadDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule
  ],
  entryComponents: [
    FileLoadDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
