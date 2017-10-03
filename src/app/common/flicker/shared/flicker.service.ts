import { Injectable } from '@angular/core';

import { IMAGESARRAY } from '../../../../../server/data/mock-images';

@Injectable()
export class FlickerService {
  getImages (): Promise<Array<Object>> {
    return Promise.resolve(IMAGESARRAY);
  }
}