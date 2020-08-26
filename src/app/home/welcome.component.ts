import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome to the Objective Portal';
  greeting = {};

 constructor(private app: AppService, private http: HttpClient) {

 }


}
