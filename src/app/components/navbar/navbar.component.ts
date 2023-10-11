import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserAuthServices } from 'src/app/modules/user/userAuth.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private userSub!: Subscription
  isAuthenticated = false
  constructor(private authservice: UserAuthServices) { }
  
  ngOnInit(): void {
    this.userSub = this.authservice.user.subscribe((user) => {
      this.isAuthenticated = !!user
    })
  }
  logout(){
this.authservice.logout()
  }
}
