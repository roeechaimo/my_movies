import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import { IconComponentComponent } from './components/icon-component/icon-component.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: [MovieDialogComponent],
  entryComponents: [MovieDialogComponent],
  exports: [ReactiveFormsModule, MaterialModule]
})
export class SharedModule {}
