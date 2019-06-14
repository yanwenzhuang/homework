import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import { TableService, People } from '../../table.service';
import { Someone } from 'src/app/someone';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges,OnInit {
  
  people:Someone[];
  someones=[];
  tHead: string[]=['id','name','sex','phone','address'];

  @Input() soonInput: string;

  constructor(private tableService:TableService) { }

  ngOnInit() {
    this.getPeople();
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.soonInput);
    this.someones = [];
    this.people.forEach(someone=>{
      if(someone.sex==this.soonInput){
        
        this.someones.push(someone)
      }
    });

    
   }


  getPeople(): void{
    this.tableService.getPeople()
    .subscribe((data: People) => {
      this.people = data.people;
      this.someones = this.people;
    }
   );
  }


  // data.people.forEach(someone=>{
        // console.log(this.soonInput);
        // console.log(someone.sex);
        // if(someone.sex==this.soonInput){
        //     console.log(someone);
        // this.people.push(someone);
        // }

      // });


      // Object.is('foo', 'foo');


  // getPeople(): void {
  //   this.tableService.getPeople()
  //   .subscribe(people => this.people = people);
  // }

  // array.forEach(element => {
    
  // });
 

}
