import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule } from "@angular/material";

import { AppComponent, SnakeBarComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SnakeBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent, SnakeBarComponent]
})
export class AppModule { }
