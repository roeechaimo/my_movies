import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../core/models/movie.model';
import { MovieService } from '../services/movie.service';
import { environment } from 'src/environments/environment';
import { MOVIES } from '../core/mocks/mocks';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  
  public movies = [];
  private moviesToGet = MOVIES; 
  
  constructor(private _movieService: MovieService) {}

  // TODO - dispatch actions to get movies
  ngOnInit() {
    this.moviesToGet.map(movieToGet => {    
      this._movieService
        .getMovie(movieToGet)
        .subscribe(movieRes => {
          this.movies.push(movieRes);
        });
    })
  }
}
