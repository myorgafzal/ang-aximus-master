import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
/**
 * Footer Component
 */
export class FooterComponent implements OnInit {
  // set the currenr year
  year: number = new Date().getFullYear();
  constructor() { }
  ngOnInit(): void {
  }
}