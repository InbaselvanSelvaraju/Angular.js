import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SearchMoviesComponent } from './search-movies/search-movies.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.moudule';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
   
    
    SearchMoviesComponent,
    ViewMoviesComponent,  
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    SharedModule
    
  ],
})
export class MoviesModule {}
