import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from '../interface/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  employee: Employee | null= {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  // id: number = 0;

  // sub: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private activeRouter: ActivatedRoute
  ) {
    // this.sub = this.activeRouter.paramMap.subscribe(
    //   (paramMap: ParamMap) => {
    //     this.iddetailEmployee = Number(paramMap.get('id'));
    //   this.employee = this.getEmployeeById(this.id);
    //   }
    // )
  }
  detailEmployee:any;

  ngOnInit(): void {
    this.getEmployeeById();
  }

  // getEmployeeById(id: number){
  //   return this.employeeService.getEmployeeById(id);
  // }


  getEmployeeById(){
    this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const id: number = Number(paramMap.get('id'));
        this.detailEmployee = this.employeeService.getEmployeeById(id);
      }
    )
  }
}
