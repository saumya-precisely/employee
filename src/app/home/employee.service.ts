import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl + 'employees');
  }
  create(data: Employee) {
    const headers = new HttpHeaders();
    return this.http.post(baseUrl + 'employees', data);
  }

  update(id: number, data: Employee) {
    return this.http.put(`${baseUrl}employees/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${baseUrl}employees/${id}`);
  }

  getEmployeebyId(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${baseUrl}employees/${id}`);
  }
}
