import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
 constructor(private userInfo: UserService, private router: Router) {
 }
 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const islogin: boolean = this.userInfo.isLogin;
    console.log('AuthGuard is active islogin = ' + islogin);
    if (!islogin) {
        this.router.navigateByUrl('enter/login');
    }
    return islogin;
 }
}
