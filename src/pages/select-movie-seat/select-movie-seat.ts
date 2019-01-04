import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the SelectMovieSeatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-movie-seat',
  templateUrl: 'select-movie-seat.html',
})
export class SelectMovieSeatPage {
  readonly paramKeyMovieName = 'movieName';
  readonly paramKeyMovieImage = 'movieImage'
  readonly paramKeyMovieSlotInfo = 'movieSlotInfo';
  readonly btnNameOk = 'OK';
  readonly textMessageShowUnAvailableAlert = 'Not Available for this showtime';

  movieName: string;
  movieImage: string;
  movieSlotInfo: any;
  totalAmount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.movieName = navParams.get(this.paramKeyMovieName);
    this.movieImage = navParams.get(this.paramKeyMovieImage);
    this.movieSlotInfo = navParams.get(this.paramKeyMovieSlotInfo);
  }

  ionViewDidLoad() {
    this.init();
  }

  init() {
    if (!this.isAvailableSeat()) {
      this.showUnAvailableAlert();
    }
  }

  isAvailableSeat() {
    return this.movieSlotInfo.seat.filter((seat) => !seat.book).length > 0
  }
  showUnAvailableAlert() {
    const alert = this.alertCtrl.create({
      title: this.textMessageShowUnAvailableAlert,
      buttons: [
        {
          text: this.btnNameOk,
          handler: data => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  calculateTotalSummary() {
    this.totalAmount = this.movieSlotInfo.seat
                           .filter((seat) => seat.check)
                           .map((seat) => +seat.price)
                           .reduce((sum, current) => sum + current, 0);
  }
  selectSeat(seat) {
    seat.check = !seat.check;
    this.calculateTotalSummary();
  }

  checkout() {
    var params = {
                    movieName: this.movieName,
                    movieImage: this.movieImage,
                    movieTime: this.movieSlotInfo.time,
                    movieTheater: this.movieSlotInfo.theater,
                    seatItems: this.movieSlotInfo.seat
                      .filter((seat) => seat.check)
                      .map((seat) => seat),
                    totalAmount: this.totalAmount
    };

    this.navCtrl.push(CheckoutPage, params);
  }



}
