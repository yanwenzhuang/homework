import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  // sexs:string[]=['','id','name','sex','phone','address'];
  sexs =[
    {label:'id', value:'id'},
    {label:'name', value:'name'},
    {label:'sex', value:'sex'},
    {label:'phone', value:'phone'},
    {label:'address', value:'address'}
    ];
  sex:string='';
 
  
  
  @Output()
  soonOutput:EventEmitter<string>=new EventEmitter();

  constructor() {
    setInterval(() => {
      this.soonOutput.emit(this.sex);
    }, 1000);
   }

  ngOnInit() {
  }

  

}
