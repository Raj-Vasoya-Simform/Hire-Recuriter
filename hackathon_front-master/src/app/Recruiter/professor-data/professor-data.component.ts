import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-professor-data',
  templateUrl: './professor-data.component.html',
  styleUrls: ['./professor-data.component.css']
})
export class ProfessorDataComponent implements OnInit {

  constructor(private router:Router, public service:AppService, private http:HttpClient, private toast:NgToastService) { }
  professorData:any;
  collegeId:any = localStorage.getItem('college_id');
  public d:any;

  ngOnInit(): void {
    this.http.get('http://localhost:3000/AllProfessor/'+this.collegeId).subscribe((data)=>{
      this.professorData = data;
      this.professorData.forEach((element:any) => {
        element.DOB = element.DOB.substring(0, 10);
        this.d = new Date(element['DOB']);
        this.d.setFullYear(this.d.getUTCFullYear() + 60);
        this.d = this.d.toISOString().substring(0, 10);
        element.retirementDate = this.d;
      });
      
    },(err)=>{
      console.log(err);
      
    })
  }

  

}
