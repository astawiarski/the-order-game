import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'page-event',
  templateUrl: 'template.html'
})
export class EventPage {

  constructor(public navCtrl: NavController, private backendService: BackendService) {
    this.backendService = backendService;
  }

}
