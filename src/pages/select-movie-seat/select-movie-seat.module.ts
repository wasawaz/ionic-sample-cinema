import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectMovieSeatPage } from './select-movie-seat';

@NgModule({
  declarations: [
    SelectMovieSeatPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectMovieSeatPage),
  ],
})
export class SelectMovieSeatPageModule {}
