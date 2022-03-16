import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links:any =[];
  constructor() { 
    this.links = [ ]
    this.addLinksToArr();
  }

  ngOnInit(): void {
  }
  addLinksToArr() {
    this.links.push({title: 'Google', link: 'google.co.il'});
    this.links.push({title: 'Yahoo', link: 'yahoo.co.il'});
    this.links.push({title: 'Walla', link: 'walla.co.il'});
    this.links.push({title: 'YNET', link: 'ynet.co.il'});
  }
}
