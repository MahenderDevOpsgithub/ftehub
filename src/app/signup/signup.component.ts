import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../signup/services/auth.service";
import { Router } from "@angular/router";
import { CandidateSignupModel, Emails } from "src/app/signup/models/candidate-signup.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  candidateSignupModel: CandidateSignupModel = new CandidateSignupModel();
  month: number;
  RegisterLoadingBtn : boolean = false;

  constructor(private authService: AuthService, private router: Router,private toastr: ToastrService) { 
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.RegisterLoadingBtn = true;
    var date = new Date();
    
    this.candidateSignupModel.emails = new Emails();
    this.candidateSignupModel.first_name = form.value.firstname;
    this.candidateSignupModel.last_name = form.value.lastname;
    this.candidateSignupModel.emails.primary = form.value.email;
    this.candidateSignupModel.emails.secondary = form.value.email;
    this.candidateSignupModel.country_code = "US";
    this.candidateSignupModel.password = form.value.password;
    this.month = date.getMonth() + 1;
    this.candidateSignupModel.date_available = date.getFullYear() + '-' + this.month.toString() + '-' + date.getDate();
    this.candidateSignupModel.website = "http://www.polarits.com";

    this.authService.postCandidate(this.candidateSignupModel)
        .subscribe((response) => {
          this.toastr.success('Signup Successfull!', 'Success!');
          this.RegisterLoadingBtn = false;
          this.router.navigate(['/']);
        },
        (error) => {
          console.log('error', error)
          this.toastr.error(error.error.message, 'Error!');
          this.RegisterLoadingBtn = false;
        });
  }

  onContactUs() {
    this.router.navigate(['/contact-us']);
  }

}
