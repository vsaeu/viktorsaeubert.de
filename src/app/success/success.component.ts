import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = 'white';
  }

  ngOnInit(): void {
  }

}
