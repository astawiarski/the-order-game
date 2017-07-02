import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {ChoiceCard, EventCard, Bucket} from '../app/models'
import {EVENT_CARDS, BUCKETS} from '../app/mock-data';

@Injectable()
export class BackendService {

  activeCardId: string;
  choicesMadeIds: string[];
  cardsPlayedIds: string[];

  constructor(private storage: Storage) {
  }

  submitChoice(choice: ChoiceCard): void {
    for (let modifier of choice.modifiers) {
      modifier.bucket.value += modifier.score;
      if (modifier.bucket.value < 0) modifier.bucket.value = 0;
    }

    this.choicesMadeIds.push(choice.id);
    this.cardsPlayedIds.push(this.activeCardId);
    delete this.getEventCards()[this.activeCardId];

    this.activeCardId = this.getRandomCardId();
  }

  private getRandomCardId(): string {
    let cardIds = Object.keys(this.getEventCards());
    return cardIds[Math.floor(Math.random() * cardIds.length)];
  }

  getCurrentEventCard(): EventCard {
    return this.getEventCards()[this.activeCardId];
  }

  private getEventCards(): { [id: string]: EventCard; } {
    return EVENT_CARDS;
  }

  getBuckets(): Bucket[] {
    return BUCKETS;
  }

  newState(): Promise<any> {
    return this.storage.clear();
  }

  saveState(): Promise<any> {
    return Promise.all([
      this.storage.set('buckets', JSON.stringify(this.getBuckets())),
      this.storage.set('activeCards', this.activeCardId),
      this.storage.set('cardsPlayedIds', this.cardsPlayedIds),
      this.storage.set('choicesMadeIds', JSON.stringify(this.choicesMadeIds))
    ])
  }

  loadState(): void {
    // this.storage.get('buckets').then((data) => {
    //   if (data != null) {
    //     let bucketState = JSON.parse(data);
    //     for (let bucketId in bucketState) {
    //
    //     }
    //   }
    // });
  }
}
