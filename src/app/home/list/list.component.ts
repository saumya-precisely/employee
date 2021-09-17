import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employees: Employee[] = [];
  cols: {field:string,header:string}[] = [];
  constructor(private empService:EmployeeService) {}

  ngOnInit(): void {
    this.empService.getEmployees().subscribe((response:any)=> {
      this.employees=response.data
    })
    this.cols = [
      { field: 'employee_name', header: 'Name' },
      { field: 'employee_age', header: 'Age' },
      { field: 'employee_salary', header: 'Salary' },
  ];
  }


}
