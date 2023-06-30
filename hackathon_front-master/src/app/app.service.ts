import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public userName:any = localStorage.getItem('rec_name');
  constructor(private router: Router,private http:HttpClient) { }

  closeModal() {
    (<any>$('.modal-backdrop')).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
  

  onDashboard() {
    this.router.navigate(['recruiter-dashboard']).then(() => {
      window.location.reload()
    })
  }
  onMessage() {
    this.router.navigate(['message']).then(() => {
      window.location.reload()
    })
  }
  onProfile() {
    this.router.navigate(['profile']).then(() => {
      window.location.reload()
    })
  }
  onProfessorDetails(){
    this.router.navigate(['professor-data']).then(() => {
      window.location.reload()
    })
  }
  AddProfessorData(){
    this.router.navigate(['AddProfessorData']).then(() => {
      window.location.reload()
  })
}
  onLogout() {
    // localStorage.clear()
    this.router.navigate(['homepage']).then(() => {
      window.location.reload()
    })
  }
  onComapanyProfile() {
    this.router.navigate(['college-profile']).then(() => {
      window.location.reload()
    })
  }
  onPostjob() {
    this.router.navigate(['post-job']).then(() => {
      window.location.reload()
    })
  }
  onManagejob() {
    this.router.navigate(['manage-job']).then(() => {
      window.location.reload()
    })
  }
  onCandidateDetails() {
    this.router.navigate(['applied-candidate']).then(() => {
      window.location.reload()
    })
  }
  onChangePassword() {
    this.router.navigate(['change-password']).then(() => {
      window.location.reload()
    })
  }
  getUserData(userId:any){
    return this.http.get('http://localhost:3000/user_details/'+userId)
  }
  
  getCountOfApplicant(jobId:any){
    return this.http.get('http://localhost:3000/noOfApplicant/'+jobId)
  }
  
}
