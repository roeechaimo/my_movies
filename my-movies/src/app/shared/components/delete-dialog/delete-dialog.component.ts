import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import {
  Store
} from '@ngxs/store';

import {
  Movie
} from 'src/app/core/models/movie.model';
import {
  DeleteMovie
} from 'src/app/store/movie/movie.actions';

@Component({
  selector: "app-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrls: ["./delete-dialog.component.scss"]
})
export class DeleteDialogComponent implements OnInit {
  public movie: Movie;

  constructor(private _dialogRef: MatDialogRef < DeleteDialogComponent > ,
    private _store: Store,
    @Inject(MAT_DIALOG_DATA) private _data: Movie) {}

  ngOnInit() {
    this.movie = this._data;
  }

  public deleteMovie() {
    this._store.dispatch(new DeleteMovie(this.movie)).subscribe(state => {
      this._dialogRef.close();
    })

  };
}
