import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule, MatButtonModule, MatDialogModule, MatInputModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class MaterialModule {}
