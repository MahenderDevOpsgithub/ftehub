import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../signup/services/auth.service";
import { GetJobOrdersModel } from "src/app/signup/models/get-joborders-response.model";

@Injectable()
export class GetJobOrdersResolverService implements Resolve<GetJobOrdersModel> {

    constructor(private authService: AuthService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<GetJobOrdersModel> | Promise<GetJobOrdersModel> | GetJobOrdersModel {
        if (this.authService.isAuthenticated()) {
            let user_id = this.authService.getCurrentUserId();
            return this.authService.getJobOrders(user_id.toString());
            //return this.authService.getJobOrders("272367855");
        }
    }
}