import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { MOVIES } from '../core/mocks/mocks';
import { Movie } from '../core/models/movie.model';
import { MovieService } from '../services/movie.service';
import { MovieDialogComponent } from '../shared/components/movie-dialog/movie-dialog.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  
  public movies: Movie[] = [];
  private moviesToGet = MOVIES; 
  
  constructor(private _movieService: MovieService, private _dialog: MatDialog) {}

  // TODO - dispatch actions to get movies
  ngOnInit() {
    this.moviesToGet.map(movieToGet => {    
      this._movieService
        .getMovie(movieToGet)
        .subscribe((movieRes: Movie) => {
          this.movies.push(movieRes);
        });
    })
  }

  public openDialog(movie) {
    const dialogRef = this._dialog.open(MovieDialogComponent, {
      data: movie
    })
  }
}
