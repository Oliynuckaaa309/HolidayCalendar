import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://date.nager.at/api/v3/';

  constructor(private http: HttpClient) {}

  getAvailableCountries(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'AvailableCountries');
  }

  getPublicHolidaysByYear(year: number, countryCode: string): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + 'PublicHolidays/' + year + '/' + countryCode,
    );
  }

  getNextHolidays(countryCode: string) {
    return this.http.get<any>(
      this.apiUrl + 'NextPublicHolidays/' + countryCode,
    );
  }
}
