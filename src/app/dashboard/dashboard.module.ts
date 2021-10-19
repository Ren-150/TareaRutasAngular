import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './presentation/pages/pages/page-dashboard.component';
import { DashboardComponent } from './presentation/views/dashboard/dashboard.component';



@NgModule({
  declarations: [
    PageDashboardComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageDashboardComponent
  ]
})
export class DashboardModule { }
