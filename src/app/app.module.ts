import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { PersonalComponent } from './personal/personal.component';
import { MakepayComponent } from './makepay/makepay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PartnersComponent,
    EnterpriseComponent,
    PersonalComponent,
    MakepayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
