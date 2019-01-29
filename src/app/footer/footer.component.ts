import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/signup/services/auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isCustomerAuthenticated() {
    return this.authService.isAuthenticated() && this.authService.isCustomer();
  }

  isCandidateAuthenticated() {
    return this.authService.isAuthenticated() && this.authService.isCandidate();
  }

}
