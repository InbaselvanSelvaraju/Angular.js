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
import { LoginComponent } from './login/login.component';
import { SharedModule } from "../../shared/shared.module";





@NgModule({
    declarations: [
        SignUpComponent,
        UserLayoutComponent,
        UserUpdateComponent,
        UserDeleteComponent,
        UserFormComponent,
        UsersComponent,
        LoginComponent,
       
    ],
    imports: [
        CommonModule,
        userRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class UserModule {}
