import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeService } from './service/employee.service';
import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'listEmployee', component: EmployeeDashboardComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  // { path: 'detailEmployee', component: DetailComponent , children:[
  //   { path: ':id', component: DetailComponent }
  // ]},
  { path: 'detailEmployee/:id', component: DetailComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  // { path: 'add', component: AddEditEmployeeComponent },
  // { path: 'edit/:id', component: AddEditEmployeeComponent },
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    DetailComponent,
    NotfoundComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent
    // AddEditEmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
