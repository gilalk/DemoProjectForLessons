import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `<p class="copy">copyright - Gil Alkobi {{currentYear()}}</p>`,
  styles: [
    `.copy {
      color: grey;
      font-weight: 700;
    }`
  ],
})
export class CopyrightComponent implements OnInit {

  constructor() { }
  currentYear(){
    return new Date().getFullYear();
  }
  ngOnInit(): void {
  }

}
