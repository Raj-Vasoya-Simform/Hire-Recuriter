import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  openform:boolean
  form: FormGroup
  CollegeList: any;
  StreamList: any;
  constructor(private router:Router,public adminService:AdminServiceService) { }
  // onClickOpenForm(){
  //   this.openform=true;  
  //   }
  ngOnInit(): void {
    this.form =new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      collegeId:new FormControl(''),
    })
  }
  RegisterSubmit(){

  }

  
  

}
