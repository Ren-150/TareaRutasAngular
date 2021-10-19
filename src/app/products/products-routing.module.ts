import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesProductComponent } from './presentation/pages/pages-product/pages-product.component';

const routes: Routes = [
  {path: 'list', component:PagesProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
