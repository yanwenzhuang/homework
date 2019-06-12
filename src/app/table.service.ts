import { Injectable } from '@angular/core';
import { Someone } from './someone';
import { PEOPLE } from './mock-people';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getPeople(): Observable<Someone[]> {
    return of(PEOPLE);
  }

}
