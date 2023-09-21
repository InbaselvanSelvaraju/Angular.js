import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap, throwError } from "rxjs";
import { User } from "src/app/interface/user.interface";


@Injectable({ providedIn: 'root' })

export class UserAuthServices{
    constructor(private http: HttpClient) { }
    

    signUp(signUpdata:User){
        return this.http.post("http://localhost:4000/users/", {
        email:signUpdata.email,
        firstName:signUpdata.firstName,
        lastName:signUpdata.lastName,
        gender:signUpdata.gender,
        dob:signUpdata.dob,
        phone:signUpdata.phone,
        password:signUpdata.password,
        confirmPassword:signUpdata.confirmPassword,
        })
        .pipe(catchError(this.handleError),tap())
        
    }
    private handleError ( errorRes:HttpErrorResponse) {
        if (errorRes.error) {
            return throwError(errorRes.error.message)
        } else {
            return throwError("A unknown error occured ")
        }
    }
}
