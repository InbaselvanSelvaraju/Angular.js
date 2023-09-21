import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { userRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    SignUpComponent,
    UserLayoutComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserFormComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    userRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
