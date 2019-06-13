import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  i: string = '';

  stringIChange(i:string) {
    this.i = i;
  }

  constructor() { }

  ngOnInit() {
  }



}
