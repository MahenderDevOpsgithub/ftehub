import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/signup/services/auth.service";
import { ActivatedRoute, Router, Data } from "@angular/router";
import { NgForm } from "@angular/forms";
import { CustomerProfileResponseModel } from "src/app/signup/models/customer-profile.model";
import { CompanyModel } from "src/app/signup/models/company.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-edit-customer-profile',
  templateUrl: './edit-customer-profile.component.html',
  styleUrls: ['./edit-customer-profile.component.css']
})
export class EditCustomerProfileComponent implements OnInit {

  userprofile: CustomerProfileResponseModel;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.data
         .subscribe((data: Data) => {
            this.userprofile = data['profile'];
            console.log('this.userprofile', this.userprofile)
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  onContactUs() {
    this.router.navigate(['/contact-us']);
  }

  onSubmit(form: NgForm) {
    let model = new CompanyModel();
    model.first_name = form.value.firstname
    model.last_name = form.value.lastname;
    model.email = form.value.email;
    model.country_code = "+1";
    model.number = form.value.phone;
    model.member_id = +this.authService.memberId;

    console.log(JSON.stringify(model));

    this.authService.editCustomerProfile(model)
        .subscribe((response) => {
            this.toastr.success('Profile updated successfully!', 'Success!');
            this.router.navigate(['/customer-profile'])
        });
  }

}
