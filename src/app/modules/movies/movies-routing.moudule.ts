import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from 'src/app/components/pages/search/search.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';




const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'moviename/:id', component: ViewMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
