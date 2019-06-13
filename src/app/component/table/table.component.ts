import { Component, OnInit,Input } from '@angular/core';
import { TableService, People } from '../../table.service';
import { Someone } from 'src/app/someone';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  people:Someone[];
  tHead: string[]=['id','name','sex','phone','address'];

  @Input() i: string;

  constructor(private tableService:TableService) { }

  ngOnInit() {
    this.getPeople();
  }

  // getPeople(): void {
  //   this.tableService.getPeople()
  //   .subscribe(people => this.people = people);
  // }


  getPeople(): void{
    this.tableService.getPeople()
    .subscribe((data: People) => {
      this.people = data.people;
      console.log(this.people);

      // data.people.forEach()


    }
   );
  }

  

  // array.forEach(element => {
    
  // });
 

}
