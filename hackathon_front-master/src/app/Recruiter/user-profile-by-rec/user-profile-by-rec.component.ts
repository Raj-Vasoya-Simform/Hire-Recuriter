import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';
 
@Component({
 selector: 'app-user-profile-by-rec',
 templateUrl: './user-profile-by-rec.component.html',
 styleUrls: ['./user-profile-by-rec.component.css']
})
export class UserProfileByRecComponent implements OnInit {
 public CandidateId:any;
 public applicationId:any;
 public statusName:any = [];
 public currentStatus:any;
 public CandidateInfo:any;
 public statusId: any;
 constructor(public service:AppService,private route:ActivatedRoute,public http:HttpClient,public recService:ServiceService) { }
 
 ngOnInit(): void {
   this.CandidateId = this.route.snapshot.paramMap.get('candidateId');
   this.applicationId = this.route.snapshot.paramMap.get('applicationId');   
   this.recService.getStatusName().subscribe((data:any)=>{
     this.statusName = data;
    
   })       
   this.recService.getApplicationDetails(this.applicationId).subscribe((data:any)=>{
     this.currentStatus =  this.statusName.filter((res:any)=> res.id == data.statusId)[0];          
   })
  
   this.service.getUserData(this.CandidateId).subscribe((data)=>{
     this.CandidateInfo=data;
   },(err)=>{
     console.log(err);
    
   })
 }
 statusUpdate(statusId:any){   
   this.recService.updateStatus(statusId,this.applicationId).subscribe((data)=>{
     window.location.reload()
   },(err)=>{
     console.log(err);     
   })
  
  
 }
 
}
 

