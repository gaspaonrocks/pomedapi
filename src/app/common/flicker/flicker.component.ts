import { Component, OnInit } from '@angular/core';

import { FlickerService } from './shared/flicker.service';

@Component({
  selector: 'app-flicker',
  templateUrl: './flicker.component.html',
  styleUrls: ['./flicker.component.css'],
  providers: [FlickerService]
})
export class FlickerComponent implements OnInit {

  images = [];

  constructor(private flickerService: FlickerService) { }

  getImages (): void {
    this.flickerService.getImages().then(result => {
      this.images = result;
      for (let i = 0, len = this.images.length; i < len; i++) {
        this.images[i].filePath = `../../../assets/img/DSCN0${this.images[i].id}.JPG`;
      };
      console.log(this.images);
    });
  }

  ngOnInit () {
    this.getImages();
  }

}
