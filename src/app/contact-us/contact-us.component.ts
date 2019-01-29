import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/signup/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
  	this.authService.contactUs(form.value.yourname, form.value.contact_number, "+1", form.value.subject, form.value.message, form.value.email)
        .subscribe((response) => {
              this.toastr.success('Thank You for Contacting Us!', 'Success!');
              this.router.navigate(['/'])
        });
  }

}
