import { Injectable } from '@angular/core';

import { Category } from '../nav/category';
import { CATEGORIES } from '../../../../../server/data/mock-category';

import { Subcategory } from '../subnav/subcategory';
import { SUBCATEGORIES } from '../../../../../server/data/mock-subcategory';

@Injectable()
export class NavService {
  getNav (): Promise<Category[]> {
    return Promise.resolve(CATEGORIES);
  }

  getSubnav (): Promise<Subcategory[]> {
    return Promise.resolve(SUBCATEGORIES);
  }
}