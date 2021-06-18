import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = '';
  }
  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }
}
