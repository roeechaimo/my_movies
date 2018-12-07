import {
  Component,
  OnInit
} from '@angular/core';

import {
  MatDialog
} from '@angular/material';

import {
  MOVIES
} from '../core/mocks/mocks';
import {
  Movie
} from '../core/models/movie.model';
import {
  MovieService
} from '../services/movie.service';
import {
  MovieDialogComponent
} from '../shared/components/movie-dialog/movie-dialog.component';
import {
  DeleteDialogComponent
} from '../shared/components/delete-dialog/delete-dialog.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  private moviesToGet = MOVIES;

  constructor(private _movieService: MovieService, private _movieDialog: MatDialog, private _deleteDialog: MatDialog) {}

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

  public openMovieDialog(movie) {
    const dialogRef = this._movieDialog.open(MovieDialogComponent, {
      data: movie
    })
  }

  public openDeleteDialog(movie) {
    const deleteDialogRef = this._deleteDialog.open(DeleteDialogComponent, {
      data: movie
    });
  }
}
