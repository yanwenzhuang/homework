import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  tHead: string[]=['id','name','sex','phone','address'];
  sexs:string[]=['','man', 'woman'];
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
