import {Component, Input} from '@angular/core';

import {Bucket} from '../../app/models'
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'bucket-bar',
  templateUrl: 'template.html'
})
export class BucketBarComponent {

  constructor(private backendService: BackendService) {
    this.backendService = backendService;
  }

  getBuckets(): Bucket[] {
    return this.backendService.getBuckets();
  }

}
