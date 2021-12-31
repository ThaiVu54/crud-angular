import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  employees: Employee[] = [
    {
      id: 1,
      firstName: 'thai',
      lastName: 'vu',
      email: 'thai@gmail.com',
      phone: '0337334335',
    },
    {
      id: 2,
      firstName: 'anh',
      lastName: 'vu',
      email: 'thai@gmail.com',
      phone: '0337334335',
    },
    {
      id: 3,
      firstName: 'xuan',
      lastName: 'an',
      email: 'thai@gmail.com',
      phone: '0337334335',
    },
    {
      id: 4,
      firstName: 'ngo',
      lastName: 'nguyen',
      email: 'thai@gmail.com',
      phone: '0337334335',
    },
  ];

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  createNewEmployee(employee: Employee){
    this.employees.push(employee);
  }

  getEmployeeById(id:number){
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id == id) return this.employees[i];
    }
    return null;
  }

  // deleteEmployee(id: number){
  //   this.employees.removeAt(id);
  // }
  // employee: any;
  // updateEmployee(
  //   id: number,
  //   employee: Employee){
  //     this.employee = this.e
  //   }

  updateEmployee(
    id: number,
    employee: Employee){
    this.employees[id]= employee;
  }
}
