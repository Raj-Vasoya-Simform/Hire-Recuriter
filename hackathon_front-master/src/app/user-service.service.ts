import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userid:any = localStorage.getItem('user_id');
  // userName:any;
  userdata:any;

  public userName:any = localStorage.getItem('user_name');

  constructor(private router: Router,private http:HttpClient) { }
 
  onDashboard() {
    this.router.navigate(['candidate-dashboard']).then(() => {
      window.location.reload()
    })
  }

  
  checkAppliedForJob(data:any){
    return this.http.post('http://localhost:3000/checkAppliedForJob', data)
  }
 
  getUserData(userId:any){
    return this.http.get('http://localhost:3000/user_details/'+userId)
  }

  ListOfJobs() {
    this.router.navigate(['ListOfJobs']).then(() => {
      window.location.reload()
    })
  }
  applyForJob() {
    this.router.navigate(['apply-for-job']).then(() => {
      window.location.reload()
    })
  }
  appliedJobStatus() {
    this.router.navigate(['appliedjob-status']).then(() => {
      window.location.reload()
    })
  }
  userProfile(){
    this.router.navigate(['user-profile']).then(() => {
      window.location.reload()
    })
  }
  changePassword() {
    this.router.navigate(['user-change-password']).then(() => {
      window.location.reload()
    })
  }
  onLogout(){
    // localStorage.clear()
    this.router.navigate(['']).then(() => {
      window.location.reload()
    })
  }
  onDeleteProfile(){
    this.router.navigate(['user-delete']).then(() => {
      window.location.reload()
  })}

  editUserData(data:any){
    return this.http.put('http://localhost:3000/editUser_register', data);
  }

  deleteProfile(){
    return this.http.delete('http://localhost:3000/deleteUser/'+this.userid)
  }
  AllJobsListByIdId(id:any){
    return this.http.get('http://localhost:3000/AllJobsListById/'+id)
  }

  onMessage(){   
    this.router.navigate(['userChat']).then(() => {
      window.location.reload()
    })
  } 
}
