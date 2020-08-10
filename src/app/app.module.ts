import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { RegistrationPageComponent } from './core/pages/registration-page/registration-page.component';
import { CreateItemPageComponent } from './core/pages/create-item-page/create-item-page.component';
import { EditItemPageComponent } from './core/pages/edit-item-page/edit-item-page.component';
import { ItemPageComponent } from './core/pages/item-page/item-page.component';
import { ListPageComponent } from './core/pages/list-page/list-page.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchNavComponent } from './shared/components/search-nav/search-nav.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { CardFormComponent } from './shared/components/card-form/card-form.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { CardColorDirective } from './shared/directives/card-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialsModule} from './core/modules/materials/materials.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    RegistrationPageComponent,
    CreateItemPageComponent,
    EditItemPageComponent,
    ItemPageComponent,
    ListPageComponent,
    SearchPipe,
    HeaderComponent,
    SearchNavComponent,
    ItemCardComponent,
    CardFormComponent,
    NotFoundComponent,
    LoginPageComponent,
    CardColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
