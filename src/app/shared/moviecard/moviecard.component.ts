import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/components/pages/search/search.interface';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css'],
  animations: [
 
      trigger('divstate', [
        state('normal', style({ 'backgroung-color': 'red' })),
        state('highlight', style({ 'backgroung-color': 'green' })),
      ]),
    trigger('list', [
      state("in", style({
        'opacity': '0',
        'transform' :' translateX(0)'
      })),
      transition('void=> *', [
        style({
          'opacity': '1',
        'transform' :' translateX(-100px)'
        }),
        animate(300)
      ])
    ]),
  ]
})
export class MoviecardComponent {
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
