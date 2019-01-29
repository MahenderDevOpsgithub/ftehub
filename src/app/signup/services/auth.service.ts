import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CandidateSignupModel } from "src/app/signup/models/candidate-signup.model";
import { Observable } from "rxjs/Rx";
import { AuthorizeCandidateResponseModel } from "src/app/signup/models/authorize-candidate-response.model";
import { CookieService } from 'ngx-cookie-service';
import { LegalStatusResponse } from "src/app/signup/models/legal-status-response.model";
import { GetActivitiesModel } from "src/app/signup/models/get-activities-response.model";
import { GetJobOrdersModel } from "src/app/signup/models/get-joborders-response.model";
import { GetCandidateResumesModel } from "src/app/signup/models/get-candidate-resumes-response.model";
import { PostJobModel } from "src/app/signup/models/post-job.model";
import { SearchJobsModel } from "src/app/signup/models/search-jobs-response.model";
import { JobDetailsModel } from "src/app/signup/models/job-details.model";
import { JobApplicationsModel } from "src/app/signup/models/job-applications.model";
import { ApplyJobModel } from "src/app/signup/models/apply-job.model";
import { CustomerSignupModel } from "src/app/signup/models/customer-signup.model";
import { GetCompaniesModel } from "src/app/signup/services/get-companies.model";
import { CompanyModel } from "src/app/signup/models/company.model";
import { AuthorizeCustomerResponseModel } from "src/app/signup/models/authorize-customer.model";
import { CustomerProfileResponseModel } from "src/app/signup/models/customer-profile.model";


@Injectable()
export class AuthService {

    apiURL: string = environment.apiURL;
    public userName : string;
    public userId : string;
    public memberId: string;
    public role: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public token: string;

    headers = new HttpHeaders({ 'content-type' : 'application/json', 'authorization': 'Token d9715df35ecc6c1d377c7e21a5cb9aa6' });

    internalAPIURL: string = environment.internalAPIURL;

    postCandidateAPI: string = this.apiURL + '/candidates?check_duplicate=true';
    getCompaniesAPI: string = this.apiURL + '/companies';
    postCustomerAPI: string = this.apiURL + '/companies?check_duplicate=true';
    authorizeCandidateAPI: string = this.apiURL + '/candidates/authorization';
    postJobsAPI: string = 'https://api.catsone.com/v3/jobs?check_duplicate=true';
    searchJobsAPI: string = 'https://api.catsone.com/v3/jobs/search?query=';
    getJobAPI: string = 'https://api.catsone.com/v3/jobs/';
    
    constructor(private http: HttpClient, private cookieService: CookieService) {
        this.userName = this.cookieService.get('recentUser');
        this.userId = this.cookieService.get('userId');
    }

    postCandidate(candidateModel: CandidateSignupModel) {
        return this.http.post(this.postCandidateAPI, JSON.stringify(candidateModel), { headers: this.headers });
    }

    postCustomer(customerModel: CustomerSignupModel) {
        return this.http.post(this.postCustomerAPI, JSON.stringify(customerModel), { headers: this.headers });
    }

    getCompanies() {
        return this.http.get<GetCompaniesModel>(this.getCompaniesAPI, { headers: this.headers });
    }

    saveCompany(model: CompanyModel) {
        return this.http.post(this.internalAPIURL + "registration/", JSON.stringify(model), { headers: this.headers });
    }

    authorizeCandidate(email: string, password: string) {
        return this.http.post<AuthorizeCandidateResponseModel>(this.authorizeCandidateAPI, JSON.stringify({ "email": email, "password": password }), { headers: this.headers });
    }

    authorizeCustomer(username: string, password: string) {
        return this.http.post<AuthorizeCustomerResponseModel>(this.internalAPIURL + "login/", JSON.stringify({ "username": username, "password": password }), { headers: this.headers });
    }

    postCandidateResume(id: string, fileName: string, file: File) {
        let headers = new HttpHeaders({ 'content-type' : 'application/octet-stream', 'authorization': 'Token d9715df35ecc6c1d377c7e21a5cb9aa6' });
        return this.http.post(this.apiURL + "/candidates/" + id + "/resumes?filename=" + fileName, file, { headers: headers });
    }

    updateCandidateProfile(id: string, candidateModel: CandidateSignupModel) {
        return this.http.put(this.apiURL + "/candidates/" + id, JSON.stringify(candidateModel), { headers: this.headers });
    }

    getCandidateProfile(id: string) {
        return this.http.get<AuthorizeCandidateResponseModel>(this.apiURL + "/candidates/" + id, { headers: this.headers });
    }

    getLegalStatusValue(id: string) {
        return this.http.get<LegalStatusResponse>(this.apiURL + "/candidates/" + id + "/custom_fields/271880", { headers: this.headers });
    }

    getActivities(id: string) {
        return this.http.get<GetActivitiesModel>(this.apiURL + "/candidates/" + id + "/activities", { headers: this.headers });
    }

    getJobOrders(id: string) {
        return this.http.get<GetJobOrdersModel>(this.apiURL + "/candidates/" + id + "/pipelines", { headers: this.headers });
    }

    getAllResumes(id: string) {
        return this.http.get<GetCandidateResumesModel>(this.apiURL + "/candidates/" + id + "/attachments", { headers: this.headers });
    }

    postJob(job: PostJobModel) {
        return this.http.post(this.postJobsAPI, JSON.stringify(job), { headers: this.headers });
    }

    searchJobs(query: string) {
        return this.http.get<SearchJobsModel>(this.searchJobsAPI + query, { headers: this.headers });
    }

