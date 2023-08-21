import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/' + 'products');
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/' + 'products', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/' + 'products/' + id);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put<Product>('http://localhost:3000/' + 'products/' + product.id, product);
  }

  delete(id: number) {
    return this.http.delete<Product>('http://localhost:3000/' + 'products/' + id);
  }
}
