import { Injectable } from '@angular/core';

import { Category } from '../navbar/category';
import { CATEGORIES } from '../../../server/data/mock-category';

@Injectable()
export class NavService {
  getNav (): Promise<Category[]> {
    return Promise.resolve(CATEGORIES);
  }
}