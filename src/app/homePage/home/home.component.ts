import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../Servise/api.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';


@Component({
  providers: [],
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    MatGridListModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  countries: any[] = [];
  randomCountries: any[] = [];
  resultCountries: any[] = [];

  constructor(
    private apiService: ApiService,
  ) {}
  ngOnInit(): void {
    this.apiService.getAvailableCountries().subscribe((data) => {
      this.countries = data;
      for (let i = 0; i < 3; i++) {
        let randomCountry = data[Math.floor(Math.random() * (data.length - 0))];
        this.randomCountries[i] = randomCountry;
        this.apiService
          .getNextHolidays(randomCountry.countryCode)
          .subscribe((data) => {
            this.randomCountries[i].date = data[0].date;
            this.randomCountries[i].holiday = data[0].name;
          });

      }
    });
  }
  searchCountries(event: Event) {
    const input = event.target as HTMLInputElement;
    this.resultCountries = this.countries.filter((country) =>
      country.name.toLowerCase().includes(input.value.toLowerCase()),
    );
  }
}
