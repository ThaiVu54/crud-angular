import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from '../interface/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  // sub: Subscription;
  // id: number;
  // employee: Employee | null= {
  //   id: 0,
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  // }
  // // employees: any;
  // // employees: any;
  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private employeeService: EmployeeService
              ) {
    }git 

  ngOnInit(): void {
  }


  // updateEmployee(){
  //   this.employeeService.updateEmployee(this.id, this.employee)
  //   this.router.navigate(['/listEmployee']);
  // }
}
