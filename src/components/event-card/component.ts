import {Component, Input} from '@angular/core';

import {EventCard} from '../../app/models'

@Component({
  selector: 'event-card',
  templateUrl: 'template.html'
})
export class EventCardComponent {

  @Input() eventCard: EventCard;

}
