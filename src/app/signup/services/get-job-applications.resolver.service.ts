import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../signup/services/auth.service";
import { JobApplicationsModel } from "src/app/signup/models/job-applications.model";

@Injectable()
export class JobApplicationsResolverService implements Resolve<JobApplicationsModel> {

    constructor(private authService: AuthService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<JobApplicationsModel> | Promise<JobApplicationsModel> | JobApplicationsModel {
        return this.authService.getJobApplications(route.params['id']);
    }
}