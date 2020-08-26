import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, ObjectUnsubscribedError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IGroup } from './group';
import { IObject } from './object';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private productUrl = 'assets/products/groups.json';
  private groupsUrl = 'http://localhost:8080/api/v1/groups/list';
  private documentsUrl = 'http://localhost:8080/api/v1/documents/check/';
  private foldersUrl = 'http://localhost:8080/api/v1/folders/check/';
  errorMessage = '';
  objects: IObject | undefined;

  constructor(private http: HttpClient) {  }

  getGroups(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(this.groupsUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getDocumentlisting(id: string): Observable<IObject[]> {
    return this.http.get<IObject[]>(this.documentsUrl + id)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getFolderlisting(id: string): Observable<IObject[]> {
    return this.http.get<IObject[]>(this.foldersUrl + id)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );

  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
