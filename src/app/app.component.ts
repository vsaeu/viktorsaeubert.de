import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

currentRoute = '';

// mit dem constructor werden in Angular Sachen von außen importiert
// Mit public lässt sich auch von HTML auf die var zugreife, hier router
constructor(public router: Router) {}

ngOnInit(){
  this.currentRoute = this.router.url;
console.log(this.router.url);
}

}
