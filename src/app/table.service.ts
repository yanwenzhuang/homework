import { Injectable } from '@angular/core';
import { Someone } from './someone';
import { PEOPLE } from './mock-people';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Config {
  id:string;
  name:string;
  sex:string;
  phone:string;
  address:string;
}

@Injectable({
  providedIn: 'root'
})
export class TableService {
  configUrl = 'assets/people.json';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Someone[]> {
    return this.http.get(this.configUrl);
  }

}
