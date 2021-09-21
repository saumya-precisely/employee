import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  editMode = false;
  id = -1;
  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  employee: Employee = new Employee();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.editMode = !!this.id;
    if (this.editMode) {
      this.empService
        .getEmployeebyId(this.id)
        .pipe(first())
        .subscribe((x) => this.employeeForm.patchValue(x));
    }
  }

  employeeForm = new FormGroup({
    employee_name: new FormControl('', [Validators.required]),
    employee_age: new FormControl('', [Validators.required]),
    employee_salary: new FormControl('', [Validators.required]),
  });
  createEmployee() {
    this.empService.create(this.employeeForm.value).subscribe(
      (res) => {
        alert('Success!');
      },
      (error) => {
        alert(error.message);
      }
    );
  }
  editEmployee() {
    this.empService.update(this.id, this.employeeForm.value).subscribe(
      (value) => {
        alert('Successfully updated');
        this.router.navigate(['employees']);
      },
      (error) => {
        alert(error.message);
      }
    );
  }
  onSubmit() {
    if (this.editMode) {
      this.editEmployee();
    } else {
      this.createEmployee();
    }
  }

  setControl(name: string) {
    return this.employeeForm.get(name) as FormControl;
  }
}
