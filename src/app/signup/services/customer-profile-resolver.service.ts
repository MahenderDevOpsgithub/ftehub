import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../signup/services/auth.service";
import { CustomerProfileResponseModel } from "src/app/signup/models/customer-profile.model";

@Injectable()
export class CustomerProfileResolverService implements Resolve<CustomerProfileResponseModel> {

    constructor(private authService: AuthService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<CustomerProfileResponseModel> | Promise<CustomerProfileResponseModel> | CustomerProfileResponseModel {
        if (this.authService.isAuthenticated()) {
            let user_id = this.authService.getCustomerUserId();
            return this.authService.getCustomerProfile(+user_id);
        }
    }
}