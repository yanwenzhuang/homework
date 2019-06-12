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
    this.people = this.tableService.getPeople();
  }

}
