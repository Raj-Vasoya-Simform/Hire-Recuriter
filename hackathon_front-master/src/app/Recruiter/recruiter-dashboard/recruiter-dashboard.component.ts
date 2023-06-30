import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {

  constructor(private router:Router,  public service:AppService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.service.closeModal();
    // setTimeout(() => {
    //   window.location.reload()
    // }, 500);
  }
  

}
