import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit  {

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = 'white';
  }

  ngOnInit(): void {
  }

}
