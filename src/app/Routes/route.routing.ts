import { Routes } from "@angular/router";
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { NavbarComponent } from "../landing-page/navbar/navbar.component";
import { FooterComponent } from "../Components/footer/footer.component";



export const routes: Routes = [
    {
      path: '',
      component: LandingPageComponent,
      children: [{ path: 'home', component: LandingPageComponent }],
    },
    {path:'navbar',component:NavbarComponent},
    {path: 'footer', component:FooterComponent}

    
  ];
  