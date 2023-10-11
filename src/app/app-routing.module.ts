import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TVComponent } from './components/pages/tv/tv.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AngularPageComponent } from './components/pages/angular-page/angular-page.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HeroMovieCardComponent } from './components/shared/hero-movie-card/hero-movie-card.component';
import { UsersComponent } from './components/pages/users/users.component';
import { EditUsersComponent } from './components/pages/edit-users/edit-users.component';
import { UsersTableComponent } from './components/shared/users-table/users-table.component';
import { ViewUsersComponent } from './components/pages/view-users/view-users.component';
import { LoginComponent } from './modules/user/login/login.component';
import { UserAuthGuard } from './modules/user/user.guard';

const routes: Routes = [

  { path: '', component: AngularPageComponent ,canActivate : [UserAuthGuard]},
  // {path:'',redirectTo:'home',pathMatch:'full'},            this is go to home page
  { path: 'home', component: HomeComponent,canActivate : [UserAuthGuard] },
  { path: 'tv', component: TVComponent },
  {
    path: 'movies', component: MoviesComponent,
    children: [{ path: ':movieName/:id', component: HeroMovieCardComponent }],
    canActivate : [UserAuthGuard]
  },
  { path: 'sports', component: SportsComponent ,canActivate : [UserAuthGuard]},
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent ,canActivate : [UserAuthGuard]},
  //   {path:'users',component:UsersComponent,
  // children:[
  //   {path:'',component:ViewUsersComponent},
  //   {path:'update-user/:userID',component:EditUsersComponent}]},
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then((module) => module.UserModule),canActivate : [UserAuthGuard]
  },
  { path: '**', component: NotFoundComponent ,canActivate : [UserAuthGuard]},
  {path: 'users',
    loadChildren: () => import('./modules/movies/movies.module').then((module) => module.MoviesModule),canActivate : [UserAuthGuard]
  },
  { path: '**', component: NotFoundComponent,canActivate : [UserAuthGuard] }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
