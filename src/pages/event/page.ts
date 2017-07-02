import {Component} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';

import {BackendService} from "../../services/backend.service";

import {StartPage} from "../start/page";
import {ShopPage} from "../shop/page";

import {ChoiceCard, EventCard} from "../../app/models";

@Component({
  selector: 'page-event',
  templateUrl: 'template.html'
})
export class EventPage {

  startPage: any = StartPage;
  shopPage: any = ShopPage;
  eventCard: EventCard;

  constructor(public navCtrl: NavController, private backendService: BackendService, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter(): void {
    let loader = this.loadingCtrl.create({
      content: "Oczekiwanie na szpiegów...",
      duration: 1000
    });
    loader.present();

    this.backendService.loadState();
    this.eventCard = this.backendService.getCurrentEventCard();

    // loader.dismiss();
  }

  submitChoice(choice: ChoiceCard): void {
    let loader = this.loadingCtrl.create({
      content: "Wydawanie rozkazu...",
      duration: 800
    });
    loader.present();

    this.backendService.submitChoice(choice);
    this.eventCard = this.backendService.getCurrentEventCard();

    // loader.dismiss();
  }

  saveAndExit(): void {
    this.backendService.saveState();
    this.navCtrl.popToRoot();
  }

}
