import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-meter',
  templateUrl: './temp-meter.component.html',
  styleUrls: ['./temp-meter.component.css']
})
export class TempMeterComponent implements OnInit {

  tempDesc: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getConditionSentence(temp: string){
    try {
      let currTemp = parseFloat(temp);
      if(currTemp <= 20){
        this.tempDesc = `Your temperature is ${currTemp} - it's pretty cold!`;
      }else if(currTemp > 20 && currTemp <=30){
        this.tempDesc = `Your temperature is ${currTemp} - it's comfortable day!`;
      }else{
        this.tempDesc = `Your temperature is ${currTemp} - it's hottttt!`;
      }
      
    } catch (error) {
      this.tempDesc = 'Invalid Syntax';
    }
  }
}
