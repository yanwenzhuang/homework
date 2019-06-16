import { Injectable } from '@angular/core';
import { Someone } from './someone';
import { PEOPLE } from './mock-people';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Someone {
  id:string;
  name:string;
  sex:string;
  phone:string;
  address:string;
}

export interface People{
  people:Someone[];
}

@Injectable({
  providedIn: 'root'
})
export class TableService {
  configUrl = 'assets/people.json';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People> {
    // return of(PEOPLE);
    return this.http.get<People>(this.configUrl);
  }


  /* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<Someone[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Someone[]>(`${this.configUrl}/?name=${term}`)
}

}
