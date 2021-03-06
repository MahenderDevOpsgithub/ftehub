import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/signup/services/auth.service";

@Injectable()
export class CandidateAuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :  boolean {
        if (this.authService.isAuthenticated() && this.authService.isCandidate()) {
            return true;
        }
    }
}