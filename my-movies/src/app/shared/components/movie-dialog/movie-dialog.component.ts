import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Movie } from 'src/app/core/models/movie.model';
import { yearValidator } from '../../valildations/year-validation';

@Component({
  selector: "app-movie-dialog",
  templateUrl: "./movie-dialog.component.html",
  styleUrls: ["./movie-dialog.component.scss"]
})
export class MovieDialogComponent implements OnInit {
  public form: FormGroup;
  public errors = {};
  public movie: Movie;
  public dialogHeader: string = "";

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
  }

  private initDialogHeader() {
    if (this.movie) {
      this.dialogHeader = "Edit";

      return;
    }

    this.dialogHeader = "Create";
  }

  private initForm() {
    this.form = this._fb.group({
      title: [this.movie.Title || "", [Validators.required]],
      imdbId: [
        { value: this.movie.imdbID || "", disabled: true },
        [Validators.required]
      ],
      runtime: [this.movie.Runtime || "", [Validators.required]],
      year: [
        this.movie.Year || "",
        // TODO - test regexp
        [Validators.required, yearValidator(/[0-9]{4}/g)]
      ],
      genre: [this.movie.Genre || "", [Validators.required]],
      director: [this.movie.Director || "", [Validators.required]]
    });
  }

  private initFormErrors() {
    this.errors = {
      required: "This field is required"
    };
  }
}
