import { Component, OnInit } from '@angular/core';
import { IProduct } from './data/products.interface';
import { products as data } from './data/products';
import { ProductService } from './components/services/productsService';
import { Observable, tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  products: IProduct[] = [];
  loading: boolean;
  products$: Observable<IProduct[]>;
  term = '';

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.ProductService.getAll().pipe(
      tap(() => (this.loading = false))
    );
    this.ProductService.getAll().subscribe((products) => {
      this.products = products;
      this.loading = false;
      console.log(products);
    });
  }
}
