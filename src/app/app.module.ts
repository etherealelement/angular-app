import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductHeadingComponent } from './components/product-heading/product-heading.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';
import { ModalService } from './services/modal.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductHeadingComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
