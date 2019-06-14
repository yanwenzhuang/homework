import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  soonInput: string = '';

  stringIChange(soonInput:string) {
    this.soonInput = soonInput;
  }

  constructor() { }

  ngOnInit() {
  }



}
