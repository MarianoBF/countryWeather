import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CountryResult } from '../interfaces/country-results.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://restcountries.eu/rest/v2/';
  }

  searchCountry( term: string ): Observable<CountryResult[]>{
    return this.http.get<CountryResult[]>(this.baseUrl+'name/'+term)
    .pipe(
      catchError(err=>of([])));
  }

  searchCountryByCapital( term: string ): Observable<CountryResult[]>{
    return this.http.get<CountryResult[]>(this.baseUrl+'capital/'+term)
    .pipe(
      catchError(err=>of([])));
  }

  getCountriesByRegion(region:string): Promise<any[]> {
    return this.http.get<any[]>(
      this.baseUrl + 'region/' + region
    ).toPromise();
  }

  getCountryByCode(code: string): Promise<any> {
    return this.http.get<any>(this.baseUrl + 'alpha/' + code).toPromise();
  }
}
