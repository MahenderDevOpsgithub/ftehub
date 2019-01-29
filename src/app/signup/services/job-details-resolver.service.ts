import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../signup/services/auth.service";
import { JobDetailsModel } from "src/app/signup/models/job-details.model";

@Injectable()
export class JobDetailsResolverService implements Resolve<JobDetailsModel> {

    constructor(private authService: AuthService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<JobDetailsModel> | Promise<JobDetailsModel> | JobDetailsModel {
        return this.authService.getJobDetails(route.params['id']);
    }
}