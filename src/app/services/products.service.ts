import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, delay, retry, tap } from 'rxjs';
import { IProduct } from '../models/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  products: IProduct[] = [];

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: { limit: 10 },
      }),
    });
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      'https://fakestoreapi.com/products',
      product
    );
  }
}
