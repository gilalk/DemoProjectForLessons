import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter: number = 0;
  needToDisable: boolean = false;
  ngOnInit(): void {
    if(this.counter <= 0){
      this.needToDisable = true;
    }
  }

  // for using just one function
  handleClick(option:string) : void {
    if (option === '+') {
      this.counter++;  
    } else  {
      this.counter--;
    }
  }

  onPlus(): void{
    this.counter++;
    this.needToDisable = false;
  }
  onMinus(): void{
    this.counter--;
    if(this.counter <= 0){
      this.needToDisable = true;
    }
  }
}
