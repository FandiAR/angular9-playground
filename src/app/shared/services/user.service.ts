import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.ip;

  constructor(
    private http: HttpClient
  ) {}

  getUsers(): Observable<any> {
    const urlApi = this.apiUrl + 'users';
    return this.http.get(urlApi).pipe(share())
      .pipe(
        catchError(this.handleError<any>('Gat All Gender'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
