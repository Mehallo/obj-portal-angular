import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'><img src="./assets/images/objective-banner.png"
        class="img-responsive center-block"
        style="max-height:50px;" /></a>
        <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/groups']">Group List</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/add']">Add Group</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/remove']">Remove Group</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/replace']">Replace Group</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle = 'Objective Portal';

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    
  }



}
