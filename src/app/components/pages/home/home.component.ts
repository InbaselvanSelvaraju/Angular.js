import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthServices } from 'src/app/modules/user/userAuth.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  product: FormGroup;
  user: any;
  error!: String;
  token!: String;
  isLoading = false;
  // FormGroup is whole content
  // FormControl is one element like first name
  constructor(private http: HttpClient, private auth: UserAuthServices) {
    this.product = new FormGroup({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      manufacturer: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
    this.auth.user.subscribe((user) => {
      this.token = user.token;
    });
  }

  handlesubmit() {
    if (this.product.valid) {
      this.isLoading = true;
      this.http
        .post('http://localhost:4000/products/', {
          headers: {
            authoriztion: `Bearer ${this.token}`,
          },
        })
        .subscribe(
          (res) => console.log(res),
          (error) => {
            console.log(error);
            // this.error = error.res;
            this.isLoading = false;
          }
        );
    } else {
      this.product.markAllAsTouched();
    }
  }
}
