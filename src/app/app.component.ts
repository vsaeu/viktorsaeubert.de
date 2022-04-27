import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

currentRoute = '';
showMenuBar = false;

// mit dem constructor werden in Angular Sachen von außen importiert
// Mit public lässt sich auch von HTML auf die var zugreife, hier router
constructor(public router: Router) {}

ngOnInit(){
  this.currentRoute = this.router.url;
console.log(this.router.url);
AOS.init();
}

}
