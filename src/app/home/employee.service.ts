import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
const baseUrl = 'http://dummy.restapiexample.com/api/v1/';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getEmployees() {
    return this.http.get<Employee>(baseUrl + 'employees');
  }
  // create(data:Employee) {
  //   return this.http.post(baseUrl, data);
  // }

  // update(id:number, data:Employee) {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id:number) {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }
}
