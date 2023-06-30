import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AdminServiceService } from 'src/app/admin-service.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-generate-credentials',
  templateUrl: './generate-credentials.component.html',
  styleUrls: ['./generate-credentials.component.css']
})
export class GenerateCredentialsComponent implements OnInit {
  CollegeList: any;
  form: FormGroup
  recId:any;
  constructor(private route: ActivatedRoute,private http:HttpClient,private service:ServiceService,
    private router:Router,private toast:NgToastService,public adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.recId = this.route.snapshot.paramMap.get('recId');

    this.service.getCollegeData().subscribe((data:any)=>{
      this.CollegeList = data;
      console.log(this.CollegeList);
      
    })
    this.form =new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      collegeId:new FormControl(''),
    })

    if(this.recId){
      this.form.addControl('id', new FormControl(this.recId));
      this.adminService.getRecDetails(this.recId).subscribe((res:any)=>{
        this.form.patchValue(res);
      })
    }
  }
  RegisterSubmit(data:any){  
   this.adminService.GenerateRecruiterCred(data)
    .subscribe((res)=>{
      console.log(res);
      this.toast.success({detail:"Recriter Registration Succesfull",
      summary:"",duration:5000})
      this.router.navigate(['admin-dashboard']).then(()=>{
        window.location.reload();
      })
 // this.toast.success({detail:"You Can Login Now ",summary:"",duration:5000})
      }
    )}

ChangeRecDetails(){
  if(this.recId){

    this.adminService.updateRecDetailsAdmin(this.form.getRawValue()).subscribe((data:any)=>{
      this.toast.success({detail:"Updated Job Successfully",summary:"",duration:5000})
      setTimeout(() => {      
        this.adminService.ManageRecruiter()        
      }, 300);
    },(err=>{
      this.toast.error({detail:"Something went wrong",summary:"Try Again",duration:5000})
    }))
  }else{
    this.adminService.GenerateRecruiterCred(this.form.getRawValue()).subscribe((data:any)=>{
      this.toast.success({detail:"Added Job Successfully",summary:"",duration:5000})
      setTimeout(() => {      
        this.adminService.ManageRecruiter()        
      }, 300);
    },(err=>{
      this.toast.error({detail:"Something went wrong",summary:"Try Again",duration:5000})
    }))
  }
}
}
