import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { NgxPaginationModule } from 'ngx-pagination';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PostAJobComponent } from './post-a-job/post-a-job.component';
import { PostAResumeComponent } from './post-a-resume/post-a-resume.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { BrowseResumesComponent } from './browse-resumes/browse-resumes.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowseCategoriesComponent } from './browse-categories/browse-categories.component';
import { ManageResumesComponent } from './manage-resumes/manage-resumes.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AuthService } from "src/app/signup/services/auth.service";
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CookieService } from 'ngx-cookie-service';
import { UserProfileResolverService } from "src/app/signup/services/user-profile.resolver.service";
import { CandidateActivityComponent } from './candidate-activity/candidate-activity.component';
import { GetResumesResolverService } from "src/app/signup/services/get-resumes-resolver.service";
import { GetJobOrdersResolverService } from "src/app/signup/services/get-joborders-resolver.service";
import { GetActivitiesResolverService } from "src/app/signup/services/get-activities-resolver.service";
import { JobOrdersComponent } from './job-orders/job-orders.component';
import { SearchJobsResolverService } from "src/app/signup/services/search-jobs-resolver.service";
import { AuthGuard } from "src/app/signup/services/auth-guard.service";
import { CandidateAuthGuard } from "src/app/signup/services/candidate-auth-guard.service";
import { JobDetailsResolverService } from "src/app/signup/services/job-details-resolver.service";
import { JobApplicationsResolverService } from "src/app/signup/services/get-job-applications.resolver.service";
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerProfileResolverService } from "src/app/signup/services/customer-profile-resolver.service";
import { CustomerChangePasswordComponent } from './customer-change-password/customer-change-password.component';
import { CustomerAuthGuard } from "src/app/signup/services/customer-auth-guard.service";
import { EditCustomerProfileComponent } from './edit-customer-profile/edit-customer-profile.component';
import { DatePipe } from "@angular/common";
import { GooglePlacesDirective } from './google-places.directive';

const appRoutes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'contact-us', component : ContactUsComponent },
  { path: 'about-us', component : AboutUsComponent },
  { path: 'register', component : SignupComponent },
  { path: 'customer-signup', component : CustomerSignupComponent },
  { path: 'terms-and-conditions', component : TermsAndConditionsComponent },
  { path: 'signin', component : SigninComponent },
  { path: 'customer-signin', component : CustomerSigninComponent },
  { path: 'post-a-job', component : PostAJobComponent, canActivate: [CustomerAuthGuard] },
  { path: 'post-a-resume', component : PostAResumeComponent },
  { path: 'job-search', component : JobSearchComponent, resolve: { jobs: SearchJobsResolverService } },
  { path: 'manage-jobs', component : ManageJobsComponent },
  { path: 'manage-applications', component : ManageApplicationsComponent },
  { path: 'manage-resumes', component : ManageResumesComponent },
  { path: 'job-details/:id', component : JobDetailsComponent, resolve: { jobdetails: JobDetailsResolverService, applications: JobApplicationsResolverService } },
  { path: 'browse-jobs', component : BrowseJobsComponent },
  { path: 'browse-resumes', component : BrowseResumesComponent },
  { path: 'browse-categories', component : BrowseCategoriesComponent },
  { path: 'view-profile', component : ViewProfileComponent, canActivate: [AuthGuard], resolve: { profile: UserProfileResolverService } },
  { path: 'customer-profile', component : CustomerProfileComponent, canActivate: [CustomerAuthGuard], resolve: { profile: CustomerProfileResolverService } },
  { path: 'edit-customer-profile', component : EditCustomerProfileComponent, canActivate: [CustomerAuthGuard], resolve: { profile: CustomerProfileResolverService } },
  { path: 'edit-profile', component : EditProfileComponent, canActivate: [AuthGuard], resolve: { profile: UserProfileResolverService } },
  { path: 'change-password', component : ChangePasswordComponent,canActivate: [AuthGuard] },
  { path: 'candidate-activity', component : CandidateActivityComponent, canActivate: [AuthGuard], resolve: { activity: GetActivitiesResolverService, joborders: GetJobOrdersResolverService } },
  { path: 'job-orders', component : JobOrdersComponent, canActivate: [AuthGuard], resolve: { joborders: GetJobOrdersResolverService } },
  { path: 'apply-job/:id', component : ApplyJobComponent, canActivate: [CandidateAuthGuard], resolve: { jobdetails: JobDetailsResolverService } },
  { path: 'customer-change-password', component : CustomerChangePasswordComponent, canActivate: [CustomerAuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostAJobComponent,
    PostAResumeComponent,
    SignupComponent,
    SigninComponent,
    JobSearchComponent,
    ManageJobsComponent,
    ManageApplicationsComponent,
    BrowseJobsComponent,
    BrowseResumesComponent,
    ContactUsComponent,
    AboutUsComponent,
    BrowseCategoriesComponent,
    ManageResumesComponent,
    JobDetailsComponent,
    TermsAndConditionsComponent,
    ViewProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    CandidateActivityComponent,
    JobOrdersComponent,
    ApplyJobComponent,
    CustomerSignupComponent,
    CustomerSigninComponent,
    CustomerProfileComponent,
    CustomerChangePasswordComponent,
    EditCustomerProfileComponent,
    MustMatchDirective,
    GooglePlacesDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    AuthService,
    CookieService,
    UserProfileResolverService,
    CustomerProfileResolverService,
    GetResumesResolverService,
    GetActivitiesResolverService,
    GetJobOrdersResolverService,
    SearchJobsResolverService,
    AuthGuard,
    CandidateAuthGuard,
    CustomerAuthGuard,
    JobDetailsResolverService,
    JobApplicationsResolverService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
