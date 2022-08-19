import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ExtrapagesRoutingModule } from './extrapages-routing.module';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
@NgModule({
  declarations: [
    Page404Component,
    Page500Component
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ExtrapagesRoutingModule,
    NgbCarouselModule
  ]
})
export class ExtrapagesModule { }