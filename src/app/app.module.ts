import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';
import { HttpClientModule } from '@angular/common/http';
import { Ionic2RatingModule} from 'ionic2-rating';
import { ShowTimePage } from '../pages/show-time/show-time';
import { ShowtimeServiceProvider } from '../providers/showtime-service/showtime-service';
import { SelectMovieSeatPage } from '../pages/select-movie-seat/select-movie-seat';
import { CheckoutPage } from '../pages/checkout/checkout';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShowTimePage,
    SelectMovieSeatPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShowTimePage,
    SelectMovieSeatPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieServiceProvider,
    ShowtimeServiceProvider
  ]
})
export class AppModule {}
