import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, take, tap, throwError } from 'rxjs';
import {
  AuthResponse,
  SignUpUser,
  User,
} from 'src/app/interface/user.interface';
import { NewUser } from './user.model';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserAuthServices } from './userAuth.services';
import { Inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
@Injectable({ providedIn: 'root' })
export class UserAuthGuard implements CanActivate{
  constructor(private authService: UserAuthServices, private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
      return this.authService.user.pipe(
          take(1),
          map((user) => {
              const authUser = !!user
              if (authUser) {
                return true
            } else {
                return this.router.createUrlTree(['/user/login'])
            }
          })
         
      )
    
  }
}
