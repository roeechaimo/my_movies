import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home.component';
import { reducer } from '../store/reducers/movies.reducer';


// TODO - finish store, call api and create edit/create modal
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', reducer)
  ],
  declarations: [HomeComponent],
  entryComponents:[HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
