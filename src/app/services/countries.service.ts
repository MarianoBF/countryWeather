import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  baseUrl: string;

  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'https://restcountries.eu/rest/v2/';
  }

  getCountriesByRegion(region:string): Promise<any[]> {
    return this.HttpClient.get<any[]>(
      this.baseUrl + 'region/' + region
    ).toPromise();
  }

  getCountryByCode(code: string): Promise<any> {
    return this.HttpClient.get<any>(this.baseUrl + 'alpha/' + code).toPromise();
  }
}
