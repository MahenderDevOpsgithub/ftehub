import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../signup/services/auth.service";
import { Router } from "@angular/router";
import { CandidateSignupModel, Emails } from "src/app/signup/models/candidate-signup.model";
import { ToastrService } from 'ngx-toastr';
import { CustomerSignupModel } from "src/app/signup/models/customer-signup.model";
import { CompanyModel } from "src/app/signup/models/company.model";

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  customerSignupModel: CustomerSignupModel = new CustomerSignupModel();
  month: number;
  RegisterLoadingBtn : boolean = false;

  constructor(private authService: AuthService, private router: Router,private toastr: ToastrService) { 
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.RegisterLoadingBtn = true;
    var date = new Date();
    
    this.customerSignupModel.name = form.value.companyname;
    this.customerSignupModel.owner_id = 125;

    this.authService.postCustomer(this.customerSignupModel)
        .subscribe((response) => {
          this.authService.getCompanies()
              .subscribe((companies) => {
                  let company = companies._embedded.companies.filter(d => d.name == form.value.companyname)[0];
                  let model = new CompanyModel();
                  model.company_id = company.id.toString();
                  model.company_name = form.value.companyname;
                  model.email = form.value.email;
                  model.password = form.value.password;
                  model.number = form.value.phone;
                  model.username = form.value.username;

                  this.authService.saveCompany(model)
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
              },
              (error) => {
                console.log('error', error)
                this.toastr.error(error.error.message, 'Error!');
                this.RegisterLoadingBtn = false;
              });
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
