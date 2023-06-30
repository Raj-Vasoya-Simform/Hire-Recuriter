import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-college-profile',
  templateUrl: './college-profile.component.html',
  styleUrls: ['./college-profile.component.css']
})
export class CollegeProfileComponent implements OnInit {

  public userId:any = localStorage.getItem('rec_id');
  public collegeId:any = localStorage.getItem('college_id');
  public formCollege:FormGroup;
  public formRec:FormGroup;
  constructor(private router:Router, public service:AppService, private httpService:ServiceService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.httpService.getRecruiterById(this.userId).subscribe((res:any)=>{      
      this.formRec = new FormGroup({
        id: new FormControl(this.collegeId),
        name: new FormControl(''),        
        email: new FormControl(''),
        contact: new FormControl(''),
      })
      this.formRec.patchValue(res);      
    })
    this.httpService.getClgData(this.collegeId).subscribe((res:any)=>{      
      this.formCollege = new FormGroup({
        collegeName: new FormControl(''),
        Address: new FormControl(''),
        contact: new FormControl(''),
        email: new FormControl(''),
        estSince: new FormControl(''),
        description: new FormControl(''),
        fbPage: new FormControl(''),
        twitterPage: new FormControl(''),
        linkdinPage: new FormControl(''),
        instagramPage: new FormControl(''),
        youtubePage:new FormControl(''),
        website: new FormControl(''),
        id: new FormControl(this.collegeId),
      })
      
      this.formCollege.patchValue(res);      
    })

    
  }

  addClgData(){
    if(this.userId){
      this.httpService.editClgData(this.formCollege.getRawValue()).subscribe((res:any)=>{
        this.toast.success({detail:"Saved College Details Succesfull",summary:"",duration:5000})
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
    }
  }
  
  saveRecDetails(){
    if(this.userId){
      this.httpService.updateRecruiter(this.formRec.getRawValue()).subscribe((res:any)=>{
        this.toast.success({detail:"Saved Recruiter Details Succesfull",summary:"",duration:5000})
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
    }
  }

}
