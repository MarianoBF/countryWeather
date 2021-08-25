import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CountryResult } from '../interfaces/country-results.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  baseUrl: string;
  filter = '?fields=name;capital;population;alpha2Code;flag';
  private _regions = ['africa', 'americas', 'asia', 'europe', 'oceania']

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;population;alpha2Code;flag;borders'
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

  getCountryByID(id: string): Observable<CountryResult | null> {
    if (!id) {
      return of(null);
    }
    return this.http.get<CountryResult>(this.baseUrl + 'alpha/' + id);
  }

  getCountryByIDNotNull(id: string): Observable<CountryResult> {
    return this.http.get<CountryResult>(this.baseUrl + 'alpha/' + id);
  }

  getCountriesByRegion(region: string): Observable<CountryResult[]> {
    return this.http.get<CountryResult[]>(this.baseUrl + 'region/' + region, {
      params: this.httpParams,
    });
  }

  getAllCountries(): Observable<CountryResult[]> {
    return this.http.get<CountryResult[]>(this.baseUrl + 'all', {
      params: this.httpParams,
    });
  }

  getRegions(): string[] {
    return [...this._regions]
  }

  getCountriesByCode( borders: string[]): Observable<CountryResult[] | null> {
    if (!borders || borders.length === 0) {
      return of(null);
    }
    
    const results: Observable<CountryResult>[] = [];

    borders.forEach( code => {
      const country = this.getCountryByIDNotNull(code);
      if (country) {
      results.push(country)
      };
    })
    
    return combineLatest(results).pipe(catchError((err) => of(null)));

    // return this.http.get<CountryResult[]>(this.baseUrl + 'borders/' + borders.join(','), {
    //   params: this.httpParams,
    // });
  }


}
