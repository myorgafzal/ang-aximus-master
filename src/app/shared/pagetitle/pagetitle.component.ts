import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html'
})
export class PagetitleComponent implements OnInit {
  @Input()
  breadcrumbItems!: Array<{
    active?: boolean;
    label?: string;
  }>;
  @Input() title: string | undefined;
  constructor() { }
  ngOnInit(): void { }
}