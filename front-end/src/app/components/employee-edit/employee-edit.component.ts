import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { DataService } from 'src/app/service/data.service';
import { EmployeesComponent } from 'src/app/components/employees/employees.component';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id:any;
  dataFromDb: any;
  employee = new Employee();

  constructor(private route:ActivatedRoute, private dataservice:DataService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.dataservice.getSingleEmployeeById(this.id).subscribe(res =>{
      // console.log(res);
      this.dataFromDb = res;
      this.employee  = this.dataFromDb;
    })
  }

  updateEmployee(){
    this.dataservice.updateData(this.id, this.employee).subscribe(res => {
      // console.log(res)
      window.location.assign('/');
    })
  }
}
