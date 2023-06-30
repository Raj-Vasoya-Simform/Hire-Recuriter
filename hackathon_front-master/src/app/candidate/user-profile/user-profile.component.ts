import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  formUserProfile:FormGroup
  streamList: any;
  password: any = localStorage.getItem('password');
  CollegeList: any;
  public userId:any = localStorage.getItem('user_id');
  constructor(public userService:UserServiceService,private toast:NgToastService,public httpservice:ServiceService,private http:HttpClient) { }

  ngOnInit(): void {

    this.httpservice.getStreamData().subscribe((data:any)=>{
      this.streamList = data;
      console.log(data);      
    })
    this.httpservice.getCollegeData().subscribe((data:any)=>{
      this.CollegeList = data;
      console.log(data);
    })


    this.userService.getUserData(this.userId).subscribe((res:any)=>{      
      this.formUserProfile = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        password:new FormControl(this.password),
        address: new FormControl(''),
        contact: new FormControl(''),
        experience: new FormControl(''),
        collegeId: new FormControl(''),
        subjects: new FormControl(''),
        resume: new FormControl(''),
        DOB: new FormControl(''),
        fb: new FormControl(''),
        twitter: new FormControl(''),
        linkdin: new FormControl(''),
        streamId: new FormControl('1'),
        id: new FormControl(this.userId),
      })
      
      this.formUserProfile.patchValue(res);
      this.formUserProfile.controls['DOB'].setValue(res.DOB.substring(0, 10))   
    })

  }

  addUserData(){
    if(this.userId){
      this.userService.editUserData(this.formUserProfile.getRawValue()).
      subscribe((res:any)=>{
        console.log(res);
        
        this.toast.success({detail:"Saved College Details Succesfull",summary:"",duration:5000})
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
    }
  }

  getCollegeData(){
    return this.http.get('http://localhost:3000/getCollege')
  }

}
