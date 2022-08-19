import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';
const routes: Routes = [
  {
    path: 'login1',
    component: LoginComponent,
  },
  {
    path: 'recoverpw',
    component: RecoverpwdComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }