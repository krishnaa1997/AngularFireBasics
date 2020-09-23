import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {
    path:'signup', component: SignUpComponent
  },
{path: 'employee', component: EmployeeDetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
