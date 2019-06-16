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
  someones:Someone[] =[];
  tHead: string[]=['id','name','sex','phone','address'];
  @Input() soonInput: string;
  soonOutput:string

  constructor(private tableService:TableService) { 
  }

  ngOnInit() {
    this.getPeople();
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.someones = [];
    this.people.forEach(someone=>{
      if(someone.sex==this.soonInput){
        this.someones.push(someone)
      }

      console.log(this.soonInput);
      
      console.log(this.soonOutput);
      
      // if(someone.name.indexOf(this.soonOutput)!=-1){
      //   this.someones.push(someone)
      // }

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

  stringIChange(soonInput:string) {
    this.soonOutput = soonInput;
  }

}
