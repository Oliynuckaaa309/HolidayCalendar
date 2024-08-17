import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './homePage/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { CountryDetailsComponent } from './articleDetails/country-details/country-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    LayoutComponent,
    CountryDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testTask';
}
