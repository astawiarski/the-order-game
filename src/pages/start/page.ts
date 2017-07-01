import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {BackendService} from "../../services/backend.service";
import {EventPage} from "../event/page";
import {AboutPage} from "../about/page";

@Component({
  selector: 'page-start',
  templateUrl: 'template.html'
})
export class StartPage {

  aboutPage: any = AboutPage;
  eventPage: any = EventPage;

  constructor(public navCtrl: NavController, private backendService: BackendService) {
  }

  startGame(): void {
    this.navCtrl.push(this.eventPage);
  }

}
