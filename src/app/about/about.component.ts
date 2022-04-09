import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  journeyStations = [
    {
      imgUrl: 'walk-line.svg',
      title: 'MY JOURNEY BEGAN',
      description: 'as a mechanical engineer, working for several big companys. As a TIC engineer (Testing, Insepection and Certification), I had to handle a lot with customers and documentation.'
    },
    {
      imgUrl: 'search-line.svg',
      title: 'I REALIZED',
      description: 'the potential of software by implenting some small but very efficient Micorosoft Office automations in our daily business. That saved us tons of working hours.'
    },
    {
      imgUrl: 'heart-line.svg',
      title: 'WHEN FOUNDING',
      description: 'Developer Akademie, a young and dynamic startup from Munich, I could visualize my path to a career in frontend development. Their systamatic training with experienced mentors, maxed out my level of skills in the last couple of months.'
    },
    {
      imgUrl: 'flight-takeoff-line.svg',
      title: 'MY NEW JOURNEY BEGINS',
      description: 'as a frontend developer who is able to reach goals and find the direct way to solutions. I enjoy working in teams and likewise my previous colleagues were happy to work with me.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
