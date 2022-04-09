import {   AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren, } from '@angular/core';


// All from selector can be included in main HTML
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  hideElement = true;
  index: number = 0;
  heading_1 = ['L', 'o', 'o', 'k', 'i', 'n', 'g', ' ', 'f', 'o', 'r', ' ', 'a', ' '];
  heading_2 = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '?'];
  hoverAnimation = false;
  animating = false;
  flipText = false;
  flipText2 = false;

  @ViewChildren('letter') letters!: QueryList<any>;
  @ViewChildren('letter2') letters2!: QueryList<any>;

  // implement OnInit means: this script is performing at onload
  constructor() { }

  ngAfterViewInit() {
    let lettersArr = this.letters.toArray();
    let lettersArr2 = this.letters2.toArray();
    this.fallingLetterAnimation(lettersArr);
    setTimeout(() => {
      this.fallingLetterAnimation(lettersArr2)
    }, 700);
    setTimeout(() => {
      this.flipText = true;
    }, 3500);
  }

  fallingLetterAnimation(lettersArr: ElementRef[]) {
    lettersArr.reverse().forEach((l, i) => {
      let letter = l.nativeElement;
      letter.innerHTML == ' ' ? letter.classList.remove('invisible') : null;
      setTimeout(() => {
        letter.classList.remove('invisible');
        letter.classList.add('falling-animation');
      }, 1000 + 50 * i);
    });
  }

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
