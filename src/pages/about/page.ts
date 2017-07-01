import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'page-about',
  templateUrl: 'template.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private backendService: BackendService) {
  }

}
