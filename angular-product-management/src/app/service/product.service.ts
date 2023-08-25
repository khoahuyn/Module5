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
    return this.http.get<Product[]>(API_URL );
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(API_URL , product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + '/' + id);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put<Product>(API_URL + '/' + product.id, product);
  }

  delete(id: number) {
    return this.http.delete<Product>(API_URL + '/' + id);
  }
}
