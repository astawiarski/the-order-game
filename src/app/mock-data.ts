import {Component} from '@angular/core';

import {EventCard, Bucket} from './models';

export const BUCKETS: Bucket[] = [
  {id: 'faction_a', name: 'Frakcja A', type: 'faction', value: 0},
  {id: 'faction_b', name: 'Frakcja B', type: 'faction', value: 0},
  {id: 'authority', name: 'Autorytet', type: 'resource', value: 10}
];

export const EVENT_CARDS: EventCard[] = [
  {
    id: '1', name: 'Wydarzenie', description: 'Co zrobisz?', choices: [
    {
      id: '1', name: 'Nie wiem', modifiers: [
      {bucket: BUCKETS[2], score: -1}
    ]
    },
    {
      id: '2', name: 'Wspieram A', modifiers: [
      {bucket: BUCKETS[0], score: +1},
      {bucket: BUCKETS[1], score: -1},
      {bucket: BUCKETS[2], score: +1}
    ]
    },
    {
      id: '3', name: 'Wspieram B', modifiers: [
      {bucket: BUCKETS[0], score: -1},
      {bucket: BUCKETS[1], score: +1},
      {bucket: BUCKETS[2], score: +1}
    ]
    }
  ]
  }
];
