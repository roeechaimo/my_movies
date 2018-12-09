import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '../shared/shared.module';
import { MovieState } from '../store/movie/movie.stste';
import { MovieService } from '../services/movie.service';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule, NgxsModule.forFeature([MovieState])],
  declarations: [HomeComponent],
  providers: [MovieService],
  exports: [HomeComponent]
})
export class HomeModule {}
