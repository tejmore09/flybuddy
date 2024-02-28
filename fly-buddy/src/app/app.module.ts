import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './_component/navbar/navbar.component';
import { FooterComponent } from './_component/footer/footer.component';
import { HomeComponent } from './_component/home/home.component';
import { LoginComponent } from './_component/login/login.component';
import { SignupComponent } from './_component/signup/signup.component';
import { FlightComponent } from './_component/flight/flight.component';
import { FlightDetailsComponent } from './_component/flight-details/flight-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FlightDetailsComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
