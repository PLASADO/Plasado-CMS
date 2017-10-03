import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from '../auth-service/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  redirectUrl;
  constructor(
    private authService : AuthService,
    private router : Router
  ){
  }
  canActivate(
    router : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
     ) {
    console.log("CanActivated Method");
    if (this.authService.loggedin()){
      console.log("CanActivated LoggedIn Status");
      return true;
    } else{
      console.log("CanActivated LoggedOut Status");
      this.redirectUrl = state.url;
      this.router.navigate(['/signin-up/sign-in']);
      return false;
    }
  }
}
