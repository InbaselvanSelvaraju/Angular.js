import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl:'./user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user:FormGroup;
  users : any;
// FormGroup is whole content
// FormControl is one element like first name
  constructor(private http:HttpClient){
    this.user = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z-']+")]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z-']+")]),
      dob: new FormControl('',[Validators.required]),
      gender: new FormControl('male',[Validators.required]),
      phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
      confirmPassword: new FormControl('',[Validators.required])
    })
  }

   matchpassword:ValidatorFn = function (group: AbstractControl): ValidationErrors | null {
     let password = group.get('password')?.value;
     let confirmpassword = group.get('confirmpassword')?.value;
     return password === confirmpassword ? null : { doesnotmatch: true };

   };
   ngOnInit (){
    // this.get()
   }

  handlesubmit(){
    // console.log( this.user.value);
    // console.log( this.user);
    if(this.user.valid){
      // console.log( this.user.valid)
      // this.http.post('https://sign-up-form-405d5-default-rtdb.firebaseio.com/users.json',this.user.value)
      // .subscribe((res)=> {
      //   console.log(res)
      //   this.user.reset()
      // })
      this.post(this.user.value)
      this.user.reset()
      // this.get()
    
    }else{
      this.user.markAllAsTouched()
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

  private post (postData : User){
    // this.http.post('https://sign-up-form-405d5-default-rtdb.firebaseio.com/users.json',postData)
    this.http.post('http://localhost:4000/users',postData)
    .subscribe ((res) => {
      console.log(res)
      // this.get()
    })
  }
}
