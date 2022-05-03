import { Component, ElementRef, OnInit } from '@angular/core';



import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = 'black';
  }
  skills =
    [
      {
        name: 'Javascript',
        path: "js_logo.svg"
      },
      {
        name: 'Angular',
        path: "angular.svg"
      },
      {
        name: 'HTML / CSS',
        path: "HTML5.png"
      },
      {
        name: 'Rest API',
        path: "API.png"
      },
      {
        name: 'SCRUM',
        path: "Scrum.png"
      },
      {
        name: 'Git',
        path: "Git.png"
      },
      {
        name: 'Design Thinking',
        path: "DesignThinking.png"
      },
      {
        name: 'Test automation',
        path: "testAutomation.png"
      },
      {
        name: 'Databases',
        path: "database.png"
      },

    ]
  //  "HTML / CSS":"CSS3.png",
  //  "SCRUM":"Scrum.png",
  //  "Git":"Git.png",
  //  "Design Thinking":"DesignThinking.png",
  //  "Rest API":"API.png",
  //  "Test automation":"testAutomation.png",
  //  "Databases":"database.png"






  skill: string[] = [];



  //  kill = this.skills['Javascript'][0];

  ngOnInit(): void {
    console.log(this.skills[0]['path'])
    // json.skills.array.forEach(element => {
    //   skill.push(element.name)
    // });
  
  }



}

