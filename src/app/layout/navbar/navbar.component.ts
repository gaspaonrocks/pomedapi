import { Component, OnInit } from '@angular/core';

import { Category } from './nav/category';
import { Subcategory } from './subnav/subcategory';
import { NavService } from './shared/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NavService]
})

export class NavbarComponent implements OnInit {

  public isCollapsed = false;
  categories: Category[];
  subcategories: Subcategory[];
  selectedCategory = null;
  selectedSubcategory = null;

  constructor(private navService: NavService) { }

  getNav (): void {
    this.navService.getNav().then(categories => this.categories = categories);
  }

  getSubnav (cat): void {
    this.navService.getSubnav(cat).then(subcat => {
      this.subcategories = subcat;
      console.log(this.subcategories);
    });
  }

  ngOnInit (): void {
    this.getNav();
  }

  onselect (category: Category): void {
    this.selectedCategory = category;
  }
}
