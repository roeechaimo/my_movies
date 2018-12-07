import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  ReactiveFormsModule
} from '@angular/forms';

import {
  MaterialModule
} from './material/material.module';
import {
  MovieDialogComponent
} from './components/movie-dialog/movie-dialog.component';
import {
  RemoveNonAlphaPipe
} from '../pipes/remove-non-alpha-pipe.pipe';
import {
  DeleteDialogComponent
} from './components/delete-dialog/delete-dialog.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: [
    MovieDialogComponent,
    RemoveNonAlphaPipe,
    DeleteDialogComponent
  ],
  entryComponents: [MovieDialogComponent, DeleteDialogComponent],
  exports: [ReactiveFormsModule, MaterialModule, RemoveNonAlphaPipe]
})
export class SharedModule {}
