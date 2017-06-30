export class Bucket {
  id: string;
  name: string;
  type: string;
  value: number = 0;
}

export class BucketModifier {
  bucket: Bucket;
  score: number;
}

export class ChoiceCard {
  id: string;
  name: string;
  modifiers: BucketModifier[];
}

export class EventCard {
  id: string;
  name: string;
  description: string;
  choices: ChoiceCard[];
}
