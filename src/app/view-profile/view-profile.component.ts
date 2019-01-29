import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Data } from "@angular/router";
import { AuthorizeCandidateResponseModel } from "src/app/signup/models/authorize-candidate-response.model";
import { AuthService } from "src/app/signup/services/auth.service";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  userprofile: AuthorizeCandidateResponseModel;

  relocate: string;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
     this.route.data
         .subscribe((data: Data) => {
            this.userprofile = data['profile'];
      });

      if (this.userprofile.is_willing_to_relocate == false) {
        this.relocate = "No";
      } else {
        this.relocate = "Yes";
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
