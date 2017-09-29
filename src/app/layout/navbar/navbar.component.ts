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
    this.navService.getSubnav().then(subcategories => this.subcategories = subcategories);
  }

  ngOnInit (): void {
    this.getNav();
  }

  onselect (category: Category): void {
    this.selectedCategory = category;
  }
}
