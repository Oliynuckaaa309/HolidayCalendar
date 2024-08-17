import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Servise/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FormsModule, CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css',
})
export class CountryDetailsComponent implements OnInit {
  year: number = 2024;
  holidays: any;
  countryCode: string = 'UK';
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.countryCode = params['code'];
      this.fetchHolidaysByYear();
    });
  }

  changeYear(event: Event) {
    const element = event.currentTarget as HTMLElement;
    const elementId = element.id;
    if (elementId === 'minus-year') {
      if (this.year > 2020) {
        this.year--;
      }
    } else {
      if (this.year < 2030) {
        this.year++;
      }
    }

    this.fetchHolidaysByYear();
  }

  fetchHolidaysByYear() {
    this.apiService
      .getPublicHolidaysByYear(this.year, this.countryCode)
      .subscribe((data) => {
        this.holidays = data;
      });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
