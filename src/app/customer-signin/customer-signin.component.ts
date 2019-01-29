import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../signup/services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-signin',
  templateUrl: './customer-signin.component.html',
  styleUrls: ['./customer-signin.component.css']
})
export class CustomerSigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.authorizeCustomer(form.value.username, form.value.password)
        .subscribe((response) => {
            this.authService.setCurrentCustomerUser(response.response.user_detail.company_id.toString(), response.response.user_detail.user.username, response.response.user_detail.user.first_name, response.response.user_detail.user.last_name, response.response.user_detail.user.email, response.response.token, response.response.user_detail.user.id, response.response.user_detail.id);
            this.router.navigate(['/customer-profile']);
            this.toastr.success('Signin Successfull!', 'Success!');
        },
        (error) => {
          console.log('error', error)
          this.toastr.error(error.error.response, 'Error!');
        });
  }

  onContactUs() {
    this.router.navigate(['/contact-us']);
  }

}
