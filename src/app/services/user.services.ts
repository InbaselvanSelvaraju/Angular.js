import { HttpClient } from '@angular/common/http';
import { AllUsers, User } from '../interface/user.interface';
import { map, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({providedIn:"root"})
export class UserService {
 
  constructor(private http: HttpClient) {}
  getAllUser() {
    return this.http.get<AllUsers>('http://localhost:4000/users').pipe(
      map((responseData) => responseData),
      catchError((err) => throwError(err))
    );
  }
  signUp(postdata : User) {
    return this.http.post<User>('http://localhost:4000/users',postdata).pipe(
      map((responseData) => responseData),
      catchError((err) => throwError(err))
    );
  }
  updateUser(postdata : User , id:string ) {
    return this.http.put(`http://localhost:4000/users/update/${id}`,postdata).pipe(
      map((responseData) => responseData),
      catchError((err) => throwError(err))
    );
  }
  deleteUser(id:string) {
    return this.http.delete(`http://localhost:4000/users/delete/${id}`).pipe(
      map((responseData) => responseData),
      catchError((err) => throwError(err))
    );
  }
}
