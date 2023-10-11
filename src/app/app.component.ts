import { Component, OnInit } from '@angular/core';
import { UserAuthServices } from './modules/user/userAuth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practicenodejs';
  constructor(private auth:UserAuthServices) { }
  ngOnInit(): void {
    this.auth.autoLogin()
  }
  
}
