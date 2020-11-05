import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;

  constructor(private firestore: AngularFirestore) { }

  // tslint:disable-next-line:typedef
  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }
}
