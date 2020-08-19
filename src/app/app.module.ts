import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { CreateItemPageComponent } from './core/pages/create-item-page/create-item-page.component';
import { EditItemPageComponent } from './core/pages/edit-item-page/edit-item-page.component';
import { ItemPageComponent } from './core/pages/item-page/item-page.component';
import { ListPageComponent } from './core/pages/list-page/list-page.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { HeaderComponent } from './shared/components/header/header.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { CardFormComponent } from './shared/components/card-form/card-form.component';
import { RegistrationPageComponent } from './core/pages/registration-page/registration-page.component';
import { CardColorDirective } from './shared/directives/card-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './core/modules/materials/materials.module';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { NotfoundPageComponent } from './core/pages/notfound-page/notfound-page.component';
import { CounterPipe } from './shared/pipes/counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CreateItemPageComponent,
    EditItemPageComponent,
    ItemPageComponent,
    ListPageComponent,
    RegistrationPageComponent,
    HeaderComponent,
    ItemCardComponent,
    CardFormComponent,
    SearchPipe,
    CardColorDirective,
    LoginPageComponent,
    NotfoundPageComponent,
    CounterPipe
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
