import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllUsers } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent {
  users!: AllUsers;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<AllUsers>('http://localhost:4000/users').subscribe((res) => {
      console.log(res);
      
      // this.users = res;
    });
  }
}
