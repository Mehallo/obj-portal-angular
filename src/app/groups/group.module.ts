import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupsComponent } from './groups.component'
import { SharedModule } from '../shared/shared.module';
import { GroupsListingComponent } from './groups-listing.component';

@NgModule({
  declarations: [
    GroupsComponent,
    GroupsListingComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'groups', component: GroupsComponent },
      {
        path: 'groups/:id/:name',
        component: GroupsListingComponent
      }
    ]),
    SharedModule
  ]
})
export class GroupModule { }
