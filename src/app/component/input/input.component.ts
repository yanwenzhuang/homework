import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  title = "";

  @Output()
  inputOutput: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onBlur(title: string) { 
    this.inputOutput.emit(title);
  }

 
}
