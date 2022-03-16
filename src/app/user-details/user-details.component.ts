import { Component, OnInit } from '@angular/core';
import type {User} from '../interfaces/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  
  user:User = {
    name: 'Gil',
    email: 'gil.all@gmail.com',
    phone: '0505998776',
    birthday: Date.parse('1991-02-26'),
    contact: 'phone',
  }
  constructor() { }

  CalculateAge(dateOfBirth:any){
    let dob = new Date(dateOfBirth);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970)
  }


  ngOnInit(): void {
  }

}
