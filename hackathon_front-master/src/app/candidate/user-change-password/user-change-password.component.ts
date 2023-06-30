import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {

  form: FormGroup;
  
  constructor(private router:Router, public userService:UserServiceService,private http:HttpClient,private toast:NgToastService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      password : new FormControl(''),
      confirmPassword : new FormControl('')
    })
  }
  userId:any=localStorage.getItem('user_id');
  
  submit(value:any){
    const password  = this.form.controls['password'].value
    const passwordConfirm  = this.form.controls['confirmPassword'].value
    console.log(password);    
    if(password == passwordConfirm && password !== ''){
      this.http.patch('http://localhost:3000/user_change_password/'+ this.userId,value).subscribe((res)=>{
        console.log('succesfull');
        this.toast.success({detail:"Password change succesfully",summary:"",duration:5000})
        setTimeout(() => {    
          this.userService.onLogout()
        }, 300);
      },(err)=>{
        console.log(err);
        this.toast.error({detail:"Something went wrong",summary:"Try Again",duration:5000})
      })
    }else{
      this.toast.error({detail:"Password and confirm password does not matched",summary:"",duration:5000})
    }
    
    
  }


}
