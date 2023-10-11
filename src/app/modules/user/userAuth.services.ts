import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import {
  AuthResponse,
  SignUpUser,
  User,
} from 'src/app/interface/user.interface';
import { NewUser } from './user.model';
import { Data, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserAuthServices {
  user = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private router: Router) {}

  signUp(signUpdata: User) {

    return this.http
      .post<AuthResponse>('http://localhost:4000/users/', signUpdata)

      .pipe(
        catchError(this.handleError),
        tap((resData) => this.handleAuthdentication(resData))
      );
  }

  login(loginCredential:{email:String,password:String}) {
    return this.http
      .post<AuthResponse>('http://localhost:4000/users/login', {
        email:loginCredential.email,
        password:loginCredential.password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => this.handleAuthdentication(resData))
      );
  }

  autoLogin() {
    const userData: any = localStorage.getItem("userData");
    if (!userData) {
      return 
    }
    const user: { token: String, expiresIn: Date } = JSON.parse(userData);
    const loadedUSer = new NewUser(user.token, user.expiresIn)
    
    if (loadedUSer.token) {
      this.user.next(loadedUSer)
    }

  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }
  private handleAuthdentication(resData: AuthResponse) {
    const expiresIn = new Date(new Date().getTime() + 1 *60* 60*1000)
    const userData = new NewUser(resData.token,expiresIn);
    this.user.next(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  private handleError(errorRes: HttpErrorResponse) {
    // console.log(errorRes);
    if (errorRes.error) {
      return throwError(errorRes.error.message);
    } else {
      return throwError('A unknown error occured ');
    }
  }
}
