import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbuteComponent } from './abute/abute.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NotFondedComponent } from './not-fonded/not-fonded.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'start framework' },
  { path: 'about', component: AbuteComponent, title: 'About' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Protofolio' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'gallery', component: GallaryComponent, title: 'Gallery' },
  { path: '**', component: NotFondedComponent },
];
