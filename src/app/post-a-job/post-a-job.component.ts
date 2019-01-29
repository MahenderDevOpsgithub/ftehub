import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/signup/services/auth.service";
import { PostJobModel, JobLocation } from "src/app/signup/models/post-job.model";
import { ToastrService } from "ngx-toastr";
import { NgForm } from "@angular/forms";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-a-job',
  templateUrl: './post-a-job.component.html',
  styleUrls: ['./post-a-job.component.css']
})
export class PostAJobComponent implements OnInit {
  PostajobLoadingBtn : boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private toastr: ToastrService, private datePipe: DatePipe) { }

  ngOnInit() {

  }

    onSubmit(form: NgForm) {
      if (this.authService.isAuthenticated() && this.authService.isCustomer()) {
        this.PostajobLoadingBtn = true;
        let job = new PostJobModel();
        job.location = new JobLocation();
        job.title = form.value.title;
        job.location.city = form.value.city;
        job.location.state = form.value.state;
        job.company_id = +this.authService.getCompanyId();
        job.is_hot = form.value.yesno;
        /*let date = new Date(form.value.startdate);
        console.log(date);*/
        job.start_date = form.value.startdate.year + '-' + form.value.startdate.month + '-' + form.value.startdate.day;
        job.salary = form.value.salary;
        job.openings = +form.value.numberofopenings;
        job.description = form.value.description;
        job.notes = form.value.notes;
        console.log(job);
        this.authService.postJob(job)
          .subscribe((response) => {
            this.toastr.success('Thank You for Posting a Job!', 'Success!');
            this.router.navigate(['/customer-profile']);
            this.PostajobLoadingBtn = false;
          },(error) => {
            console.log('error', error)
            this.toastr.error(error.error.message, 'Error!');
            this.PostajobLoadingBtn = false;
        });
      }
    }

  onContactUs() {
    this.router.navigate(['/contact-us']);
  }

}
