import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  public postJobForm:FormGroup;
  streamList: any;
  stateList: any;
  jobTypeList: any;
  jobId:any;
  
  constructor(private route: ActivatedRoute,private router:Router, public service:AppService, private httpservice:ServiceService, private toast:NgToastService) { }
  
  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('jobId');
    
    this.httpservice.getStreamData().subscribe((data:any)=>{
      this.streamList = data;
    }),
    this.httpservice.getStateData().subscribe((data:any)=>{
      this.stateList = data;
    }),
    this.httpservice.getJobTypeData().subscribe((data:any)=>{
      this.jobTypeList = data;
    }),
    this.postJobForm = new FormGroup({      
      recruiterId: new FormControl(localStorage.getItem('rec_id')),
      jobTitle: new FormControl(''),
      jobDescription: new FormControl(''),
      noOfOpening: new FormControl(''),
      jobTypeId: new FormControl(''),
      streamId: new FormControl(''),
      experience: new FormControl(''),
      qualification: new FormControl(''),
      stateId: new FormControl(''),
      city: new FormControl('')
    })

    if(this.jobId){
      this.postJobForm.addControl('id', new FormControl(this.jobId));
      this.httpservice.getJobDetails(this.jobId).subscribe((res:any)=>{
        this.postJobForm.patchValue(res);
      })
    }
  }

  applyJob(){
    if(this.jobId){

      this.httpservice.updateJob(this.postJobForm.getRawValue()).subscribe((data:any)=>{
        this.toast.success({detail:"Updated Job Successfully",summary:"",duration:5000})
        setTimeout(() => {      
          this.service.onManagejob()        
        }, 300);
      },(err=>{
        this.toast.error({detail:"Something went wrong",summary:"Try Again",duration:5000})
      }))
    }else{
      this.httpservice.postJob(this.postJobForm.getRawValue()).subscribe((data:any)=>{
        this.toast.success({detail:"Added Job Successfully",summary:"",duration:5000})
        setTimeout(() => {      
          this.service.onManagejob()        
        }, 300);
      },(err=>{
        this.toast.error({detail:"Something went wrong",summary:"Try Again",duration:5000})
      }))
    }
  }
}
