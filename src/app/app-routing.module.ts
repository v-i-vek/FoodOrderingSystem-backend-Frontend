import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login-signup/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {path:'',component:DeliveryComponent},
  {path:'login', component:LoginComponent},
  {path:'verify',component:VerificationComponent},
  {path:'home',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
