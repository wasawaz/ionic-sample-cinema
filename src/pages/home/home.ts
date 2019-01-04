import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { ShowTimePage } from '../show-time/show-time';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies : any;
  constructor(public navCtrl: NavController, public movieServiceProvider: MovieServiceProvider) {}

  ionViewDidLoad(){
   this.getMovieList();
  }

  getMovieList() {
    this.movieServiceProvider.getMovie().then(movies =>{
          this.movies = movies;
    });
  }

  showtime(movieId){
    var params = {movieId:movieId}
    this.navCtrl.push(ShowTimePage,params);
  }

}
