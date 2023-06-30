import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-applied-candidate',
  templateUrl: './applied-candidate.component.html',
  styleUrls: ['./applied-candidate.component.css']
})
export class AppliedCandidateComponent implements OnInit {

  p: number = 1;
  public userId:any = localStorage.getItem('rec_id');
  public jobId:any;
  public jobName:any;
  public candidateId:any = localStorage.getItem('user_id')
  public candidateList:any =[];

  constructor(private route: ActivatedRoute,private router:Router, 
    public service:AppService, private httpService:ServiceService) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('jobId');
    if(this.jobId){
      this.httpService.getJobDetails(this.jobId).subscribe((res:any)=>{
        this.jobName =  res.jobTitle;
      })
      this.httpService.getJobApplicationById(this.jobId).subscribe((res:any)=>{
        this.candidateList = res;
        this.candidateList.forEach((element:any) => {
          this.httpService.getStatusById(element.statusId).subscribe((res:any)=>{          
            element['status'] = res.name;
          })
        });
      })
    }else{
      console.log("hello");
      
      this.httpService.getCandidateList(this.userId).subscribe((res:any)=>{
        this.candidateList = res;
        console.log(res);
        
        this.candidateList.forEach((element:any) => {
          this.httpService.getStatusById(element.statusId).subscribe((res:any)=>{          
            element['status'] = res.name;
          })
        });
      })
    }

  }

  // userProfile(){
  //   this.router.navigate(['user-profile-by-recruiter',{candidateId:this.candidateId}])
  // }
  sendMessage(){
    this.router.navigate(['message'])
  }
  userProfile(candidateId:any, applicationId:any){
    this.router.navigate(['user-profile-by-recruiter',{candidateId: candidateId, applicationId: applicationId}])
  }
 
}
