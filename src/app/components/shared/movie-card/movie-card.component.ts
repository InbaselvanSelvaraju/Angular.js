import { Component,Input } from '@angular/core';
import { Movie } from '../../pages/search/search.interface';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
@Input() movie!:Movie;
movieImages!:string;
releaseOn :any;
releasedDetials? : Date;
releasedate? :any;
releaseMonth? :any;
releaseYear? :any;
ShowDescrp? : boolean = false


constructor(private router:Router,private  http:HttpClient ){

}



ngOnInit(){
  this.movieImages = `http://image.tmdb.org/t/p/w500${this.movie.poster_path}`
  this.releaseOn = this.movie.release_date.match(/\d+/g);
  [this.releaseYear,this.releaseMonth,this.releasedate] = this.releaseOn;
  this.releasedDetials = new Date(this.releaseYear,this.releaseMonth -1,this.releasedate);
  console.log(this.releasedDetials);
  
  
}
ShowDescription(){
  this.ShowDescrp = !this.ShowDescrp
}

// ngOnInit(){
// console.log(this.movie);

// }
defaultImage(event:Event){
  this.movieImages = '../../../../assets/image/defalut imaage.jpg'
   
}
WatchNow(movie:Movie){
  const{original_title,id} = movie;
this.router.navigate(['movies',original_title,id])
}

}
