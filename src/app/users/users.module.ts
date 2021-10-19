import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './presentation/views/users/users.component';
import { PagesUsersComponent } from './presentation/pages/pages-users/pages-users.component';


@NgModule({
  declarations: [
    UsersComponent,
    PagesUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    PagesUsersComponent
  ]
})
export class UsersModule { }
