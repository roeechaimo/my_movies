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
  Movie
} from 'src/app/core/models/movie.model';

@Component({
  selector: "app-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrls: ["./delete-dialog.component.scss"]
})
export class DeleteDialogComponent implements OnInit {
  public movie: Movie;

  constructor(private _dialogRef: MatDialogRef < DeleteDialogComponent > ,
    @Inject(MAT_DIALOG_DATA) private _data: Movie) {}

  ngOnInit() {
    this.movie = this._data;
  }

  // TODO - dispatch action
  public deleteMovie() {
    console.log(this.movie);

    this._dialogRef.close();
  };
}
