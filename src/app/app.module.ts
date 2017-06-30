import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {BackendService} from '../services/backend.service';
import {BucketBarComponent} from '../components/bucket-bar/component';
import {EventCardComponent} from '../components/event-card/component';
import {EventPage} from '../pages/event/page';

@NgModule({
  declarations: [
    MyApp,
    EventPage,
    BucketBarComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventPage
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
