import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  activeProjectFilter: string = 'ALL';

  constructor() { }

  ngOnInit(): void {
  }

  filter(filter){
    this.activeProjectFilter = filter;
  }

}
