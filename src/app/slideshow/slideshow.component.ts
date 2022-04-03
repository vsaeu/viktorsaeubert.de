import { Component, OnInit } from '@angular/core';

// All from selector can be included in main HTML
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  // implement OnInit means: this script is performing at onload
  constructor() { }

  images = ['watchBGLayer.png', 'officeBGLayer.png', 'monitorsBGLayer.png'];
  headlines = [
    'Hi, I am Viktor,',
    'Passionate web developement',
    'Most happy users'];
  currentImage = 0;
  showImage = true;

// Function on onload. The name is set by default
  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 5);

    }, 5000);
  }

}
