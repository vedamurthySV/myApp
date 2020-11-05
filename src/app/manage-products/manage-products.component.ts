import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UxProductsService } from '../commoncomponents/Services/ux-products.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  userprofileForm: FormGroup;
  dataTitle = this._uxProducts.getDataTitle();
  fetching = false;
  products = [
    {
      id: 'p1',
      name: 'laotop',
      price: 45000
    },
    {
      id: 'p2',
      name: 'top',
      price: 4000
    },
    {
      id: 'p3',
      name: 'lao',
      price: 5000
    },
    {
      id: 'p4',
      name: 'aotp',
      price: 45
    },
  ];

  @ViewChild('id') id: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('price') price: ElementRef;

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;


  editMode = false;
  editIndex: number;

  // tslint:disable-next-line:variable-name
  constructor(private _uxProducts: UxProductsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.onFetchProduct();
    this.formValidation();
  }

  // tslint:disable-next-line:typedef
  formValidation() {
    this.userprofileForm = this.formBuilder.group({
      producId: ['', [Validators.required]],
      producName: ['', [Validators.required]],
      producPrice: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  onAddProduct(id, name, price) {
    if (this.editMode) {
      console.log(this.products[this.editIndex]);
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value
      };
      this.editMode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    } else {
      this.products.push({
        id: id.value,
        name: name.value,
        price: price.value
      });
    }
    this.onSaveProduct();
  }

  // tslint:disable-next-line:typedef
  onSaveProduct() {
    this._uxProducts.saveProducts(this.products).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );

  }

  // tslint:disable-next-line:typedef
  onFetchProduct() {
    this.fetching = true;
    this._uxProducts.fetchProducts().subscribe(
      (response) => {
        // console.log(response);
        const data = JSON.stringify(response);
        // console.log(data);
        this.products = JSON.parse(data);
        this.fetching = false;
      },
      (err) => console.log(err)

    );
  }

  // tslint:disable-next-line:typedef
  onDeleteProduct(id: number) {
    if (confirm('Do You Want To Delete?')) {
      this.products.splice(id, 1);
      this.onSaveProduct();
    }
  }

  // tslint:disable-next-line:typedef
  onEditProduct(index: number) {
    this.editMode = true;
    this.editIndex = index;
    console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.warn(this.products.values);
    console.log(this.userprofileForm.value);
  }
  //



}
