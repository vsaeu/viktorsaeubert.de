import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById("Home").scrollIntoView({behavior:"smooth"});
  }

  toSkills(){
    document.getElementById("Skills").scrollIntoView({behavior:"smooth"});
  }

  toAbout(){
    document.getElementById("About").scrollIntoView({behavior:"smooth"});
  }

  toProjects(){
    document.getElementById("Projects").scrollIntoView({behavior:"smooth"});
  }

  toContacts(){
    document.getElementById("Contact").scrollIntoView({behavior:"smooth"});
  }

  ngAfterViewInit() {
    setTimeout(() => {
      document.getElementById('VS').classList.remove('dNone');
      document.getElementById('VS').classList.add('bounce-in-top');
    }, 6500);
  }

}
