import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor(public service: EmployeeService,
              private firestore: AngularFirestore,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  // tslint:disable-next-line:typedef
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }else {
      this.service.formData = {
        id: null,
        fullName: '',
        position: '',
        empCode: '',
        mobile: '',
      };
    }


  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    // tslint:disable-next-line:prefer-const
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('employees').add(data);
    }
    else {
      this.firestore.doc('employees/' + form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success('submitted successfully', 'EMP. Register');
    }
  }
}
