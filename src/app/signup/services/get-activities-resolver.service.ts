import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../signup/services/auth.service";
import { GetActivitiesModel } from "src/app/signup/models/get-activities-response.model";

@Injectable()
export class GetActivitiesResolverService implements Resolve<GetActivitiesModel> {

    constructor(private authService: AuthService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<GetActivitiesModel> | Promise<GetActivitiesModel> | GetActivitiesModel {
        if (this.authService.isAuthenticated()) {
            let user_id = this.authService.getCurrentUserId();
            return this.authService.getActivities(user_id.toString());
            //return this.authService.getActivities("272367855");
        }
    }
}