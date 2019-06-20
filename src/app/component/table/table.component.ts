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
  soonOutput:string;
  loading: boolean = true;

  constructor(private tableService:TableService) { 
  }

  ngOnInit() {
    this.getPeople();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.soonInput);
    console.log(this.soonOutput);
    
    if(this.soonOutput != null){
      this.someones = [];
      this.people.forEach(someone =>{
        // someone[this.soonInput]   //要查询的某字段的值
        if(someone[this.soonInput].indexOf(this.soonOutput)!=-1){
          this.someones.push(someone);
        }
      });
    }
   }
  

  getPeople(): void{
    this.tableService.getPeople()
    .subscribe((data: People) => {
      this.people = data.people;
      this.someones = [...this.people];
      if(this.people != null){
        setTimeout(() => {
          this.loading = false;
        }, 400);
      }
    }
   );
  }

  stringIChange(soonOutput:string) {
    this.soonOutput = soonOutput;
  }

}
