import {Component, Input} from '@angular/core';

import {Bucket} from '../../app/models'

@Component({
  selector: 'bucket-bar',
  templateUrl: 'template.html'
})
export class BucketBarComponent {

  @Input() buckets: Bucket[];

}
