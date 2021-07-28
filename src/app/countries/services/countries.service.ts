import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CountryResult } from '../interfaces/country-results.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  baseUrl: string;
  filter = '?fields=name;capital;population;alpha2Code;flag';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;population;alpha2Code;flag'
    );
  }

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://restcountries.eu/rest/v2/';
  }

  searchCountry(term: string): Observable<CountryResult[]> {
    return this.http
      .get<CountryResult[]>(this.baseUrl + 'name/' + term, {
        params: this.httpParams,
      })
      .pipe(catchError((err) => of([])));
  }

  searchCountryByCapital(term: string): Observable<CountryResult[]> {
    return this.http
      .get<CountryResult[]>(this.baseUrl + 'capital/' + term, {
        params: this.httpParams,
      })
      .pipe(catchError((err) => of([])));
  }

  getCountryByID(id: string): Observable<CountryResult> {
    return this.http.get<CountryResult>(this.baseUrl + 'alpha/' + id);
  }

  getCountriesByRegion(region: string): Observable<CountryResult[]> {
    return this.http.get<CountryResult[]>(this.baseUrl + 'region/' + region, {
      params: this.httpParams,
    });
  }
}
