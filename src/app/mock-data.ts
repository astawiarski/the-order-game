import {EventCard, Bucket} from './models';

export const BUCKETS: Bucket[] = [
  {id: 'FA', name: 'Frakcja A', type: 'faction', value: 0},
  {id: 'FB', name: 'Frakcja B', type: 'faction', value: 0},
  {id: '@', name: 'Autorytet', type: 'resource', value: 10},
  {id: '$', name: 'Zasoby', type: 'resource', value: 5}
];

export const EVENT_CARDS: { [id: string]: EventCard; } = {
  '1': {
    id: '1', name: 'Wydarzenie', description: 'Co zrobisz?', choices: [
      {
        id: '1-1', name: 'Nie wiem', modifiers: [
        {bucket: BUCKETS[2], score: -1},
        {bucket: BUCKETS[3], score: 1},
      ]
      },
      {
        id: '1-2', name: 'Wspieram A', modifiers: [
        {bucket: BUCKETS[0], score: +1},
        {bucket: BUCKETS[1], score: -1},
        {bucket: BUCKETS[2], score: +1}
      ]
      },
      {
        id: '1-3', name: 'Wspieram B', modifiers: [
        {bucket: BUCKETS[0], score: -1},
        {bucket: BUCKETS[1], score: +1},
        {bucket: BUCKETS[2], score: +1}
      ]
      }
    ],
  },
  '2': {
    id: '2', name: 'Nastała bieda', description: 'Jak żyć panie premierze?', choices: [
      {
        id: '2-1', name: 'Nie wiem', modifiers: [
        {bucket: BUCKETS[2], score: -1},
        {bucket: BUCKETS[3], score: 1},
      ]
      },
      {
        id: '2-2', name: 'Wspieram A', modifiers: [
        {bucket: BUCKETS[0], score: +1},
        {bucket: BUCKETS[1], score: -1},
        {bucket: BUCKETS[2], score: +1}
      ]
      },
      {
        id: '2-3', name: 'Oddaj coś ukradł', modifiers: [
        {bucket: BUCKETS[2], score: 10},
        {bucket: BUCKETS[3], score: -10},
      ]
      },
    ]
  }
};
