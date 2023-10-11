import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthServices } from '../userAuth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginCredential: FormGroup;
 
  error = String;
  isLoading = false;
  // FormGroup is whole content
  // FormControl is one element like first name
  constructor(private authservice: UserAuthServices, private router: Router) {
    this.loginCredential = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  handlesubmit() {
    // console.log( this.user.value);
    // console.log( this.user);
    if (this.loginCredential.valid) {
      this.isLoading = true;
      // console.log(this.loginCredential.value);
      // this.http.post('https://sign-up-form-405d5-default-rtdb.firebaseio.com/users.json',this.user.value)
      // .subscribe((res)=> {
      //   console.log(res)
      //   this.user.reset()
      // })
      this.authservice
        .login(
          this.loginCredential.value
        )
        .subscribe(
          (res) => {
            this.isLoading = false;
            this.router.navigate(["/home"])
            // console.log(res);
          },
          (error) => {
            this.error = error;
            this.isLoading = false;
          }
        );
      // this.post(this.user.value)
      this.loginCredential.reset()
      // this.get()
    } else {
      this.loginCredential.markAllAsTouched();
    }
  }
}
