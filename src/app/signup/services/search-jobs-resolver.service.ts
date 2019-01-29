import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../signup/services/auth.service";
import { SearchJobsModel } from "src/app/signup/models/search-jobs-response.model";

@Injectable()
export class SearchJobsResolverService implements Resolve<SearchJobsModel> {

    constructor(private authService: AuthService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<SearchJobsModel> | Promise<SearchJobsModel> | SearchJobsModel {
        let searchCriteria = route.queryParams['search']
        if (searchCriteria == typeof(undefined) || searchCriteria == '' || searchCriteria == null) {
            return this.authService.searchJobs('');
            
        } else {
            return this.authService.searchJobs(searchCriteria);
        }
    }
}