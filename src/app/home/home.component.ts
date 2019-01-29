import { Component, OnInit, NgZone } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchCriteria: string;
  location: string;
  locationmain : any;

  public title = 'Places';
  public addrKeys: string[];
  public addr: object;
  
  //Method to be invoked everytime we receive a new instance 
  //of the address object from the onSelect event emitter.
  setAddress(addrObj) {
    //We are wrapping this in a NgZone to reflect the changes
    //to the object in the DOM.
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
      //console.log(this.addr)
      this.locationmain = this.addr;
    });
  }

  constructor(private router: Router,private zone: NgZone) { }

  ngOnInit() {
  }

  onSearch() {
    if(this.locationmain){
      const navigationExtras: NavigationExtras = {
        queryParams: {
          'location':  this.locationmain.formatted_address,
          'search' : this.searchCriteria
        }
      };
      this.router.navigate(['/job-search'], navigationExtras);
    }else{
      const navigationExtras: NavigationExtras = {
        queryParams: {
          'location':  this.location,
          'search' : this.searchCriteria
        }
      };
      this.router.navigate(['/job-search'], navigationExtras);
    }
      
    
  }

  onCandidateSeeHow() {
    this.router.navigate(['/register']);
  }

  onCustomerSeeHow() {
    this.router.navigate(['/customer-signup']);
  }

  onContactUs() {
    this.router.navigate(['/contact-us']);
  }

  onSeeHow() {
    this.router.navigate(['/about-us']);
  }

}
