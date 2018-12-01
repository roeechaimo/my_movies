import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './home.component';
import { reducer } from '../store/reducers/movies.reducer';
import { MovieService } from '../services/movie.service';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', {moviesState: reducer})
  ],
  declarations: [HomeComponent],
  providers: [MovieService],
  entryComponents:[HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
