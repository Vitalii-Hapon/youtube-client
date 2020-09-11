import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './core/layout/main-layout/main-layout.component';
import {NotfoundPageComponent} from './core/pages/notfound-page/notfound-page.component';
import {AuthGuard} from './core/services/auth.guard';

const routes: Routes = [{
  path: '', component: MainLayoutComponent,
  children: [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    {
      path: 'results',
      loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
      canLoad: [AuthGuard]
    },
    {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
    {path: '**', component: NotfoundPageComponent},
  ]

}];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
