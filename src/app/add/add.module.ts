import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add.component'

@NgModule({
  declarations: [
    AddComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'add', component: AddComponent }
    ]),
  ]
})
export class AddModule { }