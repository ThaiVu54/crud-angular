import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../interface/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {id: 0, firstName: '', lastName: '',email: '', phone: ''};
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createNewEmployee(){
    this.employeeService.createNewEmployee(this.employee);
    this.router.navigate(['/listEmployee']);
    alert("thành công")
  }

}
