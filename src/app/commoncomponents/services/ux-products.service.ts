import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UxProductsService {
  url = 'https://uxproducts-90238.firebaseio.com/products.json';

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  saveProducts(products: any[]) {
    return this.http.put(this.url, products, { headers: this.headers });
  }

  // tslint:disable-next-line:typedef
  fetchProducts() {
    return this.http.get(this.url);
  }

  // deleteProducts() {
  //   return this.http.delete(this.url);
  // }

  // tslint:disable-next-line:typedef
  getDataTitle() {
    return this.http.get('https://uxproducts-90238.firebaseio.com/dataTitle.json');
  }
}
