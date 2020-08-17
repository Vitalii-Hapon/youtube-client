import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './core/layout/main-layout/main-layout.component';
import {ListPageComponent} from './core/pages/list-page/list-page.component';
import {ItemPageComponent} from './core/pages/item-page/item-page.component';
import {EditItemPageComponent} from './core/pages/edit-item-page/edit-item-page.component';
import {RegistrationPageComponent} from './core/pages/registration-page/registration-page.component';
import {CreateItemPageComponent} from './core/pages/create-item-page/create-item-page.component';
import {LoginPageComponent} from './core/pages/login-page/login-page.component';
import {NotfoundPageComponent} from './core/pages/notfound-page/notfound-page.component';

const routes: Routes = [{
path: '', component: MainLayoutComponent,
  children: [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: ListPageComponent},
    { path: 'login', component: LoginPageComponent},
    { path: 'registration', component: RegistrationPageComponent},
    { path: 'create', component: CreateItemPageComponent},
    { path: 'not-found', component: NotfoundPageComponent},
    { path: ':id', component: ItemPageComponent},
    { path: ':id/edit', component: EditItemPageComponent},
  ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
