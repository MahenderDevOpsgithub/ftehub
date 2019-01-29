import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AuthService } from "src/app/signup/services/auth.service";
import { Router, ActivatedRoute, Data } from "@angular/router";
import { JobDetailsModel } from "src/app/signup/models/job-details.model";
import { JobApplicationsModel } from "src/app/signup/models/job-applications.model";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobDetailsComponent implements OnInit {

  jobdetails: JobDetailsModel;
  jobapplications: JobApplicationsModel;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: Data) => {
          this.jobdetails = data['jobdetails'];
          this.jobapplications = data['applications'];
          console.log('this.jobdetails', this.jobdetails)
          if (this.jobdetails.is_hot) {
            this.jobdetails.is_hot_text = "Yes";
          } else {
            this.jobdetails.is_hot_text = "No";
          }
    });
  }

  toHTML(input) : any {
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
  }

  onApplyNow(id: number) {
    if (this.authService.isCandidate() && this.authService.isAuthenticated()) {
      this.router.navigate(['/apply-job/' + id.toString()]);
    } else {
      this.router.navigate(['/signin']);
    }
  }

  onContactUs() {
    this.router.navigate(['/contact-us']);
  }

}
