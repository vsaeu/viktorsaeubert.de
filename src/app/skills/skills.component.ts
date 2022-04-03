import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skills =
    [
      {
        name: 'Javascript',
        path: "angular.svg"
      },


      {
        name: 'Angular',
        path: "angular.svg"
      }

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
