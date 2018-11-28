import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent],
  entryComponents:[HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
