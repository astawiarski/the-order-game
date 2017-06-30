import {Injectable} from '@angular/core';

import {ChoiceCard, EventCard, Bucket} from '../app/models'
import {EVENT_CARDS, BUCKETS} from '../app/mock-data';

@Injectable()
export class BackendService {

  submitChoice(choice: ChoiceCard): EventCard {
    for (let modifier of choice.modifiers) {
      modifier.bucket.value += modifier.score;
    }
    return this.getEventCards()[0];
  }

  getEventCards(): EventCard[] {
    return EVENT_CARDS;
  }

  getBuckets(): Bucket[] {
    return BUCKETS;
  }

}
