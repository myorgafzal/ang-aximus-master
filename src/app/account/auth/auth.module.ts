import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';
@NgModule({
  declarations: [
    LoginComponent,
    RecoverpwdComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    NgbCarouselModule
  ]
})
export class AuthModule { }