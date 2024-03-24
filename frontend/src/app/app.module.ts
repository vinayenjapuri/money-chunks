import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {HomeComponent} from "./contents/home/home.component";
import {AboutComponent} from "./contents/about/about.component";
import {FaqComponent} from "./contents/faq/faq.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {InputComponent} from "./shared/components/input/input.component";
import {UserAuthenticationComponent} from "./contents/user-authentication/user-authentication.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    HomeComponent,
    AboutComponent,
    FaqComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
