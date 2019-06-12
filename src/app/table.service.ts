import { Injectable } from '@angular/core';
import { Someone } from './someone';
import { PEOPLE } from './mock-people';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getPeople(): Someone[] {
    return PEOPLE;
  }
}
