import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../signup/services/auth.service";
import { AuthorizeCandidateResponseModel } from "src/app/signup/models/authorize-candidate-response.model";

@Injectable()
export class UserProfileResolverService implements Resolve<AuthorizeCandidateResponseModel> {

    constructor(private authService: AuthService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<AuthorizeCandidateResponseModel> | Promise<AuthorizeCandidateResponseModel> | AuthorizeCandidateResponseModel {
        if (this.authService.isAuthenticated()) {
            let user_id = this.authService.getCurrentUserId();
            return this.authService.getCandidateProfile(user_id.toString());
        }
    }
}