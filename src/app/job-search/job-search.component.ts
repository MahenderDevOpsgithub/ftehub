import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, Data } from "@angular/router";
import { SearchJobsModel } from "src/app/signup/models/search-jobs-response.model";
import { AuthService } from "src/app/signup/services/auth.service";

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobSearchComponent implements OnInit, AfterViewInit {

  jobs: SearchJobsModel
  searchCriteria: string;
  location: string;
  numberOfPages: number;
  pageSize: number = 25;
  pageNumbers: number[] = [];
  p: number = 1;
  loadingIcon : boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      if(param.search) {
        this.searchCriteria = param.search;
      }
      if (param.location) {
        this.searchCriteria = param.location;
      }
    });

    this.route.data
        .subscribe((data: Data) => {
          this.jobs = data['jobs'];
          console.log(this.jobs);
          this.loadingIcon = true;
          this.calculateNumberOfPages();
    },
    (error) => {
      this.loadingIcon = true;
    });
  }

  ngAfterViewInit() {
    if (this.searchCriteria != undefined || this.location != undefined) {
      this.authService.searchJobs(this.searchCriteria)
          .subscribe((response) => {
            this.jobs = response;
            this.loadingIcon = true;
            this.calculateNumberOfPages();
      },(error) => {
        this.loadingIcon = true;
      });
    }
  }

  calculateNumberOfPages() {
    this.pageNumbers = [];
    if (this.jobs.total % this.pageSize > 0) {
      this.numberOfPages = (this.jobs.total / this.pageSize) + 1;
      for (var i = 1; i <= this.numberOfPages; i++) {
        this.pageNumbers.push(i);
      }
    } else {
      this.numberOfPages = this.jobs.total / this.pageSize;
      for (var i = 1; i <= this.numberOfPages; i++) {
        this.pageNumbers.push(i);
      }
    }
  }

  onSearchJobs() {
    this.loadingIcon = false;
    this.authService.searchJobs(this.searchCriteria)
        .subscribe((response) => {
          this.jobs = response;
          this.loadingIcon = true;
        },(error) => {
          this.loadingIcon = true;
      });
  }

  onClear() {
    this.loadingIcon = false;
    this.searchCriteria = '';
    this.authService.searchJobs(this.searchCriteria)
        .subscribe((response) => {
          this.jobs = response;
          this.loadingIcon = true;
        });
  }

  onApplyNow(id: string) {
    if (this.authService.isCandidate() && this.authService.isAuthenticated()) {
      this.router.navigate(['/apply-job/' + id]);
    } else {
      this.router.navigate(['/signin']);
    }
  }

  onContactUs() {
    this.router.navigate(['/contact-us']);
  }

}
