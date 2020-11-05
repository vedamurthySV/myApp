import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './../../shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  list: Employee[];
  constructor(private service: EmployeeService,
              private firestore: AngularFirestore,
              private tostr: ToastrService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(actionArray => {
      console.log('dta', actionArray);
      // this.list = actionArray.map(item => {
      //   return {
      //     id: item.payload.doc.id,
      //     ...item.payload.doc.data(),
      //   } as Employee;
      // });
    });
  }

  // tslint:disable-next-line:typedef
  onEdit(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  // tslint:disable-next-line:typedef
  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')){
      this.firestore.doc('employees/' + id).delete();
      this.tostr.warning('Deleted successfully' , 'EMP. Register');
    }
  }

}
