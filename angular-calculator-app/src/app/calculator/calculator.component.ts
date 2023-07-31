import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1 = 0;
  number2 = 0;
  result: number;

  cong() {
    this.result = this.number1 + this.number2;
  }
  tru() {
    this.result = this.number1 - this.number2;
  }
  nhan() {
    this.result = this.number1 * this.number2;
  }
  chia() {
    this.result = this.number1 / this.number2;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
