import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
@Input() users!:User[]
constructor(private router:Router){}

// editUser(user:User){
//   const{id} = user;
// this.router.navigate(["update-use",id])
// }
}
