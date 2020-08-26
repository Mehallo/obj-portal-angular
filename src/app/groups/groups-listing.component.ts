import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { GroupService } from './group.service';
import { IObject } from './object';

@Component({
  templateUrl: './groups-listing.component.html',
  styleUrls: ['./groups-listing.component.css']
})
export class GroupsListingComponent implements OnInit {
  pageTitle = 'Objects that have Group ';
  errorMessage = '';
  objects: IObject[] = [];
  id : string; 
  name:string; 

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router, 
              private groupService: GroupService) {

               }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    if (this.id) {
      this.getCombinedListing(this.id);
    }
  }

  getDocumentlisting(id: string) {
    this.groupService.getDocumentlisting(id).subscribe({
      next: objects => this.objects = objects,
      error: err => this.errorMessage = err
    });
  }

  getFolderlisting(id: string) {
    this.groupService.getFolderlisting(id).subscribe({
      next: objects => this.objects = objects,
      error: err => this.errorMessage = err
    });
  }

  getCombinedListing(id: string) 
  {
    forkJoin([this.groupService.getDocumentlisting(id), this.groupService.getFolderlisting(id)]).subscribe({
      next: results => {
                          this.objects = this.objects.concat(results[0]);
                          this.objects = this.objects.concat(results[1]);
                       },
      error: err => this.errorMessage = err
    });
  }

 

    onBack(): void {
      this.router.navigate(['/groups']);
    }

}
