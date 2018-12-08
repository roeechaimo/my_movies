import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

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
  UpdateMovie,
  CreateMovie
} from 'src/app/store/movie/movie.actions';

@Component({
  selector: "app-movie-dialog",
  templateUrl: "./movie-dialog.component.html",
  styleUrls: ["./movie-dialog.component.scss"]
})
export class MovieDialogComponent implements OnInit {
  public form: FormGroup;
  public errors = {};
  public movie: Movie;
  public dialogHeader: string = "Create";

  constructor(
    private _fb: FormBuilder,
    private _store: Store,
    private _dialogRef: MatDialogRef < MovieDialogComponent > ,
    @Inject(MAT_DIALOG_DATA) private _data: Movie
  ) {}

  ngOnInit() {
    this.movie = this._data;
    this.initForm();
    this.initFormErrors();
    this.initDialogHeader();
  }

  public submitForm() {
    if (this.form.invalid) {
      return;
    }

    if (this.movie) {
      this._store.dispatch(new UpdateMovie(this.form.getRawValue())).subscribe(() => this._dialogRef.close());

      return;
    }

    this._store.dispatch(new CreateMovie(this.form.getRawValue())).subscribe(() => this._dialogRef.close());
  }

  get year() {
    return this.form.get("Year");
  }

  private initDialogHeader() {
    if (this.movie) {
      this.dialogHeader = "Edit";
    }
  }

  private initForm() {
    this.form = this._fb.group({
      Title: [this.movie.Title || "", [Validators.required]],
      imdbID: [{
          value: this.movie.imdbID || "",
          disabled: this.movie ? true : false
        },
        [Validators.required]
      ],
      Runtime: [this.movie.Runtime || "", [Validators.required]],
      Year: [
        +this.movie.Year || "",
        [Validators.required, Validators.min(1), Validators.max(2019)]
      ],
      Genre: [this.movie.Genre || "", [Validators.required]],
      Director: [this.movie.Director || "", [Validators.required]]
    });
  }

  private initFormErrors() {
    this.errors = {      
      number: "Must enter a valid year"
    };
  }
}
