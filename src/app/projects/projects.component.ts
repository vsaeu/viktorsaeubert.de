import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  activeProjectFilter: string = 'ALL';
  angularFilter=true;
  JSfilter=true;

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = 'black';
  }
  ngOnInit(): void {
  }

  filter(filter){
    this.activeProjectFilter = filter;
  }

  filterAll(){
    this.angularFilter = true;
    this.JSfilter = true;
  }

  filterNG(){
    this.angularFilter = true;
    this.JSfilter = false;
  }

  filterJS(){
    this.angularFilter = false;
    this.JSfilter = true;
  }

  openLink(path){
    window.open(path,'_blank');
  }

}
