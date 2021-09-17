import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private empService: EmployeeService) {}
  employee: Employee = new Employee();
  submitted = false;
  ngOnInit(): void {
    this.submitted = false;
  }

  employeeForm = new FormGroup({
    employee_name: new FormControl('', [Validators.required]),
    employee_age: new FormControl('', [Validators.required]),
    employee_salary: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.employeeForm.value);
  }
}
