import { Component, OnInit } from '@angular/core';
import { TableService } from '../../table.service';
import { Someone } from 'src/app/someone';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  people:Someone[]

  constructor(private tableService:TableService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.tableService.getPeople()
    .subscribe(people => this.people = people);
  }


//   .subscribe((data: Config) => this.config = {
//     heroesUrl: data['heroesUrl'],
//     textfile:  data['textfile']
// });

}
