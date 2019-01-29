import { Component, OnInit } from '@angular/core';
import { AuthorizeCandidateResponseModel } from "src/app/signup/models/authorize-candidate-response.model";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Data } from "@angular/router";
import { NgForm } from "@angular/forms";
import { CandidateSignupModel, Emails, CustomField, Address } from "src/app/signup/models/candidate-signup.model";
import { AuthService } from "src/app/signup/services/auth.service";
import { LegalStatusResponse } from "src/app/signup/models/legal-status-response.model";
import { ToastrService } from 'ngx-toastr';
import { NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userprofile: AuthorizeCandidateResponseModel;
  candidateSignupModel: CandidateSignupModel = new CandidateSignupModel();
  fileToUpload : File;

  userId: string;
  legal_status: string;
  datePipe = new DatePipe('en-US');
  relocate: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService,private toastr: ToastrService) { }

  ngOnInit() {
     this.route.data
         .subscribe((data: Data) => {
            this.userprofile = data['profile'];
            console.log('this.relocate', this.userprofile)
            let dateParts = this.datePipe.transform(this.userprofile.date_available, 'M-d-y').split('-');
            this.userprofile.date_available = { year: parseInt(dateParts[2]), month: parseInt(dateParts[0]), day: parseInt(dateParts[1]) };
      });

      this.legal_status = this.userprofile._embedded.custom_fields[0].value;

  }

  fileEvent(event) {
    const fileSelected: File = event.target.files[0];
    this.fileToUpload = fileSelected;
  }

  onSubmit(form: NgForm) {
    var date = new Date();
    this.userId = this.authService.getCurrentUserId();
    this.candidateSignupModel.emails = new Emails();
    this.candidateSignupModel.custom_fields = [];
    this.candidateSignupModel.first_name = form.value.firstname;
    this.candidateSignupModel.last_name = form.value.lastname;
    this.candidateSignupModel.emails.primary = form.value.email;
    this.candidateSignupModel.emails.secondary = form.value.email;
    this.candidateSignupModel.country_code = form.value.countrycode;
    this.candidateSignupModel.password = form.value.password;
    if (form.value.relocation == "true") {
      this.relocate = true;
    } else {
      this.relocate = false;
    }
    this.candidateSignupModel.is_willing_to_relocate = this.relocate;
    this.candidateSignupModel.desired_pay = form.value.desiredpay;
    this.candidateSignupModel.address = new Address();
    this.candidateSignupModel.address.city = form.value.city;
    let legal_status: CustomField = new CustomField();
    legal_status.id = 271880;
    legal_status.value = form.value.legalstatus;
    this.candidateSignupModel.custom_fields.push(legal_status);
    this.candidateSignupModel.date_available = form.value.dateavailable.year + '-' + form.value.dateavailable.month + '-' + form.value.dateavailable.day;
    this.candidateSignupModel.key_skills = form.value.keyskills;
    this.candidateSignupModel.notes = form.value.notes;
    this.candidateSignupModel.website = "http://www.polarits.com";
    console.log('this.relocate', this.candidateSignupModel)
    this.authService.updateCandidateProfile(this.userId, this.candidateSignupModel)
        .subscribe((response) => {  
          if(this.fileToUpload){
            this.authService.postCandidateResume(this.userId, this.fileToUpload.name, this.fileToUpload)
            .subscribe((response) => {
              this.toastr.success('Successfully Updated!', 'Success!');
                this.router.navigate(['/view-profile']);
            });
          }else{
            this.toastr.success('Successfully Updated!', 'Success!');
            this.router.navigate(['/view-profile']);
          }
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
