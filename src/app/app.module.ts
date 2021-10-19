import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageDashboardComponent } from './dashboard/presentation/pages/pages/page-dashboard.component';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

const routes : Routes = [
  {path: '', component:PageLoginComponent},
  {path: 'users', 
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
  },
  {path: 'dashboard', component:PageDashboardComponent},
  {path: 'products', 
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule)
  },
  {path: '**', component:PageLoginComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule,
    DashboardModule, ProductsModule, UsersModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
