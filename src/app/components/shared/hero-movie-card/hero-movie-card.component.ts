import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Movie } from '../../pages/search/search.interface';

@Component({
  selector: 'app-hero-movie-card',
  templateUrl: './hero-movie-card.component.html',
  styleUrls: ['./hero-movie-card.component.css']
})
export class HeroMovieCardComponent {
  movie! : Movie;
  backdrop! : string;
  image!: string
  id? : string
constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router){
  this.id = this.route.snapshot.params['id']
  this.getMovie ()
  
}
getMovie(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTU2N2FjNjA2MzdkN2VmNWY5OGMzMzYwYjgwNjQyNSIsInN1YiI6IjY0NzE5NWIzODgxM2U0MDBlMmQ3ZGFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Cxx_oGZI9ilRBojSdAf3-e97OBYyfFjJ3gdn1gNyMY'
    }
  };
  
  this.http
    .get<Movie>(`https://api.themoviedb.org/3/movie/${this.id}?language=en-US`, options)
    .subscribe((response) => {
      this.movie =response

      this.backdrop = `http://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`
      this.image = `http://image.tmdb.org/t/p/w500${this.movie.poster_path}`
    })
   
   

}
defaultImage(event:Event){
  this.image= '../../../../assets/image/defalut imaage.jpg'
 }
defaultbackdrop(event:Event){
  this.image= '../../../../assets/image/defalut imaage.jpg'
 }
  
}
