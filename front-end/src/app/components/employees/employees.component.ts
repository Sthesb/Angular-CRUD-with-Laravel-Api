import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees : any;
  employee = new Employee();  

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.dataservice.getAllEmployees().subscribe(res => {
      this.employees = res;
    });
  }

  saveEmployee(){
    this.dataservice.insertData(this.employee).subscribe(res => {
      this.getAllEmployees();
    });
  }

  deleteEmployee(id){
    console.log(id);
    this.dataservice.deleteData(id).subscribe(res => {
      console.log('deleted');
      this.getAllEmployees();
    })
  }

  

}
