import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ListPageComponent} from './pages/list-page/list-page.component';
import {ItemPageComponent} from './pages/item-page/item-page.component';
import {StatisticsFolderComponent} from './components/statistics-folder/statistics-folder.component';
import {ItemCardComponent} from './components/item-card/item-card.component';
import {AuthGuard} from '../core/services/auth.guard';

const routes: Routes = [
  {path: '', component: ListPageComponent, canLoad: [AuthGuard]},
  {path: ':id', component: ItemPageComponent, canLoad: [AuthGuard]}
];

@NgModule({
            declarations: [
              ListPageComponent,
              ItemPageComponent,
              ItemCardComponent,
              StatisticsFolderComponent,
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
export class YoutubeModule {
}
