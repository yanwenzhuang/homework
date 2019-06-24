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
  @Input() dropdownInput: string;
  @Input() inputInput: string;
  loading: boolean = true;

  constructor(private tableService:TableService) { 
  }

  ngOnInit() {
    this.getPeople();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dropdownInput);
    console.log(this.inputInput);
    if(this.inputInput != "" && this.dropdownInput !=""){
    this.someones = [];
      this.people.forEach(someone =>{
        if(someone[this.dropdownInput].indexOf(this.inputInput)!=-1){
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
}
