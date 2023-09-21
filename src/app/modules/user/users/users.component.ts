import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AllUsers, User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers : [UserService],
})
export class UsersComponent {
  users!: AllUsers;
  constructor(private http: HttpClient,private userservice:UserService) {}
  ngOnInit() {
    this.userservice.getAllUser()
      .subscribe(res => {
        this.users = res;
      },(error) => {
        alert ("error was occured")
    })
   
  }
}
