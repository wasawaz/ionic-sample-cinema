import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  constructor(public http: HttpClient) {
  }

  getMovie() {
    const urlEndPoint = 'http://demo7209573.mockable.io/train/movie';
    return new Promise((resolve, reject) => {
      this.http.get(urlEndPoint).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

}
