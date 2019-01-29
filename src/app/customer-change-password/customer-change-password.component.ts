import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/signup/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-change-password',
  templateUrl: './customer-change-password.component.html',
  styleUrls: ['./customer-change-password.component.css']
})
export class CustomerChangePasswordComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSave(form: NgForm) {
    if (form.value.password != null && form.value.password != "" && form.value.password != typeof(undefined)) {
      this.authService.customerChangePassword(this.authService.getCompanyId(), form.value.password)
          .subscribe((response) => {
              this.toastr.success('Password Changed Successfully!', 'Success!');
              this.router.navigate(['/customer-profile'])
          });
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
    onContactUs() {
    this.router.navigate(['/contact-us']);
  }
}
