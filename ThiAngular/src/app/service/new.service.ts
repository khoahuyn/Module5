import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {New} from "../model/new";

@Injectable({
  providedIn: 'root'
})
export class NewService {

  private API_URL='http://localhost:3000/news';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<New[]> {
    return this.http.get<New[]>(this.API_URL );
  }

  saveNew(product): Observable<New> {
    return this.http.post<New>(this.API_URL , product);
  }

  findById(id: number): Observable<New> {
    return this.http.get<New>(this.API_URL + '/' + id);
  }

  updateNew(id: number, product: New):Observable<New> {
    return this.http.put<New>(this.API_URL + '/' + id, product);
  }

  deleteNew(id: number):Observable<New> {
    return this.http.delete<New>(this.API_URL + '/' + id);
  }

  search(input: string): Observable<New[]> {
    return this.http.get<New[]>(this.API_URL  + '?where_like=' + input);
  }

  search1(input: number): Observable<New[]> {
    return this.http.get<New[]>(this.API_URL  + '?area=' + input);
  }

  search2(input: number): Observable<New[]> {
    return this.http.get<New[]>(this.API_URL  + '?cost=' + input);
  }
}
