import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;
 showMenuBar;

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById("Home").scrollIntoView({behavior:"smooth"});
    this.closeBar();

  }

  toSkills(){
    document.getElementById("Skills").scrollIntoView({behavior:"smooth"});
    this.closeBar();

  }

  toAbout(){
    document.getElementById("About").scrollIntoView({behavior:"smooth"});
    this.closeBar();

  }

  toProjects(){
    document.getElementById("Projects").scrollIntoView({behavior:"smooth"});
    this.closeBar();

  }

  toContacts(){
    document.getElementById("Contact").scrollIntoView({behavior:"smooth"});
    this.closeBar();

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
