import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductHeadingComponent } from './components/product-heading/product-heading.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductHeadingComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
