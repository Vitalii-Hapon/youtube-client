import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent}
];

@NgModule({
            declarations: [
              LoginPageComponent,
              RegistrationPageComponent,
            ],
            imports: [
              CommonModule,
              SharedModule,
              RouterModule.forChild(routes),
            ],
            exports: [
              RouterModule
            ]
          })
export class LoginModule {
}
