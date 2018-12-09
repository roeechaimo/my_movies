import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewChecked
} from '@angular/core';

import {
  Observable
} from 'rxjs';
import {
  MatDialog
} from '@angular/material';
import {
  Select,
  Store
} from '@ngxs/store';

import {
  MOVIES
} from '../core/mocks/mocks';
import {
  Movie
} from '../core/models/movie.model';
import {
  MovieDialogComponent
} from '../shared/components/movie-dialog/movie-dialog.component';
import {
  DeleteDialogComponent
} from '../shared/components/delete-dialog/delete-dialog.component';
import {
  LoadMovies
} from '../store/movie/movie.actions';
import {
  environment
} from 'src/environments/environment';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewChecked {
  @Select(state => state.movie.movies[0]) movies$: Observable < any > ;

  public movies: Movie[] = [];

  private moviesToGet = MOVIES;

  constructor(
    private _cdRef: ChangeDetectorRef,
    private _store: Store,
    private _movieDialog: MatDialog,
    private _deleteDialog: MatDialog
  ) {}

  ngOnInit() {
    this._store.dispatch(new LoadMovies(this.moviesToGet));
  }

  ngAfterViewChecked() {
    this._cdRef.detectChanges();
  }

  public openMovieDialog(movie) {
    const dialogRef = this._movieDialog.open(MovieDialogComponent, {
      data: movie
    });
  }

  public openDeleteDialog(movie) {
    const deleteDialogRef = this._deleteDialog.open(DeleteDialogComponent, {
      data: movie
    });
  }
}
