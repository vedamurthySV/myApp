import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
// import { EmployeeComponent } from './employees/employee/employee.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commoncomponents/headercomponent/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { ManageProductsComponent } from './manage-products/manage-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { EmployeesComponent } from './employees/employees.component';
// import { EmployeeService } from './shared/employee.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingSpinnerComponent } from './shared/Loading-spinner/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactUsComponent,
    LoadingSpinnerComponent,
    // EmployeesComponent,
    // EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
