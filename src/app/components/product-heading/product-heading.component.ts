import { Call } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/products.interface';
@Component({
  selector: 'app-product-heading',
  templateUrl: './product-heading.component.html',
  styleUrls: ['./product-heading.component.scss'],
})
export class ProductHeadingComponent {
  @Input() product: IProduct;
}
