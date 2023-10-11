import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { LoginComponent } from './login/login.component';
import { UserAuthGuard } from './user.guard';


const routes: Routes = [
    {path:'',component:UsersComponent,canActivate : [UserAuthGuard]},
    {path:'signup',component:SignUpComponent},
    {path:'update/:userId',component:UserUpdateComponent,canActivate : [UserAuthGuard]},
    {path:'delete/:userId',component:UserDeleteComponent,canActivate : [UserAuthGuard]},
    {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutingModule { }
