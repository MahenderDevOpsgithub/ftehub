import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../signup/services/auth.service";
import { GetCandidateResumesModel } from "src/app/signup/models/get-candidate-resumes-response.model";

@Injectable()
export class GetResumesResolverService implements Resolve<GetCandidateResumesModel> {

    constructor(private authService: AuthService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<GetCandidateResumesModel> | Promise<GetCandidateResumesModel> | GetCandidateResumesModel {
        if (this.authService.isAuthenticated()) {
            let user_id = this.authService.getCurrentUserId();
            return this.authService.getAllResumes(user_id.toString());
        }
    }
}