import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services/auth.guard';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
