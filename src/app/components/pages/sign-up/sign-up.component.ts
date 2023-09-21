import { group } from '@angular/animations';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user.interface';
import { UserAuthServices } from 'src/app/modules/user/userAuth.services';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  user: FormGroup;
  users: any;
  error!: String;

  // FormGroup is whole content
  // FormControl is one element like first name
  constructor(private authservice: UserAuthServices) {
    this.user = new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z-']+"),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z-']+"),
        ]),
        dob: new FormControl('', [Validators.required]),
        gender: new FormControl('male', [Validators.required]),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
          ),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: this.matchpassword,
      }
    );
  }

  matchpassword: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { doesnotmatch: true };
  };
  ngOnInit() {
    // this.get()
  }

  handlesubmit() {
    // console.log( this.user.value);
    // console.log( this.user);
    if (this.user.valid) {
      console.log(this.user.value);
      // this.http.post('https://sign-up-form-405d5-default-rtdb.firebaseio.com/users.json',this.user.value)
      // .subscribe((res)=> {
      //   console.log(res)
      //   this.user.reset()
      // })
      this.authservice.signUp(this.user.value).subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          this.error = error;
        }
      );
      // this.post(this.user.value)
      // this.user.reset()
      // this.get()
    } else {
      this.user.markAllAsTouched();
    }
  }

  // private get(){
  // this.http.get('https://sign-up-form-405d5-default-rtdb.firebaseio.com/users.json')
  // .subscribe ((response:any) => {

  //   const us = []
  //   for (const id in response) {
  //     // console.log(id)
  //     // console.log(response[id])
  //     us.push({...response[id],id:id})
  //     console.log(us)
  //   }
  //    this.users = response
  //   console.log( this.users)

  // })
  // }

  // private post (postData : User){
  //   // this.http.post('https://sign-up-form-405d5-default-rtdb.firebaseio.com/users.json',postData)
  //   this.http.post('http://localhost:4000/users',postData)
  //   .subscribe ((res) => {
  //     console.log(res)
  //   })
  // }
}
