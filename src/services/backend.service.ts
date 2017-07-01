import {Injectable} from '@angular/core';

import {ChoiceCard, EventCard, Bucket} from '../app/models'
import {EVENT_CARDS, BUCKETS} from '../app/mock-data';

@Injectable()
export class BackendService {

  currentEventCardId: number;

  submitChoice(choice: ChoiceCard): void {
    for (let modifier of choice.modifiers) {
      modifier.bucket.value += modifier.score;
    }
    this.currentEventCardId = 0;
  }

  getCurrentEventCard(): EventCard {
    return this.getEventCards()[this.currentEventCardId];
  }

  getEventCards(): EventCard[] {
    return EVENT_CARDS;
  }

  getBuckets(): Bucket[] {
    return BUCKETS;
  }

  saveState(): boolean {
    return true;
  }

  loadState(): any {
    this.currentEventCardId = 0;
  }

}
