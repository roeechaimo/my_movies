import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { MovieService } from '../services/movie.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  providers: [MovieService],
  entryComponents:[HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
