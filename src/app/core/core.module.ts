import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {NotfoundPageComponent} from './pages/notfound-page/notfound-page.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [];

@NgModule({
            declarations: [
              MainLayoutComponent,
              HeaderComponent,
              NotfoundPageComponent,
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
export class CoreModule {
}
