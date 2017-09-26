import { Component, OnInit } from '@angular/core';

import { Category } from './category';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NavService]
})
export class NavbarComponent implements OnInit {
  public isCollapsed = false;
  categories: Category[];
  selectedCategory = null;

  constructor(private navService: NavService) { }

  getNav (): void {
    this.navService.getNav().then(categories => this.categories = categories);
  }

  ngOnInit (): void {
    this.getNav();
  }

  onselect (category: Category): void {
    this.selectedCategory = category;
  }
}
