import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IGroup } from './group';
import { GroupService } from './group.service';

@Component({
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  pageTitle = 'Group List';
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredGroups = this.listFilter ? this.performFilter(this.listFilter) : this.groups;
  }

  filteredGroups: IGroup[] = [];
  groups: IGroup[] = [];

  constructor(private groupService: GroupService) { }

  performFilter(filterBy: string): IGroup[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.groups.filter((group: IGroup) =>
      group.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
  ngOnInit(): void {
    this.groupService.getGroups().subscribe({
      next: groups => {
        this.groups = groups;
        this.filteredGroups = this.groups;
      },
      error: err => this.errorMessage = err
    });
  }

}
