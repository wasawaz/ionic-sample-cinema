import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowtimeServiceProvider } from '../../providers/showtime-service/showtime-service';
import { SelectMovieSeatPage } from '../select-movie-seat/select-movie-seat';
import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the ShowTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-time',
  templateUrl: 'show-time.html',
})
export class ShowTimePage {
  readonly paramKeyMovieId: string = 'movieId';
  movieId: number;
  showtime: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public showTimeService: ShowtimeServiceProvider) {
    this.movieId = this.navParams.get(this.paramKeyMovieId);
  }

  ionViewDidLoad() {
    this.getMovieShowtime();
  }

  getMovieShowtime() {
    this.showTimeService.showTime(this.movieId).then(showtime => {
      this.showtime = showtime;
    });
  }

  selectSeat(movieSlotInfo){
    var params = {movieName: this.showtime.name, movieImage: this.showtime.image, movieSlotInfo:movieSlotInfo}
    this.navCtrl.push(SelectMovieSeatPage, params);
  }


}
