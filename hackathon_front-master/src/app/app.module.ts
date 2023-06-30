import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { RecruiterDashboardComponent } from './Recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { CandidateDashboardComponent } from './candidate/candidate-dashboard/candidate-dashboard.component';
import { CollegeProfileComponent } from './Recruiter/college-profile/college-profile.component';
import { PostJobComponent } from './Recruiter/post-job/post-job.component';
import { ManageJobComponent } from './Recruiter/manage-job/manage-job.component';
import { AppliedCandidateComponent } from './Recruiter/applied-candidate/applied-candidate.component';
import { ProfileComponent } from './Recruiter/profile/profile.component';
import { ChangePasswordComponent } from './Recruiter/change-password/change-password.component';
import { DeleteProfileComponent } from './Recruiter/delete-profile/delete-profile.component';
import { LogoutComponent } from './Recruiter/logout/logout.component';
import { MessageComponent } from './Recruiter/message/message.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProfessorDataComponent } from './Recruiter/professor-data/professor-data.component';
import { ListOfJobComponent } from './candidate/list-of-job/list-of-job.component';


import { UserProfileComponent } from './candidate/user-profile/user-profile.component';
import { UserChangePasswordComponent } from './candidate/user-change-password/user-change-password.component';
import { UserDeleteProfileComponent } from './candidate/user-delete-profile/user-delete-profile.component';
import { UserLogoutComponent } from './candidate/user-logout/user-logout.component';
import { GenerateCredentialsComponent } from './admin/generate-credentials/generate-credentials.component';
import { ManageRecruiterComponent } from './admin/manage-recruiter/manage-recruiter.component';
import { AddCollegeComponent } from './admin/add-college/add-college.component';
import { ApplyForJobComponent } from './candidate/apply-for-job/apply-for-job.component';
import { ApplyJobStatusComponent } from './candidate/apply-job-status/apply-job-status.component';
import { LogoutAdminComponent } from './admin/logout-admin/logout-admin.component';
import { UserProfileByRecComponent } from './Recruiter/user-profile-by-rec/user-profile-by-rec.component';
import { UserMessageComponent } from './candidate/user-message/user-message.component';
import { AddProffesorDataComponent } from './Recruiter/add-proffesor-data/add-proffesor-data.component'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminDashboardComponent,
    RecruiterDashboardComponent,
    CandidateDashboardComponent,
    CollegeProfileComponent,
    PostJobComponent,
    ManageJobComponent,
    AppliedCandidateComponent,
    ProfileComponent,
    ChangePasswordComponent,
    DeleteProfileComponent,
    LogoutComponent,
    MessageComponent,
    ProfessorDataComponent,
    ListOfJobComponent,
    
    
    UserProfileComponent,
    UserChangePasswordComponent,
    UserDeleteProfileComponent,
    UserLogoutComponent,
    GenerateCredentialsComponent,
    ManageRecruiterComponent,
    AddCollegeComponent,
    ApplyForJobComponent,
    ApplyJobStatusComponent,
    LogoutAdminComponent,
    UserProfileByRecComponent,
    UserMessageComponent,
    AddProffesorDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    NgToastModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
