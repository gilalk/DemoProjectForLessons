import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-form',
  templateUrl: './approval-form.component.html',
  styleUrls: ['./approval-form.component.css']
})
export class ApprovalFormComponent implements OnInit {

  constructor() { }
  student: any = {}
  ngOnInit(): void {
  }

  handleSubmit(formData: any){
    console.log(formData);
    this.student = formData;
  }
}
