import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../signup/services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.authorizeCandidate(form.value.email, form.value.password)
        .subscribe((response) => {
            this.authService.setCurrentCandidateUser(response.id.toString(), response.emails.primary, response.first_name, response.last_name, response.emails.primary);
            this.router.navigate(['/view-profile']);
            this.toastr.success('Signin Successfull!', 'Success!');
        },
        (error) => {
          console.log('error', error)
          this.toastr.error(error.error.message, 'Error!');
        });
  }

  onContactUs() {
    this.router.navigate(['/contact-us']);
  }

}
