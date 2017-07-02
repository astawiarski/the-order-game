import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'page-event',
  templateUrl: 'template.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController, private backendService: BackendService) {
  }

}
