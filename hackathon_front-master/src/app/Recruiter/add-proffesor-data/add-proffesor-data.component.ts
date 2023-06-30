import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-proffesor-data',
  templateUrl: './add-proffesor-data.component.html',
  styleUrls: ['./add-proffesor-data.component.css']
})
export class AddProffesorDataComponent implements OnInit {
  public form:any
  public CollegeList:any
  public StreamList:any
  constructor(private router:Router, public service:AppService,
    private Newservice:ServiceService, 
    private http:HttpClient, private toast:NgToastService) { }

  ngOnInit(): void {
    this.Newservice.getCollegeData().subscribe((data:any)=>{
      this.CollegeList = data;      
    }),
    this.Newservice.getStreamData().subscribe((data:any)=>{
      this.StreamList = data;
    })

    this.form = new FormGroup({      
      recruiterId: new FormControl(localStorage.getItem('rec_id')),
      name: new FormControl(''),
      contact: new FormControl(''),
      address: new FormControl(''),
      experience: new FormControl(''),
      collegeId: new FormControl(''),
      streamId: new FormControl(''),
      subject: new FormControl(''),
      DOB: new FormControl('')
    })
  }
  AddProfessor(){
      this.http.post('http://localhost:3000/professor_Data_Add',this.form.getRawValue(),{responseType: 'text'}).subscribe((res)=>{
        this.toast.success({detail:"Details Added Succesfull",summary:"",duration:5000})
        this.router.navigate(['professor-data'])
          .then(() => {
            window.location.reload();
          });    
      },(err)=>{
        this.toast.error({detail:"Fill All The Details",summary:"Try Again",duration:5000})
        console.log(err);
      }) 
  }
}
