import { Component, OnInit } from '@angular/core';
import { Employee } from '../interface/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }

  getAllEmployees(): Employee[] {
    return this.employeeService.getAllEmployees();
  }

}
