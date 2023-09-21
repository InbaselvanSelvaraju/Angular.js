import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { searchResults } from './search.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('divstate', [
      state('normal', style({ 'backgroung-color': 'red' })),
      state('highlight', style({ 'backgroung-color': 'green' })),
    ]),
 
 
  
]
})

export class SearchComponent {
  searchMovies: string = '';
  searchPageStyle?: Record<string, string> = {};
  results!: searchResults;
  state!: String;

  constructor(private http: HttpClient) {
    this.state = 'normal';
  }

  onSearch() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTU2N2FjNjA2MzdkN2VmNWY5OGMzMzYwYjgwNjQyNSIsInN1YiI6IjY0NzE5NWIzODgxM2U0MDBlMmQ3ZGFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Cxx_oGZI9ilRBojSdAf3-e97OBYyfFjJ3gdn1gNyMY',
      },
    };
    const url = `https://api.themoviedb.org/3/search/multi?query=${this.searchMovies}&include_adult=false&language=en-US&page=1`;
    this.state = this.searchMovies ? 'highlight' : 'normal';
    this.get(options, url);
    // this.setsearchPageStyle()
  }
  // setsearchPageStyle(){
  //   this.searchPageStyle ={
  //     'background-color':'black',
  //     'text-color' : 'white'
  //   }
  // }

  private get(options: object, url: string) {
    this.http.get<searchResults>(url, options).subscribe((response) => {
      console.log(response);
      this.results = response;
    });
  }
}
