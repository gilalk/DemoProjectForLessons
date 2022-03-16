import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-events',
  templateUrl: './some-events.component.html',
  styleUrls: ['./some-events.component.css']
})
export class SomeEventsComponent implements OnInit {

  constructor() { }

  warnFunc(warning: string){
    console.log(warning); 
  }
  ngOnInit(): void {
  }

}
