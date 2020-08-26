import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { GroupModule } from './groups/group.module';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddModule } from './add/add.module';
import { RemoveComponent } from './remove/remove.component';
import { ReplaceComponent } from './replace/replace.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RemoveComponent,
    ReplaceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'remove', component: RemoveComponent },
      { path: 'replace', component: ReplaceComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    GroupModule,
    AddModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
