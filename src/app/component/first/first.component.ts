import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  dropdownInput: string = '';
  inputInput: string = '';

  stringDChange(dropdownOutput:string) {
    this.dropdownInput = dropdownOutput;
  }

  stringIChange(inputOutput:string) {
    this.inputInput = inputOutput;
  }

  constructor() { }

  ngOnInit() {
  }



}
