import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {BackendService} from '../services/backend.service';

import {StartPage} from '../pages/start/page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = StartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backendService: BackendService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
