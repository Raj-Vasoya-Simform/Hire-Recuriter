import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AdminServiceService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {

  constructor(private router:Router,public adminService:AdminServiceService,private http:HttpClient,private toast:NgToastService) { }
  formCollege: FormGroup
  ngOnInit(): void {
    this.formCollege =new FormGroup({
      collegeName:new FormControl(''),
      Address:new FormControl(''),
      contact:new FormControl(''),
      email:new FormControl(''),
      website:new FormControl(''),
    })
  }

  RegisterCollegeAdmin(){
    
    this.http.post('http://localhost:3000/clgDataByAdmin',this.formCollege.getRawValue(),
    {responseType: 'text'})
    .subscribe((res)=>{
      console.log(res);
      this.toast.success({detail:"College Registration Succesfull",
      summary:"",duration:5000})
      this.router.navigate(['admin-dashboard']).then(()=>{
        window.location.reload();
      })
 // this.toast.success({detail:"You Can Login Now ",summary:"",duration:5000})
      }
    )}

}
