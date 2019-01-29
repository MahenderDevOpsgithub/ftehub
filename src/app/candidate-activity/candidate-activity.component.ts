import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/signup/services/auth.service";
import { Router, ActivatedRoute, Data } from "@angular/router";
import { GetActivitiesModel } from "src/app/signup/models/get-activities-response.model";
import { GetJobOrdersModel } from "src/app/signup/models/get-joborders-response.model";

@Component({
  selector: 'app-candidate-activity',
  templateUrl: './candidate-activity.component.html',
  styleUrls: ['./candidate-activity.component.css']
})
export class CandidateActivityComponent implements OnInit {

  activity: GetActivitiesModel;
  joborders: GetJobOrdersModel;
  job: any;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.data
         .subscribe((data: Data) => {
            this.activity = data['activity'];
            this.joborders = data['joborders'];
      });
      if(this.activity.count != 0){
        for (let a of this.activity._embedded.activities) {
          if (a.regarding_id == 0) {
            a.regarding_job = 'General'
          } else {
            this.job = this.joborders._embedded.pipelines.filter(d => d.job_id == a.regarding_id);
            a.regarding_job = this.job[0]._embedded.job.title;
          }
        }
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
