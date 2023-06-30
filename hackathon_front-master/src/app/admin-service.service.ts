import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private router: Router,private http:HttpClient) { }

  onDashboard(){
    this.router.navigate(['admin-dashboard'])
  }
  ManageRecruiter(){
    this.router.navigate(['manage-recruiter'])
  }
  GenrateCredential(){
  this.router.navigate(['generate-credential'])
}

GenerateRecruiterCred(data: any){
  return this.http.post('http://localhost:3000/recruiter_register',data)
}



// updateRecruiterCred(data: any){
//   return this.http.put('http://localhost:3000/recruiterUpdateByAdmin', data);
// }

getRecDetails(recId:any){
  return this.http.get('http://localhost:3000/recruiter_details/'+ recId);
}
updateRecDetailsAdmin(data: any){
  return this.http.put('http://localhost:3000/recruiterUpdateByAdmin', data);
}




onLogout(){
  // localStorage.clear()
  this.router.navigate([''])
}
getRecruiterData(){
  return this.http.get('http://localhost:3000/recruiter_details')
}
AddCollegeData(){
    this.router.navigate(['add-college'])
  }
}
