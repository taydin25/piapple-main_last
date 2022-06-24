import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { RezervasyonComponent } from './rezervasyon/rezervasyon.component';
import { RestoranTanitimComponent } from './restoran-tanitim/restoran-tanitim.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { YorumComponent } from './yorum/yorum.component';

const routes: Routes = [
  { path: 'restaurant-search', component: RestaurantSearchComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'rezervasyon', component: RezervasyonComponent },
  { path: 'restoran-tanitim', component: RestoranTanitimComponent },
  { path: 'yorum', component: YorumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
