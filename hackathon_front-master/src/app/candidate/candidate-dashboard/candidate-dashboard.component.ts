import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $AB from 'jquery';
import { AppService } from 'src/app/app.service';
import { NgToastService } from 'ng-angular-popup';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css']
})
export class CandidateDashboardComponent implements OnInit {
  userid:any;
  userName:any;
  userdata:any;
  constructor(private http:HttpClient, private router:Router, 
    private service:AppService,private toast:NgToastService,public userService:UserServiceService ) { }

  ngOnInit(): void {
    this.toast.success({detail:"Login Succesful",summary:"",duration:5000})
    this.service.closeModal();
    this.userid = localStorage.getItem('user_id')    
    this.userName = localStorage.getItem('user_name')    
    
    this.http.get("http://localhost:3000/user_details/"+this.userid).subscribe((res)=>{      
      this.userdata = res;
      
    },(err)=>{
      console.log(err);      
    })
  }
  
  onLogOut(){
    // localStorage.clear()
    localStorage.removeItem("user_id");    
    this.toast.success({detail:"Logout Succesful",summary:"",duration:5000})
    setTimeout(() => {      
      this.router.navigate(['homepage']).then(() => {
        window.location.reload();
      });
    }, 300);
    
  }
}
