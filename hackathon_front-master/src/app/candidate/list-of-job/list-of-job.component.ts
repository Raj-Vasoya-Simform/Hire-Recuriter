import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-list-of-job',
  templateUrl: './list-of-job.component.html',
  styleUrls: ['./list-of-job.component.css']
})
export class ListOfJobComponent implements OnInit {

  public JobData:any;
  userid:any;
  userName:any;
  userdata:any;
  term:any;
  public job_id:any
  public userId:any  = localStorage.getItem('user_id')
  public CollegeList:any
  public jobCount:any
  constructor(public userService:UserServiceService,private http:HttpClient,
    private router:Router,private AppService:AppService) { }

  ngOnInit(): void {
    
    

    this.http.get('http://localhost:3000/AllJobsList').subscribe((data)=>{
      this.JobData = data
      this.JobData.forEach((element:any) => {
        this.AppService.getCountOfApplicant(element.id).subscribe((data:any)=>{
          element.jobCount = data.count;      
        }) 
        const data:any ={
          userId: this.userId,
          jobId: element.id
        }
        this. userService.checkAppliedForJob(data).subscribe((res:any)=>{
          element.count = res.count;         
        })
  
      });
      
    },((err)=>{
      console.log(err);
      
    }))
  }
  applyJob(jobId:any,recruiterId:any){
    this.router.navigate(['apply-for-job',{jobId: jobId,recruiterId:recruiterId}]).then(()=>{
      window.location.reload()
    })
    // console.log(jobId);
    
    
    
  }

}
