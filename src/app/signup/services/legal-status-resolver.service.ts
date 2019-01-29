import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../signup/services/auth.service";
import { LegalStatusResponse } from "src/app/signup/models/legal-status-response.model";

@Injectable()
export class LegalStatusResolverService implements Resolve<LegalStatusResponse> {

    constructor(private authService: AuthService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<LegalStatusResponse> | Promise<LegalStatusResponse> | LegalStatusResponse {
        if (this.authService.isAuthenticated()) {
            let user_id = this.authService.getCurrentUserId();
            return this.authService.getLegalStatusValue(user_id.toString());
        }
    }
}