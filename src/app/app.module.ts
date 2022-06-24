import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SehirSecimiComponent } from './sehir-secimi/sehir-secimi.component';
import { FavorilerComponent } from './favoriler/favoriler.component';
// import { LoginRegisterComponent } from './login-register/login-register.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { ApiListComponent } from './api-list/api-list.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { HttpClientModule } from '@angular/common/http';
import { YorumComponent } from './yorum/yorum.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SehirSecimiComponent,
    FavorilerComponent,
    // LoginRegisterComponent,
    FooterComponent,
    NavigationBarComponent,
    DefaultButtonComponent,
    MainPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AboutUsPageComponent,
    ContactUsComponent,
    CardLayoutComponent,
    ApiListComponent,
    RestaurantSearchComponent,
    YorumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
