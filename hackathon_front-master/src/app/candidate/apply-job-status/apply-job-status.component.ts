import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-apply-job-status',
  templateUrl: './apply-job-status.component.html',
  styleUrls: ['./apply-job-status.component.css']
})
export class ApplyJobStatusComponent implements OnInit {

  constructor(private router:Router,private toast:NgToastService,
    public userService:UserServiceService,private http:HttpClient) { }
    public userId:any = localStorage.getItem('user_id');
    JobData:any;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/AppliedJob/'+this.userId).subscribe((data)=>{
      this.JobData = data
      console.log(data);
      
    },((err)=>{
      console.log(err);
      
    }))
  }

}
