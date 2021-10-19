import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesUsersComponent } from './presentation/pages/pages-users/pages-users.component';

const routes: Routes = [
  {path: 'list', component: PagesUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
