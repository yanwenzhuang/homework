import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  sexs:string[]=['','id','name','sex','phone','address'];
  sex:string='';
 
  
  
  @Output()
  soonOutput:EventEmitter<string>=new EventEmitter();

  constructor() {
    // setTimeout(()=>{
    //   this.soonOutput.emit(this.sex);
    // },100)
    
    setInterval(() => {
      this.soonOutput.emit(this.sex);
    }, 1000);
   }

  ngOnInit() {
    
  }

  

}
