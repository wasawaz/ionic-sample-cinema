import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ShowTimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShowtimeServiceProvider {

  constructor(public http: HttpClient) {
  }

  showTime(movieId:number){
    const endPointUrl = 'http://demo7209573.mockable.io/train/movie/showtime/';
    return new Promise((resolve,reject) => {
      this.http.get( endPointUrl +  movieId).subscribe(res =>{
        resolve(res);
      },err =>{
        reject(err)
      });
    });
      
  }

}
