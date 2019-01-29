import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/signup/services/auth.service";
import { Router, ActivatedRoute, Data } from "@angular/router";
import { GetJobOrdersModel } from "src/app/signup/models/get-joborders-response.model";

@Component({
  selector: 'app-job-orders',
  templateUrl: './job-orders.component.html',
  styleUrls: ['./job-orders.component.css']
})
export class JobOrdersComponent implements OnInit {

  joborders: GetJobOrdersModel;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.data
         .subscribe((data: Data) => {
            this.joborders = data['joborders'];
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