    getJobDetails(id: string) {
        return this.http.get<JobDetailsModel>(this.getJobAPI + id, { headers: this.headers });
    }

    getJobApplications(id: string) {
        return this.http.get<JobApplicationsModel>(this.getJobAPI + id + "/pipelines", { headers: this.headers });
    }

    getCustomerProfile(user_id: number) {
        return this.http.get<CustomerProfileResponseModel>(this.internalAPIURL + "user_profile/?user_id=" + user_id, { headers: this.headers });
    }

    applyJob(id: string, model: ApplyJobModel) {
        let headers = new HttpHeaders({ 'content-type' : 'application/octet-stream', 'authorization': 'Token d9715df35ecc6c1d377c7e21a5cb9aa6' });
        return this.http.post(this.apiURL + "/portals/62828/jobs/" + id, JSON.stringify(model), { headers: headers });
    }

    isAuthenticated() {
        let isLoggedIn: boolean = false;
        let userId = this.cookieService.get('userId');
        let companyId = this.cookieService.get('companyId');
        if (userId != null && userId != "" && userId != typeof(undefined)) {
            isLoggedIn = true;
            return isLoggedIn;
        }
        else if (companyId != null && companyId != "" && companyId != typeof(undefined)) {
            isLoggedIn = true;
            return isLoggedIn;
        }
        else {
            return isLoggedIn;
        }
    }

    getCustomerUserId() {
        if (this.isAuthenticated()) {
            return this.cookieService.get('userId');
        } else {
            return '';
        }
    }

    isCustomer() {
        let isCustomer: boolean = false;
        let role = this.cookieService.get('role');
        if (role != null && role != "" && role != typeof(undefined) && role == 'customer') {
            isCustomer = true;
        }
        
        return isCustomer;
    }

    isCandidate() {
        let isCandidate: boolean = false;
        let role = this.cookieService.get('role');
        if (role != null && role != "" && role != typeof(undefined) && role == 'candidate') {
            isCandidate = true;
        }
        
        return isCandidate;
    }

    getCurrentUserId() {
        if (this.isAuthenticated()) {
            return this.cookieService.get('userId');
        } else {
            return '';
        }
    }

    getCompanyId() {
        let companyId = this.cookieService.get('companyId');
        return companyId;
    }

    getFirstName() {
        let firstName = this.cookieService.get('firstName');
        return firstName;
    }

    getLastName() {
        let lastName = this.cookieService.get('lastName');
        return lastName;
    }

    getEmail() {
        let email = this.cookieService.get('email');
        return email;
    }

    setCurrentCandidateUser(userId: string, username: string, firstname: string, lastname: string, email: string) {
        this.cookieService.set('userId', userId);
        this.cookieService.set('userName', username);
        this.cookieService.set('role', 'candidate');
        this.cookieService.set('firstName', firstname);
        this.cookieService.set('lastName', lastname);
        this.cookieService.set('email', email);

        this.userId = this.cookieService.get('userId');
        this.userName = this.cookieService.get('userName');
        this.role = this.cookieService.get('role');
        this.firstName = this.cookieService.get('firstName');
        this.lastName = this.cookieService.get('lastName');
        this.email = this.cookieService.get('email');
    }


    setCurrentCustomerUser(companyId: string, username: string, firstname: string, lastname: string, email: string, token: string, userId: number, memberId: number) {
        this.cookieService.set('companyId', companyId);
        this.cookieService.set('userName', username);
        this.cookieService.set('role', 'customer');
        this.cookieService.set('firstName', firstname);
        this.cookieService.set('lastName', lastname);
        this.cookieService.set('email', email);
        this.cookieService.set('token', token);
        this.cookieService.set('userId', userId.toString());
        this.cookieService.set('memberId', memberId.toString());

        this.userId = this.cookieService.get('companyId');
        this.userName = this.cookieService.get('userName');
        this.role = this.cookieService.get('role');
        this.firstName = this.cookieService.get('firstName');
        this.lastName = this.cookieService.get('lastName');
        this.email = this.cookieService.get('email');
        this.token = this.cookieService.get('token');
        this.userId = this.cookieService.get('userId');
        this.memberId = this.cookieService.get('memberId');
    }

    logout() {
        this.cookieService.deleteAll();
        this.userId = null;
        this.userName = null;
        this.role = null;
    }

    customerChangePassword(company_id: string, password: string) {
        let headers = new HttpHeaders({ 'token': this.token });
        return this.http.post(this.internalAPIURL + "change_password", JSON.stringify({ "company_id": company_id, "new_password": password }), { headers: headers });
    }

    contactUs(name: string, contact_number: string, country_code: string, subject_line: string, message: string, email: string) {
        let headers = new HttpHeaders({ 'content-type': 'application/json' });
        if (this.isAuthenticated()) {
            return this.http.post(this.internalAPIURL + "contactus/", JSON.stringify({ "name": name, "country_code": country_code, "contact_number": contact_number, "subject_line": subject_line, "message": message, "email": email, "user_id": this.getCurrentUserId() }), { headers : headers });
        } else {
            return this.http.post(this.internalAPIURL + "contactus/", JSON.stringify({ "name": name, "country_code": country_code, "contact_number": contact_number, "subject_line": subject_line, "message": message, "email": email }), { headers : headers });
        }
    }

    editCustomerProfile(model: CompanyModel) {
        return this.http.post(this.internalAPIURL + "edit_member/", JSON.stringify(model), { headers: this.headers });
    }

}