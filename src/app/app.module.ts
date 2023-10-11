import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/firstComponent/firstComponent.Component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TVComponent } from './components/pages/tv/tv.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AngularPageComponent } from './components/pages/angular-page/angular-page.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { UsersTableComponent } from './components/shared/users-table/users-table.component';
import { SearchComponent } from './components/pages/search/search.component';
import { MovieCardComponent } from './components/shared/movie-card/movie-card.component';
import { HeroMovieCardComponent } from './components/shared/hero-movie-card/hero-movie-card.component';
import { UsersComponent } from './components/pages/users/users.component';
import { BasicHiglight } from './directives/bascic-highlights.directive';
import { DropdownDirectivesDirective } from './directives/dropdown-directives/dropdown-directives.directive';
import { EditUsersComponent } from './components/pages/edit-users/edit-users.component';
import { ViewUsersComponent } from './components/pages/view-users/view-users.component';
import { ShowMoreDirectivesDirective } from './directives/show-more-directives/show-more-directives.directive';

import { UserModule } from './modules/user/user.module';
import { Shortenpipe } from './components/shared/movie-card/movie-card.shorten.pipe';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavbarComponent,
    HomeComponent,
    TVComponent,
    MoviesComponent,
    SportsComponent,
    NotFoundComponent,
    AngularPageComponent,
    SignUpComponent,
    UsersTableComponent,
    SearchComponent,
    MovieCardComponent,
  
    HeroMovieCardComponent,
    UsersComponent,
    BasicHiglight,
    DropdownDirectivesDirective,
    EditUsersComponent,
    ViewUsersComponent,
    ShowMoreDirectivesDirective,
    Shortenpipe,
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    BrowserAnimationsModule,
    SharedModule,
    
  ],

  exports: [MovieCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
