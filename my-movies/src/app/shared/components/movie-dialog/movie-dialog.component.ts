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
  Movie
} from 'src/app/core/models/movie.model';

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
    private _dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: Movie
  ) {}

  ngOnInit() {
    this.movie = this._data;
    this.initForm();
    this.initFormErrors();
    this.initDialogHeader();
  }

  // TODO - dispatch action
  public submitForm() {
    console.log(this.form.value);

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }

  get year() {
    return this.form.get("year");
  }

  private initDialogHeader() {
    if (this.movie) {
      this.dialogHeader = "Edit";
    }
  }

  private initForm() {
    this.form = this._fb.group({
      title: [this.movie.Title || "", [Validators.required]],
      imdbId: [
        {
          value: this.movie.imdbID || "",
          disabled: this.movie ? true : false
        },
        [Validators.required]
      ],
      runtime: [this.movie.Runtime || "", [Validators.required]],
      year: [
        +this.movie.Year || "",
        [Validators.required, Validators.min(1), Validators.max(2019)]
      ],
      genre: [this.movie.Genre || "", [Validators.required]],
      director: [this.movie.Director || "", [Validators.required]]
    });
  }

  private initFormErrors() {
    this.errors = {
      required: "This field is required",
      number: "Must enter a valid year"
    };
  }
}
