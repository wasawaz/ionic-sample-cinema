import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  readonly paramKeyMovieName = 'movieName';
  readonly paramKeyMovieImage = 'movieImage';
  readonly paramKeyMovieTime = 'movieTime';
  readonly paramKeyMovieTheater = 'movieTheater';
  readonly paramKeySeatItem = 'seatItems';
  readonly paramKeyTotalAmount = 'totalAmount';

  movieName : string;
  movieImage : string;
  movieTime : any;
  movieTheater: any;
  seatItems : any;
  seatItemNumbersText: any;
  totalAmount : number;
  referenceCode: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movieName = this.navParams.get(this.paramKeyMovieName);
    this.movieImage = this.navParams.get(this.paramKeyMovieImage);
    this.movieTime = this.navParams.get(this.paramKeyMovieTime);
    this.movieTheater = this.navParams.get(this.paramKeyMovieTheater);
    this.seatItems = this.navParams.get(this.paramKeySeatItem);
    this.totalAmount = this.navParams.get(this.paramKeyTotalAmount);
    this.referenceCode = this.generateAlphaNumeric(16);
    this.seatItemNumbersText = this.seatItems.map(function(obj){return obj.number;}).join(', '); 
  }

  ionViewDidLoad() {
  }

  generateAlphaNumeric(length){
      var text = "";
      var possibleCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for(var i = 0; i < length; i++) {
          text += possibleCharacter.charAt(Math.floor(Math.random() * possibleCharacter.length));
      }
      return text;
  }

}
