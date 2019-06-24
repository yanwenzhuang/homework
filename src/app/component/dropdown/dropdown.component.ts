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
  // sex:string='';
  
  
  @Output()
  dropdownOutput:EventEmitter<string>=new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }


  onChange(event, dropdown: string) {
    this.dropdownOutput.emit(dropdown);
}
  

}
