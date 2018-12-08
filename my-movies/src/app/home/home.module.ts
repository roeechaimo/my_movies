import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MovieService } from '../services/movie.service';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent],
  providers: [MovieService],
  exports: [HomeComponent]
})
export class HomeModule {}
