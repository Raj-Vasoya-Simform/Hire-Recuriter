import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-apply-for-job',
  templateUrl: './apply-for-job.component.html',
  styleUrls: ['./apply-for-job.component.css']
})
export class ApplyForJobComponent implements OnInit {
  public jobId:any;
  public recruiterId:any;
  public jobData:any
  public userid:any = localStorage.getItem('user_id');
  constructor(private route:ActivatedRoute, private router:Router,private toast:NgToastService,
    public userService:UserServiceService,public http:HttpClient) { }

  ngOnInit(): void {

    this.jobId = this.route.snapshot.paramMap.get('jobId');
    this.recruiterId = this.route.snapshot.paramMap.get('recruiterId');
    this.userService.AllJobsListByIdId(this.jobId).subscribe((data)=>{
      this.jobData = data;
      console.log("job data",data);
      
    },(err)=>{
      console.log(err);
      
    })
  }
  ApplyNow(){
    const obj = {
      userId:this.userid,
      recruiterId:this.recruiterId,
      jobId:this.jobId,
      statusId:1,

    }
    this.http.post('http://localhost:3000/ApplyForJob',obj).subscribe((data)=>{
    console.log(data);
    this.toast.success({detail:"Sucesfully Applied for job",
      summary:"",duration:5000})
      this.router.navigate(['appliedjob-status']).then(()=>{
        window.location.reload();
      })
    },(err)=>{
      this.toast.error({detail:"Error while Applied for job",
      summary:"",duration:5000})
      console.log(err);
      
    })
  }

}
