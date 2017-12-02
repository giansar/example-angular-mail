import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AppModelForm } from "./app.model.form";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = new AppModelForm("", "", "");

  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
  ) { }

  title = 'My First Angular App';

  OnClickSend() {
    this.http.post('http://www.giansar.net:8080/mail', JSON.stringify(this.model), {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe();
    this.snackbar.openFromComponent(SnakeBarComponent, { duration: 2000 });
  }
}

@Component({
  selector: 'app-component-snackbar',
  templateUrl: './app.component.snackbar.html'
})
export class SnakeBarComponent { }