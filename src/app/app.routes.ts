import { Routes } from '@angular/router';
import { HomeComponent } from './homePage/home/home.component';
import { CountryDetailsComponent } from './articleDetails/country-details/country-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country/:code', component: CountryDetailsComponent },
];
