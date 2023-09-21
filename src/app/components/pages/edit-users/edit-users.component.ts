import { Component } from '@angular/core';

import { FormGroup,FormControl,Validators, ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {

  user:FormGroup;
  users : any;
  userId! : any
 
// FormGroup is whole content
// FormControl is one element like first name
  constructor(private route:ActivatedRoute ,private http:HttpClient){
    this.userId = this.route.snapshot.paramMap.get('userId')

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

   matchpassword:ValidatorFn = (
    group:AbstractControl
   ):ValidationErrors | null => {
    let password = group.get('password')?.value;
    let confirmpassword = group.get('confirmpassword')?.value;
    return password === confirmpassword? null :{doesnotmatch:true};
     
   };
 

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
      this.update(this.user.value)
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

  private update (postData : User){
    // this.http.post('https://sign-up-form-405d5-default-rtdb.firebaseio.com/users.json',postData)
    this.http.put(`http://localhost:4000/users/update/${this.userId}`,postData)
    .subscribe ((res) => {
      console.log(res)
      // this.get()
    })
  }

}


