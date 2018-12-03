import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [BrowserAnimationsModule, MatCardModule, MatButtonModule]
})
export class MaterialModule {}
