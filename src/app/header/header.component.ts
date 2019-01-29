import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/signup/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isCandidateAuthenticated() {
    return this.authService.isAuthenticated() && this.authService.isCandidate();
  }

  isCustomerAuthenticated() {
    return this.authService.isAuthenticated() && this.authService.isCustomer();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onFacebook() {
    window.open('https://www.facebook.com/','_blank');
  }

  onTwitter() {
    window.open('https://www.twitter.com/','_blank');
  }

  onLinkedin() {
    window.open('https://www.linkedin.com/','_blank');
  }

  onYoutube() {
    window.open('https://www.youtube.com/','_blank');
  }

}
