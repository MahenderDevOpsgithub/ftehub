import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/signup/services/auth.service";
import { Router, ActivatedRoute, Data } from "@angular/router";
import { JobDetailsModel } from "src/app/signup/models/job-details.model";
import { ToastrService } from 'ngx-toastr';
import { ApplyJobModel, Field } from "src/app/signup/models/apply-job.model";

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  jobdetails: JobDetailsModel;
  fileToUpload : File;
  fileReader : FileReader = new FileReader();
  jobId : string;
  filestring : string;
  applyJobModel : ApplyJobModel;

  firstNameField: Field;
  lastNameField: Field;
  emailField: Field;
  fileField: Field;  
  ApplyJobLoadingBtn : boolean = false;

  fields: Field[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: Data) => {
          this.jobdetails = data['jobdetails'];
          if (this.jobdetails.is_hot) {
            this.jobdetails.is_hot_text = "Yes";
          } else {
            this.jobdetails.is_hot_text = "No";
          }

          this.jobId = this.route.snapshot.params['id'];
    });
  }

  toHTML(input) : any {
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
  }

  fileEvent(event) {
    const fileSelected: File = event.target.files[0];
    this.fileToUpload = fileSelected;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(fileSelected);
  }

  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
     this.filestring = btoa(binaryString);  // Converting binary string data.
}

  onApplyNow() {
    this.ApplyJobLoadingBtn = true;
    this.firstNameField = new Field(1345640, this.authService.getFirstName());
    this.lastNameField = new Field(1345643, this.authService.getLastName());
    this.emailField = new Field(1345646, this.authService.getEmail());
    if(this.fileToUpload){
      this.fileField = new Field(1345637, this.filestring, this.fileToUpload.name);
    }
    this.fields.push(this.firstNameField);
    this.fields.push(this.lastNameField);
    this.fields.push(this.emailField);
    if(this.fileToUpload){
      this.fields.push(this.fileField);
    }
    this.applyJobModel = new ApplyJobModel(this.fields, "FTEHUB");
    this.authService.applyJob(this.jobId, this.applyJobModel)
        .subscribe((response) => {
                this.toastr.success('Successfully Applied!', 'Success!');
                this.router.navigate(['/job-search']);
                this.ApplyJobLoadingBtn = false;
            },
        (error) => {
          this.toastr.error(error.error.message, 'Error!');
          this.ApplyJobLoadingBtn = false;
        });
  }

}
