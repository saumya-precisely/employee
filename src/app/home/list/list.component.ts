import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employees: Employee[] = [];
  cols: { field: string; header: string }[] = [];
  loading = true;
  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.get();
    this.cols = [
      { field: 'employee_name', header: 'Name' },
      { field: 'employee_age', header: 'Age' },
      { field: 'employee_salary', header: 'Salary' },
    ];
  }

  get() {
    this.empService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.loading = false;
        this.employees = response;
      },
      (error) => {
        this.loading = false;
        alert(error.message);
      }
    );
  }

  onDelete(id: number) {
    this.empService.delete(id).subscribe(
      (res) => {
        alert('successfully deleted');
        this.get();
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  onEdit(id: number) {
    this.router.navigate([`edit/${id}`], { relativeTo: this.route });
  }
}
