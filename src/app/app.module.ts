import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NationDialogComponent } from './nation-dialog/nation-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NationDialogComponent,
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatTableModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatRadioModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
