import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { HeroComponent } from './Components/hero/hero.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
