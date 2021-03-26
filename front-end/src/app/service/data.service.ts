import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient : HttpClient) { }

  // Get All Employees
  getAllEmployees(){
    return this.httpClient.get('http://127.0.0.1:8080/api/employees');
  }

  // Insert Employee
  insertData(formData){
    return this.httpClient.post('http://127.0.0.1:8080/api/employees', formData);
  }

  // delete Employee
  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8080/api/employees/'+id);
  }

  // get Single Employee
  getSingleEmployeeById(id){
    return this.httpClient.get('http://127.0.0.1:8080/api/employees/'+id);
  }

  updateData(id, formData){
    return this.httpClient.put('http://127.0.0.1:8080/api/employees/'+id, formData);
  }
}
