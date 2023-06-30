import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-manage-job',
  templateUrl: './manage-job.component.html',
  styleUrls: ['./manage-job.component.css']
})
export class ManageJobComponent implements OnInit {

  p: number = 1;
  public userId:any = localStorage.getItem('rec_id');
  public jobList:any =[];

  constructor(private router:Router, public service:AppService, private httpService:ServiceService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.httpService.getJobList(this.userId).subscribe((res:any) =>{
      this.jobList = res;      
      this.jobList.forEach((element:any) => {
        this.httpService.getNumberOfApplicant(element.id).subscribe((res:any)=>{
          element['count'] = res['count'];          
        })
        this.httpService.getStreamNameById(element.streamId).subscribe((res:any)=>{
          element['stream'] = res['streamName'];
        })
        this.httpService.getJobTypeById(element.jobTypeId).subscribe((res:any)=>{
          element['jobType'] = res.name;          
        })
      });
    })    
  }
  
  editJob(jobId:any){
    this.router.navigate(['post-job', {jobId: jobId}])
  }
  
  deleteJob(jobId:any){    
    this.httpService.deleteJob(jobId).subscribe((res:any) =>{
      this.toast.success({detail:"Removed Job Successfully",summary:"",duration:5000})
      setTimeout(() => {      
        this.service.onManagejob()
      }, 300);
    })
  }
  
  goTocandidateList(jobId:any){
    this.router.navigate(['applied-candidate', {jobId: jobId}])
  }
}
