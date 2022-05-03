import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;
 showMenuBar;


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById("Home").scrollIntoView({behavior:"smooth"});
    this.closeBar();

  }

  toSkills(){
    if (this.router.url =='/imprint' || this.router.url =='/data-protection' || this.router.url =='/success'){
      this.toHome();
    }
    document.getElementById("Skills").scrollIntoView({behavior:"smooth"});
    this.closeBar();

  }

  toAbout(){
    if (this.router.url =='/imprint' || this.router.url =='/data-protection' || this.router.url =='/success'){
      this.toHome();
    }
    document.getElementById("About").scrollIntoView({behavior:"smooth"});
    this.closeBar();

  }

  toProjects(){
    if (this.router.url =='/imprint' || this.router.url =='/data-protection' || this.router.url =='/success'){
      this.toHome();
    }
    document.getElementById("Projects").scrollIntoView({behavior:"smooth"});
    this.closeBar();

  }

  toContacts(){
    if (this.router.url =='/imprint' || this.router.url =='/data-protection' || this.router.url =='/success'){
      this.toHome();
    }else{
    document.getElementById("Contact").scrollIntoView({behavior:"smooth"});
    this.closeBar();

  }

  }

  ngAfterViewInit() {
    if (window.innerWidth<900){
    setTimeout(() => {
      document.getElementById('VS').classList.remove('dNone');
      document.getElementById('VS').classList.add('bounce-in-top');
    }, 6500);
  }
  else{
    document.getElementById('VS').classList.remove('dNone');

  }
  }

  schowBar(){
    this.showMenuBar = true;
  }

  closeBar(){
    this.showMenuBar = false; 
  }

}
