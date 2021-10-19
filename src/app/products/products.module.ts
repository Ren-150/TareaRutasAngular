import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PagesProductComponent } from './presentation/pages/pages-product/pages-product.component';
import { ProductComponent } from './presentation/views/product/product.component';


@NgModule({
  declarations: [
    PagesProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    PagesProductComponent
  ]
})
export class ProductsModule { }
