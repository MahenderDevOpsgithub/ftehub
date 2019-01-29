import { Component, OnInit } from '@angular/core';
import { CustomerProfileResponseModel } from "src/app/signup/models/customer-profile.model";
import { Router, ActivatedRoute, Data } from "@angular/router";
import { AuthService } from "src/app/signup/services/auth.service";

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  userprofile: CustomerProfileResponseModel;

  relocate: string;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
     this.route.data
         .subscribe((data: Data) => {
            this.userprofile = data['profile'];
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onContactUs() {
    this.router.navigate(['/contact-us']);
  }

}
