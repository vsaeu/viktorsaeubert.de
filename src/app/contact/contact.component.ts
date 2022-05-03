import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public router: Router, private elementRef: ElementRef) {}


  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = 'black';
  }

  ngOnInit(): void {
  }


  routeSuccess(){
    this.router.navigateByUrl('/success');
  }

}
