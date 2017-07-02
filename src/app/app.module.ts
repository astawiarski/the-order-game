import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage';

import {MyApp} from './app.component';

import {BackendService} from '../services/backend.service';

import {BucketBarComponent} from '../components/bucket-bar/component';

import {EventPage} from '../pages/event/page';
import {StartPage} from "../pages/start/page";
import {ShopPage} from "../pages/shop/page";
import {AboutPage} from "../pages/about/page";


@NgModule({
  declarations: [
    MyApp,
    StartPage,
    EventPage,
    ShopPage,
    AboutPage,
    BucketBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom'
    }),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql', 'localstorage']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    EventPage,
    ShopPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackendService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
