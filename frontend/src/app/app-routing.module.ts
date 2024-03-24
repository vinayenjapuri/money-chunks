import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./contents/home/home.component";
import {AboutComponent} from "./contents/about/about.component";
import {FaqComponent} from "./contents/faq/faq.component";
import {HowToEarnComponent} from "./contents/how-to-earn/how-to-earn.component";
import {UserAuthenticationComponent} from "./contents/user-authentication/user-authentication.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'how-to-earn',
    component: HowToEarnComponent
  },
  {
    path: 'login',
    component: UserAuthenticationComponent,
    data: {
      signUp: false,
      login: true
    }
  },
  {
    path: 'signup',
    component: UserAuthenticationComponent,
    data: {
      signUp: true,
      login: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
