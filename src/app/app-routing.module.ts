// import { EmployeesComponent } from './employees/employees.component';
// import { EmployeeComponent } from './employees/employee/employee.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './sign-up/sign-up.component';
// import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Service' },
  { path: 'Service', component: HomeComponent },
  { path: 'sign', component: SignupComponent },
  { path: 'manage', component: ManageProductsComponent },
  // { path: 'empreg', component: EmployeesComponent },
  // { path: 'empreg', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [SignupComponent, ManageProductsComponent ];


