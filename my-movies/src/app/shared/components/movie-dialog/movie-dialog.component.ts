import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-movie-dialog",
  templateUrl: "./movie-dialog.component.html",
  styleUrls: ["./movie-dialog.component.scss"]
})
export class MovieDialogComponent implements OnInit {
  public form: FormGroup;
  public errors = {};

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this._fb.group({
      title: ["", [Validators.required]],
      imdbId: ["", [Validators.required]],
      runtime: ["", [Validators.required]],
      year: ["", [Validators.required]],
      gener: ["", [Validators.required]],
      director: ["", [Validators.required]]
    });
  }

  private initFormErrors() {
    this.errors = {
      required: 'This field is required'
    };
  }
}
