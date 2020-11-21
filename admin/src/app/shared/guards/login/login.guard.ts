import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  CanActivateChild, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  UrlTree,
  Router
 } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
     private router: Router,
    ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(resolve => {
        if (localStorage.getItem("adimToken")) {
          console.log("##### User Guard: auth = true");
          resolve(true);
        } else {
          console.log("##### User Guard: auth = false");
          console.log('User is not logged in');
          this.router.navigate(['/login']);
          resolve(false);
        }
    });
  }

}
