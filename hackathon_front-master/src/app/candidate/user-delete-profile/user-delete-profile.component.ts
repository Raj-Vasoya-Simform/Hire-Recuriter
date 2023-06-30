import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-delete-profile',
  templateUrl: './user-delete-profile.component.html',
  styleUrls: ['./user-delete-profile.component.css']
})
export class UserDeleteProfileComponent implements OnInit {

  constructor(private router:Router, public userService:UserServiceService,private toast:NgToastService) { }

  ngOnInit(): void {
  }
  DeleteNow(){
    this.userService.deleteProfile().subscribe((data)=>{
      console.log(data);
      this.toast.success({detail:"Delete Profile Succesfull",summary:"",duration:5000})
        setTimeout(() => {
          window.location.reload();
        }, 500);  
      })
      this.router.navigate([''])
    
  }

}
